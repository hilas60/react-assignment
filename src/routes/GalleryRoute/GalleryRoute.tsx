import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Gallery } from '../../components/Gallery/Gallery'
import { Loader } from '../../components/Loader/Loader'
import { SearchInput } from '../../components/SearchInput/SearchInput'
import { usePhotos } from '../../hooks/usePhotos'
import { Photo } from '../../types/photo.type'
import { filterPhoto } from '../../utils/general.service'

import './GalleryRoute.scss'

export const GalleryRoute:React.FC = () => {
  const params = useParams()
  const authorId:string = params?.id || ''
  const {
    isFetching,
    photos
  } = usePhotos(authorId)

  const [searchText, setSearchText] = useState<string>('')
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([])

  const handleSearch = (text:string) => {
    let filtered = [...photos]
    if (text) {
      filtered = filtered.filter((photo) => {
        return filterPhoto(text, photo)
      })
    }
    setFilteredPhotos(filtered)
  }

  useEffect(() => {
    setFilteredPhotos(photos)
  }, [photos])

  useEffect(() => {
    const lcText = searchText.toLowerCase()
    handleSearch(lcText)
  }, [searchText])

  const onChangeSearchInput = (e:any) => {
    setSearchText(e.target.value)
  }

  return (
    <div className="r-GalleryRoute">
      <SearchInput onChange={onChangeSearchInput} />
      {isFetching
        ? <Loader />
        : <Gallery photos={filteredPhotos} />}
    </div>
  )
}
