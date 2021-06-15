import { GET_PROJECTS } from "../actions/types";
import { GET_PROJECT } from "../actions/types";

const initialState = {
    projects: [],
    project: {}
}
const  projectReducer =  function(state = initialState, action) {
    switch (action.type) {
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }
        case GET_PROJECT:
            return {
                ...state,
                project: action.payload
            }
        default:
            return state
    }
}


export default projectReducer