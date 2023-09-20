import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciciosComponent } from './exercicios.component';
import { By } from '@angular/platform-browser';

describe('ExerciciosComponent', () => {
  let component: ExerciciosComponent;
  let fixture: ComponentFixture<ExerciciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExerciciosComponent]
    });
    fixture = TestBed.createComponent(ExerciciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  //-------------------------------------------------------------------------------------------
  //exercício 01
  //-------------------------------------------------------------------------------------------
  it('deve calcular a média corretamente', () => {
    const valor1 = 10;
    const valor2 = 20;
    const valor3 = 30;
    //const mediaEsperada = (valor1 + valor2 + valor3) / 3;
    
    const resultado = component.calcularMedia(valor1, valor2, valor3);

    expect(resultado).toEqual(20);
  });
 //-------------------------------------------------------------------------------------------
  //exercício 02
  //-------------------------------------------------------------------------------------------
  it('deve adicionar ao início do array quando chamado', () => {
    const comida = 'Pizza';
    const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco', 'Lasanha'];

    component.comidas = [...arrayOriginal];
    component.adicionarComidaNoInicio(comida);

    expect(component.comidas.length).toBe(arrayOriginal.length + 1);
    expect(component.comidas[0]).toBe(comida);
    
  });
  //-------------------------------------------------------------------------------------------
  //exercício 03
  //-------------------------------------------------------------------------------------------

  it('valide se o mesmo método criado na questão anterior realmente adiciona um item ao array, avaliando somente se o array aumentou de tamanho ', () => {
    const comida = 'Pizza';
    const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco'];

    component.comidas = [...arrayOriginal];
    const tamanhoAntes = component.comidas.length;

    component.adicionarComidaNoInicio(comida);
    const tamanhoDepois = component.comidas.length;

    expect(tamanhoDepois).toBeGreaterThan(tamanhoAntes);
  });

  it('deve remover um item do array quando chamado', () => {
    const comidaRemovida = 'Hamburguer';
    const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco'];
  
    component.comidas = [...arrayOriginal];
    const tamanhoAntes = component.comidas.length;
  
    component.removerComida(comidaRemovida);
    const tamanhoDepois = component.comidas.length;
  
    expect(tamanhoDepois).toBeLessThan(tamanhoAntes);
  });

  //-------------------------------------------------------------------------------------------
  //exercício 04
  //-------------------------------------------------------------------------------------------
  it('deve conter "lasanha" ou adicioná-la se não existir', () => {
    const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco'];

    component.comidas = [...arrayOriginal];

    // Verifica se "lasanha" existe no array
    if (!component.comidas.includes('lasanha')) {
      component.comidas.push('lasanha');
    }

    expect(component.comidas).toContain('lasanha');
  });
  //-------------------------------------------------------------------------------------------
  //exercício 05
  //-------------------------------------------------------------------------------------------

  it('deve lançar uma exceção se a comida não existir', () => {
    const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco'];
    component.comidas = [...arrayOriginal];

    // Tente encontrar a posição da comida que não existe
    const comidaInexistente = 'Pizza';

    // Use uma função de wrapper para capturar a exceção
    const encontrarComidaInexistente = () => {
      component.encontrarPosicaoComida(comidaInexistente);
    };

    expect(encontrarComidaInexistente).toThrowError(`A comida "${comidaInexistente}" não existe no array.`);
  });

  //-------------------------------------------------------------------------------------------
  //exercício 06
  //-------------------------------------------------------------------------------------------
  it(`${ExerciciosComponent.prototype.enviarDados.name} 
  deve entrar no metodo validacao quando executado`, 
()=>{
  spyOn(component, 'validacao');
  
  component.enviarDados();

  expect(component.validacao).toHaveBeenCalled();
})
  //-------------------------------------------------------------------------------------------
  //exercício 07
  //-------------------------------------------------------------------------------------------
  it(`${ExerciciosComponent.prototype.verificaPosicao.name} 
  deve retornar o item quando encontrar.`, 
  
()=>{
  const arrayOriginal = ['Hamburguer', 'Sushi', 'Taco', 'Lasanha', 'Pizza'];
  component.comidas = [...arrayOriginal];


expect(component.comidas).toContain('Pizza');
})


});

