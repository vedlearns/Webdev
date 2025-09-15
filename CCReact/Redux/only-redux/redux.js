const redux=require('redux'); 

const INITIAL_VALUE={
    counter :0
}

const reducer =(store=INITIAL_VALUE,action)=>{
    let newState=store;
    if(action.type==='INCREMENT')
    {
        newState={counter: store.counter + 1}
    }
    else if(action.type==='DECREMENT')
    {
        newState={counter: store.counter - 1}
    }
    else if(action.type==='ADDITION')
    {
        newState={counter: store.counter + action.payload.num}
    }
    return newState;
}

const store =redux.createStore(reducer);

const subscriber=()=>{
   const state= store.getState();
   console.log("state",state);
}

store.subscribe(subscriber);

store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'INCREMENT'})
store.dispatch({type:'DECREMENT'})
store.dispatch({type:'ADDITION',payload:{num:8}})
store.dispatch({type:'DECREMENT'})
