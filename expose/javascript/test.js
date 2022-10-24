/*function sumValues(n1, n2, add){
    if (add){
        const result = 0;
        result = n1 + n2;
        console.log('values added: ', result);
    } else return;
    console.log('final result: ', result);
}
sumValues(10,10,true);

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
console.log(arr);*/

let student = {
    name: 'Sarah',
    major: 'Computer Science',
    'Grad Year': '2022',
    greeting: function() {console.log('Hello!');},
    'Favorite Teacher': {
        name: 'Thomas Powell',
        course: 'CSE 110'
    },
    courseLoad: ['CSE110', 'CSE 134', 'VIS 41']
};

console.log(student.name);
console.log(student['Grad Year']);
student.greeting();
console.log(student['Favorite Teacher'].name);
console.log(student.courseLoad[0]);