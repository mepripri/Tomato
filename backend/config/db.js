import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://ppatel132:Vxwrx4j655BArz5h@cluster0.b5s4vdc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/tomato"
    )
    .then(() => console.log("DB connected"));
};
