

let posicao = document.getElementsByClassName("posicao")[0]

let texto_carro_destacado = document.querySelector(".texto_carro_destacado")

//  fetch('db_img.json').then((resp) => resp.json()).then((dados)=>console.log(dados)).catch(err=> console.log(err))

let img = {
    carros:[
        {
                src_img:"./assents/imgs/ford/escape_fechado_frente.png",
                nome:"Escape",
                marca:"Ford"
        },
        {
                src_img:"./assents/imgs/maserati/conversivel/granCabrioLevante_vermelho.png",
                nome:"Gran Cabrio Levante",
                marca:"Maserati"
        },
        {
                src_img:"./assents/imgs/mercedes/van_sprinter/sprinter_2015.png",
                nome:"Sprinter",
                marca:"Mercedes"
        },
      
        
    ]
    
}




function createElement(quantidade = 1){
    for(var i=1; i<= quantidade;i++){
        var itens = document.createElement('div')
        itens.classList.add("itens-carrossel")
        posicao.appendChild(itens)
    }
}
createElement(img.carros.length)

let item = document.getElementsByClassName("itens-carrossel")
var index = 0
var lagura = window.innerWidth

let carro_destaque = document.querySelector(".carro_destaque")


// primeira imagem
if(lagura > 1024){
    item[index].style. background = "var( --mazarine-blue)"
    item[index].style.padding = "15px"

}else{
    item[index].style. background = "var( --mazarine-blue)"
    item[index].style.padding = "8px"
}

// largura
window.addEventListener('resize',()=>{
   lagura =  window.innerWidth
})


// cria elementos



// tudo para passar o elemento

function muda() {
    item[index].style. background = "var(--lynx-white)"
    
    if(lagura > 1024){
        item[index].style.padding = "10px"
        passa()
        item[index].style.padding = "15px";
        textosNovos()
        carro_destaque.src = img.carros[index].src_img

    } else{
        item[index].style.padding = "5px"
        passa()
        item[index].style.padding = "8px"
        textosNovos()
        carro_destaque.src = img.carros[index].src_img
    }
    

}

function passa(frente = true){
    if(frente){
        index++

        if(index>=item.length){
            index = 0
        }
        item[index].style. background = "var( --mazarine-blue)"
        
    }else{
        index--
    
        if(index<0){
            index = item.length -1
        }
        item[index].style. background = "var( --mazarine-blue)"
       
    }
}



function textosNovos(){
    while(texto_carro_destacado.firstChild){
        texto_carro_destacado.removeChild(texto_carro_destacado.firstChild )
    }

    
    
    // console.log(texto_carro_destacado);
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    h2.textContent = img.carros[index].marca
    h1.textContent =  img.carros[index].nome
    texto_carro_destacado.appendChild(h2)
    texto_carro_destacado.appendChild(h1)
}

setInterval(muda, 6000)