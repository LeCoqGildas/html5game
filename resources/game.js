var canvas = CE.defines("game").
    extend(Input).
    extend(Scrolling).
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
        var player = this.player = this.createElement();
        this.player.drawImage("grasstile");
        this.player.x = 70;
        this.player.y = 200;
        
        this.scrolling = canvas.Scrolling.new(this, 64, 64);
        
        var map = this.createElement();
        
        this.scrolling.setMainElement(player);
        
        this.scrolling.addScroll({
            element: map,
            speed: 1,
            block: false,
            width: 1600,
            height: 1600
        });
        
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
        this.scrolling.update();
        stage.refresh(); 
    },
    exit: function(stage){
        
    }
});

