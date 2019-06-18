import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import Filter from './Filter'
import { createNotification, removeMessage } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {

    const anecdotesToShow = () => {
      if (props.filter === 'ALL') {
        return props.anecdotes
      }
      return props.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(props.filter.toLowerCase()))
    }
    const voteAnecdote = (id) =>  {
        const anecdote = props.anecdotes.find(anecdote => anecdote.id === id)
        props.vote(id)
        props.createNotification("you voted '" + anecdote.content + "'")
        setTimeout(() => {
            props.removeMessage() 
        }, 5000)
      }
  
    return (
        <div>
          <Filter />
          { anecdotesToShow().sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={() => voteAnecdote(anecdote.id)}>vote</button>
            </div>
          </div>
          )}
        </div>
    )

}
const mapStateToProps = (state) => {
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  vote,
  createNotification,
  removeMessage,
}
const ConnectedAnecdoteList = connect(
  mapStateToProps,
  mapDispatchToProps
  )(AnecdoteList)
export default ConnectedAnecdoteList