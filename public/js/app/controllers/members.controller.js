( (window, document, Controller, Config, $, swal, CepView) => {

  'use strict';

  const MembersController = () => {

    const table = $('#table-list');
    const btnTransferir = $('#btn-transferir');
    const btnShowModalTransferencia = $('#btn-show-modal-transferencia');

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

      const setAttrBtnTransferir = (to, memberId, churchId) => {
        btnTransferir.attr('data-member', memberId);
        btnTransferir.attr('data-church', churchId);
        btnTransferir.attr('data-to', to);
      };

      btnShowModalTransferencia.on('click', 'a', function (e) {
        let memberId = $(this).data('member');
        let to = $(this).data('to');
        let churchId = $(this).data('church');

        setAttrBtnTransferir(to, memberId, churchId);

        $('#modal-transferir').modal('show');

        e.preventDefault();
      });

      btnTransferir.on('click', function () {
        btnTransferir.button('loading');

        let transfer = {
          to: $(this).data('to'),
          churchId: $(this).data('church'),
          memberId: $(this).data('member')
        };

        let promise = $.post(Config.getUrl('church/transfers/add'), transfer);
        promise.done(function(data) {
          if (data.error === false) {
            window.location.href = Config.getUrl('church/members');
          }
        }).fail(function(data) {
          console.log(data);
        });
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
