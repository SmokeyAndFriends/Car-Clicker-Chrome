this.onStart(function() {
    while (true) {
        this.looks.setCostume(UnlockedAvatars[this.UnlockedCars - 1]);
    }
});

this.onStart(function() {
    UnlockedAvatars.length = 0;
    UnlockedAvatars.push("Super car");
});

this.onMessageReceived("Home", function () {
    this.looks.show();
});

this.onMessageReceived("Cusomizer", function () {
    this.looks.hide();
});

this.onMessageReceived("Crates shop", function () {
    this.looks.hide();
});

this.onMessageReceived("Open shops", function () {
    this.looks.hide();
});

this.onMessageReceived("POWER", function () {
    this.looks.setCostume("image1");
});

this.onActorClick(function() {
    if ((this.yeet >= 1)) {
        this.broadcast("click");
        if (((this.looks.getCostumeIndex() == 15) || ((this.looks.getCostumeIndex() == 16) || ((this.looks.getCostumeIndex() == 17) || (this.looks.getCostumeIndex() == 18))))) {
            while (this.sensing.isMouseDown()) { 
                this.looks.setSize(27);
            }
            this.looks.setSize(25);
        } else if ((this.looks.getCostumeIndex() == 12)) {
            while (this.sensing.isMouseDown()) { 
                this.looks.setSize(52);
            }
            this.looks.setSize(50);
        } else {
            while (this.sensing.isMouseDown()) { 
                this.looks.setSize(72);
            }
            this.looks.setSize(70);
        }
    } else {
        this.broadcast("click");
        yeet++;
        quest_items_completed++;
    }
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(25);
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(25);
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(25);
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(70);
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(50);
});

this.onCondition(function() {
}, function() {
    this.looks.setSize(25);
});

