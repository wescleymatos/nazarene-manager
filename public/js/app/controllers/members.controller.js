( (window, document, Controller, undefined) => {

    'use strict';

    const MembersController = () => {
        let table = $('table');

        const index = () => {
            table.on('edit-row', function (e, data) {
                window.location.href = App.Config.getUrl($(this).attr('data-controller') + '/' + data.id);
            });
        };

        const add = () => {
            let view = new CepView();
            view.render();
        };

        const edit = () => {
            let view = new CepView();

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

})(window, document, App.Controller);
