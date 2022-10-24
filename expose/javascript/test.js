/*function sumValues(n1, n2, add){
    if (add){
        const result = 0;
        result = n1 + n2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}
sumValues(10,10,true);*/

function discountPrices(prices, discount) {
    const discounted = [];
    const length = prices.length;

    for (let i = 0; i < length; i++) {
        const discountedPrice = prices[i] * (1- discount);
        discounted.push(discountedPrice);
    }

    //console.log(length);
    //console.log(discountedPrice);
    //console.log(finalPrice);
    return discounted;
}
var arr = discountPrices([100,200,300], 0.5);
console.log(arr);