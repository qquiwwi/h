const form = document.querySelector("#formulario");
const inputs = document.querySelectorAll("input");
const button = document.querySelector("#button");
const lista = document.querySelector("#lista");

inputs[0].addEventListener('input', () => button.disabled = inputs[0].value.trim() === ''|| inputs[1].value.trim() === '')
inputs[1].addEventListener('input', () => button.disabled = inputs[0].value.trim() === ''|| inputs[1].value.trim() === '')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(Array.from(lista.children).some(li => li.childNodes[0].innerText === inputs[0].value || li.childNodes[1].innerText === inputs[1].value)){
        alert('Nome e/ou email já adicionados à lista de contatos')
        return
    }
    
    const li = document.createElement('li')

    const spanNome = document.createElement('span')
    spanNome.innerText = inputs[0].value
    spanNome.classList.add('nome')

    const spanEmail = document.createElement('span')
    spanEmail.innerText = inputs[1].value
    spanEmail.classList.add('email')

    li.append(spanNome, spanEmail)
    lista.appendChild(li)

    inputs.forEach(li => li.value = '')
    inputs[0].focus()
})