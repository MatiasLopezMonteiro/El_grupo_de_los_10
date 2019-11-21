
//Game variables
var miMovimento;
var player1, player1Atk, player1Dmg, player2, player2Atk, player2Dmg;
var line1, line2, fill1, fill2;
const frames1 = [];
const framesAtk1 = [];
const framesDmg1 = [];
const frames2 = [];
const framesAtk2 = [];
const framesDmg2 = [];
var golpe = false;
var myBreak;
let _w = window.innerWidth;
let _h = window.innerHeight;
var jugador1 = {

    VidaMax: 95,
    Vida: 95,
    Ataque: 10,
    Defensa: 8,
    Velocidad: 12.5

}
var jugador2 = {

    VidaMax: 100,
    Vida: 100,
    Ataque: 10,
    Defensa: 11,
    Velocidad: 9

}
var healts = {

    high: {

        line: 0xe4f9e4,
        fill: 0x52ff52

    },
    mid: {

        line: 0xf9f9e4,
        fill: 0xffcd52

    },
    low: {

        line: 0xf9e4e4,
        fill: 0xff5252

    }

}
line1 = healts.high.line;
line2 = healts.high.line;
fill1 = healts.high.fill;
fill2 = healts.high.fill;
//

//Iniciar la aplicacion
const app = new PIXI.Application({

    width: _w,
    height: _h,

});
/*document.body.appendChild(app.view);
app.renderer.antialias = true;*/
//

//Iniciar la aplicacion
const fight = new PIXI.Application({

    width: _w,
    height: _h,

});
document.body.appendChild(fight.view);
fight.renderer.antialias = true;
const asd = new PIXI.Text('Esperando jugador 2');
asd.style = {fill: 0xffffff};
asd.x = 0;
asd.y = 0;
fight.stage.addChild(asd);
setTimeout(function(){
    
    document.body.appendChild(app.view);
    app.renderer.antialias = true;

}, 5000);
//

//Responsive design variables
var barHigh = 30 - (app.screen.height / 17);
var barWidht = 400 - (app.screen.width / 12.6);
var aVida1 = barWidht;
var aVida2 = barWidht;
var buttonHigh = 87.5;
var buttonWidht =  171.6;
var habilidad2Xp, habilidad3Xp, habilidad4Xp;
var mobile = false;
const ticker = new PIXI.Ticker();
var tic1 = new PIXI.Ticker();
tic1.speed = 0.7;
var tic2 = new PIXI.Ticker();
tic2.speed = 0.7;
//

//Cargar sprites
app.loader
    .add('corti', 'assets/corti1/spritesheet.json')
    .add('cortiAtk', 'assets/cortiAtk1/spritesheet.json')
    .add('cortiDmg', 'assets/cortiDmg1/spritesheet.json')
    .add('diNardo', 'assets/diNardo2/spritesheet.json')
    .add('diNardoAtk', 'assets/diNardoAtk2/spritesheet.json')
    .add('diNardoDmg', 'assets/diNardoDmg2/spritesheet.json')
    .load(onplayer1Load);


function onplayer1Load() {

    for (let i = 0; i < 6; i++)
        frames1.push(PIXI.Texture.from(`corti1-${i}.png`)); 

    player1 = new PIXI.AnimatedSprite(frames1);
    player1.anchor.set(0.5);
    player1.animationSpeed = 0.1;
    player1.play();

    app.stage.addChild(player1);

    player1.interactive = true

    for (let i = 0; i < 10; i++)
        framesAtk1.push(PIXI.Texture.from(`cortiAtk1-${i}.png`));
    for (let i = 0; i < 12; i++)
        framesDmg1.push(PIXI.Texture.from(`cortiDmg1-${i}.png`));

    for (let i = 0; i < 6; i++)
        frames2.push(PIXI.Texture.from(`diNardo2-${i}.png`)); 

    player2 = new PIXI.AnimatedSprite(frames2);
    player2.anchor.set(0.5);
    player2.animationSpeed = 0.1;
    player2.play();

    app.stage.addChild(player2);

    player2.interactive = true

    for (let i = 0; i < 17; i++)
        framesAtk2.push(PIXI.Texture.from(`diNardoAtk2-${i}.png`));
    for (let i = 0; i < 10; i++)
        framesDmg2.push(PIXI.Texture.from(`diNardoDmg2-${i}.png`));

    //axios.get('https://el-grupo-de-los-10.herokuapp.com/api')
    axios.get('http://localhost:4000/api')
    .then(res => {
        console.log(res.data);
    });
    animateSprite();

}
//

