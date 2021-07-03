// let arr = [1, 2];
//
// let updateArr = arr.concat([3, 4]);
//
// console.log(arr);
// console.log(updateArr);



//
// let arr = [1, 2, 3];
//
// arr.reverse();
//
// console.log(arr);




// let arr = [1, 2, 3];
//
// arr.push(4, 5, 6);
//
// console.log(arr);





// let arr = [1, 2, 3];
//
// arr.unshift(3, 4, 5);
//
// console.log(arr);



// let arr = ['js', 'css', 'jq'];
//
// alert( arr.shift() );
// alert( arr.pop() );
//


// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.splice(3, 2);
//
// console.log(newArr);
//


// let arr = [1, 2, 3, 4, 5];
//
// arr.splice(1,2);
//
// console.log(arr);


// let arr = [1, 2, 3, 4, 5];
//
// let newArr = arr.splice(1, 3);
//
// console.log(newArr);


// let arr = [1, 2, 3, 4, 5];
//
// arr.splice(1, 2, 'a', 'b', 2, 3);
// arr.splice(6, 1, 'c', 5, 'e');
//
// console.log(arr);


// let arr = [3, 4, 1, 2, 7];
//
// arr.sort()
//
// console.log(arr);



// let arr = [5, 6, 7, 8, 9];
//
// let result = arr.reduce((sum, current) => sum + current );
//
// console.log(result);
//


// let arr =  [5, 6, 7, 8, 9];
//
// let multiplyArr = [];
//
// arr.forEach(function (num ){
//
//     multiplyArr.push(num * num);
//     });
//
// console.log(multiplyArr);


// let arr =  [1,-3, 5, 6,-7, 8, 9,-11];
//
// function sort(num) {return  num < 0};
//
// let result = arr.filter(sort);
//
// console.log(result);




// let arr = [1,-3, 5, 6,-7, 8, 9,-11];
//
// function divider(num) {return num % 2 === 0};
//
// let result = arr.filter(divider);
//
// console.log(result);


// let arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];
//
// function func(str) {return str.length > 5};
//
// let result = arr.filter(func);
//
// console.log(result);


// let arr = [1, 2, [3, 4], 5, [6, 7]];
//
// function func(num) {return Array.isArray(num)};
//
// let result = arr.filter(func);
//
// console.log(result);
//


// let arr = [5,-3, 6,-5, 0,-7, 8, 9];
//
// function neg(num) {return num < 0};
//
// let result = arr.filter(neg);
//
// console.log(result.length);
