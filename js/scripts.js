function showHidden(){
  $(".hidden").fadeIn(1500).removeClass('hidden');
}
$(document).ready(function() {
  setTimeout(showHidden, 1000);
});
