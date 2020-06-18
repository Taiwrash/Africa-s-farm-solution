const details = {}
const userDetails = (state = details, action) => {
  switch (action.type) {
    case 'USER':
      return state = action.payload;
    default: return state;
  }
};

export default userDetails;
