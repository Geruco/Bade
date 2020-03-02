/*function getHeader(route) {
    $.ajax({
        url: "header.html",
        type: 'GET',
        success: function (data) {
            document.querySelector("#header").innerHTML = data;
            // console.log(data);
            $.ajax({
                url: "panier.html",
                type: 'GET',
                success: function (data) {
                    document.querySelector("#content").innerHTML = data;
                    // console.log(data);
                    document.querySelector("#showPanier").addEventListener("click", function () {
                        initPanier();
                    });
                    loadPage(route);
                }
            });
        }
    });
} */

function getHome(){
    // console.log("home function");
    $.ajax({
        url: "home.html",
        type: 'GET',
        success: function (data) {
            document.querySelector("#content").innerHTML += data;
            loadIndex();
        }
    });
}

function get51(){
    $.ajax({
        url: "51.html",
        type: 'GET',
        success: function (data) {
            document.querySelector("#content").innerHTML += data;
            // console.log(produit);
            //initProduit()
            load51();
        }
    });
}
function getChocholle(){
    $.ajax({
        url: "chocholle.html",
        type: 'GET',
        success: function (data) {
            document.querySelector("#content").innerHTML += data;
            // console.log(produit);
            //initProduit()
            loadChocholle();
        }
    });
}
function getPicollo(){
    $.ajax({
        url: "picolo.html",
        type: 'GET',
        success: function (data) {
            document.querySelector("#content").innerHTML += data;
            // console.log(produit);
            //initProduit()
            loadPicollo();
        }
    });
}

/*function loadPage(route){
    switch (route) {
        case "chocholle":getChocholle();
            break;
        case "51": get51();
            break;
        default: getHome();
            break;
    }
} */