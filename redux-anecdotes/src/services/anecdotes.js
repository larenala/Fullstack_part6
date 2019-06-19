import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const getId = () => (100000 * Math.random()).toFixed(0)

const createNew = async (content) => {
    const newItem = {
        content: content,
        id: getId(),
        votes: 0
    }
    const response = await axios.post(baseUrl, newItem)
    return response.data
} 

const updateVotes = async (anecdote) => {
    const url = `${baseUrl}/${anecdote.id}`
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes+1 }
    return axios.put(url, updatedAnecdote)
}

export default { getAll, createNew, updateVotes }