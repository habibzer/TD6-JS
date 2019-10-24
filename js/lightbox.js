let td6 = {
    modules : {}
}






td6.modules.question1 = (function () {
    return{


         afficherLightbox : function(vignette) {
             let img = vignette.find('img').data('img');
             $('.vignette').removeClass('courante');
             vignette.addClass('courante');
             $('#lightbox #lightbox_image').html('<img src="'+img+'">');
            $('#lightbox').fadeIn();

         },
        fermerLigthbox : function(){

             $('#lightbox').fadeOut();

        },
        imgSuivante : function(){
            if($('.vignette.courante').is(":last-of-type")){

                td6.modules.question1.afficherLightbox($('.vignette').first())

            }else{
                td6.modules.question1.afficherLightbox($('.vignette.courante').next());



            }



        },
        imgPrecedante : function(){
            if($('.vignette.courante').is(":first-of-type")){
                td6.modules.question1.afficherLightbox($('.vignette').last())
            }else {
                td6.modules.question1.afficherLightbox($('.vignette.courante').prev())
            }


        },


        navigationClavier : function(){

            $('.vignette.courante').keydown(function (envent){

                td6.modules.question1.afficherLightbox($('.vignette.courante').next());
            })

        },

        start : function () {

            $('.vignette').on('click', function(e){
                /*console.log(e.target);*/
                let vignette = $(e.target).closest('.vignette')
                td6.modules.question1.afficherLightbox(vignette);


            });
            $('#modal_close').on('click', function(){
                td6.modules.question1.fermerLigthbox();

            });
            $('#suivante').on('click', function(){

                td6.modules.question1.imgSuivante();

            });
            $('#precedante').on('click', function(){

                td6.modules.question1.imgPrecedante();

            });

            document.addEventListener("keydown", function(e){
                if(e.keyCode === 39){
                    td6.modules.question1.imgSuivante();
                }else if(e.keyCode === 37){
                    td6.modules.question1.imgPrecedante();

                }else if(e.keyCode === 27){
                    td6.modules.question1.fermerLigthbox();
                }

            });



        }
    }

})();


$(window).on('load', function(){

    td6.modules.question1.start();


});