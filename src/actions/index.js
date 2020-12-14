import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'
export const CREATE_EVENT = 'CREATE_EVENT'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUEYSTRING = '?token=token123'


export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUEYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
}

export const postEvent = values => async dispatch => {
    const response = await axios.post(`${ROOT_URL}/events${QUEYSTRING}`, values)
    dispatch({ type: CREATE_EVENT, response })
}