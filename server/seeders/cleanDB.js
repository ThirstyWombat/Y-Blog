const models = require("../models");
const db = require("../config/connection");
const { model } = require("mongoose");

async function cleanDB(modelName, collectionName) {
  try {
    console.log(models[modelName]);
    console.log(modelName);
  } catch (err) {
    throw err;
  }
}

module.exports = cleanDB;

// module.exports = async (modelName, collectionName) => {
//   try {
//     let modelExists = await models[modelName].db.db
//       .listCollections({
//         name: collectionName,
//       })
//       .toArray();

//     if (modelExists.length) {
//       await db.dropCollection(collectionName);
//     }
//   } catch (err) {
//     throw err;
//   }
// };
