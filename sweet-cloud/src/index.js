//DECLARAÇÃO DAS VARIÁVEIS-----------------------------------------------------------------------------

var estadosJogo = {

	//atributo
	jogar: 0,

	//atributo
	jogando: 1,

	//atributo
	perdeu: 2

};

const canvas = document.getElementById("minha-tela");

const ctx = canvas.getContext("2d");


var quadros = 0;


var pulosDisp = 2;


var estadoAtual = 0;


var record = 0;

var img;

var audio1;

var audio2;

var audio3;

var audio4;

var audio5;

var audio6;

//const audio1 = document.getElementById("somPonto");
//audio1.addEventListener("ended", function() { audio1.currentTime = 0; audio1.play(); }, false);

//const button = document.querySelector('button')
//button.addEventListener('click', function(){

	//const audio3 = document.querySelector('audio3')
	//audio3.play()

//});

const fundo = {


	//atributo
	//x: 0,

	//atributo
	//y: 0,

	//atributo
	//alturaFundo: 400,

	//atributo
	//larguraFundo: 800,

	//atributo
    //cor: "#00BFFF",


	colorindo: function () {

		//codigo do metodo que será execultado
		//ctx.fillStyle = this.cor;

		//codigo do metodo que será execultado
		//ctx.fillRect(this.x, this.y, this.larguraFundo, this.alturaFundo);

		fundoImg.colorindo(0, 0);

	}

};

var chao = {

	//atributo
	x: 0,

	//atributo
	y: 350,

	//atributo
	alturaChao: 50,

	//atributo
	larguraChao: 800,

	//atributo
	cor: "#3B6950",


	colorindo: function () {

		//codigo do metodo que será execultado
		ctx.fillStyle = this.cor;

		//codigo do metodo que será execultado
		ctx.fillRect(this.x, this.y, this.larguraChao, this.alturaChao);

	}

};

var menuInicial = {

	//atributo
	x: 251,

	//atributo
	y: 81,

	//atributo
	alturaIniciar: menuInicialImg.altura,

	//atributo
	larguraIniciar: menuInicialImg.largura,

	//atributo
	//cor: "#0000FF",

	colorindo: function () {

		if (estadoAtual == estadosJogo.jogar) {

			//codigo do metodo que será execultado
			//ctx.fillStyle = this.cor;

			//codigo do metodo que será execultado
			//ctx.fillRect(this.x, this.y, this.alturaIniciar, this.larguraIniciar);

			menuInicialImg.colorindo(this.x, this.y);

		}
	}
};

