




$(document).ready(function(){

    
    

    
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');
    $toggleCollapse.click(function(){

        $nav.toggleClass('collapse'); 
    });


    $( ".btn-acessar" ).click(function() {
        $(".cardapio").css({"transform": "translateX(0px)"});
      });

    $( ".fechar" ).click(function() {
        $(".cardapio").css({"transform": "translateX(100%)"});
      });

      // FORMULÁRIO

      var $checkboxes = $('#ingredientes-container input[type="checkbox"]');
      $checkboxes.change(function(){
          var countCheckedCheckboxes = $checkboxes.filter(':checked').length; 
          if(countCheckedCheckboxes > 10){     
            $('#count-checked-checkboxes').text(countCheckedCheckboxes + " Ingrediente(s) Selecionado(s)");
            $("#count-checked-checkboxes").css({"color": "red"});
            $("#selected-cbx").css({"display": "none"});
            $("#aviso-ingredientes").css({"display": "initial"});
            valoringrediente = (countCheckedCheckboxes - 10) * 2;    
        } 
        else if((countCheckedCheckboxes - 10) * 2 == 1){
            precoingrediente = precoingrediente + 2;
        }
        else{
            $('#count-checked-checkboxes').text(countCheckedCheckboxes);
            $("#count-checked-checkboxes").css({"color": "black"});
            $("#selected-cbx").css({"display": "initial"});
            $("#aviso-ingredientes").css({"display": "none"});
            precoingrediente = 0;        
        }

          
      });
      
      $('.gordura input').on('change', function() {
        var var1 = $('input[name=gordura]:checked').val(); 
        $("#selected").css({"display": "initial"});
        $('#result').text(var1);
     });

     $( "#btn-enviar" ).click(function() {

        var var1, val2, selec = [ ], var3, var4, add = [];

        
       
            var var1 = $('input[name=gordura]:checked').val(); 
            
            $('#ingredientes-container input:checked').each(function() {
                selec.push($(this).filter(':checked').val());
                });

            var var3 = $( "#massa" ).val();
            var var4 = $( "#molho" ).val();

            var nomenome = $('.nome input[type="text"]').val();
            var endereco = $('.endereco input[type="text"]').val();
            var troco = $('.troco input[type="text"]').val();

            $('#adicionais input:checked').each(function() {
                add.push($(this).filter(':checked').val());
                });

            if(add == ''){
                var add = "Sem adicionais";
            };

            
            
            $('#testeteste').text(var1 + "" + selec);
            window.location = "https://api.whatsapp.com/send?phone=+5599984850548&text= Olá, sou " + nomenome + " e este é meu pedido:%0A[--- Passo 1 ---] " + "*"+var1+"* %0A" + "[--- Ingredientes: ---] " + "*"+selec+"* %0A" + " [--- Tipo de Massa: ---] " + "*"+var3+"* %0A" + " [--- Molho: ---] " + "*"+var4+"* %0A" + " [--- Adicionais: ---] " + "*"+add+"* %0A" + " [--- Meu Endereço: ---] " + "*"+endereco+"* %0A" + " [--- Troco para: ---] " + "*"+troco+"* %0A";

      });

      
      

      var $adicionais = $('#adicionais input[type="checkbox"]');
      var adicional = $adicionais.change(function(){
          var countadd = $adicionais.filter(':checked').length;
            $('#addadd').text(countadd + " Adicional(is) Selecionado(s)");
            if( countadd == 1){
                precoadd = 232323;
            }
            else{
                precoadd = 23232323;
            }
        });

        var precoingrediente = 0;
        var precoadd = 12;
        var precototal = precoingrediente;


        var teste = $('#ingredientes-container input[type="checkbox"]').length;

        $('#total-valor').text(teste);

        




});
