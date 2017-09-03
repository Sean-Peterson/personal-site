function showHidden(){
  $(".hidden").fadeIn(1500).removeClass('hidden');
}
function popUp(id,classes){
  var elements = Array.from(document.getElementsByClassName(classes)).forEach(function(e){
    var bool = e.classList.contains('pop');
    if (!bool) {
      e.classList.add("pop");
    }else{
      e.classList.remove("pop");
    }
  });
}
$(document).ready(function() {
  setTimeout(showHidden, 1000);
  $(".images").click(function(event){
    var id = $(this).attr('id');
    var classes = $(this).attr('class')
    popUp(id,classes);
  });
});
