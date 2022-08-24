// --------About-------
var tablinks = document.getElementsByClassName("tabLinks");
var tabcontents = document.getElementsByClassName("tabContents");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activeLink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activeTab");
    }
    event.currentTarget.classList.add("activeLink");
    document.getElementById(tabname).classList.add("activeTab");
}

//------ Dark Mode--------

var icon = document.getElementById("icon");

if(localStorage.getItem("theme") == null){
    localStorage.setItem("theme","light");
}

let localData = localStorage.getItem("theme");

if(localData=="light"){
    icon.src="moon.png";
    document.body.classList.remove("dark-theme");
}
else if(localData == "dark"){
    icon.src="sun.png";
    document.body.classList.add("dark-theme");
}

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "sun.png";
        localStorage.setItem("theme","dark");
    }
    else{
        icon.src = "moon.png";
        localStorage.setItem("theme","light");
    }
}
//_________ for media -----------

var sideMenu=document.getElementById("sideMenu");

function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu.style.right = "-200px";
}