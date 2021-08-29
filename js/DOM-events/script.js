// ! Task 1

const list = document.getElementById('list')

// =================== Task 1 v1 ===================
const btn1 = document.getElementById('btn1')
btn1.addEventListener('click', () => doTask1v1())

function doTask1v1() {
    const first = list.firstElementChild.textContent
    const second = document.querySelector('#list li:nth-child(2)').textContent
    const third = document.querySelector('#list li:nth-child(3)').textContent
    const fourth = document.querySelector('#list li:nth-child(4)').textContent
    const last = list.lastElementChild.textContent

    let str1 = `Task 1 v1: ${first}, ${last}, ${second}, ${fourth}, ${third}`
    btn2.insertAdjacentHTML('afterend', `<p>${str1}</p>`)
}

// =================== Task 1 v2 ===================
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', () => doTask1v2())

function doTask1v2() {
    const listItems = document.querySelectorAll('#list li')

    const str2 = `Task 1 v2: ${listItems[0].textContent}, ${listItems[4].textContent}, ${listItems[1].textContent}, 
    ${listItems[3].textContent}, ${listItems[2].textContent}`
    btn2.insertAdjacentHTML('afterend', `<p>${str2}</p>`)
}

// =================== Task 2 ===================
const h1 = document.getElementsByTagName('h1')
h1[0].style.backgroundColor = 'lightgreen'

const myDiv = document.querySelectorAll('#myDiv p')
console.log(myDiv)

myDiv[0].style.fontWeight = 'bold'
myDiv[1].style.color = 'red'
myDiv[2].style.textDecoration = 'underline'
myDiv[3].style.fontStyle = 'italic'

const myList = document.getElementById('myList')
myList.style.display = 'flex'
for(let el of myList.children){
    el.style.listStyle = 'none'
}

const span = document.getElementsByTagName('span')
console.log(span)
span[0].style.opacity = '0'

// =================== Task 3 ===================
const btnLive = document.getElementById('btn_live')
btnLive.addEventListener('click', ()=>{
    btnLive.insertAdjacentHTML('afterend', `<div>I was pressed!</div>`)
})
btnLive.addEventListener('mouseenter', ()=>{
    btnLive.insertAdjacentHTML('afterend', `<div>Mouse on me!</div>`)
})
btnLive.addEventListener('mouseleave', ()=>{
    btnLive.insertAdjacentHTML('afterend', `<div>Mouse is not on me!</div>`)
})