//Add event handler for the mousemove, mouseover, change, keypress & resize
$(window).load(function(){
  $(document).mousemove(mousePosition);
  $("*").mouseover(elementInfo);
  $("*").change(elementInfo);
  $("*").keypress(elementInfo);
  $(window).resize(windowResize);
});

//add handler call on mouse movement
function mousePosition(e){
  e.stopPropagation();
  $("#screeSize").html(screen.width + "X" + screen.height);
  $("#colors").html(screen.colorDepth+"bit");
  $("#browserSize").html(window.innerWidth + "X" + window.innerHeight);
  $("#mousePosition").html("X:" + e.screenX + " Y:" + e.screenY);
  $("#pagePosition").html("X:" + e.pageX + " Y:" + e.pageY);
  $("#scrollPosition").html("X:" + e.clientX + " Y:" + e.client);
}
 //show all element information
 function elementInfo(e){
   e.stopPropagation();
   $(".infoContainer span").html("");
   var domObj = e.target;
   var jObj = $(domObj);

   //to display the id tag and class attribute
   $("#elementId").html(domObj.id);
   $("#elementType").html(jObj.prop('tagName'));
   $("#elementClass").html(domObj.className);
   $("#elementSize").html(jObj.width() + "x" + jObj.height());
   $("#elementPosition").html(jObj.offset().top + ", " + jObj.offset().left);
   $("#elementColor").html(jObj.css("color"));
   $("#elementValue").html(jObj.val());
   try{
     $("#elementChecked").html(jObj.prop('checked').toString());
   } catch (e){}
   $("#elementSource").html(jObj.attr('src'));

   function windowResize(e){
     $("#browserSize").html(window.innerWidth + "X" + window.innerHeight);
   }
 }
