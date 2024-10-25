import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";

const cities = [
    {
      name: "Tokyo",
      photo: "https://cdn.pixabay.com/photo/2020/03/19/12/01/tokyo-sky-tree-4947259_640.jpg",
      country: "Japan",
      continent: "Asia",
      description: "A bustling metropolis blending modern skyscrapers with historical temples."
    },
    {
      name: "Paris",
      photo: "https://cdn.pixabay.com/photo/2019/02/04/13/23/paris-3974650_640.jpg",
      country: "France",
      continent: "Europe",
      description: "The city of love, known for its art, fashion, and the iconic Eiffel Tower."
    },
    {
      name: "New York",
      photo: "https://cdn.pixabay.com/photo/2020/04/04/20/43/new-york-5003804_640.jpg",
      country: "USA",
      continent: "North America",
      description: "The city that never sleeps, famous for its skyline and cultural diversity."
    },
    {
      name: "Cairo",
      photo: "https://cdn.pixabay.com/photo/2017/01/14/20/55/cairo-1980350_640.jpg",
      country: "Egypt",
      continent: "Africa",
      description: "Home to the ancient pyramids and rich in historical significance."
    },
    {
      name: "Sydney",
      photo: "https://cdn.pixabay.com/photo/2019/03/25/02/03/sydney-4079191_640.jpg",
      country: "Australia",
      continent: "Australia",
      description: "Known for its stunning harbor and the iconic Sydney Opera House."
    },
    {
      name: "Rio de Janeiro",
      photo: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_640.jpg",
      country: "Brazil",
      continent: "South America",
      description: "Famous for its vibrant culture, Carnival, and breathtaking beaches."
    },
    {
      name: "Beijing",
      photo: "https://cdn.pixabay.com/photo/2020/11/24/10/00/city-5772040_1280.jpg",
      country: "China",
      continent: "Asia",
      description: "A city rich in history, home to the Forbidden City and the Great Wall."
    },
    {
      name: "Moscow",
      photo: "https://cdn.pixabay.com/photo/2020/02/09/17/21/moscow-4833906_1280.jpg",
      country: "Russia",
      continent: "Europe",
      description: "Known for its historical Red Square and stunning architecture."
    },
    {
      name: "Cape Town",
      photo: "https://cdn.pixabay.com/photo/2018/07/18/09/23/cape-town-city-bowl-3545921_640.jpg",
      country: "South Africa",
      continent: "Africa",
      description: "Famous for its beautiful landscapes and Table Mountain."
    },
    {
      name: "London",
      photo: "https://cdn.pixabay.com/photo/2018/08/31/18/33/london-eye-3645297_640.jpg",
      country: "United Kingdom",
      continent: "Europe",
      description: "A historic city with landmarks like the Big Ben and Buckingham Palace."
    },
    {
      name: "Bangkok",
      photo: "https://cdn.pixabay.com/photo/2019/04/21/04/39/landscape-4143400_640.jpg",
      country: "Thailand",
      continent: "Asia",
      description: "Known for its vibrant street life and ornate temples."
    },
    {
      name: "Buenos Aires",
      photo: "https://cdn.pixabay.com/photo/2014/10/30/00/15/buenos-aires-508790_640.jpg",
      country: "Argentina",
      continent: "South America",
      description: "A city with rich European heritage and a lively arts scene."
    },
    {
      name: "Dubai",
      photo: "https://cdn.pixabay.com/photo/2015/10/08/09/30/dubai-977368_640.jpg",
      country: "United Arab Emirates",
      continent: "Asia",
      description: "Renowned for its ultramodern architecture and luxury shopping."
    },
    {
      name: "Toronto",
      photo: "https://cdn.pixabay.com/photo/2018/04/04/16/48/canada-3290310_640.jpg",
      country: "Canada",
      continent: "North America",
      description: "A diverse city known for its CN Tower and vibrant arts scene."
    },
    {
      name: "Rome",
      photo: "https://cdn.pixabay.com/photo/2019/03/28/18/46/rome-4087802_640.jpg",
      country: "Italy",
      continent: "Europe",
      description: "The Eternal City, rich in history with landmarks like the Colosseum."
    }
  ];

City.insertMany(cities)