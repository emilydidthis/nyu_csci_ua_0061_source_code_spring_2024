// grab references to each of our tabs
const tabWelcome = document.getElementById('tabWelcome');
const tabTraditional = document.getElementById('tabTraditional');
const tabGlazed = document.getElementById('tabGlazed');

// grab references to each content panel
const contentWelcome = document.getElementById('contentWelcome');
const contentTraditional = document.getElementById('contentTraditional');
const contentGlazed = document.getElementById('contentGlazed');

// set up click handlers to let the user click on each tab

//  event handler to make our Welcome Tab active
tabWelcome.onclick = function() {
  // first, make this tab our 'active' tab by applying the 'active' class to it
  tabWelcome.classList.add("active");
  // remove the 'active' class from the other tabs
  tabTraditional.classList.remove("active");
  tabGlazed.classList.remove("active");
  // show the content associated with this tab
  contentWelcome.classList.remove("hidden");
  // hide the other two contents
  contentTraditional.classList.add("hidden");
  contentGlazed.classList.add("hidden");
}

tabTraditional.onclick = function(){
  //create a helper function to deactivate all other tabs
  deactivateAllTabs();
  tabTraditional.classList.add("active");
  // create helper function to hide all content
  hideAllContent();
  //show the corresponding content for this tab
  contentTraditional.classList.remove("hidden");
}

tabGlazed.onclick = function(){
  deactivateAllTabs();
  tabGlazed.classList.add("active");
  hideAllContent();
  contentGlazed.classList.remove("hidden");
}

function deactivateAllTabs(){
  // lets get a ref to all the tabs
  const allTabs = document.querySelectorAll(".tab");
  for (let i = 0; i < allTabs.length; i++){
    allTabs[i].classList.remove("active");
  }
}

function hideAllContent(){
  const allContent = document.querySelectorAll(".content");
  for (let i = 0; i < allContent.length; i++){
    allContent[i].classList.add("hidden");
  }
}