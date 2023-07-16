const network = new brain.NeuralNetwork();

network.train([
  {
    input: { r: 0, g: 0, b: 0 },
    output: [1],
  },
  {
    input: { r: 1, g: 1, b: 1 },
    output: [0],
  },
]);

const diagram = document.getElementById("diagram");
diagram.innerHTML = brain.utilities.toSVG(network);

console.log(network.run({ r: 0.5, g: 0.5, b: 0.5 }));
