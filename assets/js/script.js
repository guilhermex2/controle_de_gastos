// Recupera dados do localStorage ou inicializa com valores padrão
let list = JSON.parse(localStorage.getItem('key')) || []
let saldo = parseFloat(localStorage.getItem('saldo')) || 0
let saidas = parseFloat(localStorage.getItem('saidas')) || 0

// Seletores principais
const modal = document.querySelector('.modalDespesa')
const modalAddSaldo = document.querySelector('.modalAdd')
const overlay = document.querySelector('.overlay')

// Seletores da interface
const saldoArea = document.querySelector('.positivo span')
const saidasArea = document.querySelector('.negativo span')
const nomeArea = document.querySelector('.nome')
const valorArea = document.querySelector('.valor')

// Atualiza a interface com os valores atuais
const atualizaInterface = () => {
    nomeArea.innerHTML = list.map(item => `${item.nome}`).join('<br>').toUpperCase()
    valorArea.innerHTML = list.map(item => `R$ ${item.preco.toFixed(2)}`).join('<br>')
    saldoArea.innerHTML = `R$${saldo.toFixed(2)}`
    saidasArea.innerHTML = `- R$${saidas.toFixed(2)}`
}

// Adiciona uma nova despesa
const addDespesa = () => {
    modal.showModal()
    overlay.classList.add('active')
}

// Salva uma despesa e atualiza os valores
const salvaDespesa = () => {
    const nomeDespesa = document.querySelector('.input-despesa').value
    const valorDespesa = parseFloat(document.querySelector('.input-valor').value)

    if (nomeDespesa && !isNaN(valorDespesa)) {
        list.push({ nome: nomeDespesa, preco: valorDespesa })
        saidas += valorDespesa
        saldo -= valorDespesa

        localStorage.setItem('key', JSON.stringify(list))
        localStorage.setItem('saldo', saldo)
        localStorage.setItem('saidas', saidas)

        atualizaInterface()

        if (saldo < 0) {
            alert('ATENÇÃO! Seu saldo está negativo.')
        }
    } else {
        alert('Por favor, preencha os campos corretamente!')
    }

    document.querySelector('.input-despesa').value = ''
    document.querySelector('.input-valor').value = ''
    modal.close()
    overlay.classList.remove('active')
}

// Exibe o modal para adicionar saldo
const addSaldoModal = () => {
    overlay.classList.add('active')
    modalAddSaldo.showModal()
}

// Adiciona saldo e atualiza a interface
const addSaldo = () => {
    const saldoInput = parseFloat(document.querySelector('.input-add-saldo').value)

    if (!isNaN(saldoInput) && saldoInput > 0) {
        saldo += saldoInput

        localStorage.setItem('saldo', saldo)
        atualizaInterface()

        document.querySelector('.input-add-saldo').value = ''
        modalAddSaldo.close()
        overlay.classList.remove('active')
    } else {
        alert('Por favor, insira um valor válido para o saldo!')
    }
}

// Limpa o localStorage e atualiza a interface
const limpaLocalStorage = () => {
    localStorage.clear()
    alert('Atualize a página para completar a limpeza dos dados.')
    list = []
    saldo = 0
    saidas = 0
    atualizaInterface()
}

// Eventos de interação
document.querySelector('.btnClear').addEventListener('click', limpaLocalStorage)
document.querySelector('.btnAddSaldo').addEventListener('click', addSaldo)
document.querySelector('.add-saldo').addEventListener('click', addSaldoModal)
document.querySelector('.btnSave').addEventListener('click', salvaDespesa)
document.querySelector('.add-despesa').addEventListener('click', addDespesa)

// Inicializa a interface
atualizaInterface()
