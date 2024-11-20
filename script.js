let list = []
let saldo = 0
let saidas = 0
let modal = document.querySelector('.modalDespesa')
let modalAddSaldo = document.querySelector('.modalAdd')
JSON.parse(localStorage.getItem('list'))

const addDespesa = () => {
    modal.showModal()
    overlay.classList.add('active')
}

let saldoArea = document.querySelector('.positivo span')
let saidasArea = document.querySelector('.negativo span')
saldoArea.innerHTML = `R$${saldo.toFixed(2)}`
saidasArea.innerHTML = `R$${saidas.toFixed(2)}`

const despesaDiv = () => {
    let despesa = document.querySelector('.despesa')
    let nomeTest = document.querySelector('.nome')
    let valorDiv = document.querySelector('.valor')
    let nomeDespesa = document.querySelector('.input-despesa').value
    let valorDespesa = parseFloat(document.querySelector('.input-valor').value)
    let saidasArea = document.querySelector('.negativo span')
    

    if(nomeDespesa && !isNaN(valorDespesa)){
        list.push({nome:nomeDespesa, preco:valorDespesa})
        nomeTest.innerHTML = list.map(item => `${item.nome}`).join('<br>').toUpperCase()
        valorDiv.innerHTML = list.map(item => `R$ ${item.preco.toFixed(2)}`).join('<br>')
        saidas += valorDespesa
        saldo -= valorDespesa
        saldoArea.innerHTML =`R$${saldo.toFixed(2)}`
        saidasArea.innerHTML = `- R$${saidas.toFixed(2)}`
        localStorage.setItem('key', JSON.stringify(list))
    } else {
        alert('Por favor, preencha os campos corretamente!');
    }
    if(saldo < 0){
        alert('ATENÇÃO! Seu saldo está negativo.')     
    }
    document.querySelector('.input-despesa').value = ''
    document.querySelector('.input-valor').value = ''
    modal.close()
    overlay.classList.remove('active')
}

const addSaldoModal = () => {
    overlay.classList.add('active')
    modalAddSaldo.showModal()
}

const addSaldo = () => {
    let saldoInput = parseFloat(document.querySelector('.input-add-saldo').value)
    saldo += saldoInput
    let saldoArea = document.querySelector('.positivo span')
    saldoArea.innerHTML = `R$${saldo}`
    document.querySelector('.input-add-saldo').value = ''
    modalAddSaldo.close()
    overlay.classList.remove('active')
}
let overlay = document.querySelector('.overlay');
let btnAdicionar = document.querySelector('.btnAddSaldo').addEventListener('click', addSaldo)
let btnAddSaldo = document.querySelector('.add-saldo').addEventListener('click', addSaldoModal)
let btnSave = document.querySelector('.btnSave').addEventListener('click', despesaDiv)
let btnAdd = document.querySelector('.add-despesa').addEventListener('click', addDespesa)