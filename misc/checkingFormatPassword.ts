export const checkingFormatPassword = (password: string) => {
  if (password !== "") {
    return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(
      password
    );
  }
  return false;
};
