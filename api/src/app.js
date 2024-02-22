const fastify = require("fastify");
const cors = require("@fastify/cors");

const UserRepository = require("./auth/UserRepository");
const UserService = require("./auth/UserService");
const UserController = require("./auth/UserController");

const app = fastify({ logger: true });

app.register(cors, {
  origin: "*",
  methods: ["GET", "POST", "PUT", "DELETE"],
});

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

app.post("/api/register", async (request, reply) => {
  const { code, body } = await userController.register(request);
  reply.code(code).send(body);
});

app.post("/api/login", async (request, reply) => {
  const { code, body } = await userController.login(request);
  reply.code(code).send(body);
});

app.post("/api/user", async (request, reply) => {
  const { code, body } = await userController.getUser(request);
  reply.code(code).send(body);
});

module.exports = app;
