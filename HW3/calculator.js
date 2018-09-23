var Calc = {

  Model : {
    // mem1 is the number input before the operator
    // mem2 is reserved for memory operations
    mem1 : "",
    mem2 : "",
    operator : ""
  },

  View : {
    textRow : {id: "textRow", type: "text", value: "", onclick:""},
    number0 : {id: "number0", type: "button", value: 0, onclick:""},
    number1 : {id: "number1", type: "button", value: 1, onclick:""},
    number2 : {id: "number2", type: "button", value: 2, onclick:""},
    number3 : {id: "number3", type: "button", value: 3, onclick:""},
    number4 : {id: "number4", type: "button", value: 4, onclick:""},
    number5 : {id: "number5", type: "button", value: 5, onclick:""},
    number6 : {id: "number6", type: "button", value: 6, onclick:""},
    number7 : {id: "number7", type: "button", value: 7, onclick:""},
    number8 : {id: "number8", type: "button", value: 8, onclick:""},
    number9 : {id: "number9", type: "button", value: 9, onclick:""},
    operator1 : {id: "operator1", type: "button", value: "+", onclick:""},
    operator2 : {id: "operator2", type: "button", value: "-", onclick:""},
    operator3 : {id: "operator3", type: "button", value: "*", onclick:""},
    operator4 : {id: "operator4", type: "button", value: "/", onclick:""},
    buttonDec : {id: "buttonDec", type: "button", value: ".", onclick:""},
    buttonEqu : {id: "buttonEqu", type: "button", value: "=", onclick:""},
    buttonClear : {id: "buttonClear", type: "button", value: "C", onclick:""},
    buttonMR : {id: "buttonMR", type: "button", value: "MR", onclick:""},
    buttonMSub : {id: "buttonMSub", type: "button", value: "M-", onclick:""},
    buttonMAdd : {id: "buttonMAdd", type: "button", value: "M+", onclick:""},
    buttonMC : {id: "buttonMC", type: "button", value: "MC", onclick:""},
  },

  Controller : {
    numberHandler : function(that) {
      // Concatenates number on the text row
      document.getElementById("textRow").value = document.getElementById("textRow").value += that.value;
    },
    
    decimalHandler : function(that) {
      // Only allows decimals in the string if they haven't already been added
      if (!document.getElementById("textRow").value.includes(that.value)) {
        document.getElementById("textRow").value = document.getElementById("textRow").value += that.value;
      }
    },
    
    clearHandler : function() {
      document.getElementById("textRow").value = "";
    },
    
    operatorHandler : function(that) {
      // Un-highlight previously selected operator
      for (var i = 1; i < 5; i++) {
        if (document.getElementById("operator" + i).style.color == "red") {
          document.getElementById("operator" + i).style.color = "";
        }
      }

      // If mem1 hasn't been filled yet
      if (Calc.Model.mem1 == "") {
        Calc.Model.mem1 = document.getElementById("textRow").value;
        document.getElementById("textRow").value = "";
      }

      // Select operator
      Calc.Model.operator = that.value;
      that.style.color = "red";
    }
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
    s += Calc.displayElement(Calc.View.number7);
    s += Calc.displayElement(Calc.View.number8);
    s += Calc.displayElement(Calc.View.number9);
    s += Calc.displayElement(Calc.View.operator1);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.number4);
    s += Calc.displayElement(Calc.View.number5);
    s += Calc.displayElement(Calc.View.number6);
    s += Calc.displayElement(Calc.View.operator2);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.number1);
    s += Calc.displayElement(Calc.View.number2);
    s += Calc.displayElement(Calc.View.number3);
    s += Calc.displayElement(Calc.View.operator3);
    s += "</tr></td><tr><td>";
    s += Calc.displayElement(Calc.View.number0);
    s += Calc.displayElement(Calc.View.buttonDec);
    s += Calc.displayElement(Calc.View.buttonEqu);
    s += Calc.displayElement(Calc.View.operator4);
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
      Calc.View["number" + i].onclick = "Calc.Controller.numberHandler(this)"; 
    }

    for (var i = 1; i < 5; i++) {
      Calc.View["operator" + i].onclick = "Calc.Controller.operatorHandler(this)"; 
    }

    Calc.View.buttonDec.onclick = "Calc.Controller.decimalHandler(this)";

    Calc.View.buttonClear.onclick = "Calc.Controller.clearHandler()";
  }
}