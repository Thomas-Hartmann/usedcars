import React, {Component} from 'react';
import './App.css';
import UsedCarsView from './usedcarsview/UsedCarsView';
import CarInput from './carinput/CarInput';
import { Router, Route, Link, hashHistory } from 'react-router'

var carsArray = [
    {id: 1, year: 1997, registered: 867621600000, make: 'Ford', model: 'E350', description: 'ac,abs, moon', price: 3000}
    , {id: 2, year: 1999, registered: 945212400000, make: 'Chevy', model: 'Venture', description: 'None', price: 4900}
    , {id: 3,year: 2000, registered: 953766000000, make: 'Chevy', model: 'Venture', description: '', price: 5000}
    , {id: 4,year: 1996,registered: 844380000000,make: 'Jeep',model: 'GrandCherokee',description: 'Air, moon roof, loaded',price: 4799}
    , {id: 5,year: 2012,registered: 844380000000,make: 'VW',model: 'Up',description: 'Air, moon roof, loaded',price: 2799}
    , {id: 6,year: 2015,registered: 844380000000,make: 'Fiat',model: 'Panda',description: 'Breaks, Seats, Steering wheel',price: 1799}
];

class UsedCarsApp extends Component{

    constructor(props){
        super(props);
        //format the date string to something usefull in each car object
        carsArray.forEach((car)=>{
            car.registered =(new Date(car.registered)).toISOString().slice(0, 10);
        });
        //Set State object
        this.state = { cars: carsArray};
        //Bind the 'this' reference to each method in this class
        this.deleteCar = this.deleteCar.bind(this);
        this.grabCar = this.grabCar.bind(this);
        this.submitCar = this.submitCar.bind(this);
    }

    //This method is run from the UsedCarsView (the delete button)
    deleteCar = function(target){


    }

    //This method is run from the UsedCarsView (edit buttons) in order to fill the CarInput component with the appropriate data.
    grabCar = function(target){

    }

    //This method is run from the CarInput Component with the data from the user form.
    submitCar = function(newCar){

    }




    render(){
        document.title = "Used Cars App";
        const car = this.state.car;
        return(
        <div id="containerDiv">
            <UsedCarsView cars={this.state.cars} delete={this.deleteCar} edit={this.grabCar}/>
            <CarInput car={car} submit={this.submitCar}/>
        </div>
            );
    }





    getHighestID(arr){
        var highest = 0;
        arr.forEach(car=>{
            if(car.id > highest){
                highest = car.id;
            }
        });
        return highest;
    }
}

export default UsedCarsApp;
