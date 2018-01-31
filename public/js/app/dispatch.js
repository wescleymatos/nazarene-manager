( (Controller) => {
  const dispatch = document.body.getAttribute('data-dispatch');
  const init = (controller, action) => {
    Controller[controller][action]();
    console.info(controller, action);
  };

  try {
    if (dispatch !== '' && dispatch !== undefined && dispatch !== null) {
      let controller = dispatch.split('#')[0];
      let action = dispatch.split('#')[1];

      init(controller, action);
    }
  } catch (e) {
    console.error('Não foi possível instânciar o controller.');
    console.error(e.message);
  }
})(App.Controller);
