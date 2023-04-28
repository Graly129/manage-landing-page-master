const multipleItemCarousel = document.querySelector('#carouselExampleControls')

if (window.matchMedia("(min-width:567px)").matches){
    const carousel = new bootstrap.Carousel(multipleItemCarousel, {
        interval: false
    })
    var carouselWidth = $('.carousel-inner')[0].scrollWidth;
    var cardWidth = $('.carousel-item').width();

    var scrollPosition = 0;


    //Code for sliding left
    $('.carousel-control-next').on('click', function(){
        if(scrollPosition < (carouselWidth - (cardWidth * 3))){
            console.log("left")
            scrollPosition = scrollPosition + cardWidth;
            $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600)
        }
    
    }
    )

    //Code for sliding right

    $('.carousel-control-prev').on('click', function(){
        if(scrollPosition > 0 ){
        console.log("right")
        scrollPosition = scrollPosition - cardWidth;
        $('.carousel-inner').animate({scrollLeft: scrollPosition}, 600)
        }
    }
)

}else{
    $(multipleItemCarousel).addClass('slide')
}

