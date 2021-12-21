import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

	public precoAlcool: "precoAlcool"
	public precoGasolina: "precoGasolina"


	//atributo publico para atribuir o valor do resultado
	public resultado: String = "Resultado"

	//metodo para fazer o calculo
	calcular(){
	//validar se os campos foram preenchidos

	if(this.precoAlcool && this.precoGasolina ){
		//variavel para converter a string para int no calculo
		var pAlcool = parseFloat(this.precoAlcool)
		var pGasolina = parseFloat(this.precoGasolina)
		//variavel do resultado
		var res = pAlcool / pGasolina
		if ( res >= 0.72){
			//mensagem de exibicao apos calculo
			this.resultado = "Melhor utilizar GASOLINA!"
		}else{
			this.resultado = "Melhor utilizar ALCOOL!"
		}

	} else{
		this.resultado = "Preencha corretamente os campos!"

	}

	}
}
