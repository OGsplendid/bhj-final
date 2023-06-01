class AccountsWidget {
  constructor(element) {
    try {
      this.element = element;
    } catch(e) {
      if (!this.element) {
        throw new Error('something went wrong');
      }
    }
    this.registerEvents();
    this.update();
  }

  registerEvents() {
    document.getElementsByClassName('create-account')[0].onclick = () => App.getModal('createAccount').open();
    let accounts = [...document.getElementsByClassName('account')];
    for (let i = 0; i < accounts.length; i++) {
      accounts[i].onclick = () => AccountsWidget.onSelectAccount(accounts[i]);
    }
  }

  update() {
    if (User.current()) {
      Account.list(User.current(), (err, response) => {
        if (!err) {
          this.clear();
          this.renderItem(response.account);
        } else {
          console.log(err);
        }
      });
    }
  }

  clear() {
    let accounts = [...document.getElementsByClassName('account')];
    for (let i = 0; i < accounts.length; i++) {
      accounts[i].remove();
    }
  }

  onSelectAccount(element) {
    let accounts = [...document.getElementsByClassName('account')];
    accounts.forEach(el => el.classList.remove('.active'));
    element.classList.add('active');
    App.showPage('transactions', { account_id: User.current().id });
  }

  getAccountHTML(item){
    let newAccount = document.createElement('li');
    newAccount.className = 'account';
    newAccount.dataset.id = item.id;
    newAccount.innerHTML = `<a href="#"><span>${item.name}</span> /<span>${item.sum}</span></a>`;
    return newAccount;
  }

  renderItem(data){
    this.element.insertAdjacentElement('beforeEnd', this.getAccountHTML(data));
  }
}
