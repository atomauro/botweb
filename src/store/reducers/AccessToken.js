const intitialValue = '';
const reducer = (AccessToken, action) => {
  switch (action.type) {
    case 'SET':
      return (AccessToken = action.payload);
    case 'RESET':
      console.log('RESET Token')
      localStorage.removeItem('AccessToken');
      return (AccessToken = intitialValue);
    default:
      return AccessToken;
  }
};

export default reducer;
