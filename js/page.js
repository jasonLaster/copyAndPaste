


page.createEvents = function(){
  console.log("create page events");
  console.log(page.elements().length);

  $('*', 'body:children').live('click', function(){
    console.log("clicked on an element")
    elements.elementIsSelected($(this)) ? elements.removeFromSelection($(this)) : elements.addToSelection($(this));
    return false;
  });
};

page.removeEvents = function(){
  console.log("remove page events");
  page.elements().die();
};

page.elements = function(){
  var divs_below_body = $('body').children().not('#e_1x')
  var children = $('*', divs_below_body);
  return divs_below_body.add(children);
}

page.wrapElements = function(){
  children = $('body > *');
  wrapper = $('<div id="page_1x">');
  wrapper.appendTo('body');
  children.appendTo(wrapper);
}

page.addPageClass = function(){
  $('body > *').addClass("page_1x")
}

