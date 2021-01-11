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
      reply.send({ hello: "guy" });
    });
  }

  // start, listening
  start() {
    try {
      this.app.listen(PORT);
      // fastify 가 알아서 주소를 출력해주므로 굳이 주소 찍을 필요 없다
      // this.app.log.info(`http://localhost:${PORT}`);
    } catch (error) {
      this.app.log.error(error);
    }
  }
}

export default App;
