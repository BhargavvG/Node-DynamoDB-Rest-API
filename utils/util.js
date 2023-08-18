const { marshall } = require("@aws-sdk/util-dynamodb");
const generateUpdateAttributes = (body) => {
  const objKeys = Object.keys(body);
  return {
    UpdateExpression: `SET ${objKeys
      .map((_, index) => `#key${index} = :value${index}`)
      .join(", ")}`,
    ExpressionAttributeNames: objKeys.reduce(
      (acc, key, index) => ({
        ...acc,
        [`#key${index}`]: key,
      }),
      {}
    ),
    ExpressionAttributeValues: marshall(
      objKeys.reduce(
        (acc, key, index) => ({
          ...acc,
          [`:value${index}`]: body[key],
        }),
        {}
      )
    ),
  };
};
module.exports = {
  generateUpdateAttributes,
};
