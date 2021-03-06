var nombre1, nombre2, nombre3, nombre4;

//Inicializar botones
let Habilidad1 = new PIXI.Graphics();
gameScreen.addChild(Habilidad1);

let Habilidad2 = new PIXI.Graphics();
gameScreen.addChild(Habilidad2);

let Habilidad3 = new PIXI.Graphics();
gameScreen.addChild(Habilidad3);

let Habilidad4 = new PIXI.Graphics();
gameScreen.addChild(Habilidad4);
//

Habilidad1.interactive = true
Habilidad1.buttonMode = true
Habilidad1
    .on('pointerover', habilidad1Over)
    .on('pointerout', habilidad1Out)
    .on('pointerdown', () => {

        miMovimento = 1;
        tick.start();

    });

Habilidad2.interactive = true
Habilidad2.buttonMode = true
Habilidad2
    .on('pointerover', habilidad2Over)
    .on('pointerout', habilidad2Out)
    .on('pointerdown', () => {

        miMovimento = 2;
        tick.start();

    });

Habilidad3.interactive = true
Habilidad3.buttonMode = true
Habilidad3
    .on('pointerover', habilidad3Over)
    .on('pointerout', habilidad3Out)
    .on('pointerdown', () => {

        miMovimento = 3;
        tick.start();

    });

Habilidad4.interactive = true
Habilidad4.buttonMode = true
Habilidad4
    .on('pointerover', habilidad4Over)
    .on('pointerout', habilidad4Out)
    .on('pointerdown', () => {

        miMovimento = 4;
        tick.start();

    });
//

function onplayer1Load() {

    //Sprites jugador 1
    msg.miPj.routes.standar.sprites.map(function(sprite){
        frames1.push(PIXI.Texture.from(sprite)); 
    })
    player1 = new PIXI.AnimatedSprite(frames1);
    player1.anchor.set(0.5);
    player1.animationSpeed = 0.1;
    player1.play();
    gameScreen.addChild(player1);
    player1.interactive = true

    msg.miPj.routes.atack.sprites.map(function(sprite){
        framesAtk1.push(PIXI.Texture.from(sprite));
    });
    msg.miPj.routes.damage.sprites.map(function(sprite){
        framesDmg1.push(PIXI.Texture.from(sprite));
    });
    //

    //Sprites jugador 2
    msg.suPj.standar.sprites.map(function(sprite){
        frames2.push(PIXI.Texture.from(sprite));
    });
    player2 = new PIXI.AnimatedSprite(frames2);
    player2.anchor.set(0.5);
    player2.animationSpeed = 0.1;
    player2.play();
    gameScreen.addChild(player2);
    player2.interactive = true

    msg.suPj.atack.sprites.map(function(sprite){
        framesAtk2.push(PIXI.Texture.from(sprite));
    });
    msg.suPj.damage.sprites.map(function(sprite){
        framesDmg2.push(PIXI.Texture.from(sprite));
    });
    //

    //Inicializar texto
    nombre1 = new PIXI.Text(msg.miPj.skills[0]);
    nombre1.x = ((Habilidad1.getBounds().width - nombre1.getBounds().width) + (nombre1.getBounds().width / 2)) + ((nombre1.getBounds().width / 10) - 20);
    nombre1.y = -20;
    Habilidad1.addChild(nombre1);
    nombre2 = new PIXI.Text(msg.miPj.skills[1]);
    nombre2.x = ((Habilidad2.getBounds().width - nombre2.getBounds().width) + (nombre2.getBounds().width / 2)) + ((nombre2.getBounds().width / 10) - 10);
    nombre2.y = -20;
    Habilidad2.addChild(nombre2);
    nombre3 = new PIXI.Text(msg.miPj.skills[2]);
    nombre3.x = ((Habilidad3.getBounds().width - nombre3.getBounds().width) + (nombre3.getBounds().width / 2)) + (nombre3.getBounds().width / 10);
    nombre3.y = -20;
    Habilidad3.addChild(nombre3);
    nombre4 = new PIXI.Text(msg.miPj.skills[3]);
    nombre4.x = ((Habilidad4.getBounds().width - nombre4.getBounds().width) + (nombre4.getBounds().width / 2)) + ((nombre4.getBounds().width / 10) + 10);
    nombre4.y = -20;
    Habilidad4.addChild(nombre4);
    //

    animateAll()

}

//Interacciones con el mouse
function habilidad1Over(){

    Habilidad1.clear()
    Habilidad1.lineStyle(3, 0xf3ffed);
    Habilidad1.beginFill(0xa0faa0)
    Habilidad1.drawRect(-110, -50, buttonWidht, buttonHigh);
    Habilidad1.endFill();

}

function habilidad1Out(){

    Habilidad1.clear()
    Habilidad1.lineStyle(3, 0xf3ffed);
    Habilidad1.beginFill(0xdfdfdf)
    Habilidad1.drawRect(-110, -50, buttonWidht, buttonHigh);
    Habilidad1.endFill();

}

function habilidad2Over(){

    Habilidad2.clear()
    Habilidad2.lineStyle(3, 0xf3ffed);
    Habilidad2.beginFill(0xa0faa0)
    Habilidad2.drawRect(habilidad2Xp, -50, buttonWidht, buttonHigh);
    Habilidad2.endFill();

}

function habilidad2Out(){

    Habilidad2.clear()
    Habilidad2.lineStyle(3, 0xf3ffed);
    Habilidad2.beginFill(0xdfdfdf)
    Habilidad2.drawRect(habilidad2Xp, -50, buttonWidht, buttonHigh);
    Habilidad2.endFill();

}

function habilidad3Over(){

    Habilidad3.clear()
    Habilidad3.lineStyle(3, 0xf3ffed);
    Habilidad3.beginFill(0xa0faa0)
    Habilidad3.drawRect(habilidad3Xp, -50, buttonWidht, buttonHigh);
    Habilidad3.endFill();

}

function habilidad3Out(){

    Habilidad3.clear()
    Habilidad3.lineStyle(3, 0xf3ffed);
    Habilidad3.beginFill(0xdfdfdf)
    Habilidad3.drawRect(habilidad3Xp, -50, buttonWidht, buttonHigh);
    Habilidad3.endFill();

}
    
function habilidad4Over(){


    Habilidad4.clear()
    Habilidad4.lineStyle(3, 0xf3ffed);
    Habilidad4.beginFill(0xa0faa0)
    Habilidad4.drawRect(habilidad4Xp, -50, buttonWidht, buttonHigh);
    Habilidad4.endFill();

}

function habilidad4Out(){

    Habilidad4.clear()
    Habilidad4.lineStyle(3, 0xf3ffed);
    Habilidad4.beginFill(0xdfdfdf)
    Habilidad4.drawRect(habilidad4Xp, -50, buttonWidht, buttonHigh);
    Habilidad4.endFill();

}
//

//Inicializar barras de vida
let fondo1 = new PIXI.Graphics();
gameScreen.addChild(fondo1);

let fondo2 = new PIXI.Graphics();
gameScreen.addChild(fondo2);

let vida1 = new PIXI.Graphics();
gameScreen.addChild(vida1);

let vida2 = new PIXI.Graphics();
gameScreen.addChild(vida2);
//