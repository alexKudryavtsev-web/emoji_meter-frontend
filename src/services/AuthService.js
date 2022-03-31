import $api from "../http";

class AuthService {
  static async registration(email, password) {
    return await $api.post("/auth/registration", { email, password });
  }

  static async login(email, password) {
    return await $api.post("/auth/login", { email, password });
  }

  static async logout() {
    return await $api.post("/auth/logout");
  }

  static async resetPassword(email) {
    return await $api.post("/auth/resetPassword", { email });
  }

  static async activateNewPassword(activationResetPasswordLink, newPassword) {
    return await $api.post("/auth/activateNewPassword", {
      activationResetPasswordLink,
      newPassword,
    });
  }
}

export default AuthService;
