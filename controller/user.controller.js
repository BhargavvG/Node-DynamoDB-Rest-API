const { userServices } = require("../services");
const createUser = async (req, res) => {
  try {
    const { error, data } = await userServices.createUser(req.body);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const getUser = async (req, res) => {
  try {
    const { error, data } = await userServices.getUser({userId :req.query.userId});
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

const updateUser = async (req, res) => {
  try {
    const { error, data } = await userServices.updateUser(
      req.query.userId,
      req.body
    );
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};
const deleteUser = async (req, res) => {
  try {
    const { error, data } = await userServices.deleteUser(req.query.userId);
    res.json({ error, data });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
