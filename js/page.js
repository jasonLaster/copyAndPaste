
page.createEvents = function(){
  console.log("create page events");

  $('body').children().not('#e_1x').find('*').live('click', function(){
    var element = $(this)

    if(elements.elementIsSelected(element)){
      elements.removeFromSelection(element);
    } else {
      elements.addToSelection(element);
    }

    return false;
  });
};

page.removeEvents = function(){
  console.log("remove page events");
  $('body').children().not('#e_1x').find('*').die();
};