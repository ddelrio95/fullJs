// String Methods
// Three String Methods to stract parts
// slice / substring / substr

let string = 'This is an example of a string'
console.log(string.slice(10, 18))
console.log(string.substring(10, 18))
console.log(string.substr(10, 8))

let fruits = 'Apple, Banana, Kiwi'
console.log(fruits.slice(6, 13))
console.log(fruits.slice(-19, -14))
console.log(fruits.slice(7))
console.log(fruits.slice(-14))
console.log(fruits.substring(6, 13))
console.log(fruits.substr(7))

//charAt(x), Will return the character at the x position within the string
let fruits1 = 'Apple, Banana, Kiwi'
console.log(fruits1.charAt(0))

//charCodeAt(x), Will return the unicode value of the character at position 'x'
let fruits2 = 'Apple, Banana, Kiwi'
console.log(fruits2.charCodeAt(1))

//concat(v1,v2..), Will combines one or more strings into an existing one
let name = 'Hello'
let age = ', this is a combined string'
let both = name.concat(age)
console.log(both)

//fromCharcode(c1,c2), Will return a string created by using specified sequence of unicode values

//indexOf(substrs,[start])
var sentence = 'Hi, my name is Sam'
if (sentence.indexOf('Sam') != -1) {
  console.log('Sam is here')
}

//trim(), Will remove whitespace from both sides of a string
let fruits3 = '     Apple, Banana, Kiwi     '
console.log(fruits3.trim())

//search(), Will search for a spacific value on a string and return its position of the match
let fruits4 = 'Apple, Banana, Kiwi'
console.log(fruits4.search('Kiwi'))

// Number Methods
let x = 123
console.log(x.toString())
console.log(x.split)

let y = ['honda', 'bmw', 'audi']
console.log(y.split)