var menuPerdeu = {
	
	//atributo
	x: 248,

	//atributo
	y: 80,

	//atributo
	alturaPerdeu: 200,

	//atributo
	larguraPerdeu: 200,

	//atributo
	cor: "#FF0000",

    //atributo
	xPlacarFinal: 265,

	//atributo
	yPlacarFinal: -10,

	//atributo
	xPlacarFinal2: 250,

	//atributo
	yPlacarFinal2: -10,

	 //atributo
	 xPlacarFinal3: 145,

	 //atributo
	 yPlacarFinal3: -10,

	 //atributo
	 //xRecord: 250,

	 //atributo
	 //yRecord: 90,

	  //atributo
	  xRecord2: 465,

	  //atributo
	  yRecord2: 235,

	  //atributo
	 xRecord3: 450,

	 //atributo
	 yRecord3: 235,

	  //atributo
	  xRecord4: 450,

	  //atributo
	  yRecord4: 235,

	  //atributo
	  xNovo: 320,

	  //atributo
	  yNovo: 140,

	  //atributo
	  corPlacarFinal: "#316FEA",


	colorindo: function () {

		if (estadoAtual == estadosJogo.perdeu) {
			//codigo do metodo que será execultado

			//muros.limpaVetor(); 

			//codigo do metodo que será execultado
			//ctx.fillStyle = this.cor;

			//codigo do metodo que será execultado
			//ctx.fillRect(this.x, this.y, this.alturaPerdeu, this.larguraPerdeu);

			
			menuPerdeuImg.colorindo(this.x, this.y);

			if( bob.placar > record ) {

				//ctx.fillStyle = this.corPlacarFinal;

				//ctx.font = "50px Arial";

				//ctx.fillText("Novo Record!", this.xRecord, this.yRecord);

				novoImg.colorindo(this.xNovo, this.yNovo);

				this.yPlacarFinal = 34;

				this.yPlacarFinal2 = 34;

				this.yPlacarFinal3 = 34;

			} else{

				this.yPlacarFinal = -12;

				this.yPlacarFinal2 = -12;

				this.yPlacarFinal3 = -12;

				if( record < 10 ) {

				ctx.fillStyle = this.corPlacarFinal;

				ctx.font = "50px Fredoka One";

				ctx.fillText(record, this.xRecord2, this.yRecord2);

				} else if ( record >= 10 && record < 100 ) {

                    ctx.fillStyle = this.corPlacarFinal;

				    ctx.font = "50px Fredoka One";

				    ctx.fillText( record, this.xRecord3, this.yRecord3);

				} else if ( record >= 100 ) {

					ctx.fillStyle = this.corPlacarFinal;

				    ctx.font = "50px Fredoka One";

				    ctx.fillText( record, this.xRecord4, this.yRecord4);

				}

			}

			ctx.save();

			//codigo do metodo que será execultado
			ctx.translate(this.larguraPerdeu, this.alturaPerdeu);

            //codigo do metodo que será execultado
			ctx.fillStyle = this.corPlacarFinal;

            //codigo do metodo que será execultado
			if(bob.placar < 10){

				//codigo do if que está dentro do metodo que será execultado
			    ctx.fillText(bob.placar, this.xPlacarFinal, this.yPlacarFinal);

			}else if(bob.placar >= 10 && bob.placar < 100){

				//codigo do else que está dentro do metodo que será execultado
				ctx.fillText(bob.placar, this.xPlacarFinal2, this.yPlacarFinal2);

			}else if ( bob.placar >= 100){

                //codigo do else que está dentro do metodo que será execultado
				ctx.fillText(bob.placar, this.xPlacarFinal3, this.yPlacarFinal3);

			}


			ctx.restore();

		}

	}

};

const semmenuJogando = {

	colorindo: function () {

		if (estadoAtual == estadosJogo.jogando) {
		
			//codigo do metodo que será execultado
			muros.colorindo();
		
		}

	}

};

