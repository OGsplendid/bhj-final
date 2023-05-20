class Sidebar {
  static init() {
    this.initAuthLinks();
    this.initToggleButton();
  }

  static initToggleButton() {
    document.querySelector('.sidebar-toggle').onclick = () => {
      document.body.classList.toggle('sidebar-collapse');
      document.body.classList.toggle('sidebar-open');
    };
  }

  static initAuthLinks() {
    document.querySelector('.menu-item_register').onclick = () => {
      App.getModal('register').open();
    };
    document.querySelector('.menu-item_login').onclick = () => {
      App.getModal('login').open();
    };
    document.querySelector('.menu-item_logout').onclick = () => {
      User.logout();
      App.setState('init');
    };
  }
}