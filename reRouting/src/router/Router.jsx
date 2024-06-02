
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from '../components/Home';
import About from '../components/About';
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/:postId' element={<About/>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;