const bob = {

	//ATRIBUTOS 1
	//atributo
	x: 100,

	x2: 98,

	//atributo
    
	y: 0,

	//atributo
	alturaBloco: skateImg.altura,

	//atributo
	larguraBloco: skateImg.largura,

	tempoMudar: 0,

	//atributo
	//cor: "#FFFF00",

	// @@@ novo atributo
	pisandoEmAlgo: false,
	

	//ATRIBUTOS 2
	
	gravidade: 1.0,

	// de inicio a vel é nula
	velocidade: 0,

	//ATRIBUTOS 3
	//atributo
	
	forcaPulo: 15,

	//atributo
	quantPulos: 0,

	//ATRIBUTOS 4
	//atributo

	buffFlutuar: 0.8,

	//ATRIBUTOS 5
	//atributo
	placar: 0,

	//METODO 1
	
	colorindo: function () {

		//codigo do metodo que será execultado
		//ctx.fillStyle = this.cor;

		if(estadoAtual == estadosJogo.perdeu){

			skateImg3.colorindo(this.x2, this.y);

		}else{

		if (this.placar % 2 == 0) {
			

			skateImg.colorindo(this.x, this.y);

		} else {
			
			skateImg2.colorindo(this.x, this.y);

		}

	}
	//fim da comparacao

},

	//METODO 2

	atualizaQueda: function () {


		this.velocidade += this.gravidade;

		if (this.velocidade >= 9) {

			this.velocidade = 9;

		}

		if (!this.pisandoEmAlgo) {

			this.y += this.velocidade;

		}

		if (this.y >= chao.y - this.alturaBloco) {

			this.y = chao.y - this.alturaBloco;

			this.quantPulos = 0;

			this.pisandoEmAlgo = true;

		}

		var pisandoSobreBlocos = false;

		for (var i = 0; i < muros.vetor.length; i++) {

			if (
				this.x < muros.vetor[i].x + muros.vetor[i].larguraMuros && 
				this.x + bob.larguraBloco >= muros.vetor[i].x
			
			) {
				
				if (this.y + bob.alturaBloco >= chao.y - muros.vetor[i].alturaMuros) {

					if (this.y + bob.alturaBloco >= chao.y - muros.vetor[i].alturaMuros + 30) {

						audio4.play();

						estadoAtual = estadosJogo.perdeu;

						this.gravidade = 1.0;

					} else {

						pisandoSobreBlocos = true;

						this.y = chao.y - muros.vetor[i].alturaMuros - bob.alturaBloco;

						this.pisandoEmAlgo = true;

						//this.quantPulos = 0;

					}

				}

				break;

			}

		}

		if (this.y < chao.y - this.alturaBloco && !pisandoSobreBlocos) {

			this.pisandoEmAlgo = false;

		}

	},

	//METODO 3
	pular: function () {

		if (this.quantPulos < pulosDisp) {
			
			this.velocidade = -this.forcaPulo;

			audio2.play();	
			
			this.quantPulos++;

			this.pisandoEmAlgo = false;

		}

		//else if (this.y = chao.y - this.alturaBloco){
		
		//this.quantPulos = 0

		//}

		//if(this.quantPulos = 1){

		//this.gravidade = 0.3

		//}

	},

	//METODO 4
	flutuar: function () {

		if (this.quantPulos < pulosDisp) {
			
			this.gravidade = 1.0;

		} else {

			this.gravidade = this.buffFlutuar;

			audio3.play();

		}

	},

	//METODO 5
	
	limparPontuacao: function () {

	    //codigo do metodo que será execultado
	    this.velocidade = 0;

		//codigo do metodo que será execultado
		if(this.placar > record) {

			//codigo do if que esta dentro do metodo que será execultado
			record = this.placar

		}

		//codigo do metodo que será execultado
		this.placar = 0;

	}
	
};

var textoPlacar = {

	//atributo
	x: 40,

	//atributo
	y: 70,

	//atributo
	cor: "#fff",

	//metodo
	colorindo: function() {

		//codigo do metodo que será execultado
        ctx.fillStyle = this.cor;

		//codigo do metodo que será execultado
		ctx.font = "50px Fredoka One";

		//codigo do metodo que será execultado
		ctx.fillText(bob.placar, this.x, this.y);

	}

};