//Responsive
function animateSprite() {

    player1.x = app.screen.width / 4.3;
    player1.y = app.screen.height / 3;
    player1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    player2.x = app.screen.width / 1.3;
    player2.y = app.screen.height / 3;
    player2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)

}

function animateAll() {

    var responsiveButtonsY;
    var habilidad2X, habilidad3X, habilidad4X;
    var textWidht, butWid;
    //Soporte para telefonos
    if(barHigh > -30) barHigh = -30;
    if(app.screen.width <= 800){

        if (!mobile) buttonWidht *= 2;
        mobile = true;
        responsiveButtonsY = app.renderer.height / 1.2;
        habilidad2X = app.renderer.width / 1.7;
        habilidad3X = app.renderer.width / 4.3;
        habilidad4X = app.renderer.width / 1.7;
        habilidad2Xp = -90;
        habilidad3Xp = -110;
        habilidad4Xp = -90;
        textWidht = 1.5;

    }else{

        if(mobile) buttonWidht /= 2;
        mobile = false;
        responsiveButtonsY = app.renderer.height / 1.5;
        habilidad2X = app.renderer.width / 2.43;
        habilidad3X = app.renderer.width / 1.7;
        habilidad4X = app.renderer.width / 1.3;
        habilidad2Xp = -100;
        habilidad3Xp = -90;
        habilidad4Xp = -80;
        textWidht = 0.75;

    }
    ///

    animateHealtBars();

    //Botones
    Habilidad1.x = app.renderer.width / 4.3;
    Habilidad1.y = app.renderer.height / 1.5;
    Habilidad1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad1.clear()
    Habilidad1.lineStyle(3, 0xebf9e4);
    Habilidad1.beginFill(0xdfdfdf)
    Habilidad1.drawRect(-110, -50, buttonWidht, buttonHigh);
    Habilidad1.endFill();
    
    Habilidad2.x = habilidad2X;
    Habilidad2.y = app.renderer.height / 1.5;
    Habilidad2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad2.clear()
    Habilidad2.lineStyle(3, 0xebf9e4);
    Habilidad2.beginFill(0xdfdfdf)
    Habilidad2.drawRect(habilidad2Xp, -50, buttonWidht, buttonHigh);
    Habilidad2.endFill();

    Habilidad3.x = habilidad3X;
    Habilidad3.y = responsiveButtonsY;
    Habilidad3.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad3.clear()
    Habilidad3.lineStyle(3, 0xebf9e4);
    Habilidad3.beginFill(0xdfdfdf)
    Habilidad3.drawRect(habilidad3Xp, -50, buttonWidht, buttonHigh);
    Habilidad3.endFill();

    Habilidad4.x = habilidad4X;
    Habilidad4.y = responsiveButtonsY;
    Habilidad4.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    Habilidad4.clear()
    Habilidad4.lineStyle(3, 0xebf9e4);
    Habilidad4.beginFill(0xdfdfdf)
    Habilidad4.drawRect(habilidad4Xp, -50, buttonWidht, buttonHigh);
    Habilidad4.endFill();
    ///

    //Texto
    nombre1.scale = new PIXI.Point(textWidht, 1);
    nombre2.scale = new PIXI.Point(textWidht, 1);
    nombre3.scale = new PIXI.Point(textWidht, 1);
    nombre4.scale = new PIXI.Point(textWidht, 1);
    ///
    
};

function animateHealtBars(){

    //Barras de vida
    vida1.clear();
    vida1.lineStyle(3, line1);
    vida1.beginFill(fill1);
    vida1.drawRect(-73, -30, aVida1, barHigh);
    vida1.endFill();
    vida1.x = app.renderer.width / 6.1;
    vida1.y = app.renderer.height / 9;
    vida1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    fondo1.clear()
    fondo1.lineStyle(3, line1);
    fondo1.beginFill(line1);
    fondo1.drawRect(-73, -30, barWidht, barHigh);
    fondo1.endFill();
    fondo1.x = app.renderer.width / 6.1;
    fondo1.y = app.renderer.height / 9;
    fondo1.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    vida2.clear();
    vida2.lineStyle(3, line2);
    vida2.beginFill(fill2);
    vida2.drawRect(-73, -30, aVida2, barHigh);
    vida2.endFill();
    vida2.x = app.renderer.width / 1.5;
    vida2.y = app.renderer.height / 9;
    vida2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000)
    
    fondo2.clear()
    fondo2.lineStyle(3, line2);
    fondo2.beginFill(line2);
    fondo2.drawRect(-73, -30, barWidht, barHigh);
    fondo2.endFill();
    fondo2.x = app.renderer.width / 1.5;
    fondo2.y = app.renderer.height / 9;
    fondo2.scale = new PIXI.Point(app.screen.width / 1000, app.screen.height / 1000);

}

