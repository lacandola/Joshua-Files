
// Pegue o documento e ative a função
$(document).ready(function(){

            // Quando a classe menu toggle for clicada
  			   $('.menu-toggle').click(function(){
  				
  			 // Adicione ao nav a classe .active
  				$('nav').toggleClass('active')
  			})

  			// Quando for clicado em algum li de uma ul
  			$('ul li').click(function(){
  			
  			/*	Pegue este elemento que foi clicado
  				E remova de seus irmãos a classe active */
  				$(this).siblings().removeClass('active');

  		    // Adicione ao elemento clicado a classe active
  				$(this).toggleClass('active');
  			})
  		})