const muros = {

	//ATRIBUTOS 1
	vetor: [],

	tempoNascer: 0,

	//METODO 1
	inserirAtributos: function () {

		this.vetor.push({

			//ATRIBUTOS 2 e 3
			//atributo dos elementos do vetor
			x: chao.larguraChao,

			//atributo de aleatoriedade dos elementos do vetor
			// a altura vai variar entre 40 e 150 pixels
			alturaMuros: 40 + Math.floor(111 * Math.random()),

			//atributo de aleatoriedade dos elementos do vetor
			// a largura vai variar entre 180 e 280 pixels
			larguraMuros: 180 + Math.floor(101 * Math.random()),

			//atributo dos elementos do vetor
			cor: "#3B6950",

			//atributo dos elementos do vetor
			//corFlutuar: "#FF0000"

		});

		if( bob.placar <= 3) {

		    this.tempoNascer = 200 + Math.floor(91 * Math.random());

		}else if( bob.placar > 3 && bob.placar < 7) {

			this.tempoNascer = 195 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 7 && bob.placar < 9) {

			this.tempoNascer = 190 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 9 && bob.placar < 11) {

			this.tempoNascer = 185 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 11 && bob.placar < 13) {

			this.tempoNascer = 100 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 13 && bob.placar < 15) {

			this.tempoNascer = 95 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 15 && bob.placar < 17) {

			this.tempoNascer = 90 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 17 && bob.placar < 19) {

			this.tempoNascer = 80 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 19 && bob.placar < 21) {

			this.tempoNascer = 70 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 21) {

			this.tempoNascer = 60 + Math.floor(91 * Math.random());

		}	

	},

	//METODO 2
	colorindo: function () {

		if (this.tempoNascer == 0) {

			this.inserirAtributos();

		} else {

			this.tempoNascer--;

		}

		for (var i = 0; i < this.vetor.length; i++) {

			//if (this.vetor[i].alturaMuros <= 106) {
			
				//codigo do if que será execultado
				ctx.fillStyle = this.vetor[i].cor;

			//} else {

				//codigo do else que será execultado
				//ctx.fillStyle = this.vetor[i].corFlutuar;

			//}

			//codigo do metodo que será execultado
			ctx.fillRect(

				this.vetor[i].x,

				chao.y - this.vetor[i].alturaMuros,

				this.vetor[i].larguraMuros,

				this.vetor[i].alturaMuros

			);

		}

	},

	//METODO 3

	atualizaMov: function () {

		for (var i = 0; i < this.vetor.length; i++) {
		
			if( bob.placar <= 3) {

			    this.vetor[i].x -= 3;

			}else if( bob.placar > 3 && bob.placar < 7) {

                this.vetor[i].x -= 3.3;

			}else if( bob.placar >= 7 && bob.placar < 9) {

                this.vetor[i].x -= 3.6;

			}else if( bob.placar >= 9 && bob.placar < 11) {

                this.vetor[i].x -= 4.0;

			}else if( bob.placar >= 11 && bob.placar < 13) {

                this.vetor[i].x -= 4.4;

			}else if( bob.placar >= 13 && bob.placar < 15) {

                this.vetor[i].x -= 4.8;

			}else if( bob.placar >= 15 && bob.placar < 17) {

                this.vetor[i].x -= 5.2;

			}else if( bob.placar >= 17 && bob.placar < 19) {

                this.vetor[i].x -= 5.6;

			}else if( bob.placar >= 19 && bob.placar < 21) {

                this.vetor[i].x -= 6.0;

			}else if( bob.placar >= 21) {

                this.vetor[i].x -= 6.4;

			}

			if (this.vetor[i].x <= -this.vetor[i].larguraMuros) {
				
				bob.placar++;

                audio1.play();
				
				this.vetor.splice(i, 1);

			}

		}

	},

	//METODO 4

	limpaVetor: function () {

		//codigo do metodo que será execultado
		this.vetor = [];

	}

};

//var dificuldade = {

	//aumentoVelocidade: function () {

		//if (bob.placar > 5 && bob.placar < 10) {

            //muros.vetor[i].x = -100;

		//}

	//}

//};

