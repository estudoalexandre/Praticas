$(document).ready(function () {
    // Manipulador de eventos para o botão "Confirmar Exclusão" dentro do modal
    $('#confirmDeleteButton').on('click', function () {
        // Lógica para obter o ID do usuário
        const userIdToDelete = $('#userId').val();

        // Lógica para enviar uma solicitação DELETE para o servidor
        $.ajax({
            url: `/delete_user/${userIdToDelete}`,
            type: 'DELETE',
            success: function (result) {
                // Aqui você pode lidar com a resposta do servidor, se necessário
                console.log(result);
            },
            error: function (error) {
                console.error('Erro ao excluir o usuário', error);
                // Aqui você pode lidar com o erro, se necessário
            }
        });

        // Fechar o modal após a confirmação
        $('#confirmDeleteModal').modal('hide');
    });
});
