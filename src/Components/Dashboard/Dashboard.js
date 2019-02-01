import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import House from '../House/House';
import axios from 'axios';

class Dashboard extends Component {
    constructor(){
        super()

        this.state={
            properties: [],
        }
    }

    //methods rs
    componentDidMount(){
        axios.get(`http://localhost:4000/api/houses`)
        .then(res => {
            this.setState({properties: res.data})
        })
    }


    render(){
        //mapping over this.state.properties array
        console.log(this.state.properties)
        let displayProperties= this.state.properties.map((place,ind) => {
            return(
                <div>
                    <h3 key={ind}>
                        <House />
                        {console.log(place)}      
                        {place.property_name}<br/>
                        {place.address}<br/>
                        {place.city}<br/>
                        {place.state}<br/>
                        {place.zip_code}                                          
                    </h3>
                </div>
            )
        })
        return(
            <div>Dashboard 
                <Link to='/wizard'><button>Add New Property </button></Link>

                {displayProperties}

                {/* <House display={displayProperties} /> */}

            </div>
        )
    }
}

export default Dashboard 