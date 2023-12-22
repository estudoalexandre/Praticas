const deleteUserController = require("../../controllers/deleteUserController");

// Dentro do seu script cliente (modal.js ou outro arquivo)
$(document).ready(function () {
    // Manipulador de eventos para o botão "Confirmar Exclusão" dentro do modal
    $('#confirmDeleteButton').on('click', function () {
        // Execute a lógica de exclusão do usuário
        const userIdToDelete = $('#userId').val();
        deleteUserController(userIdToDelete);
    });

    // Adicione um manipulador de eventos para o botão "Apagar minha CONTA"
    $('#confirmDeleteModalButton').on('click', function () {
        // Lógica adicional, se necessário, quando o botão "Apagar minha CONTA" for clicado
    });
});
