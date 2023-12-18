$(function(){
    $('#meuFormulario').on('submit', function(event){
        const nome = $('#exampleInputName1').val();
        const email = $('#exampleInputEmail1').val();
        const password = $('#exampleInputPassword1').val();

        if(nome === '' || email === '' || password === ''){
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        }
    });

});