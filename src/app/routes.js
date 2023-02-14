const express = require("express");

const postLogin = require("./controllers/users/login");
const postUser = require("./controllers/users/register");
const putUserDetails = require("./controllers/users/putUserDetails");
const authentication = require("./middlewares/authentication");
const authorise = require("./middlewares/authorisation");
const getUserTypes = require("./controllers/users/userTypes");
const deleteArtistById = require("./controllers/Artists/deleteArtistById");
// const postArtist = require("./controllers/Artists/postArtist");
const { ADMIN } = require("~root/constants/userTypes");

const router = express.Router();

module.exports = router;

// USER MANAGEMENT
router.post("/login", postLogin);
router.post(
  "/register",
  authentication,
  authorise({ roles: [ADMIN] }),
  postUser
);
router.put("/edit/user", authentication, putUserDetails);

router.get("/user-types", getUserTypes);

router.delete("/artists/:id", deleteArtistById);
const updateArtistByIdHandler = require("./controllers/Artists/updateArtistById");

router.put("/artists/:id", updateArtistByIdHandler);

const postArtistHandler = require("./controllers/Artists/postArtist");
const getArtistByIdHandler = require("./controllers/Artists/getArtistById");
const getAllArtistsHandler = require("./controllers/Artists/getAllArtists");

router.post("/artists", postArtistHandler);
router.get("/artists", getAllArtistsHandler);
router.get("/artists/:artistId", getArtistByIdHandler);

module.exports = router;
