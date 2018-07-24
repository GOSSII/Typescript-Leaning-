// IIFE - Immediately Invoked Function Expression
(function () {
    // Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var helloLabel;
    var clickMeButton;
    function Init() {
        console.log("Initialization Started...");
        Start();
    }
    function Start() {
        console.log("Starting Application...");
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        Main();
    }
    function Update() {
        //helloLabel.rotation -= -2;
        stage.update(); // redraws the stage
    }
    function clickMeButtonMouserOver() {
        clickMeButton.alpha = 0.7;
    }
    function clickMeButtonMouserOut() {
        clickMeButton.alpha = 1.0;
    }
    function clickMeButtonMouserClick() {
        helloLabel.text = "Clicked !";
        helloLabel.regX = helloLabel.getMeasuredWidth() * 0.5;
        helloLabel.regY = helloLabel.getMeasuredHeight() * 0.5;
    }
    function Main() {
        console.log("Game Started...");
        helloLabel = new objects.Label("Hello, World!", "40px", "Consolas", "#000000", 320, 240, true);
        stage.addChild(helloLabel);
        clickMeButton = new createjs.Bitmap("./Assets/images/clickMeButton.png");
        clickMeButton.regX = clickMeButton.getBounds().width * 0.5;
        clickMeButton.regY = clickMeButton.getBounds().height * 0.5;
        clickMeButton.x = 320;
        clickMeButton.y = 340;
        stage.addChild(clickMeButton);
        clickMeButton.on("mouseovere", clickMeButtonMouserOver);
        clickMeButton.on("mouseovere", clickMeButtonMouserOut);
        clickMeButton.on("mouseovere", clickMeButtonMouserClick);
    }
    window.onload = Init;
})();
"";
//# sourceMappingURL=game.js.map