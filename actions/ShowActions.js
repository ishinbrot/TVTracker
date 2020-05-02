import { ADD_SHOW, DELETE_SHOW, MARK_SHOW_AS_WATCHED } from './action-types'


let showID = 0


export function addShowToList(show, index) {
    return {
        type: ADD_SHOW,
        id: index,
        showName: show,
        show
    }
}

export function deleteShow(id) {
    return {
        type: DELETE_SHOW,
        payload: id
    }
}
export function markShowAsWatched(showName, watched, index) {
    return {
        type: MARK_SHOW_AS_WATCHED,
        showName: showName,
        watched: watched,
        index: index
    }
}