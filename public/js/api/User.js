class User {
  static URL = '/user';
  
  static setCurrent(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  static unsetCurrent() {
    localStorage.removeItem('user');
  }

  static current() {
    return JSON.parse(localStorage.getItem('user'));
  }

  static fetch(callback) {
    createRequest({
      url: `${this.URL}/current`,
      method: 'GET',
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        } else {
          this.unsetCurrent();
        };
        callback(err);
      }
    });
  }

  static login(data, callback) {
    createRequest({
      url: this.URL + '/login',
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        }
        callback(err);
      }
    });
  }

  static register(data, callback) {
    createRequest({
      url: `${this.URL}/register`,
      method: 'POST',
      responseType: 'json',
      data,
      callback: (err, response) => {
        if (response && response.user) {
          this.setCurrent(response.user);
        };
        callback(err);
      }
    });
  }

  static logout() {
    createRequest({
      url: this.URL + '/logout',
      method: 'POST',
      responseType: 'json',
      callback: (err, response) => {
        if (response && response.success) {
          this.unsetCurrent();
        }
      }
    });
  }
}