const gramas = {
	
	//ATRIBUTOS 1
	vetor2: [],

	tempoNascer2: 0,

	//METODO 1
	inserirAtributos: function () {

		this.vetor2.push({
			
			//ATRIBUTOS 2 e 3
			x: chao.larguraChao, 

	        y: 321,

		});

		if( bob.placar <= 3) {

		    this.tempoNascer2 = 200 + Math.floor(101 * Math.random());

		}else if( bob.placar > 3 && bob.placar < 7) {

			this.tempoNascer2 = 200 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 7 && bob.placar < 9) {

			this.tempoNascer2 = 200 + Math.floor(81 * Math.random());

		}else if( bob.placar >= 9 && bob.placar < 11) {

			this.tempoNascer2 = 100 + Math.floor(71 * Math.random());

		}else if( bob.placar >= 11 && bob.placar < 13) {

			this.tempoNascer2 = 100 + Math.floor(61 * Math.random());

		}else if( bob.placar >= 13 && bob.placar < 15) {

			this.tempoNascer2 = 100 + Math.floor(51 * Math.random());

		}else if( bob.placar >= 15 && bob.placar < 17) {

			this.tempoNascer2 = 60 + Math.floor(41 * Math.random());

		}else if( bob.placar >= 17 && bob.placar < 19) {

			this.tempoNascer2 = 60 + Math.floor(31 * Math.random());

		}else if( bob.placar >= 19 && bob.placar < 21) {

			this.tempoNascer2 = 60 + Math.floor(21 * Math.random());

		}else if( bob.placar >= 21) {

			this.tempoNascer2 = 60 + Math.floor(11 * Math.random());

		}	

	},

	//METODO 2
	colorindo: function () {

		if (this.tempoNascer2 == 0) {

			this.inserirAtributos();

		} else {

			this.tempoNascer2--;

		}

		for (var j = 0; j < this.vetor2.length; j++) {
	
				//codigo do if que será execultado
				gramaImg.colorindo(this.vetor2[j].x, this.vetor2[j].y);

		}

	},

	//METODO 3
	atualizaMov: function () {

		for (var j = 0; j < this.vetor2.length; j++) {
			
			if( bob.placar <= 3) {

			    this.vetor2[j].x -= 1;

			}else if( bob.placar > 3 && bob.placar < 7) {

                this.vetor2[j].x -= 1.3;

			}else if( bob.placar >= 7 && bob.placar < 9) {

                this.vetor2[j].x -= 1.6;

			}else if( bob.placar >= 9 && bob.placar < 11) {

                this.vetor2[j].x -= 2.0;

			}else if( bob.placar >= 11 && bob.placar < 13) {

                this.vetor2[j].x -= 2.4;

			}else if( bob.placar >= 13 && bob.placar < 15) {

                this.vetor2[j].x -= 2.8;

			}else if( bob.placar >= 15 && bob.placar < 17) {

                this.vetor2[j].x -= 3.2;

			}else if( bob.placar >= 17 && bob.placar < 19) {

                this.vetor2[j].x -= 3.6;

			}else if( bob.placar >= 19 && bob.placar < 21) {

                this.vetor2[j].x -= 4.0;

			}else if( bob.placar >= 21) {

                this.vetor2[j].x -= 4.4;

			}

			if (this.vetor2[j].x <= - gramaImg.largura) {
				
				this.vetor2.splice(j, 1);

			}

		}

	},

	//METODO 4
	
	limpaVetor: function () {

		//codigo do metodo que será execultado
		this.vetor2 = [];

	}

};

