import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nico9934:1234@cluster0.0fenhgs.mongodb.net/"
    );
    console.log(">>> Conectado a la DB");
  } catch (error) {
    console.log(error);
  }
};
