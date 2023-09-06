$(function () {
    $('.multiple-items').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        centerMode: true,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1001, // Display 2 slides on screens 1000px or wider
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 568, // Display 1 slide on screens smaller than 768px
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can add more responsive settings as needed
        ]
    });
});



  $(function () {
    $('.single-item').slick({
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 3,
      arrows: false,
      autoplay: false,
    //   autoplaySpeed: 2000,
      dots: false,
      centerMode: true,
      centerPadding: '0',
    });
  });

  function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }