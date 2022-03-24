import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { Gallery } from '../../components/Gallery/Gallery'
import { photosSelector } from '../../redux/selectors/photos.selectors'
import { Photo } from '../../types/photo.type'
import { setDateFormat } from '../../utils/general.service'
import { getPhotoById } from '../../utils/photo.service'

import './PhotoRoute.scss'

export const PhotoRoute:React.FC = () => {
  const params = useParams()
  const { photos } = useSelector(photosSelector)
  const [photo, setPhoto] = useState<Photo | undefined>(undefined)

  useEffect(() => {
    const photo = getPhotoById(params.id)
    photo && setPhoto(photo)
  }, [params])

  const author = photo?.author.split('"')[1]
  const date = photo?.date_taken ? setDateFormat(photo?.date_taken) : 'N/A'
  const title = photo?.title
  const photoLink = photo?.media.m

  return (
    <div className="r-PhotoRoute">
      <div className="r-PhotoRoute__all-photos">
        <Gallery photos={photos}/>
      </div>
      <div className="r-PhotoRoute__photo-container">
        <h2>{photo?.title} by <Link to={`/author/${photo?.author_id}`}>{author}</Link></h2>
        <figure className="r-PhotoRoute__photo">
          <img src={photoLink} alt={title}/>
        </figure>
        <span>Taken on {date}</span>
      </div>
    </div>
  )
}
