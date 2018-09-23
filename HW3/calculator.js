var Calc = {

Model : {
},


View : {
  textRow : {id: "textRow", type: "text", value: "", onclick:""},
  button0 : {id: "button0", type: "button", value: 0, onclick:""},
  button1 : {id: "button1", type: "button", value: 1, onclick:""},
  button2 : {id: "button2", type: "button", value: 2, onclick:""},
  button3 : {id: "button3", type: "button", value: 3, onclick:""},
  button4 : {id: "button4", type: "button", value: 4, onclick:""},
  button5 : {id: "button5", type: "button", value: 5, onclick:""},
  button6 : {id: "button6", type: "button", value: 6, onclick:""},
  button7 : {id: "button7", type: "button", value: 7, onclick:""},
  button8 : {id: "button8", type: "button", value: 8, onclick:""},
  button9 : {id: "button9", type: "button", value: 9, onclick:""},
  buttonAdd : {id: "buttonAdd", type: "button", value: "+", onclick:""},
  buttonSub : {id: "buttonSub", type: "button", value: "-", onclick:""},
  buttonMult : {id: "buttonMult", type: "button", value: "*", onclick:""},
  buttonDiv : {id: "buttonDiv", type: "button", value: "/", onclick:""},
  buttonDec : {id: "buttonDec", type: "button", value: ".", onclick:""},
  buttonEqu : {id: "buttonEqu", type: "button", value: "=", onclick:""},
  buttonClear : {id: "buttonClear", type: "button", value: "C", onclick:""},
  buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
  buttonMSub : {id: "buttonMSub", type: "button", value: "M-", onclick:""},
  buttonMAdd : {id: "buttonMAdd", type: "button", value: "M+", onclick:""},
  buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},
},

Controller : {

},

run : function() {
  Calc.attachHandlers();
  console.log(Calc.display());
  return Calc.display();
},


displayElement : function (element) {
  var s = "<input ";
  s += " id=\"" + element.id + "\"";
  s += " type=\"" + element.type + "\"";
  s += " value= \"" + element.value + "\"";
  s += " onclick= \"" + element.onclick + "\"";
  s += ">";
  return s;

},

display : function() {
  var s;
  s = "<table id=\"myTable\" border=2>"
  s += "<tr><td>";
  s += Calc.displayElement(Calc.View.textRow);
  s += "</td></tr><tr><td>";
  s += Calc.displayElement(Calc.View.button7);
  s += Calc.displayElement(Calc.View.button8);
  s += Calc.displayElement(Calc.View.button9);
  s += Calc.displayElement(Calc.View.buttonAdd);
  s += "</tr></td><tr><td>";
  s += Calc.displayElement(Calc.View.button4);
  s += Calc.displayElement(Calc.View.button5);
  s += Calc.displayElement(Calc.View.button6);
  s += Calc.displayElement(Calc.View.buttonSub);
  s += "</tr></td><tr><td>";
  s += Calc.displayElement(Calc.View.button1);
  s += Calc.displayElement(Calc.View.button2);
  s += Calc.displayElement(Calc.View.button3);
  s += Calc.displayElement(Calc.View.buttonMult);
  s += "</tr></td><tr><td>";
  s += Calc.displayElement(Calc.View.button0);
  s += Calc.displayElement(Calc.View.buttonDec);
  s += Calc.displayElement(Calc.View.buttonEqu);
  s += Calc.displayElement(Calc.View.buttonDiv);
  s += "</tr></td><tr><td>";
  s += Calc.displayElement(Calc.View.buttonClear);
  s += Calc.displayElement(Calc.View.buttonMR);
  s += Calc.displayElement(Calc.View.buttonMSub);
  s += Calc.displayElement(Calc.View.buttonMAdd);
  s += "</tr></td><tr><td>";
  s += Calc.displayElement(Calc.View.buttonMC);
  s += "</tr></td></table>";
  return s;
},

attachHandlers : function() {
  for (var i = 0; i < 10; i++) {
    Calc.View["button" + i].onclick = "Calc.numberHandler(this)"; 
  }

},

numberHandler : function(that) {
  document.getElementById("textRow").value = document.getElementById("textRow").value += that.value;
}

}