import React, { useState, useRef, useEffect, useMemo } from 'react';
import AutoCompleteItem from './AutoCompleteItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import TableList from '../Table/TableList';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(3),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const AutoComplete = ({ data, onSelect }) => {
    const classes = useStyles();
    const [isVisbile, setVisiblity] = useState(false);
    const [search, setSearch] = useState('');
    const [cursor, setCursor] = useState(-1);
    const [tableData, setTableData] = useState([]);
    const [tableTitle, setTableTitle] = useState('All Companies');

    const searchContainer = useRef(null);
    const searchResultRef = useRef(null);

    const handleProjects = () => {
        setTableData(
            data.filter(
                (item) =>
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.assigned_to
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
        );
    };
    const handleContractors = () => {
        setTableData(
            data.filter(
                (item) =>
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.assigned_to
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
        );
    };
    const handleResources = () => {
        setTableData(
            data.filter(
                (item) =>
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.assigned_to
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
        );
    };
    const handleViewMore = () => {
        setTableTitle('Search Results');
        
        console.log('view more clicked');
        setTableData(
            data.filter(
                (item) =>
                    item.status.toLowerCase().includes(search.toLowerCase()) ||
                    item.assigned_to
                        .toLowerCase()
                        .includes(search.toLowerCase())
            )
        );
    };

    useEffect(() => {
        window.addEventListener('mousedown', handleClickOutside);

        return () => {
            window.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const scrollIntoView = (position) => {
        searchResultRef.current.parentNode.scrollTo({
            top: position,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
            return () => {};
        }

        let listItems = Array.from(searchResultRef.current.children);
        listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
    }, [cursor]);

    // const handleSearch = e => {
    //     setSearch(e.target.value)
    //     console.log(e.target.value)
    //     setTableData(data.filter(
    //         (item) =>
    //             item.status.toLowerCase().includes(e.target.value.toLowerCase()) ||
    //             item.assigned_to.toLowerCase().includes(e.target.value.toLowerCase())
    //     ));
    //     console.log(tableData)

    // }

    const suggestions = useMemo(() => {
        if (!search) return data;

        setCursor(-1);
        scrollIntoView(0);
        //    setTableData(data.filter(
        //         (item) =>
        //             item.status.toLowerCase().includes(search.toLowerCase()) ||
        //             item.assigned_to.toLowerCase().includes(search.toLowerCase())
        //     ));

        //     console.log(tableData)
        return data.filter(
            (item) =>
                item.status.toLowerCase().includes(search.toLowerCase()) ||
                item.assigned_to.toLowerCase().includes(search.toLowerCase())
        );
    }, [data, search]);

    const handleClickOutside = (event) => {
        if (
            searchContainer.current &&
            !searchContainer.current.contains(event.target)
        ) {
            hideSuggestion();
        }
    };

    const showSuggestion = () => setVisiblity(true);

    const hideSuggestion = () => setVisiblity(false);

    const keyboardNavigation = (e) => {
        if (e.key === 'ArrowDown') {
            isVisbile
                ? setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c))
                : showSuggestion();
        }

        if (e.key === 'ArrowUp') {
            setCursor((c) => (c > 0 ? c - 1 : 0));
        }

        if (e.key === 'Escape') {
            hideSuggestion();
        }

        if (e.key === 'Enter' && cursor > 0) {
            setSearch(suggestions[cursor].status);
            hideSuggestion();
            onSelect(suggestions[cursor]);
        }
    };

    return (
        <>
            <div style={{ height: '100%', left: '35vw' }} ref={searchContainer}>
                {/* {tableData&&tableData[0].project_name}   */}
                <div>
                    <TextField
                    size="small"
                        label='Search tasks, @Users...'
                        type='text'
                        name='search'
                        id='outlined-basic'
                        variant='outlined'
                        className='search-bar'
                        autoComplete='off'
                        value={search}
                        onClick={showSuggestion}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(e) => keyboardNavigation(e)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position='start'>
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        style={{ left: '103%', outline: 'none' }}
                    />
                </div>

                <div
                    className={`search-result ${
                        isVisbile ? 'visible' : 'invisible'
                    }`}
                    style={{ marginLeft: '35vw' }}
                >
                    <br />
                    <div className='ml-4'>
                        <Button
                            className='ml-1'
                            type='submit'
                            aria-controls='customized-menu'
                            aria-haspopup='true'
                            variant='contained'
                            color='primary'
                            onClick={handleProjects}
                            style={{ outline: 'none' }}
                        >
                            Projects
                        </Button>

                        <Button
                            className='ml-1'
                            type='submit'
                            aria-controls='customized-menu'
                            aria-haspopup='true'
                            variant='contained'
                            color='primary'
                            onClick={handleContractors}
                            style={{ outline: 'none' }}
                        >
                            Contractors
                        </Button>

                        <Button
                            className='ml-1'
                            type='submit'
                            aria-controls='customized-menu'
                            aria-haspopup='true'
                            variant='contained'
                            color='primary'
                            onClick={handleResources}
                            style={{ outline: 'none' }}
                        >
                            Resources
                        </Button>
                        <br />
                        <br />
                    </div>
                    <ul
                        className='list-group'
                        ref={searchResultRef}
                        style={{ outline: 'none' }}
                    >
                        {suggestions.slice(0, 4).map((item, idx) => (
                            <AutoCompleteItem
                                key={idx}
                                onSelectItem={() => {
                                    hideSuggestion();
                                    setSearch(item.project_name);
                                    setTableData([item]);
                                }}
                                isHighlighted={cursor === idx ? true : false}
                                {...item}
                                style={{ backgroundColor: 'none' }}
                            />
                        ))}

                        <Button
                            className='btn'
                            size='small'
                            style={{
                                color: '#0000FF',
                                backgroundColor: 'white',
                                outline: 'none',
                            }}
                            onClick={handleViewMore}
                        >
                            View More{' '}
                            <ArrowForwardIcon
                                fontSize='small'
                                className={classes.extendedIcon}
                            />
                        </Button>
                    </ul>
                </div>
            </div>
            <br />
            <br />
            <TableList data={tableData} title={tableTitle} />
        </>
    );
};

export default AutoComplete;
