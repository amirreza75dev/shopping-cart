import react from 'react'
import Main from './Main'
import Navbar from './Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import TotalCart from './TotalCart'


const App = () => {

    return ( 
        <Router>
            <div className="app">
                <Navbar />
            <Switch>
                <Route exact path="/">
                      <Main />

                </Route>
                <Route exact Rpathoute="/total">
                      <TotalCart />

                </Route>
                


                
             </Switch>    

            </div>
        </Router>
     );
}

 
export default App;