// const button = document.querySelector('button');

// button.onclick = () => {
//     // button.innerText = "something"
//     // button.innerHTML = '<b>something</b>else'
//     const h1 = document.createElement('h2')
//     h1.innerText = "This is magic"

//     // document.body.appendChild(h1)
//     // button.appendChild(h1)
//     button.append(h1)
//     // button.prepend(h1)
//     // button.prepend(h1, 'Hello') 

//     //to delete an element
//     setTimeout(() => h1.remove(), 1000)
//     setTimeout(() => button.remove(), 2000)
// }

//NEW version of appendChild is append
// appendChild only works on HTML nodes whereas append also supports text nodes
//similar to append we have prepend which makes the new element first child


//add event listner

// button.addEventListener('click', clickHandler, { once: true }, true)
// //flag once as true to automatically deregister an event listner after one click
// function clickHandler() {
//     // alert('I am fired!')
//     // button.innerText = 'Your one time random number is: ' + Math.round(Math.random() * 100)
//     alert('From button')
// }

//event bubbling
/*
Event bubbling is a type of event propagation where the event first triggers on the innermost target element,
 and then successively triggers on the ancestors (parents) of the target element in the same nesting hierarchy
 till it reaches the outermost DOM element or document object (Provided the handler is initialized).
*/

const div = document.getElementById('something')

// div.addEventListener('click', clickHandler2, true)
// document.body.addEventListener('click', clickHandler3, true)
// document.querySelector('html').addEventListener('click', clickHandler4, true)

// function clickHandler2() {
//     alert('from div')
// }
// function clickHandler3() {
//     alert('from body')
// }
// function clickHandler4() {
//     alert('from html')
// }

//event capturing => opposite order of event bubbling
//using the third argument of addeventlistner, which is an boolean,
//where true means event capturing and false means event bubbling
//by default its false


//example
// button.addEventListener('click', hideMe)
// div.addEventListener('click', showMe)

/*
it wont work in normal event bubbling mode as the showMe function will also execute as soon as hideMe is executed
either convert in event capturing
or stop the event propagation
*/

// function hideMe(event) {
//     // event.stopPropagation()
//     button.style.display = 'none'
// }

// function showMe() {
//     button.style.display = 'block'
// }

//one more way to set event capturing mode is to flag capture as true
// button.addEventListener('click', hideMe, { capture: true })
// div.addEventListener('click', showMe, { capture: true })


//remove eventlistner
const button = document.querySelector('#b1');
const button2 = document.querySelector('#b2');
const input = document.querySelector('input')
const h1 = document.querySelector('h1')
const a = document.querySelector('a')

button.addEventListener('click', changeText)
button2.addEventListener('click', stopRandom)
input.addEventListener('keydown', keyHandler)
a.addEventListener('click', (event)=>{
    event.preventDefault()
    alert('you got trapped')
})


//event propagation stops the event from going up
//event prevent default stops the event from going down i.e. into the child, browser etc
function keyHandler(event){
    event.preventDefault()
    h1.innerText = Math.random()
}

function changeText() {
    button.innerText = Math.random()
}
function stopRandom() {
    button.removeEventListener('click', changeText)
}
//the capturing or event bubbling value has to be same in removeEventListner
//can be true or false but has to be same




