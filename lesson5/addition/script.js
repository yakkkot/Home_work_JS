// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min=(a,b,c)=>{
    let min;
    if(a<b&&a<c)min=a;
    else if(b<a&&b<c)min=b;
    else min=c;
    return min;
}
console.log('min=',min(1,2,3));

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const max=(a,b,c)=>{
    let max;
    if(a>b&&a>c)max=a;
    else if(b>a&&b>c)max=b;
    else max=c;
    return max;
}
console.log('max=',max(1,2,3));

// - створити функцію яка повертає найбільше число з масиву



const max_value=(arr)=>Math.max(...arr);
console.log('max value from array is',max_value([1,2,3,4,5,6,7,8,9,10]))

// - створити функцію яка повертає найменьше число з масиву
const min_value=(arr)=>Math.min(...arr);
console.log('min value from array is',min_value([1,2,3,4,5,6,7,8,9,10]))

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
//                                                        Вже було

// - Дано натуральное число n. Выведите все числа от 1 до n.
const printf=(n)=>{
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
printf(3);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно,
// в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const funFilter=(a,b)=>{
        if(a>b){
            for (;a>=b;b++) {
                console.log(b);
            }
        }else if(a<b){
            for (;b>=a;b--) {
                console.log(b);
            }
        }else {
            console.log(a,b);
            return -1;
        }
}
funFilter(1,10);

//
// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]

const change=(arr,i)=>{
    if(i>=0&&i<arr.length){
    let temp=arr[i+1];
    arr[i+1]=arr[i];
    arr[i]=temp;
    }
    console.log(arr);
}
change([9,8,0,4], 0)
change([9,8,0,4], 1)
change([9,8,0,4], 2)


//
// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]