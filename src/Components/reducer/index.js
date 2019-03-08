

const setCounter = (state = {count:0}, action) =>{
  console.log('action :', action);
  switch(action.type){
    case 'increase':
     return {
       count: state.count + 1
      };
    case 'decrease':
      return {
        count: state.count - 1
      };
    default:
      return state
  }
}

export default setCounter