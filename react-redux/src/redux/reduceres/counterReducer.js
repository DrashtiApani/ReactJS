let initialstate = 0;

const Counter = (state=initialstate,action) =>{
    switch(action.type){
        case 'inc':
            return state + 1;
         case 'dec':
            return state - 1;
        
        default:
            return state;
    }
}
export default Counter;