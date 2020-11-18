// -- створити об'єкт (не меньше 5ти властивостей) який описує
// - собаку
// - людину
// - автомобіль
// - квартиру
// - книгу
//

// let obj1 = {
//     dog: {
//         breed of dog: 'doberman',
//         gender: 'girl',
//         name: 'Nayda',
//         age: 1,
//         weight: 30,
//     },
//     person: {
//         name: 'Nastya',
//         age: 19,
//         gender: 'female',
//         occupation: 'student',
//         skills: 'Java', 'Javascript'
//     },
//     car: {
//         model: 'Lamborghini',
//         color: 'white',
//         year: 2018,
//        comfortable:true
//     },
//     apartment: {
//         location: 'center',
//         room: 4,
//         floor: 3,
//         price: 200000,
//         renovation: true
//     },
//     book: {
//         autor: 'Mark Manson',
//         title: 'The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life',
//         year: 2016,
//         price: 200,
//         pages: 300
//     }
// }

//********************************************************************//
// -- Створити масив та вивести його в консоль:
//  - з 5 собак
// - 3 5 людей
// - з 5 автомобілів

// let arr = [
//     {breed: 'doberman', name: 'Nayda', gemder: 'girl'},
//     {breed: 'buldog', name: 'Muhtar', gemder: 'boy'},
//     {breed: 'haski', name: 'Betty', gemder: 'girl'},
//     {breed: 'taksa', name: 'Vasya', gemder: 'boy'},
//     {breed: 'labrador', name: 'Nice', gemder: 'girl'},
//     {name: 'Nastya', age: 19, gemder: 'female'},
//     {name: 'Sonya', age: 15, gemder: 'female'},
//     {name: 'Sasha', age: 18, gemder: 'male'},
//     {name: 'Esya', age: 20, gemder: 'female'},
//     {name: 'Dima', age: 18, gemder: 'male'},
//     {model: 'Lamborghini', color: 'white', year: 2018},
//     {model: 'Volkswagen', color: 'blue', year: 2017},
//     {model: 'BMW', color: 'black', year: 2005},
//     {model: 'Renault', color: 'silver', year: 2020},
//     {model: 'Nissan', color: 'black', year: 2001},
// ];
// console.log(arr)



//**************************************************************//

//
// -- створити об'єкт (не меньше 5ти властивостей) який описує, одна з властивостей обов'язково повинна бути об'єктом,ще одна - масивом
// - будинок
// - водій
// - іграшку
// - стіл
// - сумка
//
//
// let obj = {
//     house: {
//         floor: 3,
//         rooms: ['kitchen', 'bathroom', 'bedroom', 'balcony'],
//         renovation: true,
//         address: {
//             country: 'Germany',
//             city: 'Hamburg',
//             street: 'Lubinska 10'
//         },
//         price: 19000
//     },
//
//     driver: {
//         name: Vasya,
//         experience: 5,
//         categoryDriversLicense: ['A','C','D'],
//         car: {
//             model: 'BMW',
//             color: 'black',
//             carNumber: "ВС 1056 ТВ",
//         }
//     },
//
//     toy: {
//         mane: 'Barbie',
//         forAge: '0+',
//         country: 'China',
//         color: ['beige'],
//         set: {
//             hair color: 'brown',
//             accessories: ['bags', 'comb']
//         }
//     },
//
//     table: {
//         size: {
//             height: 2,
//             width: 100,
//             length: 5,
//         },
//         color: 'black',
//         material: ['wood', 'metal', 'marble'],
//         price: 12000,
//         delivery: false
//     },
//
//     bag: {
//         size: {
//             height: 50,
//             width: 20,
//             length: 40
//         },
//         color: 'white',
//         brend: 'Gucci',
//         price: 1500,
//         composition: ['leather', 'textile', 'metal']
//     }
// }


//****************************************************//
//
// Дан массив:
//
//
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// //
// //
// // - звернутися в відповідну ячейку масиву і відповідний параметр об'єкта і вивести в консольх наступне
// // - статус Андрія
//
// console.log(users[7].status);
//
// // - статус Максима
//
// console.log(users[4].status, users[10].status);
//
// // - ім'я передостаннього об'єкту
//
// console.log(users[9].name);
//
// // - ім'я третього об'єкта
//
// console.log(users[2].name);
//
// // - вік Олега
//
// console.log(users[6].age);
//
// // - вік Олі
//
// console.log(users[3].age, users[9].age);
//
// // - вік + ім'я 5го об'єкта
//
// console.log(users[4].name, users[4].age);
//
// // - вік + сатус Анни
//
// console.log(users[5].age, users[5].status);
