( (window, document, Controller, undefined) => {

    'use strict';

    const ChurchesController = () => {
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
        };

        return {
            Index: index,
            Add: add,
            Edit: edit
        };

    };

    Controller.Churches = ChurchesController();

})(window, document, App.Controller);
