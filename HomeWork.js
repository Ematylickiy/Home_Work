// TASK 1
// Написать функцию, которая принимает параметрами два массива
// и сливает их в объект так, что элементы первого массива становятся ключами, а второго - значениями.
function getObj(arr1, arr2){
    let obj = {};
    for (let key of arr1){
      let value;
      for (value of arr2){
        };
      obj[key]=value;
    }
    return console.log (obj);
  }
getObj(['a', 'b', 'c'], [1, 2, 3]);


//TASK 2
// Дан массив вида[1, 2, 3, 4, 5, 6, 7, 8, 9].Сделайте функцию, которая будет разбивать его в двухмерный массив.
// Первым параметром функция принимает массив для разбиения, а вторым - сколько элементов должно быть в подмассиве.
function getNewArray(obj, num){
    let newArr = new Array(Math.ceil(obj.length/num));
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = obj.splice(0, num);
    }
    return console.log (newArr);
}
getNewArray([1,2,3,4,5,6,7,8,9,10],5);


//TASK 3
// Создать массив объектов для юзеров.
// [{name: ‘Ivan’, age: 18}, {name: ‘Petr’, age: 12}, {name: ‘Sidor’, age: 25}, {...}, ...]
// Написать скрипт, который будет на выходе отдавать два массива.Первый с совершеннолетними пользователями,
// второй с несовершеннолетними.

let users = [{ name: 'Ivan', age: 12 }, { name: 'Petr', age: 18 }, { name: 'Sidor', age: 25 }, { name: 'German', age: 4 }];
let adultUser = users.filter(function (item) {
    return item.age >= 18;
});
let minortUser = users.filter(function (item) {
    return item.age < 18;
});
console.log(minortUser);
console.log(adultUser);


// TASK 4
// - Создайте массив из 5 любых элементов.
// - Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
// - Склонированный массив вывести в консоль
let arrTASK_4 = ['A', 'B', 'C', 'D', 'E'];
let cloneArr = arrTASK_4.slice();
console.log(cloneArr);


// TASK 5
// - написать ф-цию, которая принимает в качестве параметра массив чисел, фильтрует его и 
//   возвращает массив нечетных чисел[1, 2, 3] -> [1, 3]
// - написать ф-цию, которая принимает в качестве параметра массив чисел и возвращает 
//   массив их квадратов // [1, 2, 3, 4] -> [1, 4, 9, 16]
// - написать функцию, которая в качестве параметра принимает массив с разными типами данных. 
//   возвращает true, если в массиве есть строка, возвращает false, если в массиве строк нет
function getUnevenNum(arr){
    arr = arr.filter(function(item){
        return item % 2 == 1;
    });
    return console.log(arr);
};
getUnevenNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21]);

function getSquaresNum(arr) {
    arr=arr.map(function(item){
        return item**2;
    });
    return console.log(arr);
};
getSquaresNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21]);

function getBoolean(arr) {
    for (let i of arr){
        if (typeof(i)=='string'){
        return console.log(true);
        }
    }
    return console.log(false);
  }
getBoolean([true, 1, 2, null, ' ']);


// TASK 6
// - Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// - и возвращает массив значений лежащих в поле age
// function getAges(array) {}
// getAges([
//   { name: "Sergey", age: 33 },
//   { name: "Daria", age: 33 },
// ]); // => [33, 33]
function getAge(arr) {
    for (let i of arr){
        console.log(i.age);
    }
  }
  getAge ([{name: 'Egor', age: 25}, {name: 'Yarik', age: 10}]);


// TASK 7
// - Написать ф-цию, которая принимает массив объектов типа {name: 'Jonh', age: 20}
// - и вторым параметром ключ, по которому надо собрать массив
// ```javascript
// function getAges(array, key) {}
// getAges(
//   [
//     { name: "Sergey", age: 33 },
//     { name: "Daria", age: 33 },
//   ],
//   "name"
// ); // => ['Sergey', 'Daria']
// getAges(
//   [
//     { name: "Sergey", age: 33 },
//     { name: "Daria", age: 33 },
//   ],
//   "age"
// ); // => [33, 33]
function getAge(array, key) {
    let newArray = [];
    for(let i of array) {
      let obj = i;
      for(let objKey in obj) {
        if (objKey==key){
        newArray.push(obj[objKey]) 
        }
      } 
    } 
    return console.log (newArray);
  }
  getAge([{name: 'Egor', age: 25}, {name: 'Yarik', age: 10}], 'name');


// TASK 8
// - Написать ф-цию, которая принимает массив объектов.
// - Значения этих объектов - числа. Вернуть объект с суммами ключей
// function calculate(array) {}
// calculate([
//   { x: 1, z: 2, y: 3 },
//   { x: 10, z: 21, y: 4 },
//   { x: 2, z: 3, y: 4 },
//   { a: 1, b: 2 },
// ]);
// // => { x: 13, z: 26, y: 11, a: 1, b: 2 }
function calculate(arr) {
    let newObj = {};
    for (let obj of arr){
        for (let i in obj) {
          if(newObj[i]==undefined){
              newObj[i] = 0;
          };
            newObj[i]+=obj[i];
      }
    }
    return console.log(newObj);
  }
