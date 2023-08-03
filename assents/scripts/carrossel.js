

let posicao = document.getElementsByClassName("posicao")[0]

//  fetch('db_img.json').then((resp) => resp.json()).then((dados)=>console.log(dados)).catch(err=> console.log(err))

let img = {
    carros:[
        {
                src_img:"./assents/imgs/ford/escape_fechado_frente.png",
                name:"Ford Escape"
        },
        
    ]
    
}
console.log(img);

let imgs = ["./assents/imgs/ford/escape_fechado_frente.png","./assents/imgs/maserati/conversivel/granCabrioLevante_vermelho.png","./assents/imgs/mercedes/van_sprinter/sprinter_2015.png"]

function createElement(quantidade = 1){
    for(var i=1; i<= quantidade;i++){
        var itens = document.createElement('div')
        itens.classList.add("itens-carrossel")
        posicao.appendChild(itens)
    }
}
createElement(imgs.length)

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
        carro_destaque.src = imgs[index]

    } else{
        item[index].style.padding = "5px"
        passa()
        item[index].style.padding = "8px"
       
        carro_destaque.src = imgs[index]
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
setInterval(muda, 6000)