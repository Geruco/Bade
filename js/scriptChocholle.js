window.addEventListener("load", function(){
    
    var cartePassee = [];
    var jeuDeCarteAutiliser = cartes;
    
    tirerCarte();
    
    document.querySelector(".jeu").addEventListener("click", function(event){
        if(jeuDeCarteAutiliser.length>0){
            tirerCarte();
        }
        else{
            finDePartie();
        }
    })
    
    
    function tirerCarte(){
        let aleatoire = entierAleatoire(jeuDeCarteAutiliser.length-1);
        let carte = jeuDeCarteAutiliser[aleatoire];
        console.log("nb : ", aleatoire, " carte : ", carte);
        
        document.querySelector(".regle").innerHTML = reglesChocholle[carte.carte];
        let src = "img/cartes/"+carte.carte+carte.couleur+".png";
        document.querySelector(".imageCarte").setAttribute("style", "background-image: url("+src+");");
        
        if(carte.carte == "Roi"){
            let nbRoi = parseInt(document.querySelector(".nbRoi").innerHTML);
            nbRoi++;
            document.querySelector(".nbRoi").innerHTML = nbRoi;
            
            if(nbRoi == 4){
                document.querySelector(".roi").innerHTML += "<br /><span class='rouge'> Il est temps de prendre le cimetière !</span>";
            }
        }
        
        cartePassee.push(carte);
        let index = jeuDeCarteAutiliser.indexOf(carte);
        jeuDeCarteAutiliser.splice(index,1);
    }
    function entierAleatoire(max){
        return Math.floor(Math.random() * (max - 0 + 1)) + 0;
    }
    function finDePartie(){
        document.querySelector(".jeu").classList.toggle("hidden");
        document.querySelector(".fin").classList.toggle("hidden");
    }
});