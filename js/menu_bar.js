

menuBar.draw = function(){

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

menuBar.show = function(){
  console.log("show menubar");
  this.events.create();
  this._slideDown();
}

menuBar.hide = function(){
  console.log("hide menubar");
  this._slideUp();
  this.events.remove();
}

menuBar.remove = function(){
  console.log("remove menubar from DOM");
  $('#e_1x').remove();
}


menuBar._slideDown = function(){
  console.info("slide down");
  $('#e_1x').animate({"top": "+=30px"}, "fast");
};

menuBar._slideUp = function(){
  console.info("slide up");
  $('#e_1x').animate({"top": "-=30px"}, "fast");
};


menuBar.events = {};

menuBar.events.create = function(){
  console.log("create menubar events!");
  $('#e_1x a.close').live('click', function(){menuBar.events._close();});
  $('#e_1x a.clear').live('click', function(){menuBar.events._clear();});
}

menuBar.events.remove = function(){
  console.log("remove menubar events");
  $('#e_1x a.clear').die();
  $('#e_1x a.close').die();
}

menuBar.events._clear = function(){
  console.log("clear clipboard");
  clipboard.clear();
}

menuBar.events._close = function(){
  console.log("close menubar");
  copyPaste.end();
}
