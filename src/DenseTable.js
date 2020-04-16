import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Switch from '@material-ui/core/Switch';

const useStyles = makeStyles({
    table: {
        minWidth: 500,
        maxWidth: 500
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

export default function DenseTable() {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        //setChecked((prev) => !prev);

    };

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell>Service name</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Run on boot</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                <Link component="button">{row.name}</Link>
                            </TableCell>
                            <TableCell align="right">{row.status}</TableCell>
                            {/*<TableCell align="right"><Checkbox size="small" checked={row.astart}/></TableCell>*/}
                            <TableCell align="right"><Switch size="small" checked={row.astart} onChange={toggleChecked}/></TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
