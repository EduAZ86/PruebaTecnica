
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home/Home'
import Detail from './pages/Detail/Detail';

function App() {  

  return (
    <div>
      <Routes>
        <Route path = '/' element = { <Home/>}/>
        <Route path = '/detail/:id' element = { <Detail/>}/>
      </Routes>
    </div>
  )
}

export default App