calculate([
    { x: 2, z: 100, y: 3 },
    { x: 10, z: 21, y: 4 },
    { x: 2, z: 3, y: 4 },
    { a: 1, b: 2 },
]);


// // TASK 9
// - Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
// - Напишите код, который уберет эти дубликаты из созданного массива.
let oldArr = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8];
let newArr = [];
oldArr.filter(function(item, index){
  if(oldArr.indexOf(item)==index){
      newArr.push(item);
    };
});
console.log(newArr);


// TASK 10
// - Напишите код, который подсчитает количество повторяющихся элементов в массиве.
// - И вывести это количество в консоль.
let arrTask_10 = [1, 3, 4, 1, 1, 3, 4, 5];
let result = {};
for (let value of arrTask_10) {
    if (result[value] != undefined) {
        result[value]++;
    } else {
        result[value] = 1;
    }
}
console.log (result);


// TASK 11
// - Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
// - Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
let oldArr_TASK_11 = [1,2,3];
let newArr_TASK_11 = oldArr_TASK_11.reverse();
console.log(newArr_TASK_11);


// TASK 12
// - Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
let arr_TASK_12 = [1, 2, 3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let sumElements = arr_TASK_12.reduce(function (sum, item) {
    return sum + item;
}, 0 );
console.log (sumElements);


// TASK 13
// - Создать массив из 10 чисел. Необходимо создать новый массив, в котором числа будут возведены в квадрат.
// - Например:
//       [1,2,3] -> [1,4,9].
let oldArrTask13 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let newArrTask13 = oldArrTask13.map(function (item) {
    return item ** 2;
});
console.log(newArrTask13);


// TASK 14
// - Создать массив объектов с полями: имя, пол. Разделить этот массив на 2 массива (женский и мужской).
// - Использовать reduce.
let arrTask14 = [{name: 'Egor', gender: 'man'}, {name: 'Alice', gender: 'woman'}, {name: 'Yarik', gender: 'man'}, {name: 'Julia', gender: 'woman'}];
let womanArr = [];
let manArr = [];
arrTask14.reduce(function(cur, item){
  if(item.gender=='woman'){
      womanArr.push(item);
  } else if (item.gender=='man'){
    manArr.push(item);
    }
},0);
console.log(womanArr);
console.log(manArr);


// TASK 15
// - Написать функцию, которая принимает первым аргументом массив,
// - а вторым любое значение, функция должна вернуть индекс если такое значение есть в массиве и -1 если его нет.
// - (indexOf, findIndex не использовать)
function getIndex(arr,num){
    let i=0;
      for(; i<arr.length; i++){
        if(arr[i]==num){
         return console.log(i);
        };
      };
      return console.log(i=-1);
  };
  getIndex(['a', 'b', 1, 2], 0);


// TASK 16
// - Написать функцию, которая принимает массив из чисел, а возвращает отсортированный массив.
// - Для сортировки можно использовать метод sort, но еще лучше будет если попробовать написать свою сортировку.
function getSortArr(arr) {
    arr.sort(function (a, b) {
        return a - b;
    });
    return console.log(arr);
}
getSortArr([5, 2, 8, 11, 9, 27]);


// TASK 17
// - Написать функцию сравнения двух массивов, которая возвращает true или false в зависимости от того,
// - одинаковые у них элементы или нет.
function compareArr(a, b) { 
    let strArr1 = a.join(',');
    let strArr2 = b.join(',');
    return console.log(strArr1 == strArr2);
}
compareArr([1, 2, 3], [1, 2, 4]);

// TASK 18
// - Описание задачи: Напишите функцию, которая разделит массив на части заданного размера и
// - вернет массив элементами которого являются эти части.
// - Пример функции:
//   splitArray([1, 2, 3, 4, 5], 2) => [[1, 2], [3, 4], [5]]
function splitArray(obj, num){ // ЗАДАЧА АНАЛОГИЧНАЯ 2 задаче
    let newArr = new Array(Math.ceil(obj.length/num));
    for (let i = 0; i < newArr.length; i++) {
        newArr[i] = obj.splice(0, num);
    }
    return console.log (newArr);
}
getNewArray([1, 2, 3, 4, 5], 2);


// TASK 19
// - Напишите функцию, которая очищает массив от нежелательных значений,
// - таких как false, undefined, пустые строки, 0, null.
function getCleanArr(arr){
    let newArr=arr.filter(function(item){
        return item != 0 && item != null;
    });
    return console.log(newArr);
  }
getCleanArr([0, 1, null, 2, 3, null, undefined, false, '']);