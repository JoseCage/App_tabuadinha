/////////////////////////////////////////////////////////////////////////////
// Projeto: APP - Tabuadinha
// Autor: Valdiney França
// Versão: 0.0
// Data: 07/03/2014
////////////////////////////////////////////////////////////////////////////

window.onload = function() {

'use strict';

/////////////////////////////////////////////////////////
// Variáveis globais usadas em todo o projeto...
////////////////////////////////////////////////////////

       var buttonAumenta =  document.getElementById('buttonAumenta'),
           buttonDiminui =  document.getElementById('buttonDiminui'),
           saida  =  document.getElementById('saida'),
           aumenta = null, time= null;
          
////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Função se auto executa a cada 1 milissegundo...
//////////////////////////////////////////////////////            

           time =  window.setInterval( function() {

                 saida.innerHTML = '';
           	     var entradaNumber =  Number ( document.getElementById('entradaNumber').value ),
           	         cont = null, operacao;
                     for ( cont = 0; cont <= 10; cont++ ) {
                           operacao = entradaNumber * cont;
                           saida.innerHTML += '<center>' + entradaNumber + ' <span class="x"> x </span> ' + cont + ' = <span>' + operacao + '</span><br></center>';
                  }

           }, 1000 );
   
////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// Incrementa sempre o número 1 e aloca na variável (aumenta)...
//////////////////////////////////////////////////////////////////

           buttonAumenta.onclick = function() {
               
                 aumenta  = aumenta + 1;
                 document.getElementById('entradaNumber').value = aumenta;
              
           }

///////////////////////////////////////////////////////////////////
// Decrementa sempre 1 o valor alocado na variável (aumenta)...
//////////////////////////////////////////////////////////////////

           buttonDiminui.onclick = function() {
               
                 aumenta  = aumenta - 1;
                 document.getElementById('entradaNumber').value = aumenta;
           }

////////////////////////////////////////////////////////////////

} // end window...