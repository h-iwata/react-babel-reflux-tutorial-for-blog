import { createStore } from 'redux';

export default createStore((state = {counter: 0}, action) => {
   switch(action.type){
       case 'INC_COUNTER':
           return Object.assign({}, state, {
               counter: state.counter + action.num
           });
       default:
           return state;
   };
});
