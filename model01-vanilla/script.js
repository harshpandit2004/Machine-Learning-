// creating a network object to work with
const network = new brain.NeuralNetwork();

// training the network
network.train([
    {
        input: [0,0],
        output: [0]
    },
    {
        input: [1,0],
        output: [1]
    },
    {
        input: [0,1],
        output: [1]
    },
    {
        input: [1,1],
        output: [0]
    }
])

// storing the network outputs in an html element
const diagram = document.getElementById('diagram');
diagram.innerHTML = brain.utilities.toSVG(network);