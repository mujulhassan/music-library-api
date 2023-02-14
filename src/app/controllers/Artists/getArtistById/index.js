/* eslint-disable import/no-unresolved */
const handleAPIError = require("~root/utils/handleAPIError");
const { getArtistById } = require("~root/actions/artists");

const getArtistByIdHandler = async (req, res) => {
  const { artistId } = req.params;

  try {
    const artist = await getArtistById(artistId);

    if (artist) {
      res.send(artist);
    } else {
      res.status(404).send({ message: "Artist not found" });
    }
  } catch (err) {
    handleAPIError(res, err);
  }
};

module.exports = getArtistByIdHandler;
