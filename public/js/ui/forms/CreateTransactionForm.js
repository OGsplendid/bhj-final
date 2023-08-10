/**
 * Класс CreateTransactionForm управляет формой
 * создания новой транзакции
 * */
class CreateTransactionForm extends AsyncForm {
  /**
   * Вызывает родительский конструктор и
   * метод renderAccountsList
   * */
  constructor(element) {
    super(element);
    this.renderAccountsList();
  }

  /**
   * Получает список счетов с помощью Account.list
   * Обновляет в форме всплывающего окна выпадающий список
   * */
  renderAccountsList() {
    Account.list(User.current(), (err, response) => {
      if (!err) {
        console.log(response.data);
        const selectGroupIncome = this.element.querySelector('#income-accounts-list');
        const selectGroupExpense = this.element.querySelector('#expense-accounts-list');
        for (let item of response.data) {
          let option = new Option(item.name, item.id);
          console.log(item);
          console.log(option);
          console.log(selectGroupIncome);
          selectGroupIncome.append(option);
          console.log(selectGroupIncome.options);
        }
        for (let item of response.data) {
          let option = new Option(item.name, item.id);
          selectGroupExpense.append(option);
        }
        console.log(selectGroupIncome.options, selectGroupExpense.options);
      } else {
        console.log(err);
      }
    })
  }

  /**
   * Создаёт новую транзакцию (доход или расход)
   * с помощью Transaction.create. По успешному результату
   * вызывает App.update(), сбрасывает форму и закрывает окно,
   * в котором находится форма
   * */
  onSubmit(data) {
    Transaction.create(data, (err) => {
      if (!err) {
        document.querySelector("#new-income-form").reset();
        App.getModal('newIncome').close();
        App.update();
      } else {
        console.log(err);
      }
    })
  }
}
