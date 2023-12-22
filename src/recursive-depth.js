const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    // нач. значение глубины = 1 (текущий уровень массива)
    return arr.reduce((maxDepth, item) => {
      // если элемент - массив, рекурсивно считаем его глубину и срав-аем с текущ. максим. глубиной
      // если элемент - не массив, возвр-ем текущ. максим. значение глубины
      return Array.isArray(item) ? Math.max(maxDepth, this.calculateDepth(item) + 1) : maxDepth;
    }, 1);
  }
}

module.exports = {
  DepthCalculator
};
