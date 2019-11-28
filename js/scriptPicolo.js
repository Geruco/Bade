window.addEventListener("load", function(){
    var DEBUG = false;
    
    var difficulte = getDifficulte();
    DEBUG && console.log(difficulte);
    
    var rulePassee = [];
    var maxGorgee;
    //Regles par défaut = reglesPicolo;
    switch(difficulte){
        case 1 : rulesAutiliser = reglesPicolo100;
            maxGorgee = 6;
            break;
        case 2 : rulesAutiliser = reglesPicoloClaque;
            maxGorgee = 3;
            break;
        default: rulesAutiliser = reglesPicoloApero;
            maxGorgee = 3;
    }
    
    let joueurs = nomsJoueurs();
    let nbPhrase = 0;
    DEBUG && console.log("Joueurs : ", joueurs);
    
    nouvelleRegle(joueurs);
    
    document.querySelector(".container").addEventListener("click", function(event){
        if(rulesAutiliser.length>0){
            nouvelleRegle(joueurs);
        }
        else{
            finDePartie();
        }
    })
    
    function getDifficulte(){
        let diff;
        let url = window.location.href;
        diff = url.split("#")[1][0];
        return diff;
    }
    function nomsJoueurs(){
        let joueurs = [];
        let url = window.location.href;
        url = url.substring(url.indexOf("_"));
        while(url.indexOf("_")!= -1){
            let index =  url.indexOf("_")+1;
            let split = url.substring(index);
            let nom = split.split("_");
            let leNom = nom[0];
            joueurs.push(leNom);
            url = url.substring(index);
        }
        for(let i = 0; i<joueurs.length; i++){
            joueurs[i] = joueurs[i].charAt(0).toUpperCase() + joueurs[i].substring(1).toLowerCase();
        }
        return joueurs;
    }
    function nouvelleRegle(joueurs){
        DEBUG && console.log("*****************************");
        let aleatoire = entierAleatoire(rulesAutiliser.length-1);
        let regle = rulesAutiliser[aleatoire];
        
        let regleFinale ="";
        let joueurSelec = [];
        let copieJoueur = joueurs.slice(0);
        DEBUG && console.log("copieJoueur : ", copieJoueur, " Et joueur : ", joueurs);
        if(regle.joueurs != 0){
            let nbJoueurs = regle.joueurs;
            for (var i = 0; i<nbJoueurs; i++){
                aleatoire = entierAleatoire(copieJoueur.length);
                joueurSelec.push(copieJoueur[aleatoire]);
                DEBUG && console.log("joueurSelec : ", joueurSelec, aleatoire);
                copieJoueur.splice(aleatoire, 1);
            }
            
            let textRegle = regle.regle;
            regleFinale = preparerNouvelleRegle(textRegle, joueurSelec);
        }
        else {
            DEBUG && console.log(regle.regle);
            if(regle.regle.indexOf("##") != -1){
                DEBUG && console.log("Mise des gorgées");
                let regleAvantGorgee =regle.regle;
                
                let nbGorgee = nombreGorgee();
                
                regleAvantGorgee = regleAvantGorgee.split("##");
                DEBUG && console.log(regleAvantGorgee);
                regleFinale += regleAvantGorgee[0];
                regleFinale += nbGorgee;
                regleFinale += regleAvantGorgee[1];
        //                DEBUG && console.log("fin : ", regleFinale);
            }
            else {
                regleFinale = regle.regle;
            }
        }
        
        document.querySelector(".regle").innerHTML = regleFinale;
        
        rulePassee.push(regle);
        let index = rulesAutiliser.indexOf(regle);
        rulesAutiliser.splice(index,1);
        nbPhrase++;
        document.getElementById("nbPhrase").innerHTML = nbPhrase;
    }
    
    function nombreGorgee(){
        let gorgees = [];
        for(var i = 0; i<10; i++){
            gorgees.push(entierAleatoire(maxGorgee+1));
        }
        let nbGorgee = gorgees[entierAleatoire(gorgees.length)];
        if (nbGorgee == 0)
            nbGorgee++;
        return nbGorgee;
    }
    
    function preparerNouvelleRegle(textRegle, joueurSelec){
        let text = [];
        let regle ="";
        
        while(textRegle.indexOf("&&")!= -1){
            let index = textRegle.indexOf("&&");
            let str = textRegle.split("&&");
            str.forEach(function(elem){
                text.push(elem);
            })
            textRegle=textRegle.split("&&");
            DEBUG && console.log("textRegle : ", textRegle, " et text : ", text);
        }
        for(var i = 0; i<textRegle.length; i++){
                DEBUG && console.log(regleFinale);
            regle += text[i];
            regle += joueurSelec[i];
                DEBUG && console.log("fin : ", regleFinale);
        }
        
        let nbGorgee = nombreGorgee();
        
        regle = regle.split("##");
        let regleFinale = "";
        for(var i = 0; i<regle.length; i++){
            DEBUG && console.log(regleFinale);
            regleFinale += regle[i];
            regleFinale += nbGorgee;
            DEBUG && console.log("fin : ", regleFinale);
        }
        
        regleFinale = regleFinale.split("undefined")[0];
        return regleFinale;
    }
    
    function entierAleatoire(max){
        return Math.floor(Math.random() * (max - 0 + 0)) + 0;
    }
    function finDePartie(){
        document.querySelector(".container").classList.toggle("hidden");
        document.querySelector(".fin").classList.toggle("hidden");
    }
});