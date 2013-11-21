var canvas = CE.defines("game").
    extend(Input).
    ready(function() { 
    canvas.Scene.call("MyScene");
});

canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            grasstile: "resources/images/grasstile.png"
        }
    },
    preload: function(stage, percent) {
        
    },
    ready: function(stage){
        var player = this.createElement();
        player.drawImage("grasstile");
        stage.append(player);
        player.x = 70;
        player.y = 200;
        
        canvas.Input.keyDown(Input.Left, function() {
            player.x -= 10;
        });
        canvas.Input.keyDown(Input.Right, function() {
            player.x += 10;
        }); 
    
        
        
    },
    render: function(stage){
        
        
        stage.refresh();
        
    },
    exit: function(stage){
        
    }
});

