jQuery(document).ready( function() {
    ajusteMargemMain();
    $(".scroll").click(function(event){
        event.preventDefault();
        if (window.innerWidth <= 767.98)
            $('html,body').animate({scrollTop:$(this.hash).offset().top-105}, 600);
        else
            $('html,body').animate({scrollTop:$(this.hash).offset().top-65}, 600);
   });
});

function ajusteMargemMain() {
    main = document.getElementById("container");
    fundo = document.getElementById("fundo");

    main.style.marginTop = "50px";
};
