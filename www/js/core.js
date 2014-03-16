/////////////////////////////////////////////////////////////////////////////
// Projeto: APP - Nossa Tabuadinha
// Autor: Valdiney França
// Email: valdiney.2@hotmail.com
// Versão: 0.4 ( DATADA EM 16/03/2014 )
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
           buttonDivisao = document.getElementById('buttonDivisao'),
           buttonRomano = document.getElementById('romano');

////////////////////////////////////////////////////////

///////////////////////////////////////////////////////
// Função (time) auto executa a cada 1 milissegundo...
//////////////////////////////////////////////////////            

           time =  window.setInterval( function() {
                   saida.innerHTML = '';

///////////////////////////////////////////////////////
// Definindo o tipo de operação que será executada...
////////////////////////////////////////////////////// 

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

               buttonRomano.onclick = function() {
                   tipoOperacao = 'romano';
               }

/////////////////////////////////////////////////////

///////////////////////////////////////////////////////////
// Destaca o tipo da operação que está sendo realizada...
//////////////////////////////////////////////////////////

              if( tipoOperacao === 'adicao') {

                  buttonAdicao.classList.add('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonMultiplicacao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');
                  buttonRomano.classList.remove('menuAtivo');
                  
              }

              else if ( tipoOperacao === 'subtracao' ) {

                  buttonSubtracao.classList.add('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonMultiplicacao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');
                  buttonRomano.classList.remove('menuAtivo');

              }

              else if ( tipoOperacao === 'multiplicacao' ) {

                  buttonMultiplicacao.classList.add('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');
                  buttonRomano.classList.remove('menuAtivo');

              }

              else if ( tipoOperacao === 'divisao' ) {

                  buttonDivisao.classList.add('menuAtivo'); 
                  buttonMultiplicacao.classList.remove('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonRomano.classList.remove('menuAtivo');
                  
              }

              else if ( tipoOperacao === 'romano' ) {

                  buttonRomano.classList.add('menuAtivo'); 
                  buttonMultiplicacao.classList.remove('menuAtivo'); 
                  buttonAdicao.classList.remove('menuAtivo');
                  buttonSubtracao.classList.remove('menuAtivo');
                  buttonDivisao.classList.remove('menuAtivo');
                  
              }

//////////////////////////////////////////////////////////////////////////////

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

                       else if ( tipoOperacao === 'multiplicacao' ) {
                           
                           operacao = entradaNumber * cont;
                           saida.innerHTML += '<center>' + cont + ' <span class="x"> x </span> ' + entradaNumber + ' = <span>' + operacao + '</span><br></center>';
                        
                        }

                       else if  ( tipoOperacao === 'divisao' ) {
                          
                         for ( cont = 1; cont <= 10; cont++ ) {

                           var auxiliar = cont * entradaNumber;
                           operacao =  Math.floor( auxiliar / entradaNumber ) ;

                           if ( isNaN( operacao ) ) {
                               saida.innerHTML = '<center><small>0 &divide; 0 = 0 <br>Zero dividido por zero será sempre zero! <b>Entendeu?</b></small></center>';
                           }
                           else {
                               saida.innerHTML += '<center>' + auxiliar + ' <span class="x"> &divide; </span> ' + entradaNumber + ' = <span>' + operacao + '</span><br></center>';
                          }

                        } // end for..

                      } // end else if...

/////////////////////////////////////////////////////////////////
// Gerando os números Romanos...
////////////////////////////////////////////////////////////////

                         if ( tipoOperacao === 'romano' ) {
                           

                             var numero = entradaNumber, auxiliarRomano = numero, saidaRomano = '';

                             while ( numero / 1000 >= 1 ) {
                                  saidaRomano += 'M'; 
                                  numero = numero - 1000;
                             }

                             if ( numero / 900 >= 1 ) {
                                  saidaRomano += 'CM'; 
                                  numero = numero - 900;
                             }

                             if ( numero / 500 >= 1) {
                                  saidaRomano += 'D';
                                  numero = numero - 500;
                             } 

                             if ( numero / 400 >= 1 ) { 
                                  saidaRomano += 'CD'; 
                                  numero = numero - 400;
                             }

                            while ( numero / 100 >= 1 ) { 
                                 saidaRomano += 'C'; 
                                 numero = numero - 100;
                             }

                             if ( numero / 90 >= 1 ) { 
                                  saidaRomano += 'XC'; 
                                  numero = numero - 90;
                             }

                             if ( numero / 50 >= 1 ) { 
                                  saidaRomano += 'L'; 
                                  numero = numero - 50;
                             }

                             if ( numero / 40 >= 1 ) { 
                                  saidaRomano += 'XL'; 
                                  numero = numero - 40;
                             }

                            while ( numero / 10 >= 1 ) { 
                                 saidaRomano += 'X';
                                 numero = numero - 10;
                             }

                             if ( numero / 9 >= 1 ) { 
                                  saidaRomano += 'IX'; 
                                  numero = numero - 9;
                             }

                             if ( numero / 5 >= 1 ) { 
                                  saidaRomano += 'V'; 
                                  numero = numero - 5;
                             }

                             if ( numero / 4 >= 1 ) { 
                                  saidaRomano += 'IV'; 
                                  numero = numero - 4;
                             }

                            while ( numero >= 1 ) { 
                                 saidaRomano += 'I'; 
                                 numero = numero - 1;
                            }

                           if ( entradaNumber === 0 ) {
                                saida.innerHTML += '<center>Os romanos desconheciam o zero! </center>';
                                break;
                            }

                           else {
                               saida.innerHTML += '<center>' + auxiliarRomano + '<span class="x"> = </span>' + saidaRomano + '</center>';
                                break;
                            }

                          } // end tipo operação romano...

                    } // end firts loop...


           }, 1000 );
   
////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// Incrementa sempre o número 1 ao valor alocado na variável (aumenta)...
//////////////////////////////////////////////////////////////////////////

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