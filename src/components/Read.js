import React, {Component} from 'react';
import ReadAll from './ReadAll';

class Read extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: "",
            price: "",
            category_id: "",
            category_name: "",
            id: "",
            data: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.edit = this.edit.bind(this);
    }

    handleChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state);
    }

    componentDidMount(){
        fetch('http://localhost/acme-products/api/read_all_products.php')
        .then(response => response.json())
        .then(data => this.setState({data: data}));
    }

    edit(e){
        var data = {
            'name': this.state.name,
            'description': this.state.description,
            'price': this.state.price,
            'category_id': this.state.category_id,
            'category_name': this.state.category_name,
            'id': this.state.id,
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

        fetch('http://localhost/acme-products/api/update_product.php', {
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
        e.preventDefault();
        console.log(this.state);
    }

    // delete(id){
    //     var data = {
    //         'del_ids[]': id,
    //     }

    //     var formBody = [];

    //     for(let prop in data){
    //         // so the for loop won't walk the prototype chain
    //         if(data.hasOwnProperty(prop)){
    //             let encodedKey = encodeURIComponent(prop);
    //             let encodedValue = encodeURIComponent(data[prop]);
    //             formBody.push(encodedKey + '=' + encodedValue);
    //         }
    //     }

    //     formBody = formBody.join('&');

    //     fetch('http://localhost/acme-products/api/delete_product.php', {
    //         method: 'POST',
    //         headers: {
    //             'Accept': 'application/json',
    //             'Content-Type': 'application/x-www-form-urlencoded'
    //         },
    //         body: formBody
    //     }).then(function(res){
    //         //send something back
    //         return res.text();
    //     }, function(err){
    //         return err.message;
    //     })
    //     console.log(formBody);
    // }

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
                    <p className="arrow">&larr;</p>
                </div>
            </div>
        )
    }
}

export default Read;