let add = document.getElementById('txtlista')
let addbot = document.getElementById('botao')
let ul = document.getElementById('items')
let items = document.getElementsByTagName('li')
let itemBotao = document.getElementsByClassName('remove')

function adicionar() {
    if (add.value.length != 0) {
        let li = document.createElement('li')

        let xBotao = document.createElement('button')
        xBotao.innerHTML = 'X'
        xBotao.className = 'remove'

        li.appendChild(xBotao)

        let texto = document.createTextNode(add.value)
        li.appendChild(texto)
        ul.appendChild(li)
    
        add.value = ''
        buttonevents()
        add.focus()
    } else {
        alert('Você deve escrever um Item para adicioná-lo')
        add.focus()
    }
    
}

function deleteItem() {
    this.parentElement.remove()
}

function buttonevents() {
    for (let i=0; i < itemBotao.length; i++) {
        itemBotao[i].addEventListener('click', deleteItem)
    }
}

addbot.addEventListener('click', adicionar)
buttonevents()

addbot.addEventListener('mouseenter', entrar)
addbot.addEventListener('mousedown', apertar)
addbot.addEventListener('mouseup', soltar)
addbot.addEventListener('mouseout', sair)
add.addEventListener('mouseenter', entrartext)
add.addEventListener('mouseout', sairtext)

function entrartext() {
    add.style.background = '#cbd4a7'
}

function sairtext() {
    add.style.background = '#DBE6B0'
}

function entrar() {
    addbot.style.background = '#cbd4a7'
}

function apertar() {
    addbot.style.background = '#B1BF78'
}

function soltar() {
    addbot.style.background = '#cbd4a7'
}

function sair() {
    addbot.style.background = '#DBE6B0'
}