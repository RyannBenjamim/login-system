const User = require("./User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

class UserService {
  constructor(repository) {
    this.repository = repository;
  }

  async register(username, email, password, confirmPassword) {
    const userExists = await this.repository.findByEmail(email);

    if (userExists) {
      throw new Error("This email was already used by anothe user.");
    }

    if (password !== confirmPassword) {
      throw new Error(
        "The passwords entered do not match. Please check and try again."
      );
    }

    const newUser = new User(username, email, password);
    newUser.password = bcrypt.hashSync(newUser.password, 10);
    this.repository.save(newUser);

    return newUser;
  }

  async login(email, password) {
    const user = await this.repository.findByEmail(email);

    if (!user) {
      throw new Error("This email is not registered in the system.");
    }

    const isSamePassword = bcrypt.compareSync(password, user.password);

    if (!isSamePassword) {
      throw new Error("Incorrect password.");
    }

    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.TOKENSECRET,
      { expiresIn: "1d" }
    );

    user.password = undefined;
    return { token, user };
  }

  async getUser(token) {
    const decodedToken = jwt.verify(token, process.env.TOKENSECRET);
    const user = await this.repository.findByEmail(decodedToken.email);

    if (!user) {
      throw new Error("Invalid token");
    }

    return {
      username: user.username,
      email: user.email,
      createdAt: user.createdAt,
    };
  }
}

module.exports = UserService;
