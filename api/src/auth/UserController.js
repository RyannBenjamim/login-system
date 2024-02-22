class UserController {
  constructor(service) {
    this.service = service;
  }

  async register(request) {
    const { username, email, password, confirmPassword } = request.body;

    if (!username || !email || !password || !confirmPassword) {
      return {
        code: 400,
        body: {
          message:
            "Username, email, password and password confirmation are required.",
        },
      };
    }

    try {
      const user = await this.service.register(
        username,
        email,
        password,
        confirmPassword
      );
      return { code: 201, body: user };
    } catch (error) {
      return { code: 400, body: { message: error.message } };
    }
  }

  async login(request) {
    const { email, password } = request.body;

    if (!email || !password) {
      return {
        code: 400,
        body: { message: "Email and password are required." },
      };
    }

    try {
      const user = await this.service.login(email, password);
      return { code: 200, body: user };
    } catch (error) {
      return { code: 400, body: { message: error.message } };
    }
  }

  async getUser(request) {
    const { token } = request.body;

    if (!token) {
      return {
        code: 400,
        body: { message: "The token was not sent." },
      };
    }

    try {
      const user = await this.service.getUser(token);
      return { code: 200, body: user };
    } catch (error) {
      return { code: 400, body: { message: error.message } };
    }
  }
}

module.exports = UserController;
