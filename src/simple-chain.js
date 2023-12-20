const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    // проверка существует ли элемент в цепи с указанной позицией
    // исп-ем this.chain[position - 1], т.к позиции в цепи начинаются с 1, а индексы массива - с 0
    if(!this.chain[position - 1]){
      this.chain = [];
      throw new Error(`You can't remove incorrect link!`);
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain = [];
    return result;
  }
};

module.exports = {
  chainMaker
};
