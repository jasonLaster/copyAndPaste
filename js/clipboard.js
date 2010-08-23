
clipboard.create = function(){
  console.log("create clipboard");
  var form = $('<div class="form_1x">')
    .attr('style', 'width:1px; height:1px background:#00CC33; overflow:hidden;')
    .append($('<form>').append($('<textarea class="clipboard">')));

  form.appendTo($('body'));
}

clipboard.update = function(){
  console.log("update clipboard");
  var string = "";

  $('.meta_1x').each(function(i, e){ string += $(e).attr("_data") + "\n"; });

  var textarea = $('textarea.clipboard');
  textarea.val(string || " ");
  textarea.select();
  textarea.focus();
};

clipboard.clear = function(){
  console.log("clear clipboard");
  selection.clear();
}
