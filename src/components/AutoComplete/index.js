import React, { useState } from 'react';
import CompanyData from '../../assets/data.json';
import Autocomplete from '../SearchBar/index';

import './index.css';

const AutocompletePage = () => {
    const [name, setName] = useState('');
    return (
        <>
            <div className='d-flex justify-content-center mb-3'>
                <div className='search-bar-container'>
                    <Autocomplete
                        data={CompanyData}
                        onSelect={(name) => setName(name)}
                    />
                </div>
            </div>

            {name && (
                <pre className='text-left'>{JSON.stringify(name, 0, 2)}</pre>
            )}
        </>
    );
};

export default AutocompletePage;
