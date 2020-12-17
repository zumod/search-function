import React from 'react';

const AutoCompleteItem = ({
    project_name,
    assigned_to,
    task_number,
    status,
    onSelectItem,
    isHighlighted,
}) => {
    return (
        <li
            className={`list-group-item ${
                isHighlighted ? 'active highlighted' : ''
            }`}
            onClick={onSelectItem}
        >
            <div className='row'>
                <div className='col text-left'>
                    <p className='mb-0 font-weight-bold line-height-1'>
                        {project_name}
                    </p>
                    <p className='mb-0 badge badge-primary'>
                        {assigned_to}
                    </p>
                    <p
                        className={
                            status == 'Pending'
                                ? 'mb-0 ml-2 badge badge-danger'
                                : status == 'Completed'
                                ? 'mb-0 ml-2 badge badge-success'
                                : 'mb-0 ml-2 badge badge-warning'
                        }
                    >
                        {status}
                    </p>
                </div>
            </div>
        </li>
    );
};

export default AutoCompleteItem;
