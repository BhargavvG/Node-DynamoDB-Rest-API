const {
  GetItemCommand,
  PutItemCommand,
  DeleteItemCommand,
  ScanCommand,
  UpdateItemCommand,
} = require("@aws-sdk/client-dynamodb");
const { marshall, unmarshall } = require("@aws-sdk/util-dynamodb");
const db = require("../utils/db");
const { generateUpdateAttributes } = require("../utils/util");
const TableName = "demo-users";

const createUser = async (user) => {
  try {
    const params = {
      TableName,
      Item: marshall(user || {}),
    };
    const createResult = await db.send(new PutItemCommand(params));
    return { data: createResult };
  } catch (error) {
    return { error };
  }
};

const updateUser = async (userId, body) => {
  try {
    const params = {
      TableName,
      Key: marshall({ userId }),
      ...generateUpdateAttributes(body),
    };
    console.log({ params });
    const updateResult = await db.send(new UpdateItemCommand(params));
    return { data: updateResult };
  } catch (error) {
    return { error };
  }
};

const deleteUser = async (userId) => {
  try {
    const params = {
      TableName,
      Key: marshall({ userId }),
    };
    const deleteResult = await db.send(new DeleteItemCommand(params));
    return { data: deleteResult };
  } catch (error) {
    return { error };
  }
};

const getUser = async (query) => {
  const params = {
    TableName,
    Key: query ? marshall(query) : {},
  };
  const { Item } = await db.send(new GetItemCommand(params));

  return { data: unmarshall(Item) };
};

module.exports = {
  createUser,
  updateUser,
  getUser,
  deleteUser,
};
