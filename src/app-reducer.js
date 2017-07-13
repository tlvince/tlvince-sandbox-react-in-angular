const initialState = {
  count: 0
}

const INCREMENT = 'app/INCREMENT'

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      })
    default:
      return state
  }
}

export const incrementCount = () => ({
  type: INCREMENT
})
