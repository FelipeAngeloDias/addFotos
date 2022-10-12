//Selecionar os elementos do html para fazer ações e animações//
$(document).ready(function(){

    //selecionar o elemento butao do header para fazer a animação de descer//
    $('header button').click(function() {
        $('form').slideDown();
    })
    //selecionar o butão de cancelar para fazer a aniumação retornar//
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })
    //selecionar o botão de enviar, criar função de enviar as imagens para o grid//
    $('form').on('submit', function(e){
        e.preventDefault();
        const novaImagem = $('#novaimagem').val();
        const novoItem = $('<li style="display:none"></li>');
        $(`<img src="${novaImagem}" />`).appendTo(novoItem);
        $(`
        <div class="overflow-img-link">
            <a href="${novaImagem}" target="_blank" title="Ver imagem em tamanho real">
            Ver imagem no tamanho real
            </a>
        </div>        
        `).appendTo(novoItem);
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(2000);
        $(novaImagem).val('');
    })
})



