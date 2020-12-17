import React, { useState } from 'react';
import CompanyData from '../../assets/data.json';
import Autocomplete from '../AllSearch/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './index.css';

const AutocompletePage = () => {
    const [name, setName] = useState('');
    return (
        <>
            <div className='row'>
                <div className='col text-center'>
                    <div className='d-flex justify-content-center mb-3'>
                        <div className='search-bar-container'>
                            <Autocomplete
                                data={CompanyData}
                                onSelect={(name) => setName(name)}
                            />

                            <FontAwesomeIcon
                                icon='search'
                                className='search-bar-icon'
                            />
                        </div>
                    </div>

                    {name && (
                        <pre className='text-left'>
                            {JSON.stringify(name, 0, 2)}
                        </pre>
                    )}
                </div>
            </div>
        </>
    );
};

export default AutocompletePage;
