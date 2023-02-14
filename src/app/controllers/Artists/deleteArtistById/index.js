/* eslint-disable import/no-unresolved */
const handleAPIError = require("~root/utils/handleAPIError");
const deleteArtist = require("~root/actions/artists/deleteArtist");

const deleteArtistById = async (req, res) => {
  const { id } = req.params;

  try {
    await deleteArtist({ id });

    res.sendStatus(204);
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = deleteArtistById;
