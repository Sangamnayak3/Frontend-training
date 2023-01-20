import axios from 'axios';

let dataServiceObj = {};

let url = "http://localhost:3600/bikes/";

dataServiceObj.getBike = function()
{
    return axios.get(url);
};

dataServiceObj.getBikeByModel = function( model_number )
{
    alert(model_number);
    return axios.get(url + model_number);
};

dataServiceObj.addBike = function( bikeObj )
{
    return axios.post(url, bikeObj);
};

dataServiceObj.updateBike = function( bikeObj )
{
    return axios.put(url + bikeObj.model_number, bikeObj);
};

dataServiceObj.deleteBike = function( model_number )
{
    return axios.delete(url + model_number);
};

export default dataServiceObj;