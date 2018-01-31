( (window, document, Controller, Config, $, swal) => {

  'use strict';

  const UsersController = () => {

    let table = $('#table-list');

    const index = () => {
      table.on('delete-row', function (e, data) {
        swal({
          title: 'Apagar este usuário?',
          text: '',
          showCancelButton: true,
          confirmButtonColor: '#F44336',
          confirmButtonText: 'APAGAR',
          cancelButtonText: 'CANCELAR',
          closeOnConfirm: false
        },
        function(isConfirm) {
          if (isConfirm) {
            let id = data.id;
            let jQueryPromise = $.ajax(
              Config.getUrl(`admin/users/delete/${id}`)
            );

            Promise.resolve(jQueryPromise).then(function () {
              table.bootstrapTable('remove', {field: 'id', values: [id]});
              swal('Apagado!', 'Usuário apagado com sucesso.', 'success');
            }).catch(function () {
              swal('', 'Não foi possível apagar o usuário.', 'error');
            });
          }
        });
      });

      table.on('edit-row', function (e, data) {
        window.location.href = Config.getUrl($(this).attr('data-controller') + '/' + data.id);
      });
    };

    return {
      Index: index
    };

  };

  Controller.Users = UsersController();

})(window, document, App.Controller, App.Config, $, swal);
