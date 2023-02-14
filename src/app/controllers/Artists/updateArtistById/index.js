// Import dependencies
const handleAPIError = require("~root/utils/handleAPIError");
// eslint-disable-next-line import/no-unresolved
const updateArtistById = require("~root/actions/artists/updateArtistById");

// Define handler function
const updateArtistByIdHandler = async (req, res) => {
  try {
    const artistId = req.params.id;
    const updates = req.body;
    const updatedArtist = await updateArtistById(artistId, updates);
    res.send(updatedArtist);
  } catch (err) {
    handleAPIError(res, err);
  }
};

// Export handler function
module.exports = updateArtistByIdHandler;
