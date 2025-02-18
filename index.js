import app from "./src/app.js";
import { connectDB } from "./src/db/db.js";
import dotenv from "dotenv";

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server listening on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
