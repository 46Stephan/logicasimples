/* Crie três variáveis, na primeira variável coloque o total de uma
compra, por exemplo 149.90. Na segunda variável coloque a
quantidade de parcelas, por exemplo 2. Na terceira variável coloque
o valor da parcela. Apresente no documento html as seguintes
informações:
"O valor total da compra foi R$_,_"
"Forma de pagamento: _x de R$_,_"    */

let compraTotal = 149.9;
let qtdParcelas = 2;

let parcelaValor = compraTotal / qtdParcelas;

document.write('A compra teve como valor total de R$: ' +compraTotal+ ' reais. <br />');
document.write('Para a forma de pagamento, a quantidade de parcelas é ' +qtdParcelas+ ' x de R$' +parcelaValor+ ' reais. <br />')