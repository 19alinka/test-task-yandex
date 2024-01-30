$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: false,
    });
});
  
$(document).ready(function(){
    $('.participants__items').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 1000,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1140,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 790,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
        ]    
    });
});

document.getElementById("button1").onclick = function () {
    document.getElementById("info").scrollIntoView({behavior: "smooth"})
};

document.getElementById("button2").onclick = function () {
    document.getElementById("participants").scrollIntoView({behavior: "smooth"})
};