const gramas2 = {

	//ATRIBUTOS 1
	vetor3: [],

	tempoNascer3: 0,

	//METODO 1
	inserirAtributos: function () {

		this.vetor3.push({
			
			//ATRIBUTOS 2 e 3
			x: chao.larguraChao, 

	        y: 330 + Math.floor(21 * Math.random()),

		});

		if( bob.placar <= 3) {

		    this.tempoNascer3 = 20 + Math.floor(101 * Math.random());

		}else if( bob.placar > 3 && bob.placar < 7) {

			this.tempoNascer3 = 20 + Math.floor(101 * Math.random());

		}else if( bob.placar >= 7 && bob.placar < 9) {

			this.tempoNascer3 = 20 + Math.floor(101 * Math.random());

		}else if( bob.placar >= 9 && bob.placar < 11) {

			this.tempoNascer3 = 20 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 11 && bob.placar < 13) {

			this.tempoNascer3 = 20 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 13 && bob.placar < 15) {

			this.tempoNascer3 = 20 + Math.floor(91 * Math.random());

		}else if( bob.placar >= 15 && bob.placar < 17) {

			this.tempoNascer3 = 20 + Math.floor(81 * Math.random());

		}else if( bob.placar >= 17 && bob.placar < 19) {

			this.tempoNascer3 = 20 + Math.floor(81 * Math.random());

		}else if( bob.placar >= 19 && bob.placar < 21) {

			this.tempoNascer3 = 20 + Math.floor(81 * Math.random());

		}else if( bob.placar >= 21) {

			this.tempoNascer3 = 20 + Math.floor(81 * Math.random());

		}	

	},

	//METODO 2
	colorindo: function () {

		if (this.tempoNascer3 == 0) {

			this.inserirAtributos();

		} else {		

			this.tempoNascer3--;

		}

		for (var k = 0; k < this.vetor3.length; k++) {

		    	//codigo do if que será execultado
				grama2Img.colorindo(this.vetor3[k].x, this.vetor3[k].y);

		}

	},

	//METODO 3
	atualizaMov: function () {

		for (var k = 0; k < this.vetor3.length; k++) {
			
			if( bob.placar <= 3) {

			    this.vetor3[k].x -= 5;

			}else if( bob.placar > 3 && bob.placar < 7) {

                this.vetor3[k].x -= 5.3;

			}else if( bob.placar >= 7 && bob.placar < 9) {

                this.vetor3[k].x -= 5.6;

			}else if( bob.placar >= 9 && bob.placar < 11) {

                this.vetor3[k].x -= 6.0;

			}else if( bob.placar >= 11 && bob.placar < 13) {

                this.vetor3[k].x -= 6.4;

			}else if( bob.placar >= 13 && bob.placar < 15) {

                this.vetor3[k].x -= 6.8;

			}else if( bob.placar >= 15 && bob.placar < 17) {

                this.vetor3[k].x -= 7.2;

			}else if( bob.placar >= 17 && bob.placar < 19) {

                this.vetor3[k].x -= 7.6;

			}else if( bob.placar >= 19 && bob.placar < 21) {

                this.vetor3[k].x -= 8.0;

			}else if( bob.placar >= 21) {

                this.vetor3[k].x -= 8.4;

			}

			if (this.vetor3[k].x <= - grama2Img.largura) {
				
				this.vetor3.splice(k, 1);

			}

		}

	},

	//METODO 4
	
	limpaVetor: function () {

		//codigo do metodo que será execultado
		this.vetor3 = [];

	}

};

//DECLARAÇÃO DAS FUNÇÕES-----------------------------------------------------------------------------

function kidclick(_clique) {

	if (estadoAtual == estadosJogo.jogando) {

		bob.pular();

		bob.flutuar();

	} else if (estadoAtual == estadosJogo.jogar) {

		estadoAtual = estadosJogo.jogando;

		audio5.play();

		bob.pular();

	} else if (estadoAtual == estadosJogo.perdeu) {

		estadoAtual = estadosJogo.jogar;

		audio6.play();

		bob.limparPontuacao();
	
	}

}

function gameloop() {

	atualizarFatores();

	desenhar();

	window.requestAnimationFrame(gameloop);

}

function atualizarFatores() {

	quadros++;

	bob.atualizaQueda();

	if (estadoAtual == estadosJogo.jogando) {

		muros.atualizaMov();

		gramas.atualizaMov();

		gramas2.atualizaMov();

	} else if (estadoAtual == estadosJogo.perdeu) {

		muros.limpaVetor();

		gramas.limpaVetor();

		gramas2.limpaVetor();

	}

}

function desenhar() {

	fundo.colorindo();
	
	gramas.colorindo();

	textoPlacar.colorindo();

	menuInicial.colorindo();

	menuPerdeu.colorindo();

	semmenuJogando.colorindo();

	chao.colorindo();

	bob.colorindo();

	gramas2.colorindo();
	
}

img = new Image();

img.src = "assets/images/spriteJogo.png";

audio1 = new Audio();

audio1.src = "assets/media/sfx_point.wav";

audio2 = new Audio();

audio2.src = "assets/media/sfx_swooshing.wav";

audio3 = new Audio();

audio3.src = "assets/media/sfx_swooshing.wav";

audio4 = new Audio();

audio4.src = "assets/media/sfx_die.wav";

audio5 = new Audio();

audio5.src = "assets/media/audio.wav";

audio6 = new Audio();

audio6.src = "assets/media/audio.wav";

gameloop();

document.body.onmousedown = kidclick;