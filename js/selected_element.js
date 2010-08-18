

elements.addToSelection = function(element){
  
  element.addClass("cp_1x selected_1x");
  element.attr("_index", ++index);
  
  elements.createMetaElement(element);
  clipboard.updateClipboard();
};

elements.removeFromSelection = function(metaElement){
  var index = metaElement.attr("_index");
  var selectedElement = $('.selected_1x').filter(function(){
    return $(this).attr("_index") == element_index;
  });
  
  selected_element.removeClass("selected_1x");
  metaElement.remove();
  clipboard.update_clipboard();
};

elements.createMetaElement = function(selectedElement){
  
  var getMetaStyle = function(e){
    var meta = {};
    meta.border_px = 2;
    meta.left = (e.x + e.margin_left + e.padding_left) + "px";
    meta.top  = (e.y + e.padding_top  + e.padding_top) + "px";
    meta.width = (e.width) + "px";
    meta.height = (e.height) + "px";
    return meta;
  }

  var MetaStmt = function(meta){
    return sprintf("left: %s; top: %s; width: %s; height: %s;", meta.left, meta.top, meta.width, meta.height);
  }
    
  
  var e = elements.getStyle(selectedElement);
  var metaStyle = MetaStmt(getMetaStyle(e));
  
  var meta_element = $('<div class="meta_1x cp_1x">')
    .attr("style", style)
    .attr("_data", element.text())
    .attr("_index", index);
     
  $('body').append(meta_element);
  
};

elements.elementIsSelected = function(element){
  return (element.hasClass('selected_1x') || element.hasClass('meta_1x'))
};

elements.getStyle = function(element){
  var e = {};
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

elements.clearSelection = function(){
  $('.selected_1x, .meta_1x').remove();
};

