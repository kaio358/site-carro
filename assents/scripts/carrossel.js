let item = document.getElementsByClassName("itens-carrossel")
var index = 0
item[index].style. background = "var( --mazarine-blue)"
item[index].style.padding = "15px"
function muda(frente =true) {
    console.log("funciona ?"+ index);
    item[index].style. background = "var(--lynx-white)"
    item[index].style.padding = "10px"
    if(frente){
        index++

        if(index>2){
            index = 0
        }
        item[index].style. background = "var( --mazarine-blue)"
        item[index].style.padding = "15px"
    }else{
        index--
    
        if(index<0){
            index = 2
        }
        item[index].style. background = "var( --mazarine-blue)"
        item[index].style.padding = "15px"
    }
        

}
setInterval(muda, 6000)