import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, removeMessage } from '../reducers/notificationReducer'

const AnecdoteForm = ({ store }) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        const text = event.target.addAnecdote.value
        store.dispatch(
          createAnecdote(event.target.addAnecdote.value),
          
        )
        event.target.addAnecdote.value=''
        store.dispatch(
          createNotification("created anecdote '" + text + "'")
        )
        setTimeout(() => {
            store.dispatch(
                removeMessage()
            )          
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

export default AnecdoteForm