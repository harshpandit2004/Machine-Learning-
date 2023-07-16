const network = new brain.NeuralNetwork();

const dataset = [
  {
    input: { r: 0, g: 0, b: 0 },
    output: [1],
  },
  {
    input: { r: 1, g: 1, b: 1 },
    output: [0],
  },
];

network.train(dataset);

const colorElement = document.getElementById("color");
const guessText = document.getElementById("guess");

const whiteButt = document.getElementById("white-button");
const blackButt = document.getElementById("black-button");
const printButt = document.getElementById("print-button");

//set the background and text color
let color;

const randColGenerator = () => {
  color = {
    r: Math.random(),
    g: Math.random(),
    b: Math.random(),
  };
  const guess = network.run(color)[0];
  console.log(guess);
  guessText.style.color = guess < 0.5 ? "#000" : "#FFF";
  colorElement.style.backgroundColor = `rgba(${color.r * 255}, ${
    color.g * 255
  }, ${color.b * 255})`;
};

randColGenerator();

//you're wrong, kiddo (machine)
const chooseColor = (value) => {
  dataset.push({
    input: color,
    output: [value],
  });
  randColGenerator();
};

const print = () => {
  console.log(JSON.stringify(dataset));
};

whiteButt.addEventListener("click", () => {
  chooseColor(1);
});
blackButt.addEventListener("click", () => {
  chooseColor(0);
});

printButt.addEventListener("click", print);
