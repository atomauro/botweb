const url = 'https://rickandmortyapi.com/api/character';

let headers = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json'
});

const loginApi = {
  getUser: async payload => {
    console.log(`${url}`);
    const datos = await fetch(`${url}`).then(data => {
      return data.json();
    });
    return datos;
  },
  loginUser: async payload => {
    const data = await fetch(`${url}/sign-in`, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload)
    })
      .then(result => {
        if (result.ok) {
          return result.json();
        } else {
          throw new Error('Invalid user or password');
        }
      })
      .catch(error => {
        throw new Error(error);
      });
  }
};

export default loginApi;
