import React from 'react'
import { Link } from 'react-router-dom'
import { Photo } from '../../types/photo.type'

import './Gallery.scss'

interface IGalleryProps {
  photos: Photo[];
}

export const Gallery:React.FC<IGalleryProps> = ({ photos }) => {
  return (
    photos.length
      ? (<div className="c-Gallery">
    {photos.map((photo) => (
        <figure key={'photo-' + photo.id } >
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.media.m} alt={photo.title}/>
          </Link>
        </figure>
    ))}
      </div>)
      : <div className='no-photos-text'>No photos found</div>
  )
}
