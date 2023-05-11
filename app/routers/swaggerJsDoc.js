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
 * /company:
 *   get:
 *     summary: Get all companies
 *     tags: [Companies]
 *     parameters:
 *     responses:
 *       200:
 *         description: All the companies
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Companies'
 *       404:
 *         description: Comany has not been found
 * 
 *   post:
 *     summary: Create a company
 *     tags: [Companies]
 *     parameters:
 *      - in: path
 *        name: symbol
 *        schema:
 *          type: string
 *        required: true
 *        description: The company ticker
 *      - in: path
 *        name: name
 *        schema:
 *          type: string
 *        required: true
 *        description: The company name
 *      - in: path
 *        name: entry price
 *        schema:
 *          type: integer
 *        required: true
 *        description: The price that we want to buy the company's share
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Companies'
 *     responses:
 *       200:
 *         description: Company created.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Companies'
 *       500:
 *         description: Some server error
 *  
 * /company/{id}:
 *   put:
 *    summary: Update the company by the id
 *    tags: [Companies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The company id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Companies'
 *    responses:
 *      200:
 *        description: The company was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Companies'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 *   get:
 *    summary: Get the company by the id
 *    tags: [Companies]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: integer
 *        required: true
 *        description: The company id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Companies'
 *    responses:
 *      200:
 *        description: The company was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Companies'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 * /company/{symbol}:
 *   get:
 *    summary: find company by symbol
 *    tags: [Companies]
 *    parameters:
 *      - in: path
 *        name: symbol
 *        schema:
 *          type: string
 *        required: true
 *        description: The company ticker
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Companies'
 *    responses:
 *      200:
 *        description: The company has ben found
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Companies'
 *      404:
 *        description: company not founded
 *      500:
 *        description: Some error happened
 * 
 *   
 *   
 */
