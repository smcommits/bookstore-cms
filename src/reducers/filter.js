const filterReducer = (state = "All", action ) => {
  switch(action.type) {
    case 'FILTER_BOOKS':
      return action.filter
    default:
      return state
  }
}

export default filterReducer;
