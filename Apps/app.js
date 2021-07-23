function App_Calc(){
    var inr = document.createElement("div");

    var text = "0";
    var nume = document.createElement("div"); nume.setAttribute("class","numericvalue")
    nume.innerHTML = "0";
    inr.appendChild(nume);

    inr.onkeydown = function(){

        if(keyCode == 8){
            if(text != "0"){
                text = text.slice(0,-1);
                nume.innerHTML = text;
            }
        }

        if(parseInt(key) >=0 && parseInt(key) <=9){
            if(text != "0"){
                text += key;
                var re = "2888888888888888811111111333333333333";
                if(text.length % re.length == 0){
                    nume.innerHTML += "<br>";
                }
                nume.innerHTML += key;
            }else{
                text = key;
                nume.innerHTML = key;
            }
        }
    }
    
    var numpad = document.createElement("span"); numpad.setAttribute("class","numpad");
    for(var x=1; x<=10; x++){
        var er = document.createElement("button");
        if(x != 10){
            er.innerHTML = x;
            numpad.appendChild(er);
        }else{
            var eto = document.createElement("button"); eto.innerHTML = "C"; 
            numpad.appendChild(eto);
            eto.onmouseover = function(){
                eto.style.background = "rgba(255, 100, 100, 0.726)";
            }
            eto.onmouseout = function(){
                eto.style.background = "rgba(248, 248, 248, 0.3)";
            }
            eto.onclick = function(){
                text = "0";
                nume.innerHTML = text;
            }

            er.innerHTML = "0";
            numpad.appendChild(er);

            var et = document.createElement("button"); et.innerHTML = "="; 
            et.onmouseover = function(){
                et.style.background = "rgba(100, 225, 200, 0.726)";
            }
            et.onmouseout = function(){
                et.style.background = "rgba(248, 248, 248, 0.3)";
            }
            et.onclick = function(){
                text = eval(text);
                nume.innerHTML = text;
            }
            numpad.appendChild(et);
        }

        er.onclick = function(){
            if(text != "0"){
                text += this.innerText;
                var re = "2888888888888888811111111333333333333";
                if(text.length % re.length == 0){
                    nume.innerHTML += "<br>";
                }
                nume.innerHTML += this.innerText;
            }else{
                text = this.innerText;
                nume.innerHTML = this.innerText;
            }
        }
    }
    inr.appendChild(numpad);

    var operatorit = document.createElement("span"); operatorit.setAttribute("class","operatorit");
    var nqe = ["+","-","x","/"];

    for(var w = 0; w<nqe.length; w++){
        var btnm = document.createElement("button");
        btnm.innerHTML = nqe[w];

        btnm.onclick = function(){
            var yy = nume.innerText.slice(-1);
            if(yy == "+"  || yy == "x" || yy == "-" || yy == "/"){
                nume.innerHTML = nume.innerText.slice(0,-1);
                text = text.slice(0,-1);
            }

            nume.innerHTML += this.innerText;
            if(this.innerText != "x"){
                text += this.innerText;
            }else{
                text += "*";
            }
        }
        operatorit.appendChild(btnm);
    }
    inr.appendChild(operatorit);

    if(dockVisible){
        toggleittt();
    }


    var divg = generatecontainer(inr, "Calculator", "fa fa-calculator")
    divg.style.width = "315px";
    divg.style.height = "310px";
    document.body.appendChild(divg);
}

function System_Info(){
    var inr = document.createElement("div");
    inr.setAttribute("class","infoSys");

    var ww = document.createElement("div");
    ww.setAttribute("class","winlogosys");
    inr.appendChild(ww);

    var ae = document.createElement("a");
    ae.setAttribute("class","namesys");
    ae.innerHTML = "Piyush Os";
    inr.appendChild(ae);

    var ty = document.createElement("span");
    ty.setAttribute("class","regridinfo");
    ty.style.fontSize = "1.2em";
    ty.style.position = "relative";
    ty.style.marginTop = "100px";
    ty.style.marginLeft = "auto";
    ty.style.marginRight = "auto";
    
    var tu1 = ["version","developer","Build"]
    var tu2 = [VERSION,VERSION_DEV,"OS Pro"]
    
    for(var e = 0; e<tu1.length; e++){
        var elem = document.createElement("a");
        elem.style.textTransform = "capitalize";
        elem.innerHTML = tu1[e];
        ty.appendChild(elem)

        var elem2 = document.createElement("a");
        elem2.style.textTransform = "capitalize";
        elem2.innerHTML = tu2[e];
        elem2.style.color = "lightgray";
        ty.appendChild(elem2);
    }
    inr.appendChild(ty)

    var me = generatecontainer(inr, "Info", "fa fa-pagelines")
    me.style.width = "720px";
    me.style.height = "480px";
    document.body.appendChild(me);
    

    if(dockVisible){
        toggleittt();
    }
}