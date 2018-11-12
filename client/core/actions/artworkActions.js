export const ADD_ARTWORK = 'ADD_ARTWORK'
export const EDIT_ARTWORK = 'EDIT_ARTWORK'
export const DELETE_ARTWORK = 'DELETE_ARTWORK'

export function addArtwork (artwork) {
    return { type: ADD_ARTWORK , artwork}
}

export function editArtwork (artwork) {
    return { type: EDIT_ARTWORK , artwork}
}

export function deleteArtwork (artwork) {
    return { type: DELETE_ARTWORK , artwork}
}
