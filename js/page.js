



page.createEvents = function(){
  console.log("create page events");
  $('.page_1x, .page_1x *').live('click', function(){
    console.log("click!");
    selection.toggle($(this));
    return false;
  });
};

page.removeEvents = function(){
  console.log("remove page events");
  // $('.page_1x, .page_1x *').die();
  $('*').die();
};

page.wrapElements = function(){
  // children = $('body > *');
  // wrapper = $('<div id="page_1x">');
  // wrapper.appendTo('body');
  // children.appendTo(wrapper);
}

page.addPageClass = function(){
  $('body > *').addClass("page_1x");
}


page._initialize = function(){
  page.width = $(window).width();
}

$(window).resize(function(){
  page.width = $(window).width();
  clipboard.preview._left_offset();
  menuBar._center_buttons();
});