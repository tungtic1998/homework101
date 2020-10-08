function ex0() {
    var check = Number(prompt("Input number you want to check: ")); // kiểm tra số nhập vào có phải số nguyên tố
    var a = 1;
    if (check < 2) {
        alert(check + " is not a prime number");
    } else {
        for ( var i = 2; i <= check; i++) {
            if (check % i == 0) {
                a++;
            }
        }
        if (a > 2) {
            alert(check + " is not a prime number");
        } else {
            alert(check + " is a prime number");
        }
    }
}

function ex1() {
    var n = Number(prompt("Input a number you want me to print to: ")); // in ra các số từ 1 đến n
    var result = "";
    for (var i = 1; i <= n; i++) {
        result += i + " ";
    }
    return result;
}

function ex2() {
    var n = Number(prompt("Input a number: ")); // in ra các số lẻ từ 1 đến n
    var result = "";
    for (var i = 1; i <= n; i++) {
        if (i % 2 != 0) {
            result += i + " ";
        }
    }
    return result;
}

function ex3() {
    var n = Number(prompt("Input a number: ")); // in ra các số chẵn từ 1 đến n
    var result = "";
    for (var i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            result += i + " ";
        }
    }
    return result;
}

function ex4() {
    var n = Number(prompt("input a number: ")); // in ra các số nguyên tố từ 1 đến n
    var result = "";
    for (var i = 2; i <= n; i++) {
        var x = 1;
        for (var z = 2; z <= i; z++)
            if (i % z == 0) {
                x++
            }
            if (x <= 2) {
                result += i + " ";
                x = 1;
            }
    }
    return result;
}

function ex5() {
    var n = Number(prompt("input a number: ")); // tổng các số từ 1 đến n
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function ex6() {
    var n = Number(prompt("input a number: ")); // tổng bình phương các số từ 1 đến n
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        sum += i**2;
    }
    return sum;
}

function ex7() {
    var n = Number(prompt("input a number: ")); // tổng số lẻ từ 1 đến n
    var sum = 0;
    for (var i = 1; i <= n; i++) {
        if ( i % 2 != 0) {
            sum += i;
        }
    }
    return sum;
}

function ex8() {
    var n = prompt("insert number: "); // kiểm tra chẵn lẻ các kiểu các kiểu
    var oddcount = 0;
    var evencount = 0;
    while (n > 0) {
        var loz = n % 2;
        if (loz != 0) {
            oddcount++;
        } else {
            evencount++;
        }
        n = Math.floor(n /= 10);
    }

    if (oddcount == 0) {
        alert("All digits in the number are even digit");
    } else if (evencount == 0) {
        alert("All digits in the number are odd digit");
    } else if (oddcount != 0 && evencount != 0) {
        alert("Number of odd digits: " + oddcount + " " + "Number of even digits: " + evencount);
    }
}

function ex9() {
    var n = prompt("enter: "); // kiểm tra số đảo ngược
    var i = n;
    var rn = 0;
    var digit = 0;
    while (n > 0) {
        digit = n % 10;
        rn = rn * 10 + digit;
        n = Math.floor(n / 10);
    }
    if (i == rn) {
        alert(true)
    } else {
        alert(false)
    }
}

function ex10() {
    for (var x = 2; x <= 10; x++) { // in ra bảng cửu chương
        for (var y = 2; y <= 10; y++) {
            console.log(x + "x" + y + "=" + (x*y));
        }
    }
}

function ex11() {
    var a = prompt("Enter a String: "); // đếm số lần string 2 xuất hiện trong string 1
    var b = prompt("This is what i want to count: ");
    var c = 0;
    var d = a.length;
    var result = 0;
        while ( d > 0 && c < d ) {
            var e = a.charAt(c);
            if ( e === b ) {
                c++;
                result++;
            } else if ( e !== b ) {
                c++;
            }
        }
        return result;
}

function ex12() {

    var a = prompt("Enter a String: ") // viết lại string mà k có dấu cách
    var b = a.split(" ");
    var f = "";
    var c = b.length;
        for (var d = 0; d < c; d++) {
            f += b[d];
        }
        return f;
}

