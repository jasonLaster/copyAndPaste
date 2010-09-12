
// GLOBAL VARIABLES
var copyPaste = {};
var clipboard = {};
var menuBar = {};
var page = {};
var selection = {};
var metaElement = {};

copyPaste.open = false;



// ON LOAD FUNCTIONS
chrome.extension.onRequest.addListener(
  function(request, sender, sendResponse) {
    if (request == "create_extension") {
      if(copyPaste.open) {
        copyPaste.end();
      } else {
        copyPaste.begin();
      }
    } else {
      sendResponse("nothing to do")
    }
  }
);



$(document).ready(function(){
  console.log("draw menubar and add clipbard to dom");
  page.addPageClass()
  page._initialize();
  menuBar.draw();
  clipboard.create();
})


// ANCILLIARY FUNCTIONS

copyPaste.begin = function(){
  try {
    console.info("begin copyPaste!")
    copyPaste.open = true;
    page.createEvents();
    menuBar.show();

  } catch (error) {
    console.error("copy paste failed to open:\n%s", error)
  }
};

copyPaste.end = function(){
  try {
    console.log("end copyPaste!");
    copyPaste.open = false;
    clipboard.clear();
    page.removeEvents();
    menuBar.hide();

  } catch (error) {
    console.error("copy paste failed to end:\n%s", error);
  }
};
