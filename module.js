var mx = 0;
var my = 0;
var key = null;
var keyCode = null;
var dockVisible = false;

var VERSION_DEV = "Piyush Kumar";
var VERSION = "2.0";  

document.onmousemove = function(e){
    mx = e.clientX; my = e.clientY;
}

document.getElementById("logotask").onclick = function(){
    if(!dockVisible){
        dockVisible = true;
        document.getElementById("dock").style.transform = "translateY(0vh)";
        document.getElementById("dock").style.opacity = "1";
        document.getElementById("taskbar").style.background = "linear-gradient(to right, #333744, #333744)";
    }else{
        dockVisible = false;
        document.getElementById("dock").style.transform = "translateY(100vh)";
        document.getElementById("dock").style.opacity = "0";
        document.getElementById("taskbar").style.background = "linear-gradient(to right, #333744ce, #333744b6)";
        
    }
};

function toggleittt(){
    if(!dockVisible){
        dockVisible = true;
        document.getElementById("dock").style.transform = "translateY(0vh)";
        document.getElementById("dock").style.opacity = "1";
        document.getElementById("taskbar").style.background = "linear-gradient(to right, #333744, #333744)";
    }else{
        dockVisible = false;
        document.getElementById("dock").style.transform = "translateY(100vh)";
        document.getElementById("dock").style.opacity = "0";
        document.getElementById("taskbar").style.background = "linear-gradient(to right, #333744ce, #333744b6)";
        
    }
}

document.body.onkeydown = function(event){
    keyCode = event.keyCode;
    key = String.fromCharCode(event.keyCode);

    if(key == "W"){
        toggleittt();
    }
    if(key == "I"){
        System_Info();
    }
    if(key == "C"){
        App_Calc();
    }
}

document.body.onload = function(){
    var me = document.createElement("script"); me.setAttribute("src","Apps/app.js"); me.setAttribute("type", "text/javascript");
    document.body.appendChild(me);
    loadfiles();
    setInterval(function(){
        var tim = document.getElementById("time");
        var day = document.getElementById("date");
        var p = new Date();

        tim.innerHTML = gettimedecorated();
        day.innerHTML = p.toDateString();
    }, 60);
}

function gettimedecorated(){
    var p = new Date();
    var date = "";
    
    if(p.getHours() < 10){
        date += "0" + p.getHours();
    }else{
        date += p.getHours();
    }

    date += ":";

    if(p.getMinutes() < 10){
        date += "0" + p.getMinutes();
    }else{
        date += p.getMinutes();
    }

    return date;
}

function generatecontainer(Divf, name, iconClass){
    var newDiv = document.createElement("div");
    newDiv.setAttribute("class","container");
    newDiv.style.width = "480px";//480px
    newDiv.style.height = "360px";//360px

    var header = document.createElement("div");
    header.setAttribute("class", "headercon");

    var closeit = document.createElement("a");
    closeit.setAttribute("class", "coni"); closeit.setAttribute("color","red");
    header.appendChild(closeit);

    var rew = document.createElement("em"); rew.setAttribute("class", (iconClass + " enabled"));
    document.getElementById("taskbar").appendChild(rew);

    closeit.onclick = function(){
        document.body.removeChild(newDiv);
        document.getElementById("taskbar").removeChild(rew);
    }


    var moveit = document.createElement("a");
    moveit.setAttribute("class", "coni"); moveit.setAttribute("color","yellow");
    header.appendChild(moveit);

    var nameit = document.createElement("a");
    nameit.innerHTML = name;
    nameit.setAttribute("class","headertxt")
    nameit.style.color = "grey"
    header.appendChild(nameit);

    var ismov = false;
    var timeout = null;
    moveit.onclick = function(){
        if(!ismov){
            ismov = true;
            timeout = setInterval(function(){
                newDiv.style.top = my + "px";
                newDiv.style.left = (mx-30) + "px";
            },10);
        }
    }

    header.ondblclick = function(){
        if(ismov){
            ismov = false;
            clearInterval(timeout);
        }
    }


    newDiv.appendChild(header);
    newDiv.appendChild(Divf);

    var Vw = window.innerWidth - 300;
    var Vh = window.innerHeight - 300;

    var tw = Math.floor(Math.random()*Vw)
    var th = Math.floor(Math.random()*Vh)
    
    newDiv.style.top = th + "px";
    newDiv.style.left = tw + "px";

    return newDiv;
}

function loadfiles(){
    var dock = document.getElementById("dock")

    var Apps = ["Calculator","Info","Calculator"]
    var Applogo = ["fa fa-calculator","fa fa-pagelines","fa fa-calculator"]
    var clickw = ["App_Calc()","System_Info()","App_Calc()"]

    for(var x = 0; x<Apps.length; x++){
        var elv = document.createElement("span"); elv.setAttribute("class","dockelem");
        elv.setAttribute("onclick",clickw[x])

        var logof = document.createElement("em"); logof.setAttribute("class",Applogo[x]); elv.appendChild(logof);
        elv.appendChild(document.createElement("br"));
        var namef = document.createElement("a"); namef.innerHTML = Apps[x]; elv.appendChild(namef);

        dock.appendChild(elv);
    }
}

