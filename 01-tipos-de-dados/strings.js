/* Você não pode incluir o mesmo tipo de aspas dentro da sua string, se você usa para conter seu texto. 
O exemplo seguinte resultará em um erro, já que é confuso para o navegador entender onde a string termina:

*/
//var bigmouth = 'I've got no right to take my place...';

/*
Isto nos leva muito bem ao nosso próximo assunto.
Caracteres de escape na string:

Para corrigir o problema anterior, nós precisamos escapar o problema da aspa. 
Caracteres de escape significa que nós fazemos algo para ter certeza que eles são reconhecidos como texto, ou seja, não parte do código. 
Em JavaScript, nós fazemos isso colocando uma barra invertida logo antes do caracter.Tente isso:
*/

var bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

/*
Isto funciona bem. Você pode escapar outros caracteres do mesmo jeito, ex.: \",  e há alguns códigos especiais também.
*/