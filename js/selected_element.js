selection._index = 0;

selection.toggle = function(element){
  console.log("toggle")
  if (selection._isSelected(element)){
    selection._remove(element);
  } else {
    selection._add(element);
  }
}

selection.clear = function(){
  console.log("remove selection")
  this._removeAll();
  metaElement._removeAll();
  clipboard.update();
};

selection._isSelected = function(jqWS){
  return (jqWS.hasClass('selected_1x') || jqWS.hasClass('meta_1x'))
};

selection._add = function(element){
  console.log("add");
  element.addClass("cp_1x selected_1x");
  element.attr("_index", ++selection._index);
  metaElement.create(element)
  clipboard.update();
};

selection._remove = function(element){
  console.log("remove");
  var index = element.attr("_index");
  var meta_element = $('.meta_1x').filter(function(){ return $(this).attr("_index") == index;});

  metaElement._remove(meta_element);
  element.removeClass('selected_1x');
  clipboard.update();
}

selection._removeAll = function(){
  $('.selected_1x').removeClass('selected_1x');
  clipboard.update();
}

selection._getStyle = function(element){
  console.log("get element style");
  var e = {};
  e._index = element.attr("_index");
  e._text = element.text();
  e.x = element.offset().left;
  e.y = element.offset().top;
  e.width = element.width();
  e.height = element.height();
  e.margin_left = parseInt(element.css("margin-left"));
  e.margin_top = parseInt(element.css("margin-top"));
  e.padding_left = parseInt(element.css("padding-left"));
  e.padding_top = parseInt(element.css("padding-top"));
  return e;
}