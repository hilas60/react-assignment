import { Photo } from '../../types/photo.type'

interface Action {
  type: string,
  payload: any
}

export interface State {
  isFetching: boolean,
  photos: Photo[],
}

const initialState: State = {
  isFetching: false,
  photos: []
}

export const photosReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case 'ADD_PHOTOS': {
      return { ...state, photos: action.payload }
    }
    case 'SET_LOADING': {
      return { ...state, isFetching: action.payload }
    }
    default:
      return state
  }
}
