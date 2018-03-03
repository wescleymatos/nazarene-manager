( (window, document, Controller, Config, $, swal, CepView) => {

  'use strict';

  const MembersController = () => {

    let table = $('#table-list');

    const index = () => {
      table.on('delete-row', function (e, data) {
        swal(Config.swalConfig, function(isConfirm) {
          if (isConfirm) {
            let id = data.id;
            let jQueryPromise = $.ajax(
              Config.getUrl(`church/members/delete/${id}`)
            );

            Promise.resolve(jQueryPromise).then(function () {
              table.bootstrapTable('remove', {field: 'id', values: [id]});
              swal('Apagado!', 'Registro apagado com sucesso.', 'success');
            }).catch(function () {
              swal('', 'Não foi possível apagar o registro.', 'error');
            });
          }
        });
      });

      table.on('edit-row', function (e, data) {
        window.location.href = Config.getUrl($(this).attr('data-controller') + '/' + data.id);
      });
    };

    const add = () => {
      let view = new CepView();
      view.render();
    };

    const edit = () => {
      new CepView();

      $('[data-btn-action="show-member-history"]').on('click', function () {
        if ($('#member-box-form').hasClass('col-md-12')) {
          $('#member-box-form').addClass('col-md-6').removeClass('col-md-12');
          $('#member-box-timelime').removeClass('hidden');
        } else {
          $('#member-box-form').removeClass('col-md-6').addClass('col-md-12');
          $('#member-box-timelime').addClass('hidden');
        }
      });
    };

    return {
      Index: index,
      Add: add,
      Edit: edit
    };

  };

  Controller.Members = MembersController();

})(window, document, App.Controller, App.Config, $, swal, CepView);
