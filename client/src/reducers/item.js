const Item = ( state = [], action ) => {
  switch (action.type) {
    case 'ITEM':
      return action.scorecards
    case 'ADD_ITEM':
      return[...state, action.scorecard]
    case 'DELETE_ITEM':
      return state.filter( i => i.id !== action.id )
    default: 
      return state;
  }
}

export default Item;