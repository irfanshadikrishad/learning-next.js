import dotenv from "dotenv";
import { connect } from "mongoose";
dotenv.config();

const database = async () => {
  try {
    await connect(process.env.URI)
      .then(() => {
        console.log(`[database] connected`);
      })
      .catch((error) => {
        console.log(`[database] ${error.message}`);
      });
  } catch (error) {
    console.log(`[database] ${error.message}`);
  }
};

export default database;
