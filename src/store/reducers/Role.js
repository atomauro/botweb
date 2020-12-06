const intitialValue = '';
const reducer = (Role, action) => {
  switch (action.type) {
    case 'SET':
      return (Role = action.payload);
    case 'RESET':
      console.log('RESET Role')
      localStorage.removeItem('Role');
      return (Role = intitialValue);
    default:
      return Role;
  }
};

export default reducer;
