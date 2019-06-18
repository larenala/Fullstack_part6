import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { createNotification, removeMessage } from '../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
    const { anecdotes, filter } = store.getState()
    const anecdotesToShow = () => {
      if (filter === 'ALL') {
        return anecdotes
      }
      return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    }
    const voteAnecdote = (id) =>  {
        const anecdote = store.getState().anecdotes.find(anecdote => anecdote.id === id)
        store.dispatch(
          vote(id)
        )
        store.dispatch(
            createNotification("you voted '" + anecdote.content + "'")
        )
        setTimeout(() => {
            store.dispatch(
                removeMessage()
            )          
        }, 5000)
      }
  
    return (
        <div>
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

export default AnecdoteList