const initialState = []
import { ADD_SHOW, DELETE_SHOW, MARK_SHOW_AS_WATCHED } from '../../actions/action-types'

function ShowListReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_SHOW:
            return [
                ...state,
                {
                    id: action.id,
                    value: action.showName,
                    watched: false
                }
            ]
        case DELETE_SHOW:
            const deletedNewArray = remove(state, obj => {
                return obj.id != action.payload
            })
            return deletedNewArray
        case MARK_SHOW_AS_WATCHED:
            let oldShowList = [...state];
            let item = { ...oldShowList[action.index] };

            if (item.value === action.showName) {
                item.watched = !item.watched;
            }
            else {
                console.log('Something went wrong and the logs recorded it');
            }
            oldShowList[action.index] = item;
            return oldShowList;
        default:
            return state
    }
}
export default ShowListReducer;