const form = document.getElementById('form')
const name = document.querySelector('#name')
const family = document.getElementById('family')
const number = document.getElementById('number')
const text = document.getElementById('text')

const handleForm = (e) => {
    e.preventDefault()

    // console.log(name.value)
    // console.log(family.value)
    // console.log(number.value)
    // alert('complete')
   
    // const node = document.createElement('p');
    // const textnode = document.createTextNode(` ${name.value}`);
    // node.appendChild(textnode);
    // document.getElementById("text").appendChild(node);

    document.getElementById("text").innerHTML =(`dear ${name.value} form is submitted`)
}

form.addEventListener('submit', handleForm)