window.onload=loadUser;

/**
 * Données Objets pour la template de l'application
 */
var view = {
    "animaux" : [
      { "nom": "canard", "titre" : "Le"},
      { "nom": "chat", "titre" : "Le"},
      { "nom": "cheval", "titre" : "Le"},
      { "nom": "chèvre", "titre" : "La"},
      { "nom": "chien", "titre" : "Le"},
      { "nom": "coq", "titre" : "Le"},
      { "nom": "dindon", "titre" : "Le"},
      { "nom": "grenouille", "titre" : "La"},
      { "nom": "loup", "titre" : "Le"},
      { "nom": "mouton", "titre" : "Le"},
      { "nom": "poule", "titre" : "La"},
      { "nom": "vache", "titre" : "La"}
    ],
    
    "image" : function(){
        return './images/' + this.nom + '/' + this.nom + '.jpg';
    },
    "son" : function(){
        return './images/'+this.nom + '/' + this.nom + '.mp3';
    }


};


function stopAllAudio(){
  	var players = $("audio");
  	players.each(function (){

  		this.pause();
  	});
}

function playthis(nom)
{

    var player = $("#"+nom+"audio")[0];

    var encours =$("#played").val();

    // Si on clic sur la meme image mise en pause
    if(encours === nom){
        //si en pause ou finis
        if(player.paused){
            // Relance la musique uniquement si deja en pasue
            player.currentTime=0;
            player.play();
        }else{
            player.pause();
        }
        // Sinon la pause est enclenché
    }
    else{
        // Arret des autres players
        stopAllAudio();
        player.currentTime=0;
        // LIRE le fichier cliqué
        player.play();
        // Enregistrement de l'element en cours de lecture
        $("#played").val(nom);
    }

}


/**
* Gestion de l'appel au template - au chargement de la page
* [description]
*
*/
function loadUser() {
  //  alert("loaded") ;
    $.get('./templates/animal.html', function(template) {
        var rendered = Mustache.render(template, view);
        $('#target').html(rendered);
    });
}
