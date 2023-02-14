/* eslint-disable import/no-unresolved */
const handleAPIError = require("~root/utils/handleAPIError");
const getAllArtists = require("~root/actions/artists/getAllArtists");

const getAllArtistsHandler = async (req, res) => {
  try {
    const artists = await getAllArtists();
    res.send(artists);
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getAllArtistsHandler;
