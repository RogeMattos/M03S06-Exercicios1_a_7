import { Component } from '@angular/core';

@Component({
  selector: 'app-exercicios',
  templateUrl: './exercicios.component.html',
  styleUrls: ['./exercicios.component.css']
})
export class ExerciciosComponent {
  
  //-------------------------------------------------------------------------------------------
  //exercício 01
  //-------------------------------------------------------------------------------------------
  calcularMedia(valor1: number, valor2: number, valor3: number): number {
    return (valor1 + valor2 + valor3) / 3;
  }

  //-------------------------------------------------------------------------------------------
  //exercício 02
  //-------------------------------------------------------------------------------------------

  comidas: string[] = [];

  adicionarComidaNoInicio(nomeComida: string) {
    this.comidas.unshift(nomeComida);
    console.log(`Comida adicionada: ${nomeComida}`);
  }
  //-------------------------------------------------------------------------------------------
  //exercício 03
  //-------------------------------------------------------------------------------------------
  removerComida(nomeComida: string) {
    const index = this.comidas.indexOf(nomeComida);
    if (index !== -1) {
      this.comidas.splice(index, 1);
    }
  }
   //-------------------------------------------------------------------------------------------
  //exercício 05
  //-------------------------------------------------------------------------------------------
  encontrarPosicaoComida(nomeComida: string): number {
    const posicao = this.comidas.indexOf(nomeComida);

    if (posicao !== -1) {
      return posicao;
    } else {
      throw new Error(`A comida "${nomeComida}" não existe no array.`);
    }
  }

  //-------------------------------------------------------------------------------------------
  //exercício 06
  //-------------------------------------------------------------------------------------------

  // variável de controle para rastrear se o método validacao() foi chamado
  validacaoChamada = false;

  enviarDados() {
    // Chama o método validacao()
    this.validacao();
  }

  validacao() {
    // Lógica de validação
    this.validacaoChamada = true;
  }

//-------------------------------------------------------------------------------------------
  //exercício 07
  //-------------------------------------------------------------------------------------------
  verificaPosicao(item:string){
    let index = this.comidas.indexOf(item);
    // console.log(index);
    if(index != -1){
      return item;
    }else{
      throw new Error("Item não encontrado");
    }
  }
  



}
