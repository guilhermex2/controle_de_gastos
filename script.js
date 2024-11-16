let list = []
let modal = document.querySelector('dialog')

const addDespesa = () => {
    modal.showModal()
}

const despesaDiv = () => {
    let despesa = document.querySelector('.despesa')
    let nomeTest = document.querySelector('.nome')
    let valorDiv = document.querySelector('.valor')
    let nomeDespesa = document.querySelector('.input-despesa').value
    let valorDespesa = document.querySelector('.input-valor').value

    if(nomeDespesa){
        list.push({nome:nomeDespesa, preco:valorDespesa})
        nomeTest.innerHTML = list.map(item => `${item.nome}`).join('<br>')
        valorDiv.innerHTML = list.map(item => `${item.preco}`).join('<br>')
    }
    modal.close()
}

let btnSave = document.querySelector('.btnSave').addEventListener('click', despesaDiv)
let btnAdd = document.querySelector('.add-despesa').addEventListener('click', addDespesa)
