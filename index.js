// Write your solution here!
let cats = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendCat(name){
    cats.push(name)
}

function destructivelyPrependCat(name){
    cats.unshift(name)
}

function destructivelyRemoveLastCat(){
    cats.pop()
}

function destructivelyRemoveFirstCat(){
    cats.shift()
}

function appendCat(name){
    let newArr = [...cats, name]
    return newArr
}

function prependCat(name){
    let newArr = [name, ...cats]
    return newArr
}

function removeLastCat(){
    return cats.slice(0,2)
}

function removeFirstCat(){
    return cats.slice (1)
}