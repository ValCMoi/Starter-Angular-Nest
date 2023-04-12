const crypto = require("crypto")

const encrypt = (plainText) => {
  try {
    return crypto.createHmac('SHA256',process.env.SECRET_KEY).update(plainText).digest('base64')
  } catch (error) {
    console.log(error);
  }
}

const match = (encryptedText) => {
  try {
    return encryptedText === crypto.createHmac('SHA256', process.env.SECRET_KEY).update(encryptedText).digest('base64')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {encrypt, match}