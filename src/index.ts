import "dotenv/config";
import "reflect-metadata";
import { createConnection } from "typeorm";
import connectionOptions from "./ormConfig";
import App from "./app";

createConnection(connectionOptions)
  .then(async (connection) => {
    const app = new App();
    app.start();
  })
  .catch((error) => console.log(error));
