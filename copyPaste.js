console.log("content script loaded!");
ext = {};
page = {};
clip = null;
index = 0;

ext.drawUI = function(){

   console.log("draw ui");

   var menu_bar = 
     $('<div id="e_1x">')
       .append($('<h1 class="logo">')
         .append($('<span class="copy">').text("COPY "))
         .append($('<span class="paste">').text("PASTE"))
       )
       .append($('<ul id="controls">')
         .append($('<li class="buttons">').html($('<a id="clear" class="links">').text("clear")))
         .append($('<li class="buttons">').html($('<a id="close" class="links">').text("close")))
       );

  var form = 
    $('<div>').attr('style', 'width:1px; height:1px background:#00CC33; overflow:hidden;')
      .append($('<form>').append($('<textarea class="clipboard">')));


   menu_bar.hide(); 
   menu_bar.appendTo($('body'));
   form.appendTo($('body'));

};


ext.drawUI();


chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ? "content script:" + sender.tab.url : "background.html");
    
    if (request == "create_extension") {
      ext.openCP();
      page.events();
      sendResponse("succesfully created the extension");
    } else {
      sendResponse("nothing to do")
    }
  }
);


ext.openCP = function(){
  
  ext.instantiateEvents = function(){
    // 
    // $('#e_1x #clear').live('click', function(){    
    // });
    // 
    // $('#e_1x #close').live('click', function(){ 
    // });
    // 
    // 
    // $('*').keypress(function(event){
    // });

  };

  ext.openMenuBar = function(){
    $('#e_1x').slideDown(100, function() {});
  };

  console.log("open Copy and Paste")
  
  ext.instantiateEvents();
  ext.openMenuBar();
}

ext.quitCP = function(){
  
  ext.closeUI = function(){
    $('#e_1x').slideUp(100, function(){});
  };
  removeEvents = function(){
    $('#controls li').unbind();
    $('*').die();
  }
  
  console.log("quit Copy and Paste")
  ext.closeUI();
  removeEvents();
  page.actions.clearSelections();
}


page.events = function(){
    $('*').live('click', function(event){


      var element = $(this);
      var element_is_not_in_menu_bar = function(){
        return !element.closest('#e_1x').is('#e_1x')
      }
      var element_is_not_selected = function(){
        return !(element.hasClass('selected_1x') || element.hasClass('border_1x'))
      }

      console.log("click event " + element.html());      
    
      if(element_is_not_in_menu_bar()){
        if (element_is_not_selected()){
          page.actions.addToSelection(element);
        } else {
          page.actions.removeFromSelection(element);
        } 
      } else {
        if (element.attr("id") == "clear") {
          page.actions.clearSelections();          
        } else if (element.attr("id") == "close") {
          ext.quitCP();   
        } else {
          console.log(element.attr("id") + " " + element.html())
        }
      }
    
      return false;
    });
};



page.actions = {}

page.actions.addToSelection = function(element){
  console.log("add to selection");

  var create_border_element = function(element){

    // selected element attributes
    var e_x = element.offset().left;
    var e_y = element.offset().top;
    var e_width = element.width();
    var e_height = element.height();
    var e_m_left = parseInt(element.css("margin-left"));
    var e_m_top = parseInt(element.css("margin-top"));
    var e_p_left = parseInt(element.css("padding-left"));
    var e_p_top = parseInt(element.css("padding-top"));
    
    console.log("x " + e_x + " y " + e_y + " w " + e_width + " h " + e_height + " p l " + e_p_left + " p t " + e_p_top);
    
    // border attributes
    var b_px = 2;
    var b_left = (e_x + e_m_left + e_p_left) + "px";
    var b_top  = (e_y + e_p_top  + e_p_top) + "px";
    var b_width = (e_width) + "px";
    var b_height = (e_height) + "px";
    var style = "left:" + b_left + "; top:" + b_top + "; width:" + b_width + "; height: " + b_height +";";
    
    
    element.addClass("cp_1x selected_1x");
    element.attr("_index", ++index);
    
    
    var border_element = 
      $('<div class="border_1x cp_1x">')
        .attr("style", style)
        .attr("_data", element.text())
        .attr("_index", index);
       
    $('body').append(border_element);
  };
  
  create_border_element(element);
  page.actions.update_clipboard();
}

page.actions.removeFromSelection = function(border){
  console.log("remove from selection");
  
  var element_index = border.attr("_index");
  var selected_elements = $('.selected_1x');
  var selected_element = selected_elements.filter(function(){
    return $(this).attr("_index") == element_index;
  });
  
  selected_element.removeClass("selected_1x");
  border.remove();
  page.actions.update_clipboard();
}

page.actions.clearSelections = function(){  
  $('.border_1x').remove();
  $('.selected_1x').removeClass('selected_1x');
  page.actions.update_clipboard();
}

page.actions.update_clipboard = function(){

  console.log("update clipboard");
  var string = "";

  $('.border_1x').each(function(i, e){
    string += $(e).attr("_data") + "\n";
  });

  var textarea = $('textarea.clipboard');
  textarea.val(string || " ");
  textarea.select();
  textarea.focus();
  
  // console.log(clip);
  // clip.setText(string);
  
  // chrome.tabs.getCurrent(function(tab){
  //   chrome.experimental.clipboard.executeCopy(tab.id);
  // });
  
  console.log("clipboard = ")
  console.log(string);
  console.log(textarea.val());
}
