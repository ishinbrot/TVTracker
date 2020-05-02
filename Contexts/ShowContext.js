import React, { useReducer, createContext } from "react";
import TVShowListReducer, { VisibilityFilters } from "./../reducers/TVShowListReducer";

const ShowContext = createContext();

const initialState = {
  filter: VisibilityFilters.SHOW_ALL,
  shows: []
};

function ShowContext(props) {
  const [state, dispatch] = useReducer(TVShowListReducer, initialState);
  const value = { state, dispatch };

  return (
    <ShowContext.Provider value={value}>{props.children}</ShowContext.Provider>
  );
}
export { ShowContext, ShowContextProvider };