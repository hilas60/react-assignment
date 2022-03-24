import { useDispatch, useSelector } from 'react-redux'
import { photosSelector } from '../redux/selectors/photos.selectors'
import { useEffect } from 'react'
import { fetchPhotos, setIsFetching } from '../redux/actions/photos.actions'

export const usePhotos = (authorId:string) => {
  const dispatch = useDispatch()
  const { photos, isFetching } = useSelector(photosSelector)

  useEffect(() => {
    setIsFetching(dispatch, true)
    fetchPhotos(dispatch, authorId)
  }, [])

  return {
    photos,
    isFetching
  }
}
