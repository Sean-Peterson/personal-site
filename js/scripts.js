function showHidden(){
  $(".hidden").fadeIn(3000).removeClass('hidden');
}
$(document).ready(function() {
  setTimeout(showHidden, 500);
});
