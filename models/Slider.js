import { Schema, model } from "mongoose"; 

let collection = "sliders"

let schema = new Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
});



let Slider = model(collection, schema)
export default Slider;