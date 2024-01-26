$(document).ready(function(){
    $('#carousel').slick({
        autoplay: true,
    })

    $('.menu').click(function(){
        $('nav').slideToggle(); // alterna o estado do menu, oculta se exibido e exibe se oculto
        alert($(this).position());
    })

    // $('html').on('click',function(){
    //     alert($(this));
    // })

    $('#txtFone').mask('(00) 00000-0000',{
        placeholder: '(__) _____-____'

    })

    $('#frmContato').validate({
        rules: {
            txtNome: {
                required: true
            },
            txtEmail: {
                required: true,
                email: true
            },
            txtFone: {
                required: true
            },
            txtVeiculo: {
                required: false
            },
            txtMensagem: {
                required: true
            }
        },
        messages: {
            txtNome: 'Nome obrigatório!',
            txtFone: 'Telefone é obrigatório!',
            txtEmail: 'E-mail é obrigatório!',
            txtMensagem: 'Você precisa digitar uma mensagem!'
        },
        submitHandler: function(form){
            console.log(form)
        },
        invalidHandler: function(e,validador){
            let camposIncorretos = validador.numberOfInvalids();
            if(camposIncorretos){
                alert(`Existem "${camposIncorretos}" campos incorretos! Por favor, corrija antes de prosseguir.`);
            }
        }
    })

    $('.lista-veiculos button').click(function(){
        const dest = $('#contatos');

        $('html').animate({
            scrollTop: dest.offset().top
        }, 1000)

        $('#txtVeiculo').val($(this).parent().find('h3').text());
        //console.log($('txtVeiculo').val());
    })

});