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
        var self = this;
        
        //var map = this.createElement();
        tiled = canvas.Tiled.new();
        tiled.load(this, stage, "resources/debugmap.json");

        tiled.ready(function() {
            var tileW = this.getTileWidth(),
                tileH = this.getTileHeight(),
                layerObj = this.getLayerObject();

            self.player = self.createElement();
            self.player.drawImage("grasstile");
            self.player.x = 70;
            self.player.y = 200;
            stage.append(self.player);

            self.scrolling = canvas.Scrolling.new(self, tileW, tileH);
            self.scrolling.setMainElement(self.player);     


            var map = self.scrolling.addScroll({
                element: this.getMap(),
                speed: 1,
                block: true,
                width: this.getWidthPixel(),
                height: this.getHeightPixel(),
            });
            self.scrolling.setScreen(map);

            canvas.Input.keyDown(Input.Left, function() {
                self.player.x -= 10;
            });
            canvas.Input.keyDown(Input.Right, function() {
                self.player.x += 10;
            }); 
        });
    },
    render: function(stage){
        this.scrolling.update();
        stage.refresh(); 
    },
    exit: function(stage){
        
    }
});

