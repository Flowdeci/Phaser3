class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log("MainMenu: cosntructor")

    }

    init() {
        console.log("MainMenu: init");
        this.HP = 100;
        this.exp = 0;
        console.log(`HP: ${this.HP} EXP: ${this.exp}`);
    }

    create() {
        console.log("MainMenu: create");

        let playerStats={
            Hp: this.HP,
            EXP: this.EXP,
        }

        this.scene.start('playScene', playerStats);
    }
}