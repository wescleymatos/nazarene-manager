var App = App || {};
App.Controller = App.Controller || {};
App.Config = {
    getUrl: (url) => {
        let path = url || '';
        let strRegex = /(heroku|nazareno)/i;
        if (window.location.hostname === 'localhost' || strRegex.test(window.location.origin)) {
                return window.location.origin + '/' + path;
        }
        return window.location.origin + '/' + window.location.pathname.split('/')[1] + '/' + path;
    },
    viaCepWs: (cep) => {
        return `http://viacep.com.br/ws/${cep}/json/`;
    },
    memberStatus: {
        ATI: 'Ativo',
        INA: 'Inativo',
        CON: 'Congregado',
        ASS: 'Associado',
        ARQ: 'Arquivado'
    }
};

window.actionsFormatter = function (value, row, index) {
    return [
        '<a class="btn btn-default editar" href="#" title="Editar"><i class="fa fa-edit"></i></a>&nbsp;&nbsp;',
        '<a class="btn btn-danger deletar" href="#" title="Deletar"><i class="fa fa-trash"></i></a>&nbsp;&nbsp;'
    ].join('');
};

window.actionsFormatterEdit = function (value, row, index) {
    return [
        '<a class="btn btn-default editar" href="#" title="Editar"><i class="fa fa-edit"></i></a>&nbsp;&nbsp;',
        '<a class="btn btn-danger disabled deletar" href="#" title="Deletar"><i class="fa fa-trash"></i></a>&nbsp;&nbsp;'
    ].join('');
};

window.parseBoolean = function (value, row, index) {
    return Boolean(value) === true ? 'Sim' : 'Não';
};

window.parseSexo = function (value, row, index) {
    return value === 'M' ? 'Masculino' : 'Feminino';
};

window.churchStatusFormatter = function (value, row, index) {
    return value === 'O' ? '<span class="pull-right badge bg-green">Igreja Organizada</span>' : '<span class="pull-right badge bg-red">Igreja Não Organizada</span>';
};

window.memberStatusFormatter = function (value, row, index) {
    return App.Config.memberStatus[value];
};

window.actionsEvents = {
    'click .editar': function (e, value, row, index) {
        e.preventDefault();
        $(e.target).parents('table').trigger('edit-row', row);
    },
    'click .deletar': function (e, value, row, index) {
        e.preventDefault();
        $(e.target).parents('table').trigger('delete-row', row);
    }
};

$('[data-inputmask]').inputmask();
