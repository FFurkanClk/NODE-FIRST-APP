const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>{
  MongoClient.connect(
    'mongodb+srv://furkan:furkan34@cluster0.9tksluj.mongodb.net/test')

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