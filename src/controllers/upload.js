const upload = require("../middleware/upload");

const uploadFile = async (req, res) => {
  try {
    await upload(req, res);

    console.log(req.file);
    if (req.file == undefined) {
      return res.status(500).send('A File needs to be selected');
    }

    return res.status(200);
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload image: ${error}`);
  }
};

module.exports = {
  uploadFile: uploadFile
};
