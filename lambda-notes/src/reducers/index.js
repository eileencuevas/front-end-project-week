import { ADD_NOTE } from '../actions';

const initialState = {
    notes: [{
        tags:['tester','super tester'],
        title: 'Test note title',
        textBody: 'note body',
    }],
    fetchingNotes: false,
    error: null,
}

const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return {
                ...state,
                notes: [...state.notes, {
                    tags: [],
                    title: action.payload.title,
                    textBody: action.payload.textBody,
                }]
            }
        default:
            return state;
    }
}

export default notesReducer;