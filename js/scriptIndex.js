
window.addEventListener("load", function(){
    
//    CLICK DES "LIENS"
    document.getElementById("1").addEventListener("click", function(){
        this.classList.toggle("clicked");
        document.querySelector(".players").classList.toggle("novisible");
        document.querySelector(".difficultePicolo").classList.toggle("novisible");
        document.querySelectorAll('.SelectGame').forEach(element => {
            element.classList.toggle("novisible");
        });
        //document.querySelector(".players").querySelectorAll("p")[1].innerHTML = "1";
    });
//    CLICK DES BOUTONS
     /*document.querySelector(".players").querySelectorAll("button")[0].addEventListener("click", function(){
         let li=document.createElement("li");
         let input = document.createElement("input");
         input.setAttribute("type", "text");
         li.appendChild(input);
         document.querySelector(".players").querySelector("ul").appendChild(li);
     });*/
    document.querySelector(".players").querySelectorAll("button")[1].addEventListener("click", function(){
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
    });
})





////////////////    JS FORMULAIRE JOUEUR    ////////////////
     // ADDING A NEW ITEM TO THE LIST
    
      // Define the callback function
function addItem(){
    
        // Declare a variable to capture the input text value
        var input = document.getElementById('submission-line__input').value;
        // If the input text field isn't empty, add it to the list as a new item
        if (input != "") {
          document.getElementById('list').innerHTML += '<li class="list__item"><a class="list__delete-btn" onclick="this.parentNode.remove();">✘</a>' + input + '</li>';
        }
        // Clear the input text field
        document.getElementById('submission-line__input').value = "";
      
    };


    
    // MAKING LIST ITEMS SORTABLE

