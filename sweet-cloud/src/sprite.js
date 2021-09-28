class Sprite {
    constructor(x, y, largura, altura) {

        this.x = x;

        this.y = y;

        this.largura = largura;

        this.altura = altura;

        this.colorindo = function (xCanvas, yCanvas) {

            ctx.drawImage(img, this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);

        };

    }
}

var fundoImg = new Sprite(0, 0, 800, 400);

var gramaImg = new Sprite(157, 402, 243, 29);

var grama2Img = new Sprite(489, 827, 310, 72);

var skateImg = new Sprite(14, 463, 107, 99);

var skateImg2 = new Sprite(2, 581, 107, 99);

var skateImg3 = new Sprite(185, 717, 109, 100);

var menuInicialImg = new Sprite(123, 445, 316, 254);

var menuPerdeuImg = new Sprite(442, 448, 313, 262);

var novoImg = new Sprite(0, 720, 160, 49);