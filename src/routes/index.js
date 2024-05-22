import {Routes, Route} from 'react-router-dom'; 
import Home from '../components/Home';
import InfoCard from '../components/InfoCard';

function Index(){
    return(
        <div>
            <Routes >
                <Route path='/' element={ <Home /> } />
                <Route path='/infocard/:id' element={ <InfoCard /> } />
            </Routes>
        </div>
    )
}

export default Index