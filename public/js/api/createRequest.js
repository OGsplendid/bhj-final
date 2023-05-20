const createRequest = (options = {}) => {
  let { url, data, method, callback } = options;
  const xhr = new XMLHttpRequest();
  if (method === 'GET') {
    url += '?';
    for (const key in data) {
      url += `${key}=${data[key]}&`;
    }
    url = url.slice(0, options.url.length - 1);
    try {
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.send();
    } catch (err) {
      callback(err);
    }
  } else {
    const formData = new FormData();
    for (let key in data) {
      formData.append(key, data[key]);
    }
    try {
      xhr.open(method, url);
      xhr.responseType = 'json';
      xhr.send(formData);
    } catch (err) {
      callback(err);
    }
  }
  xhr.onloadend = () => {
    if (xhr.response && xhr.response.success) {
      console.log(xhr.response);
      callback(null, xhr.response);
    } else if (xhr.response && xhr.response.error) {
      console.log(xhr.response);
      callback(xhr.response.error);
    }
  };
};
