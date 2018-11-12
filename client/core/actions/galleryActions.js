

export function addGallery (gallery) {
    return { type: ADD_GALLERY , gallery}
}

export function deleteGallery (gallery) {
    return { type: DELETE_GALLERY , gallery}
}

export function editGallery (gallery) {
    return { type: EDIT_GALLERY , gallery}
}
