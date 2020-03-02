function load51(){
    
    tirerDe();
    
    document.querySelector(".jeu").addEventListener("click", function(event){
        tirerDe();
    })
    
    
    function tirerDe(){
        let face1 = entierAleatoire(6);
        let face2 = entierAleatoire(6);
        let gorgees = 0;
        
        switch(face1){
            case 1:
                if(face2 !== 1){
                    gorgees +=3;
                }
                break;
            case 5:
                if(face2 !== 5){
                    gorgees +=3;
                }
                break;
        }
        switch(face2){
            case 1:
                if(face1 !== 1){
                    gorgees +=3;
                }
                break;
            case 5:
                if(face1 !== 5){
                    gorgees +=3;
                }
                break;
        }
        if(gorgees > 0)
            document.querySelector(".regle").innerHTML = "Le 1 et / ou le 5 est sorti une seule fois. Vous devez boire <span color='red'>"+gorgees+"</span> !";
        else
            document.querySelector(".regle").innerHTML = "Le 1 et le 5 ne sont pas sorti une seule fois. Vous devez boire <span color='red'>"+gorgees+"</span> !";
        let src = "img/des/"+face1+".png";
        document.querySelector(".imageDe1").setAttribute("style", "background-image: url("+src+");");
        src = "img/des/"+face2+".png";
        document.querySelector(".imageDe2").setAttribute("style", "background-image: url("+src+");");
    }
    function entierAleatoire(max){
        return Math.floor(Math.random() * (max - 1 + 1)) + 1;
    }
}