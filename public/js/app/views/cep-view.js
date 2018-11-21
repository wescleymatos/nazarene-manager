const template = `
<p class="text-danger hidden">Não foi encontrado um endereço para este CEP.</p>
<div class="row">
    <div class="col-md-3">
        <label>CEP</label>
        <i class="fa fa-spinner fa-pulse fa-fw invisible" style="top: 32px; position: relative; left: 180px;"></i>
        <input id="cep" placeholder="xxxxxxxx" pattern="[0-9]{5}[0-9]{3}" name="zipCode" value="{{cep}}" maxlength="8" class="form-control" type="text">
    </div>
    <div class="col-md-4">
        <label>Cidade</label>
        <input id="localidade" name="city" class="form-control" value="{{localidade}}" type="text">
    </div>
    <div class="col-md-1">
        <label>UF</label>
        <input id="uf" name="state" class="form-control" value="{{uf}}" type="text">
    </div>
    <div class="col-md-4">
        <label>Bairro</label>
        <input id="bairro" name="neighborhood" value="{{bairro}}" class="form-control" type="text">
    </div>
</div>
<br>
<div class="row">
    <div class="col-md-4">
        <label>Logradouro</label>
        <input id="logradouro" name="publicPlace" value="{{logradouro}}" class="form-control" type="text">
    </div>
    <div class="col-md-8">
        <label>Complemento</label>
        <input id="complemento" name="complement" class="form-control" value="{{complemento}}" type="text">
    </div>
</div>`;

const CepView = Backbone.View.extend({
  el: '#address',
  template: Handlebars.compile(template),
  events: {
    'keyup #cep': 'getAddress'
  },
  initialize: function() {
    this.model = new Cep();
    this.listenTo(this.model, 'change', this.render.bind(this));
  },
  render: function() {
    var endereco = this.model.toJSON();

    if (endereco.erro) {
      this.model.unset('erro', {silent: true});
      endereco = this.model.defaults;
      endereco.cep = this.model.cep;
    }

    endereco.cep = endereco.cep.replace('-', '');
    this.$el.html(this.template(endereco));
  },
  getAddress: function(e) {
    var inputCep = e.target;
    if (inputCep.value.length === 8) {
      inputCep.previousElementSibling.classList.toggle('invisible');

      this.model.cep = inputCep.value;
      this.model.fetch().done(function (result) {
        if (result.erro) this.el.querySelector('p').classList.toggle('hidden');
      }.bind(this));
    }

    if (inputCep.value.length === 0) this.model.clear();
  }
});
