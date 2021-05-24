//TASK 1
// Создайте массив с элементами 'a', 'b', 'c'. Выведите на экран каждый
// из этих элементов.
let arr_TASK_1 = ['a', 'b', 'c'];
console.log(arr_TASK_1[0], arr_TASK_1[1], arr_TASK_1[2]);


//TASK 2
// Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого
// элемента число 1, вместо второго - 2, вместо третьего - 3.
let arr_TASK_2 = ['a', 'b', 'c'];
arr_TASK_2[0] = 1;
arr_TASK_2[1] = 2;
arr_TASK_2[2] = 3;
console.log(arr_TASK_2);


//TASK 3
// let arr = [1, 2, 3];
// Добавьте ему в конец элементы 4 и 5.
// Удалите первый и второй элемент массива
let arr_TASK_3 = [1, 2, 3];
arr_TASK_3.push(4, 5);
arr_TASK_3.splice(0, 2);
console.log(arr_TASK_3);


//TASK 4
// Фильтр юзеров
// Создать массив объектов для юзеров.
// {name: ‘John’, age: 18},
// {name: ‘Andrew’, age: 12},
// {name: ‘Tom’, age: 25},
// {...}
// Написать скрипт, который будет на выходе отдавать два массива. Первый с
// совершеннолетними пользователями, второй с несовершеннолетними.
//ТАКАЯ ЗАДАЧА ЕСТЬ В HOMEWORK. Решил немного разными способами.
let user_TASK_4 = [{ name: 'John', age: 18 }, { name: 'Andrew', age: 12 }, { name: 'Tom', age: 25 }, { name: 'Tom', age: 1 } ];
let userMore18 = [];
let userYounger18 = []
user_TASK_4.filter(function (item) {
    if(item.age>=18){
      userMore18.push(item);
    } else{
      userYounger18.push(item)
    }
});
console.log(userMore18);
console.log(userYounger18);


//TASK 5
// Суммирование чисел в массиве
// Прим. есть массив чисел
// var numbers = [10, 25, 100];
// Hа выходе должны получить переменную, в которой будет содержаться сумма этих чисел (135)
// Расширить функционал, так, чтобы скрипт игнорировал другие типы данных.
let numbers = [10, 25, 100, 100,'sds',true,null];
let sumNumbers = 0;
for (let i=0; i<numbers.length; i++){
  if(typeof(numbers[i])!='number'){
    numbers[i]=0
    };
    sumNumbers += numbers[i];
}
console.log(sumNumbers);