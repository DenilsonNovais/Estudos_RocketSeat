# Tipos numéricos
* <interger>       Número inteiro como -10 ou 223.
* <number>         Número decimal como -2.4, 64 ou 0.234.
* <dimension>      É um <number> com uma unidade junto: 90deg,  2s, 8px.
* <percentagem>    Representa a fração de outro número: 50%.

## Unidades Comuns
* <lenght>         Representa um valor de distância: px, em, vw.
* <angle>          Representa um ângulo: deg, rad, turn.
* <time>           Representa um tempo: s, ms.
* <resolution>     Representa resolução para dispositivos: dpi

## Box Model
- Fundamental para fazer layouts para web
- Maior facilidade para aplicar o CSS

## O que é?
Uma caixa retangular.
Essa caixa possue propriedades de uma caixa (2D)

- Tamanho (largura x altura)     Width | height
- Conteúdo                       Content
- Bordas                         border
- Preenchimento interno          padding
- Espaços fora da caixa          margin

* cada elemento da sua página, será considerado uma caixa. *

## box-sizeng
Como será calculado o tamanho total da caixa?

-content-box | border-box

'''CSS
div {
    box-sizing: border-box;
}

## display: block vs display: inline
- Como as caixas se comportam em relação as outras caixas.
- Comportamento externo das caixas

|  **block**                        |  **inline**                    |
|-----------------------------------|--------------------------------|
| Ocupa toda a linha, colocando o   | Elemento ao lado do outro      |
| proximo elemento abaixo desse     |                                |
|-----------------------------------|--------------------------------|
| Width e height são respeitados    | Width e height não funcionam   |
|-----------------------------------|--------------------------------|
| padding, margin, border irão      | Somente valores horizontais de |
| funcionar normalmente             | margin, padding e border       |
|-----------------------------------|--------------------------------|

exemplos
block: <p>, <div>, <section>, todos os headings <h1>, <h2>,...
inline: <a>, <strong>, <span>, <em>

## margin
Espacos entre os elementos

- margin-top | margin-right | margin-bottom | margin-left
- values: '<length>' | '<percentage>' | auto

'''CSS
div {
    /* shorthand */

    /* top, right, bottom, left */
    margin: 12px 16px 10px 4px;

    /* top, right e left, bottom */
    margin: 12px 16px 0;

    /* top e bottom, right e left */
    margin: 8px 16px;

    /* todos os valores  */
    margin: 8px;

}

## Page layouts
- Flexbox
- Grid

## Posisionamentos
Controlar onde na pagina o elemento ira ficar,
alterando o fluxo normal dos elementos.

- Name: position
- Value: static | relative | absolute | fixed
* static = padrão.
* relative = top, right, bottom, left, z-index
* absolute = top, right, bottom, left, z-index

## Flexbox
* Nos permite posicionar os elementos dentro da caixa.
* Controle em uma dimensão (horizontal ou vertical)
* Alinhamento, direcionamento, ordenamento e tamanho.

'''CSS
div.parent {
    display: flex;
}

## flex-direction
* Qual a direção do flex: horizontal ou vertical
* row | column

## alinhamento
* justify-content
* align-items

## Grid
* Posicionamento dos elementos dentro da caixa.
* Posicionamento horizontal e vertical ao mesmo tempo.
* Pode ser flexivel ou fixo.
* Cria espaços para os elementos filhos habitarem.
