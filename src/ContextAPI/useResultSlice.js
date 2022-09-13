import { createContext, useContext, useReducer } from "react";

//Initial State
export const initialState = {
  result:[],
}

//Creating a context
const StateContext = createContext()

//Actions
export const ACTIONS = {
  SEARCH_RESULT: "SEARCH_RESULT",
};


//Reducer
const reducer = (state,action) => {

  switch (action.type) {
    case ACTIONS.SEARCH_RESULT:
      return {
        ...state,
        result: action.payload,
      }
    default:
      return state;
  }
}



//Setup Provider
export const StateProvider = ({children}) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
}


export const useResultSlice = () => useContext(StateContext);