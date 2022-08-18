const initialState = {
    listMember: [
        { id: 1, name: 'Jack' },
        { id: 2, name: 'John' },
    ],
    status: true,
};

const memberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEMBER': {
            return state;
        }

        default: {
            return state;
        }
    }
};

export default memberReducer;
