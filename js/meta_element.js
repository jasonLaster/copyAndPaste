
metaElement.create = function(selected_element){
  console.log("create meta element");
  var selected_element_style = selection._getStyle(selected_element);
  var meta_element_style = this._setStyle(selected_element_style);
  var meta_element = this._new(meta_element_style, selected_element_style);
  $('body').append(meta_element);
};

metaElement._setStyle = function(e){
  var meta = {};
  meta.border_px = 2;
  meta.left = (e.x + e.margin_left + e.padding_left) + "px";
  meta.top  = (e.y + e.padding_top  + e.padding_top) + "px";
  meta.width = (e.width) + "px";
  meta.height = (e.height) + "px";
  meta.to_s = sprintf("left: %s; top: %s; width: %s; height: %s;", meta.left, meta.top, meta.width, meta.height);
  return meta;
}

metaElement._new = function(meta_element_style, selected_element_style){
  console.log("new meta element");
  var meta_element = $('<div class="meta_1x page_1x cp_1x">')
    .attr("style", meta_element_style.to_s)
    .attr("_data", selected_element_style._text)
    .attr("_index", selected_element_style._index);

  return meta_element;
};

metaElement._remove = function(meta_element){
  meta_element.remove();
}

metaElement._removeAll = function(){
  $('.meta_1x').remove();
}

