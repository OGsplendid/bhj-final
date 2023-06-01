class CreateAccountForm extends AsyncForm {
  /**
   * Создаёт счёт с помощью Account.create и закрывает
   * окно в случае успеха, а также вызывает App.update()
   * и сбрасывает форму
   * */
  onSubmit(data) {
    Account.create(data, (err) => {
      if (!err) {
        document.querySelector("#new-account-form").reset();
        App.getModal('createAccount').close();
        App.update();
      } else {
        console.log(err);
      }
    });
  }
}
