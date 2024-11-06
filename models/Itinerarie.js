import { Schema, model } from "mongoose";

let collection = "Intinerarie";

let schema = new Schema({
  city: { type: String, required: true },
  username: { type: String, required: true },
  userphoto: { type: String, required: true },
  price: { type: String, required: true },
  duration: { type: Number, required: true },
  likes: { type: Number, default: 0 },
  hashtags: [{ type: String, required: true }],
  itinerary: [
    {
      site_name: { type: String, required: true },
      site_photo: { type: String, required: true },
      description: { type: String, required: true },
    },
  ],
});

let Itinerarie = model(collection, schema);
export default Itinerarie;
