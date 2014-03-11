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
           aumenta = 1, 
           time= null, 
           tipoOperacao = 'adicao',
           buttonAdicao = document.getElementById('buttonAdicao'),
           buttonSubtracao = document.getElementById('buttonSubtracao'),
           buttonMultiplicacao = document.getElementById('buttonMultiplicacao'),
           buttonDivisao = document.getElementById('buttonDivisao');

           
          
////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Função (time) auto executa a cada 1 milissegundo...
//////////////////////////////////////////////////////            

           time =  window.setInterval( function() {
                   saida.innerHTML = '';
          
               buttonAdicao.onclick = function() {
                   tipoOperacao = 'adicao';
               }

               buttonSubtracao.onclick = function() {
                   tipoOperacao = 'subtracao';
               }

               buttonMultiplicacao.onclick = function() {
                   tipoOperacao = 'multiplicacao';
               }

               buttonDivisao.onclick = function() {
                   tipoOperacao = 'divisao';
               }

/////////////////////////////////////////////////////

              if( tipoOperacao === 'adicao') {

                  buttonAdicao.classList.add('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonMultiplicacao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');
                  
              }

              else if ( tipoOperacao === 'subtracao' ) {

                  buttonSubtracao.classList.add('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonMultiplicacao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');

              }

              else if ( tipoOperacao === 'multiplicacao' ) {

                  buttonMultiplicacao.classList.add('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');

              }

              else if ( tipoOperacao === 'divisao' ) {

                  buttonDivisao.classList.add('menuAtivo'); 
                  buttonMultiplicacao.classList.remove('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  
              }

              var entradaNumber =  Number ( document.getElementById('entradaNumber').value ),
           	      cont = null, operacao = null;
                     
                     for ( cont = 1; cont <= 10; cont++ ) {

                       if ( tipoOperacao === 'adicao' ) {

                           operacao = entradaNumber + cont;
                           saida.innerHTML += '<center>' + entradaNumber + ' <span class="x"> + </span> ' + cont + ' = <span>' + operacao + '</span><br></center>';
                           
                       }

                       else if ( tipoOperacao === 'subtracao' ) {

                         for ( cont = entradaNumber; cont <= ( 10 + entradaNumber ) - 1; cont++ ) {

                           operacao = cont - entradaNumber;
                           saida.innerHTML += '<center>' + cont + ' <span class="x"> - </span> ' + entradaNumber + ' = <span>' + operacao + '</span><br></center>';
                          
                          }

                        }

                       else if  ( tipoOperacao === 'multiplicacao' ) {
                           
                           operacao = entradaNumber * cont;
                           saida.innerHTML += '<center>' + cont + ' <span class="x"> x </span> ' + entradaNumber + ' = <span>' + operacao + '</span><br></center>';
                        
                        }

                       else if  ( tipoOperacao === 'divisao' ) {
                          
                         for ( cont = 1; cont <= 10; cont++ ) {

                           var auxiliar = cont * entradaNumber;
                           operacao =  Math.floor( auxiliar / entradaNumber ) ;

                           if( isNaN( operacao ) ) {
                               saida.innerHTML = '<center><small>0 &divide; 0 = 0 <br>Zero dividido por zero será sempre zero! <b>Entendeu?</b></small></center>';
                           }
                           else {
                               saida.innerHTML += '<center>' + auxiliar + ' <span class="x"> &divide; </span> ' + entradaNumber + ' = <span>' + operacao + '</span><br></center>';
                          }

                        } // end for..

                      } // end else if...

                    } // end firts loop...


           }, 1000 );
   
////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////
// Incrementa sempre o número 1 ao valor alocado na variável (aumenta)...
//////////////////////////////////////////////////////////////////

           buttonAumenta.onclick = function() {
               
                 aumenta  = aumenta + 1;
                 document.getElementById('entradaNumber').value = aumenta;
              
           }

///////////////////////////////////////////////////////////////////
// Decrementa sempre 1 do valor alocado na variável (aumenta)...
//////////////////////////////////////////////////////////////////

           buttonDiminui.onclick = function() {
               
                 aumenta  = aumenta - 1;

                  if ( aumenta < 1 ) {

                       aumenta = 0;
                       document.getElementById('entradaNumber').value = aumenta;
                  }
                  else {
                       document.getElementById('entradaNumber').value = aumenta;
                 }
           }

////////////////////////////////////////////////////////////////


} // end window...