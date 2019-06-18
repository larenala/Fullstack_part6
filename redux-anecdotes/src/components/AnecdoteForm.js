import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { createNotification, removeMessage } from '../reducers/notificationReducer'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const text = event.target.addAnecdote.value
        event.target.addAnecdote.value=''
        const newAnecdote = await anecdoteService.createNew(text)
        props.createAnecdote(newAnecdote)
        props.createNotification("created anecdote '" + text + "'")
        setTimeout(() => {
          props.removeMessage()      
        }, 5000)
        
      }
      

    return (
        <div>
          <h2>create new</h2>
          <form onSubmit={addAnecdote}>
            <div><input name='addAnecdote'/></div>
            <button>create</button>
          </form>
        </div>
        
    )
}

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
  removeMessage,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm