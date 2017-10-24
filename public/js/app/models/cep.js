var Cep = Backbone.Model.extend({
    url: function () {
        return 'http://viacep.com.br/ws/'+this.cep+'/json/';
    },
    defaults: {
        cep: '',
        numero: '',
        localidade: '',
        uf: '',
        bairro: '',
        logradouro: '',
        complemento: ''
    }
});
