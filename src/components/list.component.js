import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import toastr from 'toastr';
import $ from 'jquery';
import bootstrap from 'bootstrap';

class ListComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {data: []}
    }

    componentDidMount() {
        this.getCoinList();
    }

    getCoinList(){
        toastr.info('Fetching coin list...');
        var self = this;
        Axios.get('http://kronusproductions.com/v2018/assets/api/get-coins/').then(function(response){
            toastr.clear();
            self.setState({
                cols : self.state.cols,
                data : response.data
            });
        }).catch(function(error){
            toastr.clear();
            toastr.error(error);
        });
    }

    updateCoin(data){
        var id = $(data.target).data('id');
        window.location.href='/v2018/react-coins/Edit/'+id;
    }

    deleteCoin(data){
        var id = $(data.target).data('id');
        window.location.href='/v2018/react-coins/Edit/'+id;
    }

    render() {
        return (
            <Paper>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell numeric>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell numeric>Price</TableCell>
                            <TableCell>Edit</TableCell>
                            <TableCell>Delete</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.data.map(n => {
                            return (
                                <TableRow key={n.id}>
                                    <TableCell component="th" scope="row">
                                        {n.id}
                                    </TableCell>
                                    <TableCell component="th" scope="row">
                                        {n.name}
                                    </TableCell>
                                    <TableCell numeric>{n.price}</TableCell>
                                    <TableCell><Link to={'/v2018/react-coins/Edit/'+n.id} className="btn btn-warning">Edit</Link></TableCell>
                                    <TableCell><Link id={n.id} to={'/v2018/react-coins/Delete/'+n.id} className="btn btn-danger">Delete</Link></TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

export default ListComponent