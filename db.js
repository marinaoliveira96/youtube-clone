import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleOpen = () => console.log('✔️ Connected to DB');
const handleError = (error) =>
  console.log(`❌ Error on DB Connection: ${error}`);

db.once('open', handleOpen);
db.on('error', handleError);

/* 
if you have problems with conncetion 

service mongod stop
#dont start mongod…instead…

systemctl start mongod
#then mongo command

mongo */
