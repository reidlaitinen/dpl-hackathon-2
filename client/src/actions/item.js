import axios from 'axios'



export const deleteItem = (id) => {
  return (dispatch) => {
    axios.delete(`/api/items/${id}`)
      .then( res => dispatch({ type: 'DELETE_ITEM', id, headers: res.headers }) )
  }
}

export const getItem = () => {
  return (dispatch) => {
    axios.get('/api/item')
      .then( res => dispatch({ type: 'ITEM', item: res.data, headers: res.headers }) )
  }
}

export const addItem = (item) => {
  return (dispatch) => {
    axios.post('/api/items', {item})
      .then( res => {
        const { data: item, headers } = res;
        if (res.data)
          dispatch({ type: 'ADD_ITEM', item, headers })
        else
          dispatch({ type: 'HEADERS', headers })
      })
  }
}