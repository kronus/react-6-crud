import React from 'react';
import Axios from 'axios';
import toastr from 'toastr';
import $ from 'jquery';
import bootstrap from 'bootstrap';

class NewComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name : null,
            price : null
        }
    }

    submitForm(event){
        event.preventDefault();
        var data = $(event.target).serialize();
        toastr.clear();
        var isError = false;
        if(this.state.name===""){
            toastr.error("Coin name must be filled!");
            isError=true;
        }
        if(this.state.price===0 || this.state.price===''){
            toastr.error("Coin price must be filled!");
            isError=true;
        }
        if(!isError){
            toastr.info('Inserting new coin data...');
            Axios.get('http://kronusproductions.com/v2018/assets/api/post-coins/' + this.state.name + '/' + this.state.price,{
                id: this.state.id,
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

    onCoinNameChange(e){
        this.setState({
            id : this.state.id,
            name : e.target.value.trim(),
            price : this.state.price
        });
    }

    onCoinPriceChange(e){
        this.setState({
            name : this.state.name,
            price : e.target.value
        });
    }

    render(){
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.submitForm.bind(this)}>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="coinEmail">Name : </label>
                        <div className="col-sm-10">
                            <input 	type="text" name='coinName'
                                      onChange={this.onCoinNameChange.bind(this)}
                                      id="coinName" className="form-control" placeholder="Coin Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="control-label col-sm-2" htmlFor="coinPrice">Price : </label>
                        <div className="col-sm-10">
                            <input 	type="text" name='coinPrice'
                                      onChange={this.onCoinPriceChange.bind(this)}
                                      id="coinPrice" className="form-control" placeholder="Coin Price" />
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </div>
                </form>

            </div>
        );
    }
}

export default NewComponent