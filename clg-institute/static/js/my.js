// custom scrolling 
const scrollWrapper = $('.scrollmenu');
scrollWrapper.scrollLeft(0);
$('#rightBtn').on('click', function() {
  scrollWrapper.animate({scrollLeft:scrollWrapper.scrollLeft() + 200}, 800);
});
$('#leftBtn').on('click', function() {
  scrollWrapper.animate({scrollLeft:scrollWrapper.scrollLeft() - 200}, 800);
});