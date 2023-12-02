export const isValidEmailFormat = (inputEmail) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(inputEmail)
}

export const isValidNameFormat = (inputName) => inputName.length >= 2

export const isValidPasswordFormat = (inputPassword) => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/
  return passwordRegex.test(inputPassword)
}
