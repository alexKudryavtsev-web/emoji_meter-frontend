export default function getUserSignUpError(state) {
  return state.user?.errorMessage.signUp;
}
