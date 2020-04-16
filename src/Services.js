//import 'core-js/fn/object/assign';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import MenuPopupState from './MenuPopupState';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, status, astart) {
    return { name, status, astart };
}

const rows = [
    createData('POM Sync Servcie', 0, 0),
    createData('XServer', 0, 1),
    createData('DServer', 1, 0),
    createData('RFSwitch', 2, 1),
    createData('Mediaswitch', 1, 0),
];

export default function Services() {
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Service name</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Run on boot</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <Link component="button">{row.name}</Link>
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            <TableCell align="right"><Checkbox checked={row.astart}/></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
