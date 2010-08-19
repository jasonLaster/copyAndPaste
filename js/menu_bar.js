

menuBar.addMenubarToDom = function(){

   var menubar = $('<div class="menuBar_1x" id="e_1x">')
     .append($('<h1 class="logo">')
       .append($('<span class="copy">').text("COPY "))
       .append($('<span class="paste">').text("PASTE"))
     )
     .append($('<ul class="controls">')
       .append($('<li class="buttons">').html($('<a class="clear links">').text("clear")))
       .append($('<li class="buttons">').html($('<a class="close links">').text("close")))
     );

   console.log("draw ui");
   menubar.appendTo($('body'));

};

menuBar.createEvents = function(){

  console.log("create menubar events!");
  $('#e_1x a.clear').live('click', function(){
    clipboard.clearSelections();
  }); 
  $('#e_1x a.close').live('click', function(){
    copyPaste.end();
  });
};

menuBar.removeEvents = function(){
  console.log("remove menubar events");
  $('#e_1x a.clear').die();
  $('#e_1x a.close').die();
}

menuBar.slideDown = function(){
  console.info("slide down");
  $('#e_1x').animate({"top": "+=30px"}, "fast");
};

menuBar.slideUp = function(){
  console.info("slide up");
  $('#e_1x').animate({"top": "-=30px"}, "fast");
};

menuBar.remove = function(){
  console.log("remove menubar from DOM");
  $('#e_1x').remove();
}


