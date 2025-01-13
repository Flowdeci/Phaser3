class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
        console.log('Play.constructor')
    }

    init(stats) {//get the stats from the plaerStats passed when we init
        console.log("play: init");
        this.HP = stats.HP;
        this.EXP = stats.EXP;
    }

    create() {
        console.log('Play.create');

    }
}