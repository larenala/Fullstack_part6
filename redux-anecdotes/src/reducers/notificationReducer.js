
const notificationAtStart = ''

export const createNotification = (content) => {
    return {
        type: 'CREATE',
          data: {
            notification: content
          }      
      }
}

export const removeMessage = () => {
    return {
      type: 'EMPTY',
      data: {
          notification: ''
      }
    }
}

const notificationReducer = (state = notificationAtStart, action) => {
    console.log('state at Notificationreducer ', state)
    switch (action.type) {
        case 'CREATE':
          const newState = action.data.notification
          return newState
        case 'EMPTY':
          const initialState = notificationAtStart
          return initialState
        default:
          return state
    }
}

export default notificationReducer