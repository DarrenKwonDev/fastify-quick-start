// const dotenv = require("dotenv").config();
import "dotenv/config";
import fastify from "fastify";

// Number 형태로 변환
const PORT = +process.env.PORT;

// app class
class App {
  app = fastify({ logger: true });

  constructor() {
    this.setup();
  }

  // routing
  setup() {
    this.app.get("/", (request, reply) => {
      reply.send({ hello: "guys" });
    });
  }

  // start, listening
  start() {
    try {
      this.app.listen(PORT);
      this.app.log.info(`http://localhost:${PORT}`);
    } catch (error) {
      this.app.log.error(error);
    }
  }
}

export default App;
