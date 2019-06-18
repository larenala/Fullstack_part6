
const filterReducer = (state = 'ALL', action) => {
  console.log('action ', action)
  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}

export const filterChange = filter => {
    if (filter === '') return {
        type: 'ALL',
        filter
    }
    return {
      type: 'SET_FILTER',
      filter,
    }
  }

export default filterReducer