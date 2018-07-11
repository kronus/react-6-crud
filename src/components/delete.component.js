import React from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import toastr from 'toastr';
import $ from 'jquery';
import bootstrap from 'bootstrap';

class DeleteComponent extends React.Component{
    constructor(props) {
        super(props);
        // console.log(JSON.stringify(props));
        // console.log(props.location.pathname);
        var str = props.location.pathname;
        const last = str.substring(str.lastIndexOf("/") + 1, str.length);
        console.log(last);
        this.state = {
            id : last,
            name : '',
            price : ''
        };
        this.getData();
    }

    getData(self){
        // toastr.info("Fetching coin data...");
        Axios.get('http://kronusproductions.com/v2018/assets/api/get-coins-id/'+this.state.id).then(function(response){
            toastr.clear();
            $("#coinId").val(response.data[0].id);
            $("#coinName").val(response.data[0].name);
            $("#coinPrice").val(response.data[0].price);
           // console.log('response: ' + JSON.stringify(response.data));
           // console.log('response id: ' + response.data[0].id);
        }).catch(function(error){
            toastr.clear();
            toastr.error(error);
        });
    }

    submitForm(event){
        event.preventDefault();
        var data = $(event.target).serialize();
        toastr.clear();
        var isError = false;
        if($("#coinName").val() ===""){
            toastr.error("Coin name must be filled!");
            isError=true;
        }
        if($("#coinPrice").val() ===0 || $("#coinPrice").val() ===''){
            toastr.error("Coin price must be filled!");
            isError=true;
        }
        if(!isError){
            toastr.info("Deleting coin data...");
            Axios.get('http://kronusproductions.com/v2018/assets/api/delete-coins/' + this.state.id,{
                name : this.state.name,
                price : this.state.price
            }).then(function(response){
                toastr.clear();
                window.location.href = "/v2018/react-coins/";
            }).catch(function(error){
                toastr.clear();
                toastr.error(error);
            });
        }
    }

    render(){
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="coinId">Id : </label>
                        <div className="col-sm-10">
                            <input 	type="number" name='coinId'
                                      id="coinId" className="form-control" placeholder="Coin Id" disabled="disabled" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="coinEmail">Name : </label>
                        <div className="col-sm-10">
                            <input 	type="text" name='coinName'
                                      id="coinName" className="form-control" placeholder="Coin Name" disabled="disabled" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="coinPrice">Price : </label>
                        <div className="col-sm-10">
                            <input 	type="text" name='coinPrice'
                                      id="coinPrice" className="form-control" placeholder="Coin Price" disabled="disabled" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-danger">Confirm Delete</button>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <Link to={'/v2018/react-coins/'} className="btn btn-primary">Cancel Delete</Link>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default DeleteComponent