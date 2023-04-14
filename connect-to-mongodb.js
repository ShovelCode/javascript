const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://<username>:<password>@<cluster-url>/test?retryWrites=true&w=majority';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
  }
  console.log('Connected to MongoDB Atlas...');
  const collection = client.db('<database-name>').collection('<collection-name>');
  // perform actions on the collection object
  client.close();
});
