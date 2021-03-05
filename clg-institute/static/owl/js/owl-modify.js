
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
   });
});



// $(document).ready(function({ alert('hh'); });
// $( '.owl-carousel' ).owlCarousel({
//     items: 6,
//     nav: true,
//     dots: false,
//     mouseDrag: true,
//     responsiveClass: true,
//     responsive: {
//         0:{
//           items: 2
//         },
//         480:{
//           items: 3
//         },
//         769:{
//           items: 6
//         }
//     }
// });
// alert("hello");
// $(document).ready(function({ alert('hh');});
        // $('.owl-carousel').owlCarousel({
        //     loop:true,
        //     margin:10,
        //     responsiveClass:true,
        //     responsive:{
        //         0:{
        //             items:1,
        //             nav:true
        //         },
        //         600:{
        //             items:3,
        //             nav:false
        //         },
        //         1000:{
        //             items:5,
        //             nav:true,
        //             loop:false
        //         }
        //     }
        // });
    // });