const BASE_URL = "http://localhost:3030/api";

async function callApi(endpoint, accessToken = undefined, options = {}) {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const url =
    BASE_URL + endpoint + (accessToken ? "?access_token=" + accessToken : "");
  console.log("url", url);
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
}

const api = {
  users: {
    list(accessToken) {
      return callApi("/Usuarios", accessToken);
    },
    create(user, accessToken) {
      //throw new Error("500: SERVIDOR JUM");
      return callApi(`/Usuarios`, accessToken, {
        method: "POST",
        body: JSON.stringify(user)
      });
    },
    read(userId, accessToken) {
      return callApi(`/Usuarios/${userId}`, accessToken);
    },
    login(user) {
      return callApi(`/Usuarios/login`, undefined, {
        method: "POST",
        body: JSON.stringify(user)
      });
    },
    update(userId, accessToken, updates) {
      return callApi(`/Usuarios/${userId}`, accessToken, {
        method: "PUT",
        body: JSON.stringify(updates)
      });
    },
    remove(userId, accessToken) {
      return callApi(`/Usuarios/${userId}`, accessToken, {
        method: "DELETE"
      });
    }
  }
};

export default api;
