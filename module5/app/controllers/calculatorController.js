const addNumbers = (req, res) => {
    let a = parseInt(req.query?.a) || 0;
    let b = parseInt(req.query?.b) || 0;
    res.send({ result: a + b });
};

const multiplyNumbers = (req, res) => {
    const number1 = parseInt(req.query?.a) || 0;
    const number2 = parseInt(req.query?.b) || 0;
    const result = number1 * number2;
    console.log("result", result);
    res.status(200);
    res.send({ result });
};

module.exports = { addNumbers, multiplyNumbers };
