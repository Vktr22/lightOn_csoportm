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
    esemeny(lista)
}

export function esemeny(lista){
    const mezoElemek = $("#jatekter div");

    mezoElemek.on("click", function(event){
        const targetIndex = mezoElemek.index($(this)); // Az aktuális div indexének meghatározása
        const targetDiv = $(this);

        // Függvény a világító osztály hozzáadására vagy eltávolítására
        function toggleVilagitClass(element) {
            element.toggleClass("vilagit");
        }

        function updateSzamlalo() {
            const vilagitMezokSzama = mezoElemek.filter('.vilagit').length;
            szamlaloElem.text(vilagitMezokSzama);
        }
       
        const szomszedIndexek = [
            [1, 3],     // 0
            [0, 2, 4],     // 1
            [1, 5],       // 2
            [0, 4, 6],     // 3
            [1, 3, 5, 7],  // 4
            [2, 4, 8],    // 5
            [3, 7],        // 6
            [4, 6, 8],   // 7
            [5, 7]      // 8
        ];

        // Átkapcsolás a szomszédos mezőkre
        szomszedIndexek[targetIndex].forEach(szomszedIndex => {
            toggleVilagitClass(mezoElemek.eq(szomszedIndex));
        });

        // A kattintott mezőre vonatkozó átkapcsolás
        toggleVilagitClass(targetDiv);

        lampak()
    });
}