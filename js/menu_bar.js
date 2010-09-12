

menuBar.draw = function(){

  console.log("draw ui");

   var menubar = 
     $('<div class="menuBar_1x" id="e_1x">')

   var logo = 
     $('<h1 class="m_1x logo">')
       .append($('<span class="copy">').text("COPY "))
       .append($('<span class="paste">').text("PASTE"));

  var center_buttons = 
     $('<ul class="m_1x controls center">')
       .append($('<li class="buttons">').html($('<a class="preview links">').text("preview")))
       .append($('<li class="buttons">').html($('<a class="clear links">').text("clear")));

  var right_buttons = 
     $('<ul class="m_1x controls right">')
       .append($('<li class="buttons">').html($('<a class="about links">').text("about")))
       .append($('<li class="buttons">').html($('<a class="feedback links">').text("feedback")))
       .append($('<li class="buttons">').html($('<a class="close links">').text("close")));

  menuBar._center_buttons();

   $('body')
     .append(menubar)
     .append(logo)
     .append(center_buttons)
     .append(right_buttons);

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
  $('.m_1x').animate({"top": "+=30px"}, "fast");
};

menuBar._slideUp = function(){
  console.info("slide up");
  $('#e_1x').animate({"top": "-=30px"}, "fast");
};

menuBar._center_buttons = function(){
  console.log("center buttons")
  var left = (page.width - 200) / 2;
  $("ul.m_1x.controls.center").css("left", left);
}

menuBar.events = {};

menuBar.events.create = function(){
  console.log("create menubar events!");
  $('#e_1x a.close').live('click', function(){menuBar.events._close();});
  $('#e_1x a.clear').live('click', function(){menuBar.events._clear();});
  $('#e_1x a.preview').live('click', function(){menuBar.events._preview();});
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

menuBar.events._preview = function(){
  console.log("open preview");
  clipboard.preview.create();
}
