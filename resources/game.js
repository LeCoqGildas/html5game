var canvas = CE.defines("game").
    extend(Input).
    extend(Tiled).
    ready(function() { 
    canvas.Scene.call("MyScene");
});

canvas.Scene.new({
    name: "MyScene",
    materials: {
        images: {
            grasstile: "resources/images/grasstile.png",
            tileset: "resources/images/tileset.png"
        }
    },
    preload: function(stage, percent) {
        
    },
    ready: function(stage){
        var player = this.createElement();
        player.drawImage("grasstile");
        player.x = 70;
        player.y = 200;
        
        var map = this.createElement();
        
        tiled = canvas.Tiled.new();
        tiled.load(this, map, "resources/debugmap.json");
        tiled.ready(function() {
            var tileW = this.getTileWidth(),
                    tileH = this.getTileHeight(),
                    layerObj = this.getLayerObject();
                    
            map.append(player);
        });
        
        canvas.Input.keyDown(Input.Left, function() {
            player.x -= 10;
        });
        canvas.Input.keyDown(Input.Right, function() {
            player.x += 10;
        }); 
    
        stage.append(map);
        
    },
    render: function(stage){
        
        
        stage.refresh();
        
    },
    exit: function(stage){
        
    }
});

