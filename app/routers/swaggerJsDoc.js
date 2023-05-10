/** schema authentification 
 * @swagger
 * components:
 *   schemas:
 *     Authentification:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         email:
 *           type: string
 *           description: The email required to create or login to an account
 *         passeword:
 *           type: string
 *           description: Passeword required to create or login to an account
 *         confirmPassword:
 *           type: string
 *           description: Passeword required to create or login to an account
 * 
 * 
 *         nickname:
 *           type: string
 *           description: nickname of the connected user
 */

/** schema Login 
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         email:
 *           type: string
 *           description: The email required to create or login to an account
 *         passeword:
 *           type: string
 *           description: Passeword required to create or login to an account
 */

/** schema Company 
 * @swagger
 * components:
 *   schemas:
 *     Company:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - finished
 *       properties:
 *         id:
 *           type: integer
 *           description: The id for a company
 *         symbol:
 *           type: string
 *           description: The symbol of a company
 *         enteryprice:
 *           type: string
 *           description: The entry price for a company
 */


/**
 * @swagger
 * tags:
 *   name: Authentification
 *   description: To create a new account
 * /auth/register-investor:
 *   post:
 *     summary: Create a new account
 *     tags: [Authentification]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/authentification'
 *     responses:
 *       200:
 *         description: The created investor.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/authentification'
 *       500:
 *         description: Some server error
 * /auth/login:
 *   post:
 *     summary: Login to an account
 *     tags: [Login]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Login'
 *     responses:
 *       200:
 *         description: Connection succeded.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Login'
 *       500:
 *         description: Some server error
 * /book/{id}:
 *   get:
 *     summary: Get the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *     responses:
 *       200:
 *         description: The book response by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/authentification'
 *       404:
 *         description: The book was not found
 *   put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Books'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Books'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 *
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */
