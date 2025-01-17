// var fake=prompt("Число")
// if (fake==10){
//     console.log(true);
// }
// else{
//     console.log(false);
// }

//  !

// let red=prompt("Введите квартиры")
// if (red<=20){
//     console.log("Подьезд-1");
// }
// else if (red<=48){
//     console.log("Подьезд-2");
// }
// else if (red<=90){
//     console.log("Подьезд-3");
// }
// else{
//     console.log("Нет");

// }

// ?

// var a = prompt("Введите число")
// if(a>=0 && a<=5){
//     console.log("true");
// }else{
//     console.log("false");
// }

// !

// const hour = prompt("Кундун убактысы");
// const name = "Samira";
// if (hour >= 6 && hour <= 12) {
//   console.log("Кутман таң!");
// } else if (hour >= 13 && hour <= 17) {
//   console.log("Кутмандуу күн");
// } else if (hour >= 18 && hour <= 24) {
//   console.log("Кутмандуу кеч " + name);
// }

// ?

// let age=prompt("age")
// if(age<=6 || age>=65){
//     console.log("Арзандатуу");
// }else if(age>6 || age<65){
//     console.log("Арзандатуу жок");
// }

// !

let play1 = prompt("Выберите Алишер");
let play2 = prompt("Выберите Самира");
if (
  (play1 === "камень" && play2 === "ножница") ||
  (play1 === "ножница" && play2 === "бумага") ||
  (play1 === "бумага" && play2 === "камень")
) {
  console.log("выиграл игрок Алишер");
} else if (
  (play2 === "камень" && play1 === "ножница") ||
  (play2 === "ножница" && play1 === "бумага") ||
  (play2 === "бумага" && play1 === "камень")
) {
  console.log("выиграл игрок Самира");
} else if (
  (play2 === "камень" && play1 === "камень") ||
  (play2 === "ножница" && play1 === "ножница") ||
  (play2 === "бумага" && play1 === "бумага")
) {
  console.log("ничья");
} else {
  console.log("Вы походу не умеете играть");
}
