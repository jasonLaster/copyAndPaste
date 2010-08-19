

clipboard.addClipboardToDom = function(){

  var form = $('<div>').attr('style', 'width:1px; height:1px background:#00CC33; overflow:hidden;')
    .append($('<form>').append($('<textarea class="clipboard">')));

  form.appendTo($('body'));
}


clipboard.updateClipboard = function(){
  console.log("update clipboard");
  var string = "";

  $('.meta_1x').each(function(i, e){
    string += $(e).attr("_data") + "\n";
  });

  var textarea = $('textarea.clipboard');
  textarea.val(string || " ");
  textarea.select();
  textarea.focus();
};

clipboard.clearSelection = function(){
  console.log("clear clipboard");
  $('.selected_1x').remove();
}
