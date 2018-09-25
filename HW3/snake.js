var Snake = {
    Model : {

    },

    View : {
        button1 : {id: "btn", type: "button", value: "Click Me", style: "color:white", onclick: ""},
        canvas : {id: "canvasId", width: "165", height: "145", style: "border:1px solid #000000;"}
    },

    Controller : {
        buttonHandler : () => {
            // getContext() method returns an object that provides methods
            // and properties for drawing on the canvas
            var context = document.getElementById("canvasId").getContext("2d");
            context.fillStyle = "#ffc821";
                    
            //draw a rectangle at 20,20  with  width 150 and height 100
            context.rect(20,20,150,100);       
                    
            //fill the rectangle
            context.fill();
        }
    },

    run : () => {
        Snake.attachHandlers();
        console.log(Snake.displayAll())
        return Snake.displayAll();
    },

    displayAll : () => {
        var s;
        s += Snake.displayElement(Snake.View.button1);
        s += "<br>"
        s += Snake.displayElement(Snake.View.canvas);
        return s;
    },

    displayElement : function (element) {
        var s = "<";
        if (element.id == "canvasId") {
            s += "canvas ";
            s += " width=\"" + element.width + "\"";
            s += " height= \"" + element.height + "\"";
        }
        else {
            s += "input ";
            s += " type=\"" + element.type + "\"";
            s += " value= \"" + element.value + "\"";
            s += " onclick= \"" + element.onclick + "\"";
        }
        s += " id=\"" + element.id + "\"";
        s += " style=\"" + element.style + "\"";
        s+= ">"
        return s;
      
    },

    attachHandlers : () => {
        Snake.View.button1.onclick = "Snake.Controller.buttonHandler()";
    }

}