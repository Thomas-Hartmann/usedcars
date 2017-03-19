/**
 * Created by tha on 16-03-2017.
 */
import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import currency from './Currency';
import paramFilter from './FilterOnParams';

class UsedCarsApp1 extends Component{
    render() {
        const cars = this.props.cars;
        document.title = "Used Cars App";
        const carlines = cars.map((car, index) => {
                const registered = (new Date(car.registered)).toISOString().slice(0, 10);
                return <tr key={index}>
                    <td>{car.year}</td>
                    <td>{registered}</td>
                    <td>{car.make}</td>
                    <td>{car.model}</td>
                    <td>{car.description}</td>
                    <td>{currency(car.price)}</td>
                </tr>;
            }
        );
        const carsTable = <table className="table-striped">
            <thead>
            <tr>
                <th>Year</th>
                <th>Registered</th>
                <th>Make</th>
                <th>Model</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
            </thead>
            <tbody>
            {carlines}
            </tbody>
        </table>;
        return (
            <div className="UsedCarsApp">

                <h3 className="grey-back">Number of cars in the list: {cars.length}</h3>
                {carsTable}
            </div>
        );
    }
}
// class FilterInput extends Component{
//     constructor(props){
//         super(props);
//         this.update = this.update.bind(this);
//     }
//     update(){
//         var modifiedValue=this.refs.inputValue.getDOMNode().value;
//         this.props.updateValue(modifiedValue);
//     }
//     return(<input type="text" ref="inputValue" value={this.props.value} onChange={this.update} />)
//
// }
export default UsedCarsApp1;