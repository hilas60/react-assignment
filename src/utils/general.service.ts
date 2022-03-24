import { Photo } from '../types/photo.type'

export const setDateFormat = (date: Date) => {
  const dateInstance = new Date(date)
  let day:number|string = dateInstance.getDate()
  let month:number|string = dateInstance.getMonth() + 1
  const year = dateInstance.getFullYear()
  if (day < 10) day = '0' + day
  if (month < 10) month = '0' + month
  return day + '/' + month + '/' + year
}

export const filterPhoto = (text:string, photo:Photo) => {
  const isAuthor = photo.author.toLowerCase().includes(text)
  const isTitle = photo.title.toLowerCase().includes(text)
  const isTags = photo.tags.toLowerCase().includes(text)
  if (isAuthor || isTitle || isTags) return photo
  else return null
}
