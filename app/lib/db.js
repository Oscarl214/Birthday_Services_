import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewURLParser: true,
      useUnifiedTopology: true,
    });
    console.log('Mongo connection successful');
  } catch (error) {
    throw new Error('Error in connecting mongodb');
  }
};

export default connect;