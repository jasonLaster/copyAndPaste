
// VARIABLES
copyPaste = {};
clipboard = {};
menuBar = {};
page = {};
elements = {};
elements.meta = {};
elements.page = {};
elements.uId = 0;



// ON LOAD FUNCTIONS
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request == "create_extension") {
      copyPaste.begin();
    } else {
      sendResponse("nothing to do")
    }
  }
);

$(document).ready(function(){
  console.log("draw menubar and add clipbard to dom");
  menuBar.drawMenubar();
  clipboard.addClipboardToDom();
  $('#e_1x').hide();
})


// ANCILLIARY FUNCTIONS

copyPaste.begin = function(){
  try {
    console.info("begin copyPaste!")
    page.createEvents();
    menuBar.slideDown();
    
  } catch (error) {
    console.error("copy paste failed to open:\n%s", error)
  }

};

copyPaste.end = function(){
  try {
    console.log("end copyPaste!");
    clipboard.clearSelection();
    page.removeEvents();
    menuBar.slideUp();
    
  } catch (error) {
    console.error("copy paste failed to end:\n%s", error);
  }
};
