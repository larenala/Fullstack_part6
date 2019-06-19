/*const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]*/
import anecdoteService from '../services/anecdotes'

export const createAnecdote = data => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(data)
    dispatch({
      type: 'NEW',
      data: newAnecdote,
    })
  }
    
}

export const vote = (id) => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    const anecdote = anecdotes.find(a => a.id === id)
    const votedAnecdote = await anecdoteService.updateVotes(anecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote   
    })
  } 
}

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE': 
      const votedAnecdote = action.data.data   
      return state.map(anecdote => (anecdote.id !== votedAnecdote.id) ? anecdote : votedAnecdote)
    case 'NEW': 
      return [ ...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
};

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })   
  }
}

export default anecdoteReducer