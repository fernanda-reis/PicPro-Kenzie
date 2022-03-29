const listaOpcoes = document.querySelector('.secaoDetalhesConta_opcoesTransacoes')
console.log(listaOpcoes)

listaOpcoes.addEventListener("click", (event)=>{
    const element = event.target
    
    if(element.tagName == 'LI'){
        const id = element.id

        const secao = document.querySelector(`div[data-id="${id}"]`)

        removeShow()
        
        secao.classList.add('show')

    }
})

function removeShow(){
    const divs = document.querySelectorAll('.secaoTransacao .container div')
    console.log(divs)
    for(let i = 0; i < divs.length; i++){
        divs[i].classList.remove('show')
    }
}
