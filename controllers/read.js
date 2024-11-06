import City from "../models/City.js";
import Slider from "../models/slider.js";
import Itinerarie from "../models/Itinerarie.js";

let allSlides = async (req, res, next) => {
  try {
    const sliders = await Slider.find();
    res.json(sliders);
  } catch (error) {
    next(error);
  }
};

let allCities = async (req, res, next) => {
  try {
    let { name, continent } = req.query;
    let query = {};
    if (name) {
      query.name = { $regex: "^" + name, $options: "i" };
    }
    if (continent && continent !== "All") {
      query.continent = continent;
    }
    let all = await City.find(query);

    return res.status(200).json({
      response: all,
    });
  } catch (error) {
    next(error);
  }
};

let citiesByname = async (req, res, next) => {
  try {
    let namecities = req.params.name;
    console.log(namecities);

    let store = await City.find({ name: namecities });
    if (store.length === 0) {
      return res.status(404).json({
        response: `Not store found with the name: ${namecities}`,
      });
    }
    return res.status(200).json({
      response: store,
    });
  } catch (error) {
    next(error);
  }
};

let allItineraries = async (req, res, next) => {
  try {
    const itineraries = await Itinerarie.find();
    res.json(itineraries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

let itinerariesByCity = async (req, res, next) => {
  try {
    const city = req.params.city;
    const itineraries = await Itinerarie.find({ city: city });
    res.json(itineraries);
  } catch (error) {
    next(error);
  }
};

let allContinents = async (req, res, next) => {
  try {
    let continents = await City.distinct("continent");
    return res.status(200).json({ response: continents });
  } catch (error) {
    next(error);
  }
};

export { allCities, citiesByname, allSlides, allItineraries, allContinents, itinerariesByCity };
