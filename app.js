// app.js file content
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 106.5;
    return valueInYen;
}

const fromYenToPound = function(valueInYen){
    let valueInPound = valueInYen * 0.0063;
    return valueInPound;
}

const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.2;
    return valueInDollar;
}

function sum(a, b) {
    return a + b;
}





module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound}