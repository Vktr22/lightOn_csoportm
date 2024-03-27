export function listaLetrehoz(){
    const allapotLista= []
    for(let i = 0; i<9; i++){
        const randomSzam = Math.floor(Math.random()*2);
        allapotLista.push(`${randomSzam}`)
    }
    return allapotLista
}

export function szerkezet(lista){
    const mezoELEM = $("#jatekter")
    let mezo = ""
    
    for(let i = 0; i<lista.length; i++){
        if (lista[i] == 1){
            mezo += `<div class= "vilagit"></div>`
        }else{
            mezo += `<div></div>`
        }
        
    }
    mezoELEM.html(mezo)
}