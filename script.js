
let array = [
    1, 2, 3, 4, 5
];
for( key in array){
    console.log(array[key])
};

//2
//Дан массив с элементами 2, 5, 9, 15, 0, 4. С помощью цикла for и оператора if выведите в консоль столбец тех элементов массива, которые больше 3-х, но меньше 10.+

const arr = [2, 5, 9, 15, 0, 4];
for (let i = 0; i < arr.length; i++ ){
    if (arr[i] > 3 && arr[i] < 10){
        console.log(arr[i]);
    };
};


//3
//Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5.

const chrs = ['1', '2', '5'],
  arrr = [10, 20, 30, 50, 235, 3000]
let result = []

arrr.forEach(e => chrs.includes(e.toString()[0]) ? result.push(e) : undefined)

console.log(result)

//4
// Дан массив [1,2,45,"hello", 233, 100, "world", 45]. Переберите массив так чтоб у вас в консоли были только числа
const newArr = [1,2,45,"hello", 233, 100, "world", 45];
for (let i = 0; i < newArr.length; i++ ){
    if(typeof newArr[i] === Number){
        console.log(newArr[i])
    };
}

//5
//Составьте массив дней недели. С помощью цикла выведите выходные дни в консоль.
const weeks = ['mondey','teusdey','thursday','wensday','friday','saturday','sunday',];
for (let i = 0; i < weeks.length; i++){
    if (weeks[i] == 'saturday' || weeks[i] == 'sunday'){
        console.log(weeks[i])
    }
}
