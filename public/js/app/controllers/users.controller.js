( (window, document, Controller, undefined) => {

    'use strict';

    const UsersController = () => {

        let table = $('table');

        const index = function () {
            table.on('delete-row', function (e, data) {
                swal({
                    title: 'Apagar este usuário?',
                    text: '',
                    showCancelButton: true,
                    confirmButtonColor: "#F44336",
                    confirmButtonText: "APAGAR",
                    cancelButtonText: "CANCELAR",
                    closeOnConfirm: false
                },
                function(isConfirm) {
                    if (isConfirm) {
                        let id = data.id;
                        let jQueryPromise = $.ajax(
                            App.Config.getUrl(`admin/api/users/delete/${id}`)
                        );

                        Promise.resolve(jQueryPromise).then(function (result) {
                            table.bootstrapTable('remove', {field: 'id', values: [id]});
                            swal('Apagado!', 'Usuário apagado com sucesso.', 'success');
                        }).catch(function (err) {
                            swal('', 'Não foi possível apagar o usuário.', 'error');
                        });
                    }
                });
            });

            table.on('edit-row', function (e, data) {
                window.location.href = App.Config.getUrl($(this).attr('data-controller') + '/' + data.id);
            });
        };

        return {
            Index: index
        };

    };

    Controller.Users = UsersController();

})(window, document, App.Controller);
