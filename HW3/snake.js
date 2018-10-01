var Snake = {
    Model : {
        x  : 0,
        y : 400,
        currentDir : "R",
        buttonDir : "R",
        isPaused : false,

        timer : setInterval(() => {
            Snake.Controller.updateSnake();
        }, 50)
    },

    View : {
        button1 : {id: "btn1", type: "button", value: "Stop", style: "color:black", onclick: ""},
        button2 : {id: "btn2", type: "button", value: "Turn Left", style: "color:black", onclick: ""},
        button3 : {id: "btn3", type: "button", value: "Turn Right", style: "color:black", onclick: ""},
        canvas : {id: "canvasId", width: "1000", height: "800", style: "border:1px solid #000000;"}
    },

    Controller : {
        buttonHandler : (direction) => {
            Snake.Model.buttonDir = direction;
        },

        updateDir : (nextDir) => {
            switch (Snake.Model.currentDir) {
                case 'U' :
                    if (nextDir == 'L') {
                        Snake.Model.currentDir = 'L'
                    }
                    else {
                        Snake.Model.currentDir = 'R'
                    }
                break;

                case 'D' :
                    if (nextDir == 'L') {
                        Snake.Model.currentDir = 'R'
                    }
                    else {
                        Snake.Model.currentDir = 'L'
                    }
                break;

                case 'L' :
                    if (nextDir == 'L') {
                        Snake.Model.currentDir = 'D'
                    }
                    else {
                        Snake.Model.currentDir = 'U'
                    }
                break;

                case 'R' :
                    if (nextDir == 'L') {
                        Snake.Model.currentDir = 'U'
                    }
                    else {
                        Snake.Model.currentDir = 'D'
                    }
                break;

                default:
                break;
            }
        },

        updateSnake : () => {
            var context = document.getElementById("canvasId").getContext("2d");
            context.fillStyle = "#ffc821";

            switch(Snake.Model.currentDir) {
                case 'U' :
                    context.rect(Snake.Model.x, Snake.Model.y-=1, 10,10); 
                break;

                case 'D' :
                    context.rect(Snake.Model.x, Snake.Model.y+=1, 10,10);
                break;

                case 'L' :
                    context.rect(Snake.Model.x-=1, Snake.Model.y, 10,10); 
                break;

                case 'R' :
                    context.rect(Snake.Model.x+=1, Snake.Model.y, 10,10);
                break;
            }
            context.fill(); 

            if (Snake.Model.x >= 1000 || Snake.Model.x < 0) {
                Snake.Controller.pauseGame();
                alert("You ran into a wall");
            }
            if (Snake.Model.y >= 800 || Snake.Model.y < 0) {
                Snake.Controller.pauseGame();
                alert("You ran into a wall");
            }
        },

        pauseGame : () => {
            clearInterval(Snake.Model.timer);
            Snake.Model.isPaused = true;
        }
    },

    run : () => {
        Snake.attachHandlers();
        return Snake.displayAll();
    },

    displayAll : () => {
        var s = "";
        s += Snake.displayElement(Snake.View.button1);
        s += Snake.displayElement(Snake.View.button2);
        s += Snake.displayElement(Snake.View.button3);
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
        Snake.View.button1.onclick = "Snake.Controller.pauseGame()";
        Snake.View.button2.onclick = "Snake.Controller.updateDir('L')";
        Snake.View.button3.onclick = "Snake.Controller.updateDir('R')";
    }

}