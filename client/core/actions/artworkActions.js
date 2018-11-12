export function addArtwork (artwork) {
    return { type: ADD_ARTWORK , artwork}
}

export function editArtwork (artwork) {
    return { type: EDIT_ARTWORK , artwork}
}

export function deleteArtwork (artwork) {
    return { type: DELETE_ARTWORK , artwork}
}
