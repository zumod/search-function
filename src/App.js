
import AutocompletePage from './components/AutoComplete/index.js';
// import CompanyList from './components/CompanyList/CompanyList';
// import SearchResults from './components/SearchResults/SearchResults';
// import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

const App = () => {
    return (
        <div className='App'>
            <AutocompletePage />

            {/* <BrowserRouter>
                <div className='mobile-menu'>
                    <NavLink className='nav-link' to='/results'>
                        view more
                    </NavLink>
                </div>
                <Switch>
                    <Route exact path='/' component={CompanyList} />
                    <Route exact path='/results' component={SearchResults} />
                </Switch>
            </BrowserRouter> */}
        </div>
    );
};

export default App;
