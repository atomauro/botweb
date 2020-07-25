const delay = time => new Promise(resolve => setTimeout(() => resolve(), time));

const users = {
  state: [],
  reducers: {
    add(state, { name }) {
      return [...state, name];
    },
    remove(state, { id }) {
      return state.filter(users => users.id !== id);
    }
  },
  effects: dispatch => ({
    async addByAsync(payload, state) {
      await delay(1000);
      //dispatch.users.addBy(1)
    }
  })
};

export default users;