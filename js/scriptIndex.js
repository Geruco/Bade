let parameter="";

function loadIndex(){
    
//    CLICK DES "LIENS"
    document.getElementById("1").addEventListener("click", function(){
        this.classList.toggle("clicked");
        document.querySelector(".players").classList.toggle("novisible");
        document.querySelectorAll('.SelectGame').forEach(element => {
            element.classList.toggle("novisible");
        });
    });
/*
    document.getElementById("Valider").addEventListener("click", function(){
        //Vérification si suffisamment de joueurs
        let valideNom = 0;
        document.querySelector(".players").querySelectorAll("input").forEach(function(input){
            if(input.value != "")
                valideNom++;
        })
        //Verification si mode de jeu selectionné
        let valideDiff = false;
        document.querySelector(".difficultePicolo").querySelectorAll("input").forEach(function(input){
            if(input.checked)
                valideDiff = true;
        })
        
        //Si tout est bon
        if(valideNom >= 2 && valideDiff){
            
            //Noms
            let noms = [];
            document.querySelector(".players").querySelectorAll("input").forEach(function(input){
                if(input.value != "")
                    noms.push(input.value);
            })
            let parameter = "";
            noms.forEach(function(nom){
                parameter+="_"+nom;
            })
            let lien;
            console.log(document.querySelector(".players").querySelectorAll("p")[1].innerHTML);
            
            //Difficulte
            let difficulte;
            document.querySelector(".difficultePicolo").querySelectorAll("input").forEach(function(input){
                if(input.checked)
                    difficulte = input.value;
            })
    //        AJOUT D'ADRESSE HTML
            switch(document.querySelector(".players").querySelectorAll("p")[1].innerHTML){
                case "1":
                    lien = "picolo.html";
                    break;
                default: lien = "index.html";
            }
            window.location.href = lien+"#"+difficulte+"?"+parameter;
        }
        else{
            // Gestion des erreurs d'entrée
            document.querySelector(".players").querySelectorAll("input").forEach(function(input){
                if(!input.classList.contains("error"))
                    input.classList.add("error");
            })
            if(!document.querySelector(".players").querySelectorAll("p")[1]){
                let p = document.createElement("p");
                p.setAttribute("style", "color: red");
                p.innerHTML = "Veuillez rentrez un minimum de 2 noms"
                document.querySelector(".players").appendChild(p);
            }
        }
    });*/
}


function start(){
    //Vérification si suffisamment de joueurs
    if(document.getElementById("list").childElementCount >= 2){
        let noms = [];

        document.querySelectorAll(".list__item").forEach(element =>{
            noms.push(element.childNodes[1].innerText);
        });
        
        noms.forEach(function(nom){
            parameter+="_"+nom;
            console.log(parameter);
        });
        console.log("final : ", parameter);
        document.querySelector(".players").classList.toggle("novisible");
        document.querySelector(".difficultePicolo").classList.toggle("novisible");
    
    }
    else
        alert("Veuiller entrer au moins 2 joueurs");

    
};

function selectdifficult(element){
    //        AJOUT D'ADRESSE HTML
    window.location.hash = "picolo-"+element.id+"?"+parameter;
};
////////////////    JS FORMULAIRE JOUEUR    ////////////////
     // ADDING A NEW ITEM TO THE LIST
    
      // Define the callback function
function addItem(){
    
        // Declare a variable to capture the input text value
        var input = document.getElementById('submission-line__input').value;
        // If the input text field isn't empty, add it to the list as a new item
        if (input != "") {
          document.getElementById('list').innerHTML += '<li class="list__item"><a class="list__delete-btn" onclick="this.parentNode.remove();">✘</a><p>' + input + '</p></li>';
        }
        // Clear the input text field
        document.getElementById('submission-line__input').value = "";
      
    };


    
    // MAKING LIST ITEMS SORTABLE

