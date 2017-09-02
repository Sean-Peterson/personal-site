function showHidden(){
  $(".hidden").fadeIn(1500).removeClass('hidden');
}
function popUp(id,classes){
  var element = document.getElementById(id);
  var bool = element.classList.contains('pop');
  if (!bool) {
    element.classList.add("pop");
  }else{
    element.classList.remove("pop");
  }
}
$(document).ready(function() {
  setTimeout(showHidden, 1000);
  $(".images").click(function(event){
    var id = $(this).attr('id');
    var classes = $(this).attr('class')
    popUp(id,classes);
  });
});
