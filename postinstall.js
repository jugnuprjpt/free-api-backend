const { MongoMemoryServer } = require('mongodb-memory-server');

const downloadMongoBinary = async () => {
  const mongod = new MongoMemoryServer();
  await mongod.getConnectionString();
};

downloadMongoBinary().catch(err => {
  console.error('Error downloading MongoDB binaries:', err);
  process.exit(1);
});
