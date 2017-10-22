function clearValue(){
    $("li, span").css("font-weight",""); <!--Clear all font value -->
}

function setEven(){
  clearValue();
  var $evenItems = $("li:even");
  $evenItems.css("font-weight","bold");
  $("span:contains(Even)").css("font-weight","bold");
  $(".label").html("Even");
}

function setOdd(){
 clearValue();
 var $oddItems = $("li:odd");
 $oddItems.css("font-weight", "bold");
 $("span:contains(Odd)").css("font-weight", "bold");
 $(".label").html("Odd");
}

function setFirst4(){
  clearValue();
  var $first4 = $("li:lt(4)");
  $first4.css("font-weight", "bold");
  $("span:contains('First 4')").css("font-weight", "bold");
  $(".label").html("First 4");
}
