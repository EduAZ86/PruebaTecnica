
import { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { AppDispatch} from './toolkit/store'
import { setComics } from './toolkit/comic/comicSlice'
import { useGetPageComicsQuery } from './toolkit/services/comicApi'
import CardMapper from './components/CardMapper/CardMapper'


function App() {

  const dispatch = useDispatch<AppDispatch>()
  const { data, error, isLoading } = useGetPageComicsQuery({limit: 30, offset: 1})

  useEffect( () => {
    if (data) {
      dispatch(setComics(data))      
    }
  },[data, dispatch])

  return (
    <div>
      <CardMapper/>
    </div>
  )
}

export default App
