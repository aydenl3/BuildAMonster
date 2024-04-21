class Monster extends Phaser.Scene {
    constructor() {
        super("monsterScene");
        this.my = {sprite: {}};  // Create an object to hold sprite bindings

        //Create constants for the monster location
        this.bodyX = 300;
        this.bodyY = 350;
        this.sKey = null;
        this.fKey = null;
        this.aKey = null;
        this.dKey = null;
        
    }

    // Use preload to load art and sound assets before the scene starts running.
    preload() {
        // Assets from Kenny Assets pack "Monster Builder Pack"
        // https://kenney.nl/assets/monster-builder-pack
        this.load.setPath("./assets/");

        // Load sprite atlas
        this.load.atlasXML("monsterParts", "spritesheet_default.png", "spritesheet_default.xml");
        
        // update instruction text
        document.getElementById('description').innerHTML = '<h2>Monster.js<br>S - smile // F - show fangs<br>A - move left // D - move right</h2>'

    }

    create() {
        let my = this.my;   // create an alias to this.my for readability

        // Create the main body sprite
        //
        // this.add.sprite(x,y, "{atlas key name}", "{name of sprite within atlas}")
        //
        // look in spritesheet_default.xml for the individual sprite names
        // You can also download the asset pack and look in the PNG/default folder.
        my.sprite.leftLeg = this.add.sprite(this.bodyX + 90, this.bodyY + 80, "monsterParts","leg_greenB.png");
        my.sprite.rightLeg = this.add.sprite(this.bodyX - 90, this.bodyY + 80, "monsterParts","leg_greenB.png");
        my.sprite.rightLeg.flipX = true;

        my.sprite.body = this.add.sprite(this.bodyX, this.bodyY, "monsterParts", "body_greenD.png");
        my.sprite.body2 = this.add.sprite(this.bodyX, this.bodyY + 20, "monsterParts", "body_greenC.png");
        my.sprite.body2.flipY = true;

        my.sprite.leftArm = this.add.sprite(this.bodyX + 50, this.bodyY + 130, "monsterParts", "arm_greenB.png");
        my.sprite.rightArm = this.add.sprite(this.bodyX - 50, this.bodyY + 130, "monsterParts", "arm_greenB.png");
        my.sprite.rightArm.flipX = true;

        my.sprite.eye = this.add.sprite(this.bodyX, this.bodyY + 60, "monsterParts", "eye_yellow.png");
        my.sprite.smile = this.add.sprite(this.bodyX, this.bodyY + 110, "monsterParts", "mouthH.png");
        my.sprite.fangs = this.add.sprite(this.bodyX, this.bodyY + 100, "monsterParts", "mouth_closed_fangs.png");
        my.sprite.fangs.visible = false;
     
        my.sprite.horn1 = this.add.sprite(this.bodyX +65, this.bodyY - 50, "monsterParts", "detail_green_horn_small.png");
        my.sprite.horn2 = this.add.sprite(this.bodyX -65, this.bodyY - 50, "monsterParts", "detail_green_horn_small.png");
        my.sprite.horn2.flipX = true;
        my.sprite.horn1.flipY = true;
        my.sprite.horn2.flipY = true;
        my.sprite.ant = this.add.sprite(this.bodyX +50, this.bodyY - 80, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.ant2 = this.add.sprite(this.bodyX -50, this.bodyY - 80, "monsterParts", "detail_green_antenna_small.png");
        my.sprite.ant2.flipX = true;

        this.sKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
        this.fKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        this.aKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
        this.dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
       
    }

    update() {
        let my = this.my;    // create an alias to this.my for readability
        if(this.sKey.isDown && !this.fKey.isDown){
            my.sprite.fangs.visible = false;
            my.sprite.smile.visible = true;
        }
        if(this.fKey.isDown && !this.sKey.isDown){
            my.sprite.smile.visible = false;
            my.sprite.fangs.visible = true;
        }
        if(this.dKey.isDown && !this.aKey.isDown){
            for (const property in my.sprite) {
                my.sprite[property].x = my.sprite[property].x + 1.7;
              }
        }
        if(this.aKey.isDown && !this.dKey.isDown){
            for (const property in my.sprite) {
                my.sprite[property].x = my.sprite[property].x - 1.7;
              }
        }
       
    }

}