class NeuralNetwork {
  constructor(neuronCounts) {
    this.level = [];
    for (let i = 0; i < neuronCounts.length - 1; i++) {
      this.levels.push(new Level(neuronCounts[i], neuronCounts[i + 1]));
    }
  }

  static feedForward(givenInputs, network) {
    let outputs = Level.feedForward(givenInputs, network.levels[0]);
    
  }
}

class Level {
  constructor(inputCount, outputCount) {
    this.input = new Array(inputCount);
    this.outputs = new Array(outputCount);
    this.biases = new Array(outputCount);

    this.weights = [];
    for (let i = 0; i < inputCount; i++) {
      this.weights[i] = new Array(outputCount);
    }
    Level.#randomize(this);
  }

  static #randomize(level) {
    for (let i = 0; i < level.length; i++) {
      for (let j = 0; j < level.length; j++) {
        level.weights[i][j] = Math.random() * 2 - 1;
      }
    }
    for (let i = 0; i < level.biases.length; i++) {
      level.biases[i] = Math.random() * 2 - 1;
    }
  }

  static feedForward(givenInputs, level) {
    for (let i = 0; i < level.input.length; i++) {
      let sum = 0;
      for (let j = 0; j < level.input.length; j++) {
        sum += level.input[j] * level.weights[j][i];
      }

      if (sum > level[i]) {
        level.outputs[i] = 1;
      } else {
        level.outputs[i] = 0;
      }
    }

    return level.outputs;
  }
}
