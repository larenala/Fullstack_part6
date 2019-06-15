import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

    const addAnecdote = (event) => {
        event.preventDefault()
        store.dispatch(
          createAnecdote(event.target.addAnecdote.value)
        )
        event.target.addAnecdote.value=''
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