function ex13() {
    var a = prompt("Enter a string"); // đảo ngược string
    var c = a.split("");
    var d = c.length;
    var e = "";
        for ( var b = -1; b >= -d; b-- ) {
            var f = a.substr(b, 1);
            e += f;
        }
        return e;
}

function ex14() {

    var a = prompt("String 1: "); // gộp cả bài 14 và 18
    var b = prompt("String 2: "); // tìm tất cả vị trí của string thứ 2 trong string thứ 1
    var x = a.length;
    var y = b.length;
    var result = "";
        for (var z = 0; z < x - y; z++) {
            var aa = a.indexOf(b, z);
            z = aa;
            result += aa + " ";
        }
        return result;
}

function ex16() {

    var x = prompt("Enter url: "); // trích xuất id người dùng từ facebook
    var xx = x.toString();
    var z = "https://www.facebook.com/";
    var zz = z.toString();
    var zzz = zz.length;
    var result = xx.substr(zzz);
        return result;
}

function ex17() {

    var first = Number(prompt("enter 1st number: ")); // tìm số min, số max trong 3 số
    var second = Number(prompt("enter 2nd number: "));
    var third = Number(prompt("enter 3rd number: "));
    var max = Math.max(first, second, third);
    var min = Math.min(first, second, third);
    var z = "Max number is " + max + " Min number is: " + min + ".";
        return z;
}

function ex19() {

    var a = prompt("Enter number: "); // tổng từ 1 đến n không sử dụng vòng lặp
    var x = Number(a);
    var y = x * (x + 1) / 2;
        return y;
}

function ex21() {
    var a = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
    var length = a.length;
    var sum = 0;
    for (var b = 0; b < length; b++) {
        var sum = sum + a[b];
    }
    return sum;
}

function ex22() {
var array = [1,2,3,4,5,6,7,8,9,9,8,7,6,5,4,3,2,1];
var max = Math.max.apply(Math, array);
var min = Math.min.apply(Math, array);
var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum += array[i];
    }
console.log("Max = " + max + " Min = " + min + " Mid = " + (sum / array.length));
}

function ex23() {
    var ogArray = [3,1,2,3,4,5,2,3,4,1,2,3,5,6,7,8,8,8,9,6,5,4,7,7,5,3,2,1];
    var array= ogArray.sort();
    var showup = 1;
    var count = 0;
    for (var a = 0; a < array.length - 1; a++) {
        if (array[a] == array[a+1]) {
            showup++;
        } else {
            if (showup >= count) {
                count = showup;
                showup = 1;
            }   else {
                showup = 1;
            }
        }
    }
    console.log(count);
}

function ex24() {
    var arrs = [1,13,2,4,5,6,7,2,3,9];
    var count = 1;
    var newarrs = [];
    for (var i = 0; i < arrs.length; i++) {
        if (arrs[i] >= 2) {
            for (var x = 2; x <= arrs[i]; x++) {
                if (arrs[i] % x == 0) {
                    count++;
                }
            }
            if (count <= 2) {
                newarrs.push(arrs[i]);
                count = 1;
            } else {
                count = 1;
            }
        }
    }
    console.log(newarrs)
}

function ex25() {
    var a = [1,3,4,2];
    var b = [];

    for ( var i = 0; i < a.length; i++) {
        b.push(a[i]**2);
    }

    console.log(b);
}

function ex26() {
    var a = [1,3,4,7,9,11,3];
    var b = Number(prompt("input a number: "));
    var larger = []; //những số lớn hơn b;
    var smaller = []; //những số nhỏ hơn b;
    var result = [];
    for (var i = 0; i < a.length; i++) {
        if (b > a[i]) {
            smaller.push(a[i]);
        } else if (b < a[i]) {
            larger.push(a[i]);
        } else if ( b = a[i]) {
            console.log(b + " có xuất hiện trong chuỗi tại index: " + i);
        }
    }
    if (smaller.length == 0) {
        console.log("Giá trị gần nhất là: " + Math.min.apply(Math, larger));
    } else if (larger.length == 0) {
        console.log("Giá trị gần nhất là: " + Math.max.apply(Math, smaller));
    } else if (smaller.length != 0 && larger.length != 0) {
        result.push(Math.max.apply(Math, smaller), Math.min.apply(Math, larger));
        console.log("Giá trị gần nhất là: " + result);
    }
}