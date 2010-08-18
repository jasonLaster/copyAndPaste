

menuBar.drawMenubar = function(){

   var menubar = $('<div id="e_1x">')
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
  $('#e_1x a.clear').die();
  $('#e_1x a.close').die();
}

menuBar.slideDown = function(){
  console.info("slide down");
  $('#e_1x').find('*').slideDown(100, function() {});
};

menuBar.slideUp = function(){
  console.info("slide up");
  $('#e_1x').find('*').slideU(100, function() {});
};

menuBar.remove = function(){
  console.log("remove menubar from DOM");
  $('#e_1x').remove();
}