window.addEventListener('resize', resize);
function resize(){

    _w = window.innerWidth;
    _h = window.innerHeight;
    app.renderer.resize(_w, _h);
    animateSprite();
    animateAll();

}
//

//Inicializar barras de vida
let fondo1 = new PIXI.Graphics();
app.stage.addChild(fondo1);

let fondo2 = new PIXI.Graphics();
app.stage.addChild(fondo2);

let vida1 = new PIXI.Graphics();
app.stage.addChild(vida1);

let vida2 = new PIXI.Graphics();
app.stage.addChild(vida2);
//

//Inicializar botones
let Habilidad1 = new PIXI.Graphics();
app.stage.addChild(Habilidad1);
Habilidad1.interactive = true
Habilidad1.buttonMode = true
Habilidad1
    .on('pointerover', habilidad1Over)
    .on('pointerout', habilidad1Out)
    .on('pointerdown', combate);

let Habilidad2 = new PIXI.Graphics();
app.stage.addChild(Habilidad2);
Habilidad2.interactive = true
Habilidad2.buttonMode = true
Habilidad2
    .on('pointerover', habilidad2Over)
    .on('pointerout', habilidad2Out)
    .on('pointerdown', combate);

let Habilidad3 = new PIXI.Graphics();
app.stage.addChild(Habilidad3);
Habilidad3.interactive = true
Habilidad3.buttonMode = true
Habilidad3
    .on('pointerover', habilidad3Over)
    .on('pointerout', habilidad3Out)
    .on('pointerdown', combate);

let Habilidad4 = new PIXI.Graphics();
app.stage.addChild(Habilidad4);
Habilidad4.interactive = true
Habilidad4.buttonMode = true
Habilidad4
    .on('pointerover', habilidad4Over)
    .on('pointerout', habilidad4Out)
    .on('pointerdown', combate);
//

//Interacciones con el mouse
function habilidad1Over(){

    Habilidad1.clear()
    Habilidad1.lineStyle(3, 0xf3ffed);
    Habilidad1.beginFill(0xa0faa0)
    Habilidad1.drawRect(-110, -50, buttonWidht, buttonHigh);
    Habilidad1.endFill();
    miMovimento = 1;

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
    miMovimento = 2;

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
    miMovimento = 3;

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
    miMovimento = 4;

}

function habilidad4Out(){

    Habilidad4.clear()
    Habilidad4.lineStyle(3, 0xf3ffed);
    Habilidad4.beginFill(0xdfdfdf)
    Habilidad4.drawRect(habilidad4Xp, -50, buttonWidht, buttonHigh);
    Habilidad4.endFill();

}
//

//Inicializar texto
const nombre1 = new PIXI.Text('Defensa dorada');
nombre1.x = ((Habilidad1.getBounds().width - nombre1.getBounds().width) + (nombre1.getBounds().width / 2)) + ((nombre1.getBounds().width / 10) - 20);
nombre1.y = -20;
Habilidad1.addChild(nombre1);
const nombre2 = new PIXI.Text('Lanza oro');
nombre2.x = ((Habilidad2.getBounds().width - nombre2.getBounds().width) + (nombre2.getBounds().width / 2)) + ((nombre2.getBounds().width / 10) - 10);
nombre2.y = -20;
Habilidad2.addChild(nombre2);
const nombre3 = new PIXI.Text('Batiseñal');
nombre3.x = ((Habilidad3.getBounds().width - nombre3.getBounds().width) + (nombre3.getBounds().width / 2)) + (nombre3.getBounds().width / 10);
nombre3.y = -20;
Habilidad3.addChild(nombre3);
const nombre4 = new PIXI.Text('Refugio');
nombre4.x = ((Habilidad4.getBounds().width - nombre4.getBounds().width) + (nombre4.getBounds().width / 2)) + ((nombre4.getBounds().width / 10) + 10);
nombre4.y = -20;
Habilidad4.addChild(nombre4);
//

animateAll();

