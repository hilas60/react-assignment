import axios from 'axios'

export const getPhotos = async (authorId:string) => {
  const queryParams = `&id=${authorId}`
  const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1' + queryParams
  const { data } = await axios.get(url)
  return data
}
