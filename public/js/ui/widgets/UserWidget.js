class UserWidget {
  constructor(element){
    try {
      this.element = element;
    } catch(e) {
      if (!this.element) {
        throw new Error('something went wrong');
      }
    }
  }

  /**
   * Получает информацию о текущем пользователе
   * с помощью User.current()
   * Если пользователь авторизован,
   * в элемент .user-name устанавливает имя
   * авторизованного пользователя
   * */
  update(){
    let current = User.current();
    if (current) {
      document.getElementsByClassName('user-name')[0].textContent = current.name;
    }
  }
}
