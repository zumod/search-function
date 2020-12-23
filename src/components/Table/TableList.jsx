import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
        maxWidth: 1200,
        border: '2px solid #f6f6f6',
    },
    paper: {
        width: 1300,
        marginLeft: '15%',
    },
});

const TableList = ({ data, title }) => {
    useEffect(() => {
        // console.log('hii');
        // console.log(data);
        console.log(title);
    }, []);
    const classes = useStyles();

    return (
        <>
            <div className={classes.paper}>
                {title}
                <Button
                    aria-controls='customized-menu'
                    aria-haspopup='true'
                    variant='contained'
                    color='primary'
                    style={{
                        float: 'right',
                        padding: '1%',
                        marginRight: '7.5%',
                    }}
                >
                    ADD Company
                </Button>
                <div component={Paper}>
                    <br />
                    <br />
                    <TableContainer>
                        <Table
                            className={classes.table}
                            aria-label='simple table'
                            size='small'
                        >
                            <TableHead>
                                <TableRow>
                                    <TableCell>Project Name</TableCell>
                                    <TableCell align='right'>
                                        Contractor Name
                                    </TableCell>
                                    <TableCell align='right'>
                                        Tast Number
                                    </TableCell>
                                    <TableCell align='right'>
                                        Assigned To
                                    </TableCell>
                                    <TableCell align='right'>Status</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data
                                        ? data.map((item, index) => (
                                              <TableRow key={index}>
                                                  <TableCell
                                                      component='th'
                                                      scope='row'
                                                  >
                                                      {item.project_name}
                                                  </TableCell>
                                                  <TableCell align='right'>
                                                      {item.contractor_name}
                                                  </TableCell>
                                                  <TableCell align='right'>
                                                      {item.tast_number}
                                                  </TableCell>
                                                  <TableCell align='right'>
                                                      {item.assigned_to}
                                                  </TableCell>
                                                  <TableCell align='right'>
                                                      {item.status}
                                                  </TableCell>
                                              </TableRow>
                                          ))
                                        : 'No Results'
                                    //     (<TableRow>
                                    //     <TableCell align='right'>
                                    //         gfdf
                                    //     </TableCell>
                                    //     <TableCell align='right'>gfdf</TableCell>
                                    //     <TableCell align='right'>gfdf</TableCell>
                                    //     <TableCell align='right'>gfdf</TableCell>
                                    //     <TableCell align='right'>gfdf</TableCell>
                                    // </TableRow>)
                                }
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
            </div>
        </>
    );
};

export default TableList;
