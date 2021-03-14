const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(modification = true) {
    this.modification = modification;
  }

  generateKey(str, key) {
    let difference = str.length - key.length;
  
    for (let i = 0; i < difference; i++) {
      key += key[i % key.length];
    }
  
    return key;
  }

  encrypt(str, key) {
    if (arguments.length < 2) throw Error; 
  
    if (str.length !== key.length) {
      key = this.generateKey(str, key);
    }
  
    str = str.toUpperCase();
    key = key.toUpperCase();
  
    let alphabetLength = 26;
    let keyPosition = 0;
    let cipher = '';
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {

        let asciiLetter = (str.charCodeAt(i) + key.charCodeAt(keyPosition)) % alphabetLength;
        asciiLetter += 'A'.charCodeAt(0);
        cipher += String.fromCharCode(asciiLetter);
        keyPosition += 1;
      } else {

        cipher += str[i];
        continue;
      }
    }
  
    if (this.modification) {
      return cipher;
    } else {
      return cipher.split('').reverse().join('');
    }
  }  

  decrypt(str, key) {
    if (arguments.length < 2) throw Error; 
  
    if (str.length !== key.length) {
      key = this.generateKey(str, key);
    }
  
    str = str.toUpperCase();
    key = key.toUpperCase();
  
    let decipher = '';
    let keyPosition = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'A' && str[i] <= 'Z') {
  
        let asciiLetter = (str.charCodeAt(i) - key.charCodeAt(keyPosition) + 26) % 26;
        asciiLetter += 'A'.charCodeAt(0);
        decipher += String.fromCharCode(asciiLetter)
        keyPosition += 1;
      } else {
  
        decipher += str[i];
        continue;
      }
    }
  
    if (this.modification) {
      return decipher;
    } else {
      return decipher.split('').reverse().join('');
    };
  }
}

module.exports = VigenereCipheringMachine;
