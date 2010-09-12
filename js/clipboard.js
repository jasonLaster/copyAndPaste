clipboard.content = "";



clipboard.create = function(){
  console.log("create clipboard");
  var form = $('<div class="form_1x">')
    .attr('style', 'width:1px; height:1px background:#00CC33; overflow:hidden;')
    .append($('<form>').append($('<textarea class="clipboard">')));

  form.appendTo($('body'));
}

clipboard.preview = {};
clipboard.preview.create = function(){
  console.log("drawing preview box")
  var preview_box = $('<div id="cl_1x" class="clipboard_1x">');
  var title1 = $('<h3 class="title">').text("Copy Paste");
  var title2 = $('<h3 class="title">').text("Nothing is currently selected");
  var description = $('<p class="description">').text("To copy things to your clipboard, click on the things you want to copy and press command+c.");
  var textarea = $('<textarea class="clipboard">').val(clipboard.content);

  if(clipboard._empty) {
    title1.appendTo(preview_box);
  } else {
    title2.appendTo(preview_box);
    description.appendTo(preview_box);
  }

  clipboard.preview._left_offset();

  textarea.appendTo(preview_box);
  preview_box.appendTo($('body'));
}

clipboard.preview._left_offset = function(){
  var left = (page.width - 500) / 2;
  $('#cl_1x.clipboard_1x').css("left", left);
}


clipboard.update = function(){
  console.log("update clipboard");
  var string = "";

  $('.meta_1x').each(function(i, e){ string += $(e).attr("_data") + "\n"; });

  clipboard.content = string || " ";
  var textarea = $('textarea.clipboard');
  textarea.val(string || " ");
  textarea.select();
  textarea.focus();
};

clipboard.clear = function(){
  console.log("clear clipboard");
  selection.clear();
}

clipboard._empty = function(){
  return $('.selected_1x').length == 0; 
}

