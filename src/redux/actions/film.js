export const listFilm = (film) => {
    return {
        type: 'LIST_FILM',
        payload: film,
    };
};

export const filterFilm = (film) => {
    return {
        type: 'FILTER_FILM',
        payload: film,
    };
};
