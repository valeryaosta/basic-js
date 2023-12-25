const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  // хелпер шифрования/дешифрования одного символа
  processChar(char, keyChar, mode) {
    const shift = keyChar.charCodeAt(0) - 'A'.charCodeAt(0);
    if (char.match(/[A-Z]/)) { // Работаем только с алфавитными символами
      const base = 'A'.charCodeAt(0);
      const charCode = char.charCodeAt(0) - base;
      const newCharCode = mode === 'encrypt'
          ? (charCode + shift) % 26
          : (charCode - shift + 26) % 26;
      return String.fromCharCode(newCharCode + base);
    }
    return char; //  символы не из алфавита - оставляем без изменений
  }

  //  функция для шифрования и дешифрования
  process(text, key, mode) {
    if (text === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    text = text.toUpperCase();
    key = key.toUpperCase();
    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
      const char = text[i];
      const keyChar = key[j % key.length];
      result += this.processChar(char, keyChar, mode);
      if (char.match(/[A-Z]/)) {
        j++; // индекс ключа увеличиваем только для алфавитных символов
      }
    }
    return this.direct ? result : result.split('').reverse().join('');
  }

  encrypt(text, key) {
    return this.process(text, key, 'encrypt');
  }

  decrypt(text, key) {
    return this.process(text, key, 'decrypt');
  }
}

module.exports = {
  VigenereCipheringMachine
};
