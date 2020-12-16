import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import CompanyList from './components/CompanyList/CompanyList';
import SearchResults from './components/SearchResults/SearchResults';
import { BrowserRouter, Route, Switch, NavLink } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <SearchBar />
            <CompanyList/>

            <BrowserRouter>
                <div className='mobile-menu'>
                    <NavLink exact className='mobile-link' to='/view_more'>
                        <i class='far fa-user-circle' />
                        view more
                    </NavLink>
                </div>
                <Switch>
                    <Route exact path='/view_more' component={SearchResults} />
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
