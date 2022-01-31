console.log("Hello");
console.log("Hello Nirav How Are You");

let a = [1 , 4 , 7 , 8 , 10];

let b = [2 , 3 , 6];

temp = [];

for(let i = 0; i < a.length; i++){

    if(a[i] > b[0]){
        temp = b[0];
        b[0] = a[i];
        a[i] = temp;
    }
    b.sort(function(a, b){return a - b});
    console.log("a" , a);
    console.log("b" , b);
    console.log("i" , i);
}
