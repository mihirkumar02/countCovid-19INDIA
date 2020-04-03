import React, { Component } from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';
import {searchState, fetchState} from '../actions/searchActions';
import {connect} from 'react-redux';
import {compose} from 'redux';

class MapContainer extends Component {

    componentDidUpdate(){
        this.props.fetchState(this.props.text);
    }

    display = (string) => {
        this.props.searchState(string);
    }

    render(){

        return(
            <Map
                google={this.props.google}
                zoom={4.7}
                initialCenter={{lat: 23.146633, lng: 80.088860}}
            >
                <Marker position={{ lat: 15.9129, lng: 79.7400}} onClick={() => {this.display('Andhra%20Pradesh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 11.7401, lng: 92.6586}} onClick={() => {this.display('Andaman%20and%20Nicobar%20Islands'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 28.2180, lng: 94.7278}} onClick={() => {this.display('Arunachal%20Pradesh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 26.2006, lng: 92.9376}} onClick={() => {this.display('Assam'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 25.0961, lng: 85.3131}} onClick={() => {this.display('Bihar'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 21.2787, lng: 81.8661}} onClick={() => {this.display('Chhattisgarh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 28.7041, lng: 77.1025}} onClick={() => {this.display('Delhi'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 15.2993, lng: 74.1240}} onClick={() => {this.display('Goa'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 22.2587, lng: 71.1924}} onClick={() => {this.display('Gujarat'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 29.0588, lng: 76.0856}} onClick={() => {this.display('Haryana'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 31.1048, lng: 77.1734}} onClick={() => {this.display('Himachal%20Pradesh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 33.7782, lng: 76.5762}} onClick={() => {this.display('Jammu%20and%20Kashmir'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 23.6102, lng: 85.2799}} onClick={() => {this.display('Jharkhand'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 15.3173, lng: 75.7139}} onClick={() => {this.display('Karnataka'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 10.8505, lng: 76.2711}} onClick={() => {this.display('Kerala'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 34.1525, lng: 77.5770}} onClick={() => {this.display('Ladakh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 22.9734, lng: 78.6569}} onClick={() => {this.display('Madhya%20Pradesh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 19.7515, lng: 75.7139}} onClick={() => {this.display('Maharashtra'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 24.6637, lng: 93.9063}} onClick={() => {this.display('Manipur'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 25.4670, lng: 91.3662}} onClick={() => {this.display('Meghalaya'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 23.1645, lng: 92.9376}} onClick={() => {this.display('Mizoram'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 26.1584, lng: 94.5624}} onClick={() => {this.display('Nagaland'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 20.9517, lng: 85.0985}} onClick={() => {this.display('Odisha'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 11.9416, lng: 79.8083}} onClick={() => {this.display('Puducherry'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 31.1471, lng: 75.3412}} onClick={() => {this.display('Punjab'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 27.0238, lng: 74.2179}} onClick={() => {this.display('Rajasthan'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 27.5330, lng: 88.5122}} onClick={() => {this.display('Sikkim'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 11.1271, lng: 78.6569}} onClick={() => {this.display('Tamil%20Nadu'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 18.1124, lng: 79.0193}} onClick={() => {this.display('Telangana'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 23.9408, lng: 91.9882}} onClick={() => {this.display('Tripura'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 26.8467, lng: 80.9462}} onClick={() => {this.display('Uttar%20Pradesh'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 30.0668, lng: 79.0193}} onClick={() => {this.display('Uttarakhand'); window.scrollTo(0,1370);}}/>
                <Marker position={{ lat: 22.9868, lng: 87.8550}} onClick={() => {this.display('West%20Bengal'); window.scrollTo(0,1370);}}/>
            </Map>

           
        );
    }
}

const mapStateToProps = state => ({
    text: state.states.text
})

export default compose(
    GoogleApiWrapper({
        apiKey: 'AIzaSyBSncveVBP1lyZZ6WPcvuHpAtDmfm-WZH4'
    }),
    connect(mapStateToProps, {searchState ,fetchState})
)(MapContainer); //Renamed googleapiwrapper to MapContainer