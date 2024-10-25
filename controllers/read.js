import City from "../models/City.js";



let allCities = async (req, res,next) => {
  try {

    let {name}= req.query

    let query = {}

    if (name) {
        query.name = {$regex:  '^'+ name, $options: "i"}
    }

    let all = await City.find(query);
   
    return res.status(200).json({
      response: all, 
    });
  } catch (error) {
    next(error)
  ;
  }
};

let citiesByname = async (req, res,next) => {
  try {
    let namecities = (req.params.name); 
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




export { allCities, citiesByname };