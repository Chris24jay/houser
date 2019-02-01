import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Wizard extends Component {
    constructor() {
        super()

        this.state = {
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipCode: 0,
        }
        this.handleCancelButton = this.handleCancelButton.bind(this)
    }

    //methods/set up handlers to update state on input values
    handlePropertyNameInput(val) {
        this.setState({ propertyName: val })
    }

    handleAdressInput(val) {
        this.setState({ address: val })
    }

    handleCityInput(val) {
        this.setState({ city: val })
    }

    handleStateInput(val) {
        this.setState({ state: val })
    }

    handleZipInput(val) {
        this.setState({ zipCode: val })
    }

    //sets the states back to default when clicking cancel
    handleCancelButton() {
        this.setState({
            propertyName: '',
            address: '',
            city: '',
            state: '',
            zipCode: '',
        })
    }

    postProperty(){
        axios.post(`http://localhost:4000/api/houses`)
        
    }



    render() {    
        return (
            <div>Add New Listing
                <Link to='/'><button onClick={this.handleCancelButton} >Cancel</button> </Link>
                <form>
                    Property Name<input onChange={e => this.handlePropertyNameInput(e.target.value)} /><br />
                    Address<input onChange={e => this.handleAdressInput(e.target.value)} /><br />
                    City<input onChange={e => this.handleCityInput(e.target.value)} />
                    State<input onChange={e => this.handleStateInput(e.target.value)} />
                    Zip<input placeholder='enter zip' onChange={e => this.handleZipInput(e.target.value)} />
                </form>
            </div>
        )
    }
}

export default Wizard