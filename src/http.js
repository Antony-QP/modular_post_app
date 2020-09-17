// EasyHTTP Library
// Library for making HTTP requests

// @version 2.0;
// @author: Antony Parker;
// @licence: MIT

class EasyHTTP {
  // Make an HTTP request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData
  }

  // Make a POST request
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const resData = await response.json();
    return resData
  }

  // Make a PUT request
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json();
    return resData;
  }

  //Make an HTTP DELETE Request
  delete(url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
          method: 'DELETE',
          headers: {
            'Content-type': 'application/json'
          },
        })
        .then(res => res.json())
        .then(() => resolve('Resource Deleted'))
        .catch(err => reject(err))
    });
  }
}

export const http = new EasyHTTP();