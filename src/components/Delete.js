import React, {Component} from 'react';
import ReadAll from './ReadAll.js'

class Delete extends Component{

    constructor(props){
        super(props);
        this.state = {
            id: "",
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    handleSubmit(e) {
        var data = {
            'del_ids[]': this.state.id.trim()
        }

        var formBody = [];

        for(let prop in data){
            // so the for loop won't walk the prototype chain
            if(data.hasOwnProperty(prop)){
                let encodedKey = encodeURIComponent(prop);
                let encodedValue = encodeURIComponent(data[prop]);
                formBody.push(encodedKey + '=' + encodedValue);
            }
        }

        formBody = formBody.join('&');
        console.log(formBody);

        fetch('http://localhost/acme-products/api/delete_product.php', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: formBody
        }).then(function(res){
            //send something back
            return res.text();
        }, function(err){
            return err.message;
        })
        // e.preventDefault();
    }


    render(){
        return (
            <div className="wrapper">
                <ReadAll/>
                <div className="forms">
                    <div className="mainLinkContainer">
                        <a href="/create">C</a>
                        <a href="/read">R</a>
                        <a href="/update">U</a>
                        <a href="/delete">D</a>
                        <a href="/">/HOME</a>
                    </div>
                <div className="create">
                    <h2>Delete a Record</h2>
                    <form className="deleteForm" onSubmit={this.handleSubmit}>
                        ID:<br/>
                        <input className="deleteInput" type="text" value={this.state.id}  onChange={this.handleChange} name="id" /><br/><br/>
                        <br/>
                        <input className="deleteButton button" type="submit" value="DELETE"/>
                    </form> 
                    <p>You are entering into dangerous territory here friend. Proceed with caution. All you really have to do is type in the 
                        ID number from whichever product you want to delete but once it's gone it's gone forever. Unless you create another entry.
                        Maybe it's not all that serious. 
                    </p>
                </div>
            </div>
            </div>
        )
    }
}

export default Delete;