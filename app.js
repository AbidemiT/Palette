// Example of an XHR request by Flaviscopes
// const xhr = new XMLHttpRequest()
// xhr.onreadystatechange = () => {
//     if (xhr.readyState === 4) {
//         xhr.status === 200 ? console.log(xhr.responseText) : console.log( 'error' )
//     }
// }
// xhr.open('GET', 'https://abidemit.github.io')
// xhr.send()

// Using Fetch

// fetch('https://abidemit.github.io/file.json')
// .then(response => {
//     console.log( response.headers.get('Content-Type') )
//     console.log( response.headers.get('h1') )
// })

// let arr = ['Dog', 'Car', 'Jeep', 'Benz']

// arr.forEach((element, index)=> {
//     console.log(element); 
// })

// const maths = () => {
//     console.log(Math.floor(Math.random()*100)+1);   
// }
//  maths()

// const maths = (num) => {
//   let par =  parseFloat(num)
//  console.log(Math.round(par));
// } 
// maths(4.563)

// var x = 1
//  {
//     var x = 2
//  }
//  console.log(x);


// false
// var fal = false.toString()
// console.log(typeof (fal));

// let places = ['Warri', 'Abuja', 'Lagos', 'Ibadan', 'Kano']
// let [whereIWork, whereILive] = places
// console.log(whereILive);

// var sum = 0;
// for (var i = 1; i <= 250; i++){
//     if (i % 9 == 0){
//         sum = sum + i;
//     }
// }
// console.log(sum);


// const fill = document.querySelector('.fill')
// const empties = document.querySelectorAll('.empty')

//Fill listeners
// let but = document.getElementById('sub') //getting the button element with id
// but.addEventListener('click', checkFor) // listening for click on the button element

// function checkFor(e) {
//     let x = document.querySelector("#check").value;
//     //
//     console.log(x);
//     e.preventDefault(x)
// }

// const arr = [6, 89, 3, 45]
// const maximus = Math.max(...arr)
// console.log(maximus);

// const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
// let arr2;
// (function() {
//   "use strict";
//   arr2 = [...arr1]; // change this line
// })();
// console.log(arr2);

// const AVG_TEMPERATURES = {
//     today: 77.5,
//     tomorrow: 79
//   };

//   function getTempOfTmrw(avgTemperatures) {
//     "use strict";
//     // change code below this line
//     const {tomorrow:tempOfTomorrow} = avgTemperatures; // change this line
//     // change code above this line
//     return tempOfTomorrow;
//   }

//   console.log(getTempOfTmrw(AVG_TEMPERATURES));

// const LOCAL_FORECAST = {
//     today: { min: 72, max: 83 },
//     tomorrow: { min: 73.3, max: 84.6 }
//   };

//   function getMaxOfTmrw(forecast) {
//     "use strict";
//     // change code below this line
//     const {tomorrow : {max: maxOfTomorrow}} = forecast; // change this line
//     // change code above this line
//     return maxOfTomorrow;
//   }

//   console.log(getMaxOfTmrw(LOCAL_FORECAST)); // should be 84.6

// function Person(first, last, age, gender, interests) {
//   this.name = {
//     'first': first,
//     'last': last
//   };
//   this.age = age;
//   this.gender = gender;
//   this.interests = interests;
//   var pronoun;
//   if (this.gender === 'male' || this.gender === 'Male' || this.gender === 'M' || this.gender === 'm') {
//     pronoun = 'he likes ';
//   } else if (this.gender === 'female' || this.gender === 'Female' || this.gender === 'F' || this.gender === 'F') {
//     pronoun = 'she likes '
//   } else {
//     pronoun = 'They likes '
//   }



//   this.bio = function () {
//     console.log(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + pronoun + this.interests[0] + ' and ' + this.interests[1] + '.');
//   };

//   this.greeting = function () {
//     console.log('Hi! I\'m ' + this.name.first + '.');
//   };
// }

// var person1 = new Person('Abidemi', 'Tiamiyu', 23, 'Male', ['Coding', 'Playing Video Games'])

// console.log(person1['age']);
// console.log(person1['interests'][0]);
// person1.bio()
// person1.greeting()
// person1['workPlace'] = 'Edulight Consulting'


// console.log(person1.workPlace);

let button = document.querySelectorAll('button')

button.forEach(element => {
  element.addEventListener('click', () => {
    document.body.style.backgroundColor = element.classList[1]
  })
});
