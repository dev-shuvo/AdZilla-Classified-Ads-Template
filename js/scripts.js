// featured ads owl carousel
$(document).ready(function () {
  $("#featuredAds").owlCarousel({
    margin: 20,
    loop: true,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 3000,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
    },
  });
});

// dashboard page external tab buttons
$("#runningAdsBtn2").click(function () {
  $("#overview").removeClass("active show");
  $(".nav #overviewBtn").removeClass("active");

  $(".tab-content #runningAds").addClass("active show");
  $(".nav #runningAdsBtn").addClass("active");
});

$("#savedAdsBtn2").click(function () {
  $("#overview").removeClass("active show");
  $(".nav #overviewBtn").removeClass("active");

  $(".tab-content #savedAds").addClass("active show");
  $(".nav #savedAdsBtn").addClass("active");
});
