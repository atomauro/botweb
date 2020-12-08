const url = 'https://www.breakingbadapi.com/api/characters';

let headers = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json'
});

const adminApi = {
  getAdmin: async payload => {
    const data = await fetch(`${url}`).then(data => {
      return data.json();
    });
    return data;
  },
  createAdmin: async payload => {
    const data = await fetch(`${url}/add-admin`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('Invalid data');
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export default adminApi;
