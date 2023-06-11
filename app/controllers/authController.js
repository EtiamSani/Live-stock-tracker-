const investorDatamapper = require("../model/investor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const APIError = require("../service/error/APIError");

const authController = {
  /**
   * registration of investor
   */
  async registerInvestor(req, res, next) {
    // retrieve body data
    const { nickname, email, password, confirmPassword } = req.body;

    try {
      /**
       * Check that the two passwords are identical
       */
      if (password !== confirmPassword) {
        return res.status(400).json({
          error: "Les mots de passe ne sont pas identiques",
        });
      }

      /**
       * Check that all fields are filled in
       */
      if (!email || !confirmPassword || !password) {
        return res.status(400).json({
          error: "Veuillez renseigner tous les champs",
        });
      }

      /**
       * Check if the user exists with the email address
       */
      const existingUserWithSameEmail = await investorDatamapper.findByEmail(
        email
      );
      if (existingUserWithSameEmail) {
        return res.status(400).json({
          error: "Cet email est déjà utilisé",
        });
      }

      /**
       * Encrypt password
       */
      const passwordCrypted = await bcrypt.hash(password, 10);

      /**
       * add investor in database
       */
      const investorInfo = {
        nickname,
        email,
        password: passwordCrypted,
        profilpicture: "public/images/none.png",
      };
      const createInvestor = await investorDatamapper.create(investorInfo);
      return res.status(201).json(createInvestor);
    } catch (err) {
      next(new APIError("Erreur lors de la création d'un investisseur", 500));
      console.error(err);
    }
  },

  /**
   * Method for connection
   */
  async login(req, res) {
    const { email, password } = req.body;

    try {
      let user = await investorDatamapper.findByEmail(email);

      if (!user) {
        return res.status(400).json({
          error: "L'email ou le mot de passe n'est pas correct.",
        });
      }

      const passwordIsOk = await bcrypt.compare(password, user.password);

      if (!passwordIsOk) {
        return res.status(400).json({
          error: "L'email ou le mot de passe n'est pas correct.",
        });
      }

      delete user.password;
      // Generate a JWT token using user information and a secret key
      const token = jwt.sign(
        {
          data: user,
        },
        "investor-secret",
        {
          expiresIn: "7h",
        }
      );
      console.log(token);
      // verify that the token is valid using the same secret key used to sign it. If the check fails, an error message is returned in response.
      try {
        jwt.verify(token, "investor-secret");
      } catch (e) {
        return res.status(400).json({
          error: "L'authentification a échoué",
        });
      }

      return res.status(200).json({
        token,
      });
    } catch {
      return res.status(400).json({
        error: "Erreur lors de la connection",
      });
    }
  },
};

module.exports = authController;
