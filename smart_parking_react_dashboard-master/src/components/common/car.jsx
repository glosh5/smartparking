import React from "react";
import { Link } from "react-router-dom";
// import twilio from 'twilio'
import axios from "axios";


const Car = ({ carInfo: car, onModify, onDelete }) =>{

    const onAlert = async (car) => {
      console.log(car);

      try {
        const response = await(axios.get(`https://smart-parking-management.herokuapp.com/api/sendAlert?cNumber=${car.phoneNumber}`))
        alert("Alert : " + response.data)  
      }catch (err) {
        console.log(err)
      }
    }

    return (
      <tr>
        <th></th>
        <td >
          <Link className="nameLink">
            {car.name}
          </Link>
        </td>
        <td>{car.carMark}</td>
        <td >{car.plateNumber}</td>
        <td >{car.phoneNumber}</td>

        <td>
          <button
            onClick={() => onModify(car._id)}
            style={{ fontSize: "13px", zIndex: 999 }}
            className="btn btn-dark"
          >
            Modify
          </button>
        </td>
        <td>
          <button onClick={() => onAlert(car)} className="btn btn-warning">
            Alert
          </button>
        </td>
        <td>
          <button onClick={() => onDelete(car._id)} className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    );
  }
export default Car;

