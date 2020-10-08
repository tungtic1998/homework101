// var a = [1,3,4,5,6,7,8,9]
// var b = Number(prompt("Enter a number: "))
// var anew = a.sort()

// var check = a.indexOf(b)
// var result =[]
// if (check >= 0) {
//     console.log("Closest number is: " + b)
// } else {
//     a.push(b)
//     var z = anew.indexOf(b)
//     var length = anew.length
//     if (z < length) {
//         if (b - anew[z - 1] == anew[z + 1] - b) {
//             result.push(anew[z - 1], anew[z + 1])
//         } else if (b - anew[z - 1] < anew[z + 1] - b) {
//             result.push(anew[z - 1])
//         } else if (b - anew[z - 1] > anew[z + 1] - b) {
//             result.push(anew[z + 1])
//         }
//     } else {
//         result.push(anew[z - 1])
//     }
//     console.log("Closest number is: " + result)
//     console.log(anew)
// }

var a = [1,3,4,7,9,11]
var b = Number(prompt("input a number: "))
var larger = [] //những số lớn hơn b
var smaller = [] //những số nhỏ hơn b
var result = []
for (var i = 0; i < a.length; i++) {
    if (b > a[i]) {
        smaller.push(a[i]);
    } else if (b < a[i]) {
        larger.push(a[i]);
    } else if ( b = a[i]) {
        console.log(b + " có xuất hiện trong chuỗi")
    }
}
if (smaller.length == 0) {
    console.log("Closet number is: " + Math.min.apply(Math, larger))
} else if (larger.length == 0) {
    console.log("Closet number is: " + Math.max.apply(Math, smaller))
} else if (smaller.length != 0 && larger.length != 0) {
    result.push(Math.max.apply(Math, smaller), Math.min.apply(Math, larger))
    console.log("Closet number is: " + result)
}