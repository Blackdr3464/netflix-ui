const initialState = {
    listFilm: [],
};

const filmReducer = (state = initialState, action) => {
    // console.log(state);
    switch (action.type) {
        case 'LIST_FILM': {
            const newList = [...state.listFilm];
            newList.push(action.payload);
            return {
                ...state,
                listFilm: newList,
            };
        }

        default: {
            return state;
        }
    }
};

export default filmReducer;
