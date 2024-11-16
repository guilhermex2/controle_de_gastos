let list = []
let modal = document.querySelector('dialog')
let saldo = 1000
let saidas = 0

const addDespesa = () => {
    modal.showModal()
}

let saldoArea = document.querySelector('.positivo span')
saldoArea.innerHTML = `R$${saldo.toFixed(2)}`

const despesaDiv = () => {
    let despesa = document.querySelector('.despesa')
    let nomeTest = document.querySelector('.nome')
    let valorDiv = document.querySelector('.valor')
    let nomeDespesa = document.querySelector('.input-despesa').value
    let valorDespesa = parseFloat(document.querySelector('.input-valor').value)
    let saidasArea = document.querySelector('.negativo span')
    

    if(nomeDespesa){
        list.push({nome:nomeDespesa, preco:valorDespesa})
        nomeTest.innerHTML = list.map(item => `${item.nome}`).join('<br>')
        valorDiv.innerHTML = list.map(item => `${item.preco.toFixed(2)}`).join('<br>')
        saidas += valorDespesa
        saldo -= valorDespesa
        saldoArea.innerHTML =`R$${saldo.toFixed(2)}`
        saidasArea.innerHTML = `- R$${saidas.toFixed(2)}`
    }
    if(saldo < 0){
        alert('ATENÇÃO! Seu saldo está negativo.')
    }
    modal.close()
}

let btnSave = document.querySelector('.btnSave').addEventListener('click', despesaDiv)
let btnAdd = document.querySelector('.add-despesa').addEventListener('click', addDespesa)
