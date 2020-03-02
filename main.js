window.addEventListener("load", function(){
    DEBUG = false;
    // window.history.pushState("object or string", "Title", "/new-url");
    getHash();

    function getHash(){
        let hash = location.hash;
        if(hash.includes("chocholle-")){
            //let id = hash.split("produit-")[1];
            // console.log("id : ", id);
            document.getElementById("content").innerHTML = "";
            getChocholle();
        }
        else if(hash.includes("cinquante-")){
            //let id = hash.split("produit-")[1];
            // console.log("id : ", id);
            document.getElementById("content").innerHTML = "";
            get51();
        }
        else if(hash.includes("picolo-")){
            //let id = hash.split("produit-")[1];
            // console.log("id : ", id);
            document.getElementById("content").innerHTML = "";
            getPicollo();
        }
        else{
            document.getElementById("content").innerHTML = "";
            getHome();
            // console.log("Go Home");
        }
    }
    window.addEventListener("hashchange", function(){
        console.log("hashchange");
        getHash();
    });

})