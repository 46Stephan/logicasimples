/*Crie cinco variáveis. Na primeira armazene o nome de um aluno. Na
segunda, terceira e quarta coloque 3 notas (valores de 0 à 10).
Calcule a média das notas e armazene na quinta variável criada.
Apresente no documento html a seguinte informação:
"O aluno _____ ficou com média _,_" */

const nome = 'Stephan';
const note1 = 10;
const note2 = 9;
const note3 = 7;

let media = (note1 + note2 + note3) / 3;

document.write('O aluno ' + nome + ' ficou com média de: ' + media.toFixed(1));