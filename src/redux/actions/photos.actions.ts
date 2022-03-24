
import { Dispatch } from 'redux'
import { getPhotos } from '../../api/photos.api'
import { setPhotosId } from '../../utils/photo.service'

export const setIsFetching = async (dispatch: Dispatch<any>, isFetching: boolean) => {
  dispatch({
    type: 'SET_LOADING',
    payload: isFetching
  })
}

export const fetchPhotos = async (dispatch: Dispatch<any>, authorId: string) => {
  const res = await getPhotos(authorId)
  const photos = setPhotosId(res.items)
  setIsFetching(dispatch, false)
  dispatch({
    type: 'ADD_PHOTOS',
    payload: photos
  })
}
