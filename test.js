// importar la función sum del archivo app.js
const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound} = require('./app.js');


// comienza tu primera prueba
test('adds 14 + 9 to equal 23', () => {
    let total = sum(14, 9);
    // esperamos que la suma de esos 2 números sea 23
    expect(total).toBe(23);
});


// EURO DOLAR
test("One Euro should be 1.206 dollars", function(){
    expect(fromEuroToDollar(3.5)).toBe(4.2); 
})

// DOLAR YEN
test("One Dolar should be 106.5 Yen", function(){
    expect(fromDollarToYen(1)).toBe(106.5); 
})

// YEN POUND
test("One Yen should be 0.0063 Pound", function(){
    expect(fromYenToPound(1)).toBe(0.0063); 
})