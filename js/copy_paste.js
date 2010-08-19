
// VARIABLES
copyPaste = {};
copyPaste.open = false;
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
      if(copyPaste.open) {
        return false;
      } else {
        copyPaste.begin();
        copyPaste.open = true;
      }
    } else {
      sendResponse("nothing to do")
    }
  }
);

$(document).ready(function(){
  console.log("draw menubar and add clipbard to dom");
  page.addPageClass()
  menuBar.addMenubarToDom();
  clipboard.addClipboardToDom();
})


// ANCILLIARY FUNCTIONS

copyPaste.begin = function(){
  try {
    console.info("begin copyPaste!")
    page.createEvents();
    menuBar.createEvents();
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
    menuBar.removeEvents();
    menuBar.slideUp();
    copyPaste.open = false;

  } catch (error) {
    console.error("copy paste failed to end:\n%s", error);
  }
};
