// function to create a one second delay
const delay = (time) => new Promise(resolve => setTimeout(() => resolve(), time));

// count model
export const badge = {
  state: 15,
  reducers: {
    addBy(state, payload) {
      return state + payload
    }
  },
  effects: (dispatch) => ({
    async addByAsync(payload, state) {
      await delay(500)
      dispatch.badge.addBy(1)
    }
  })
};
