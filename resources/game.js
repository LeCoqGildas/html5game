var canvas = CE.defines("game").ready(function() { 
    canvas.Scene.call("MyScene");
});

canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            grasstile: "images/grasstile.png"
        }
    },
    preload: function(stage, percent) {
        
    },
    ready: function(stage){
        this.element = this.createElement();
        this.element.drawImage("grasstile");
        stage.append(this.element);
        this.element.x = 20;
        this.element.y = 20;
    },
    render: function(stage){
        this.element.x += 1;
        stage.refresh();
    },
    exit: function(stage){
        
    }
});

