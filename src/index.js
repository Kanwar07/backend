import dotenv from "dotenv";
import connectdb from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectdb()
  .then(() => {
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT: ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MongoDB Connection failed!! Error: ", err);
  });

/*import express from "express";
const app = express()(async () => {
  try {
    await mongoose.connect(`${process.env.MONDO_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("Error: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Error: ", error);
  }
})();*/
