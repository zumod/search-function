import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const AutoCompleteItem = ({
    project_name,
    assigned_to,
    status,
    onSelectItem,
    isHighlighted,
}) => {
    return (
        <List
            className="list-group" style={{backgroundColor: 'white'}}
            onClick={onSelectItem}
        >
            <ListItem>
            <div className='row m-0 p-0 '>
                <div className='col text-left'>
                    <p className='mb-0 font-weight-bold line-height-1'>
                        {project_name}
                    </p>
                    <span className='small font-weight-bold'>
                        Assigned to -{' '}
                    </span>
                    <p className='mb-0 badge badge-primary'>{assigned_to}</p>
                    <span> </span>
                    <span className='small font-weight-bold'>Status - </span>
                    <p
                        className={
                            status === 'Pending'
                                ? 'mb-0 ml-2 badge badge-danger'
                                : status === 'Completed'
                                ? 'mb-0 ml-2 badge badge-success'
                                : 'mb-0 ml-2 badge badge-warning'
                        }
                    >
                        {status}
                    </p>
                </div>
            </div>
            </ListItem>
            
        </List>
    );
};

export default AutoCompleteItem;
