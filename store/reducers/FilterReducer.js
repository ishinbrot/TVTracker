export const CHANGE_FILTER = "CHANGE_FILTER";

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

const initialState = []

const TVShowListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return { ...state, filter: payload };
    case TOGGLE_TODO: {
      const todos = state.todos.map(todo =>
        todo.id === payload.id ? { ...todo, ...payload } : todo
      );
      return { ...state, todos };
    }
    case ADD_SHOW: {
      const todos = [...state.todos, payload];
      return { ...state, todos };
    }
    default:
      return state;
  }
};

export default TVShowListReducer;