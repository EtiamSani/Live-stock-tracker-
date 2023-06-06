const bcrypt = require("bcrypt");
const fs = require("fs").promises;
const investorDatamapper = require("../model/investor");
const APIError = require("../service/error/APIError");

const investorController = {
  async updateInvestor(req, res, next) {
    const id = req.params.id;

    // Retrieve body data
    const { email, nickname, password } = req.body;
    console.log(password, nickname);

    // Encrypt password
    const passwordCrypted = await bcrypt.hash(password, 10);

    // Check if a new profile picture is provided
    let imagePath = null;
    if (req.body.profilpicture) {
      // Update profile picture
      let base64String = req.body.profilpicture;
      // Remove header
      let base64Image = base64String.split(";base64,");
      console.log(base64Image);
      const fileType = base64Image[0].split("/").pop();

      const findInvestor = await investorDatamapper.findByPk(id);
      // Check if an image already exists
      if (findInvestor.profilpicture) {
        const oldImagePath = findInvestor.profilpicture;
        imagePath = oldImagePath; // Set imagePath to the current image path

        if (findInvestor.profilpicture !== imagePath) {
          // Delete old image
          try {
            await fs.unlink(oldImagePath);
            console.log(`L'image précédente a été supprimée ${oldImagePath}`);
          } catch (err) {
            console.error(err);
          }
        }
      }
      // Create the path for the image using the investor's ID and file type
      imagePath = `public/images/profilePictures/${id}.${fileType}`;

      if (base64Image && base64Image.length > 1 && base64Image[1]) {
        // Write the image as a file to the server using fs.writeFile()
        try {
          await fs.writeFile(imagePath, base64Image[1], {
            encoding: "base64",
          });
          console.log("File created");
        } catch (err) {
          console.error("Failed to write image file:", err);
          return;
        }
      } else {
        // No new profile picture provided, retrieve existing image path
        imagePath = findInvestor.profilpicture;
      }
    }

    // Update investor information in the database
    const investorInfo = {
      email,
      nickname,
      password: passwordCrypted,
      profilpicture: imagePath,
    };

    // Check that all fields are filled in
    if (
      !investorInfo.email ||
      !investorInfo.nickname ||
      !investorInfo.password
    ) {
      return res.status(400).json({
        error: "Veuillez renseigner tous les champs",
      });
    }

    try {
      const updateInvestor = await investorDatamapper.update(
        { id },
        investorInfo
      );

      if (updateInvestor.length === 0) {
        next(new APIError("La route n'a pas été trouvée", 404));
      } else {
        res.json(updateInvestor);
      }
    } catch {
      next(
        new APIError("Erreur lors de la récupération d'un investisseur", 500)
      );
    }
  },
};

module.exports = investorController;