function combate(){

    myBreak = true;
    switch(miMovimento){

        case 1:

            jugador1.Defensa += 1.5;
            jugador1.Velocidad -= 1;
            break;
        
        case 2:

            jugador2.Vida -= (20 * jugador1.Ataque) / jugador2.Defensa
            if(jugador2.Vida < 0) jugador2.Vida = 0
            golpe = true
            break;

        case 3:

            jugador2.Vida -= (30 * jugador1.Ataque) / jugador2.Defensa
            if(jugador2.Vida < 0) jugador2.Vida = 0
            golpe = true
            break;

        case 4:

            break;

    }
    player1.textures = framesAtk1;
    player1.play();
    var first = true;
    var ready = false;
    tic1.start();
    tic1.add(() => {

        if(golpe){

            if(ready){

                if(!(aVida1 <= ((jugador1.Vida * barWidht) / jugador1.VidaMax))) 
                    aVida1--;
                if(!(aVida2 <= ((jugador2.Vida * barWidht) / jugador2.VidaMax)))
                    aVida2--;

                if(((aVida1 * 100) / barWidht) > 45){

                    line1 = healts.high.line;
                    fill1 = healts.high.fill;

                }else if (((aVida1 * 100) / barWidht) > 20){

                    line1 = healts.mid.line;
                    fill1 = healts.mid.fill;

                }else{

                    line1 = healts.low.line;
                    fill1 = healts.low.fill;

                }

                if(((aVida2 * 100) / barWidht) > 45){

                    line2 = healts.high.line;
                    fill2 = healts.high.fill;

                }else if (((aVida2 * 100) / barWidht) > 20){

                    line2 = healts.mid.line;
                    fill2 = healts.mid.fill;

                }else{

                    line2 = healts.low.line;
                    fill2 = healts.low.fill;

                }
                animateHealtBars();
                if(player2.currentFrame == (player2.totalFrames - 1)){

                    golpe = false;
                    setTimeout(function(){

                        player2.textures = frames2;
                        player2.play();
                        tic1.stop();
                        first = true;
                        secondTurn();

                    }, 500);

                }

            }
            if (first){

                player2.textures = framesDmg2;
                player2.play();
                setTimeout(function(){ready = true; first = false;}, 1500)

            }

        }
        if(player1.currentFrame == (player1.totalFrames - 1)) {
                    
            player1.textures = frames1;
            player1.play();
            if(!golpe){
                
                tic1.stop();
                secondTurn();

            }

        }

    });
    
}

function secondTurn(){

    if(myBreak){

        myBreak = false;
        var suMovimiento = Math.floor((Math.random() * 4) + 1);
        console.log(suMovimiento);
        switch(suMovimiento){

            case 1:

                jugador2.Defensa += 1;
                break;

            case 2:

                console.log('2');
                break;

            case 3:

                jugador1.Vida -= (20 * jugador2.Ataque) / jugador1.Defensa;
                if(jugador1.Vida < 0) jugador1.Vida = 0;
                golpe = true;
                break;

            case 4:

                jugador2.Vida -= 30;
                if(jugador2.Vida < 0) jugador2.Vida = 0;
                jugador2.Defensa += 1.5;
                jugador2.Ataque += 0.5;
                break;

        }
        player2.textures = framesAtk2;
        player2.play();
        var first = true;
        var ready = false;
        tic2.start();
        tic2.add(() => {

            if(ready){

                if(!(aVida1 <= ((jugador1.Vida * barWidht) / jugador1.VidaMax))) 
                    aVida1--;
                if(!(aVida2 <= ((jugador2.Vida * barWidht) / jugador2.VidaMax)))
                    aVida2--;

                if(((aVida1 * 100) / barWidht) > 45){

                    line1 = healts.high.line;
                    fill1 = healts.high.fill;

                }else if (((aVida1 * 100) / barWidht) > 20){

                    line1 = healts.mid.line;
                    fill1 = healts.mid.fill;

                }else{

                    line1 = healts.low.line;
                    fill1 = healts.low.fill;

                }

                if(((aVida2 * 100) / barWidht) > 45){

                    line2 = healts.high.line;
                    fill2 = healts.high.fill;

                }else if (((aVida2 * 100) / barWidht) > 20){

                    line2 = healts.mid.line;
                    fill2 = healts.mid.fill;

                }else{

                    line2 = healts.low.line;
                    fill2 = healts.low.fill;

                }
                animateHealtBars();
                if(player1.currentFrame == (player1.totalFrames - 1)){

                    golpe == false;
                    setTimeout(function(){

                        console.log('popo');
                        player1.textures = frames1;
                        player1.play();
                        tic2.stop();
                        myBreak = true;
                        return;

                    }, 500);

                }

            }
            if (first){

                if(golpe){

                    player1.textures = framesDmg1;
                    player1.play();

                }
                setTimeout(function(){ready = true; first = false;}, 1500)

            }
            if(player2.currentFrame == (player2.totalFrames - 1)) {
                        
                console.log('popo');
                player2.textures = frames2;
                player2.play();
                if(!golpe) tic2.stop();

            }

        });

    }

}