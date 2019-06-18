import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import Filter from './Filter'
import { createNotification, removeMessage } from '../reducers/notificationReducer'

const AnecdoteList = ( props ) => {

    const voteAnecdote = (id) =>  {
        const anecdote = props.visibleAnecdotes.find(anecdote => anecdote.id === id)
        props.vote(id)
        props.createNotification("you voted '" + anecdote.content + "'")
        setTimeout(() => {
            props.removeMessage() 
        }, 5000)
      }
  
    return (
        <div>
          <Filter />
          { props.visibleAnecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
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

const anecdotesToShow = ({ anecdotes, filter }) => {
  if (filter === 'ALL') {
    return anecdotes
  }
  return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
}

const mapStateToProps = (state) => {
  return {
    visibleAnecdotes: anecdotesToShow(state),
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