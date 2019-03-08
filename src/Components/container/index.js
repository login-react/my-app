import {connect} from 'react-redux'
import {increaseAction,decreaseAction} from '../action'
import Counter from '../Counter'

/**
 * 
 * @param {默认值} state 
 */
const mapStateToProps = (state) =>{ 
  return ({
  value: state.count
})}

/**
 * 
 * @param {增加} dispatch 
 */
// const mapDispatchToProps = (dispatch) =>({
//   onIncreaseClick: () => dispatch(increaseAction)
//  })

 /**
  * 
  * @param {减少} dispatch 
  */
 const mapIncreaseToProps = (dispatch) => ({
   onReduceClick: () => dispatch(decreaseAction)
 })


 const App = connect(
   mapStateToProps,
  //  mapDispatchToProps,
   mapIncreaseToProps
 )(Counter)

 export default App