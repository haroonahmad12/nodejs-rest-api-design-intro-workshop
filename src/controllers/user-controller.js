const db = require("../models");
const { logger } = require("../config/config");

async function getUsers(req, res, next) {
  try {
    const data = await db.User.find();
    res.status(201).send({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

async function createUser(req, res, next) {
  const newUser = req.body;
  try {
    const data = await db.User.create(newUser);
    res.status(201).send({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

async function getOneUser(req, res, next) {
  const userId = req.params["userId"];
  try {
    const data = await db.User.find({ _id: userId });
    res.status(201).send({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

async function updateUser(req, res, next) {
  const userId = req.params["userId"];
  const update = req.body;
  try {
    const data = await db.User.findOneAndUpdate({ _id: userId }, update);
    res.status(200).send({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
}

async function deleteUser(req, res, next) {
  const id = req.params["userId"];
  try {
    const data = await db.User.deleteOne({ _id: id });
    res.status(200).send({
      success: true,
      message: "User Deleted Successfully",
    });
  } catch (error) {}
}

module.exports = {
  getUsers: getUsers,
  createUser: createUser,
  getOneUser: getOneUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
