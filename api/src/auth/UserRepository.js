const db = require("../db");

class UserRepository {
  async dataBase() {
    return new Promise((resolve, reject) => {
      const q = "SELECT * FROM users";

      db.query(q, (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }

  async findByEmail(email) {
    try {
      const users = await this.dataBase();
      const user = users.find((user) => email === user.email);
      return user;
    } catch (error) {
      throw error;
    }
  }

  async save({ id, username, email, password }) {
    return new Promise((resolve, reject) => {
      const q =
        "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?);";

      db.query(q, [id, username, email, password], (error, data) => {
        if (error) {
          reject(error);
        } else {
          resolve(data);
        }
      });
    });
  }
}

module.exports = UserRepository;
