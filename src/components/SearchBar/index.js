import React, { useState, useRef, useEffect, useMemo } from 'react';
import AutoCompleteItem from './AutoCompleteItem';

const AutoComplete = ({ data, onSelect }) => {
    const [isVisbile, setVisiblity] = useState(false);
    const [search, setSearch] = useState('');
    const [cursor, setCursor] = useState(-1);

    const searchContainer = useRef(null);
    const searchResultRef = useRef(null);

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

    const suggestions = useMemo(() => {
        if (!search) return data;

        setCursor(-1);
        scrollIntoView(0);

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
        <div
            style={{ height: '100%', marginTop: '30px', marginBottom: '50px' }}
            ref={searchContainer}
        >
            <input
                type='text'
                name='search'
                placeholder='Search tasks, @Users...'
                className='search-bar'
                autoComplete='off'
                value={search}
                onClick={showSuggestion}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={(e) => keyboardNavigation(e)}
            />

            <div
                className={`search-result ${
                    isVisbile ? 'visible' : 'invisible'
                }`}
            >
                <ul className='list-group' ref={searchResultRef}>
                    {suggestions.map((item, idx) => (
                        <AutoCompleteItem
                            key={idx}
                            onSelectItem={() => {
                                hideSuggestion();
                                setSearch(item.project_name);
                                onSelect(()=>{
                                    return "Status: "+ item.status;
                                });
                            }}
                            isHighlighted={cursor === idx ? true : false}
                            {...item}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AutoComplete;
