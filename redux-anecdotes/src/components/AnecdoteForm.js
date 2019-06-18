import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { createNotification, removeMessage } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
      event.preventDefault()
      const text = event.target.addAnecdote.value
      event.target.addAnecdote.value=''
      props.createAnecdote(text)
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
            <button type='submit'>create</button>
          </form>
        </div>
        
    )
}

const mapDispatchToProps = {
  createAnecdote,
  createNotification,
  removeMessage,
}

export default connect(null, mapDispatchToProps)(AnecdoteForm)