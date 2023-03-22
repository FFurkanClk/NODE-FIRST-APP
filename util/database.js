const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>{
  MongoClient.connect(
    'mongodb+srv://furkan34:Or6lXX6lVRGcAJ2p@cluster0.pwh7txa.mongodb.net/shop?retryWrites=true&w=majority')

    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
       throw err;
});
  
};
const getDb = () => {
  if (_db){
    return _db;
  }
  throw 'No DataBase Found';
};
exports.mongoConnect = mongoConnect;
exports.getDb=getDb;