export default function getUserLoginError(state) {
  return state.user?.errorMessage.login || "";
}
