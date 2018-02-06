import Redux from 'redux';

let initialState = {
  username: '',
  userprofile: {},
  repos: []
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}

export default reducer;
