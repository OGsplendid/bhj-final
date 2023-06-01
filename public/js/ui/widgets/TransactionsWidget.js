/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    try {
      this.element = element;
    } catch(e) {
      if (!this.element) {
        throw new Error('something went wrong');
      }
    }
    this.registerEvents();
  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    document.getElementsByClassName('create-income-button')[0].onclick = () => App.getModal('newIncome').open();
    document.getElementsByClassName('create-expense-button')[0].onclick = () => App.getModal('newExpense').open();
  }
}
