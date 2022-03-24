import { store } from '../redux/store'
import { Photo } from '../types/photo.type'

export const setPhotosId = (photos:Photo[]) => {
  return photos.map((item:Photo) => {
    const photo = { ...item, id: crypto.randomUUID() }
    return photo
  })
}

export const getPhotoById:Photo | undefined = (id:string) => {
  const photos = store.getState().photosReducer.photos
  return photos?.find(photo => photo.id === id)
}
