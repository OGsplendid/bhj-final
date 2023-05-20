class Entity {
  static url = '';

  static list(data, callback){
    createRequest({
      data,
      method: 'GET',
      url: this.URL,
      callback,
    });
  }

  static create(data, callback) {
    createRequest({
      data,
      method: 'PUT',
      url: this.URL,
      callback,
    });
  }

  static remove(data, callback) {
    createRequest({
      data,
      method: 'DELETE',
      url: this.URL,
      callback,
    });
  }
}
