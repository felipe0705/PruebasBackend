import "dotenv/config.js";
import "../../config/database.js";
import City from "../City.js";
import Slider from "../slider.js";
import Itinerarie from "../Itinerarie.js";




const cities = [
  {
    city: "Tokyo",
    photo: "https://cdn.pixabay.com/photo/2020/03/19/12/01/tokyo-sky-tree-4947259_640.jpg",
    country: "Japan",
    continent: "Asia",
    description: "A bustling metropolis blending modern skyscrapers with historical temples.",
    population: "37 million",
    currency: "JPY (¥)"
  },
  {
    city: "Paris",
    photo: "https://cdn.pixabay.com/photo/2019/02/04/13/23/paris-3974650_640.jpg",
    country: "France",
    continent: "Europe",
    description: "The city of love, known for its art, fashion, and the iconic Eiffel Tower.",
    population: "11 million",
    currency: "EUR (€)"
  },
  {
    city: "New York",
    photo: "https://cdn.pixabay.com/photo/2020/04/04/20/43/new-york-5003804_640.jpg",
    country: "USA",
    continent: "North America",
    description: "The city that never sleeps, famous for its skyline and cultural diversity.",
    population: "8.4 million",
    currency: "USD ($)"
  },
  {
    city: "Cairo",
    photo: "https://cdn.pixabay.com/photo/2017/01/14/20/55/cairo-1980350_640.jpg",
    country: "Egypt",
    continent: "Africa",
    description: "Home to the ancient pyramids and rich in historical significance.",
    population: "20 million",
    currency: "EGP (E£)"
  },
  {
    city: "Sydney",
    photo: "https://cdn.pixabay.com/photo/2019/03/25/02/03/sydney-4079191_640.jpg",
    country: "Australia",
    continent: "Australia",
    description: "Known for its stunning harbor and the iconic Sydney Opera House.",
    population: "5.3 million",
    currency: "AUD (A$)"
  },
  {
    city: "Rio de Janeiro",
    photo: "https://cdn.pixabay.com/photo/2017/01/08/19/30/rio-de-janeiro-1963744_640.jpg",
    country: "Brazil",
    continent: "South America",
    description: "Famous for its vibrant culture, Carnival, and breathtaking beaches.",
    population: "6.7 million",
    currency: "BRL (R$)"
  },
  {
    city: "Beijing",
    photo: "https://cdn.pixabay.com/photo/2020/11/24/10/00/city-5772040_1280.jpg",
    country: "China",
    continent: "Asia",
    description: "A city rich in history, home to the Forbidden City and the Great Wall.",
    population: "21 million",
    currency: "CNY (¥)"
  },
  {
    city: "Moscow",
    photo: "https://cdn.pixabay.com/photo/2020/02/09/17/21/moscow-4833906_1280.jpg",
    country: "Russia",
    continent: "Europe",
    description: "Known for its historical Red Square and stunning architecture.",
    population: "12.5 million",
    currency: "RUB (₽)"
  },
  {
    city: "Cape Town",
    photo: "https://cdn.pixabay.com/photo/2018/07/18/09/23/cape-town-city-bowl-3545921_640.jpg",
    country: "South Africa",
    continent: "Africa",
    description: "Famous for its beautiful landscapes and Table Mountain.",
    population: "4.6 million",
    currency: "ZAR (R)"
  },
  {
    city: "London",
    photo: "https://cdn.pixabay.com/photo/2018/08/31/18/33/london-eye-3645297_640.jpg",
    country: "United Kingdom",
    continent: "Europe",
    description: "A historic city with landmarks like the Big Ben and Buckingham Palace.",
    population: "9.3 million",
    currency: "GBP (£)"
  },
  {
    city: "Bangkok",
    photo: "https://cdn.pixabay.com/photo/2019/04/21/04/39/landscape-4143400_640.jpg",
    country: "Thailand",
    continent: "Asia",
    description: "Known for its vibrant street life and ornate temples.",
    population: "10.5 million",
    currency: "THB (฿)"
  },
  {
    city: "Buenos Aires",
    photo: "https://cdn.pixabay.com/photo/2014/10/30/00/15/buenos-aires-508790_640.jpg",
    country: "Argentina",
    continent: "South America",
    description: "A city with rich European heritage and a lively arts scene.",
    population: "15 million",
    currency: "ARS ($)"
  },
  {
    city: "Dubai",
    photo: "https://cdn.pixabay.com/photo/2015/10/08/09/30/dubai-977368_640.jpg",
    country: "United Arab Emirates",
    continent: "Asia",
    description: "Renowned for its ultramodern architecture and luxury shopping.",
    population: "3.3 million",
    currency: "AED (د.إ)"
  },
  {
    city: "Toronto",
    photo: "https://cdn.pixabay.com/photo/2018/04/04/16/48/canada-3290310_640.jpg",
    country: "Canada",
    continent: "North America",
    description: "A diverse city known for its CN Tower and vibrant arts scene.",
    population: "6.2 million",
    currency: "CAD (C$)"
  },
  {
    city: "Rome",
    photo: "https://cdn.pixabay.com/photo/2019/03/28/18/46/rome-4087802_640.jpg",
    country: "Italy",
    continent: "Europe",
    description: "The Eternal City, rich in history with landmarks like the Colosseum.",
    population: "4.3 million",
    currency: "EUR (€)"
  },
  {
    city: "Singapore",
    photo: "https://cdn.pixabay.com/photo/2017/09/04/18/00/marina-bay-of-singapore-2714862_640.jpg",
    country: "Singapore",
    continent: "Asia",
    description: "A vibrant city-state known for its stunning skyline and rich cultural diversity.",
    population: "5.7 million",
    currency: "SGD (S$)"
  }
];

City.insertMany(cities)

const itinerarie = [
  {
    city: "Tokyo",
    username: "Akira Yamamoto",
    userphoto: "https://cdn.pixabay.com/photo/2016/10/28/16/04/tokyo-tower-1774763_640.jpg",
    price: "💴💴💴💴",
    duration: 8,
    likes: 0,
    hashtags: ["#tech", "#tradition", "#sushi"],
    itinerary: [
      {
        site_name: "Tokyo Tower",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/10/28/16/04/tokyo-tower-1774763_640.jpg",
        description:
          "An iconic symbol of Tokyo with stunning views of the city.",
      },
      {
        site_name: "Senso-ji Temple",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/12/18/15/10/temple-1094602_640.jpg",
        description:
          "Tokyo's oldest temple, rich with historical significance.",
      },
      {
        site_name: "Shibuya Crossing",
        site_photo:
          "https://cdn.pixabay.com/photo/2020/01/04/19/38/shibuya-4747433_640.jpg",
        description:
          "The busiest pedestrian crossing in the world, a must-see!",
      },
    ],
  },
  {
    city: "Paris",
    username: "Sophie Martin",
    userphoto: "photo_url_sophie",
    price: "💶💶💶💶",
    duration: 7,
    likes: 0,
    hashtags: ["#romance", "#art", "#fashion"],
    itinerary: [
      {
        site_name: "Eiffel Tower",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/09/18/20/58/eiffel-tower-950133_640.jpg",
        description:
          "The world-famous landmark offering breathtaking views of Paris.",
      },
      {
        site_name: "Louvre Museum",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/06/13/09/12/louvre-1454486_640.jpg",
        description:
          "Home to the Mona Lisa and an extensive collection of art.",
      },
      {
        site_name: "Notre-Dame Cathedral",
        site_photo:
          "https://cdn.pixabay.com/photo/2019/03/26/01/21/notre-dame-4084467_640.jpg",
        description: "A stunning example of Gothic architecture.",
      },
    ],
  },
  {
    city: "New York",
    username: "John Doe",
    userphoto: "photo_url_john",
    price: "💵💵💵💵",
    duration: 6,
    likes: 0,
    hashtags: ["#skyline", "#culture", "#diversity"],
    itinerary: [
      {
        site_name: "Statue of Liberty",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/07/05/20/49/new-york-1490576_640.jpg",
        description: "The symbol of freedom and democracy in America.",
      },
      {
        site_name: "Times Square",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/01/19/17/54/times-square-1148355_640.jpg",
        description: "The bustling commercial and entertainment hub.",
      },
      {
        site_name: "Central Park",
        site_photo:
          "https://cdn.pixabay.com/photo/2018/02/27/18/20/central-park-3185540_640.jpg",
        description: "A sprawling park in the heart of the city.",
      },
    ],
  },
  {
    city: "Cairo",
    username: "Amina Hassan",
    userphoto: "photo_url_amina",
    price: "💷💷💷💷",
    duration: 7,
    likes: 0,
    hashtags: ["#history", "#pyramids", "#culture"],
    itinerary: [
      {
        site_name: "Pyramids of Giza",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/05/04/14/05/pyramids-752290_640.jpg",
        description: "One of the seven wonders of the ancient world.",
      },
      {
        site_name: "Egyptian Museum",
        site_photo:
          "https://cdn.pixabay.com/photo/2018/02/13/12/14/egyptian-museum-3152754_640.jpg",
        description:
          "Home to an extensive collection of ancient Egyptian artifacts.",
      },
      {
        site_name: "Khan El Khalili Bazaar",
        site_photo:
          "https://cdn.pixabay.com/photo/2019/04/17/06/21/egypt-4133251_640.jpg",
        description: "A bustling marketplace filled with history and culture.",
      },
    ],
  },
  {
    city: "Sydney",
    username: "Jack Thompson",
    userphoto: "photo_url_jack",
    price: "💵💵💵💵",
    duration: 8,
    likes: 0,
    hashtags: ["#harbor", "#opera", "#beach"],
    itinerary: [
      {
        site_name: "Sydney Opera House",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/03/03/23/53/opera-house-1231874_640.jpg",
        description: "An iconic architectural masterpiece.",
      },
      {
        site_name: "Bondi Beach",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/11/14/02/51/australia-1822522_640.jpg",
        description: "A popular beach known for its surf and sand.",
      },
      {
        site_name: "Sydney Harbour Bridge",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/10/17/21/39/sydney-harbour-bridge-992160_640.jpg",
        description: "A must-see landmark offering spectacular views.",
      },
    ],
  },
  {
    city: "Rio de Janeiro",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Christ the Redeemer",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/02/20/10/35/christ-the-redeemer-644888_640.jpg",
        description: "One of the New Seven Wonders of the World.",
      },
      {
        site_name: "Copacabana Beach",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/11/29/09/32/rio-de-janeiro-1867375_640.jpg",
        description: "A famous beach known for its vibrant atmosphere.",
      },
      {
        site_name: "Sugarloaf Mountain",
        site_photo:
          "https://cdn.pixabay.com/photo/2018/02/22/11/04/rio-3174013_640.jpg",
        description: "Offers breathtaking views of the city.",
      },
    ],
  },
  {
    city: "Beijing",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Great Wall of China",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/11/08/05/27/great-wall-1801475_640.jpg",
        description: "A monumental feat of ancient engineering.",
      },
      {
        site_name: "Forbidden City",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/04/13/03/39/forbidden-city-720986_640.jpg",
        description: "A palace complex and a historical treasure.",
      },
      {
        site_name: "Temple of Heaven",
        site_photo:
          "https://cdn.pixabay.com/photo/2019/06/12/02/23/temple-of-heaven-4269176_640.jpg",
        description: "An imperial complex of religious buildings.",
      },
    ],
  },
  {
    city: "Moscow",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Red Square",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/01/05/13/58/red-square-1123004_640.jpg",
        description:
          "The heart of Moscow and a site of historical significance.",
      },
      {
        site_name: "Kremlin",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/11/18/11/18/kremlin-1838945_640.jpg",
        description: "A fortified complex at the heart of the city.",
      },
      {
        site_name: "Saint Basil's Cathedral",
        site_photo:
          "https://cdn.pixabay.com/photo/2014/10/28/17/07/st-basils-cathedral-506258_640.jpg",
        description:
          "A symbol of Russia with its colorful, onion-shaped domes.",
      },
    ],
  },
  {
    city: "Cape Town",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Table Mountain",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/05/22/11/27/table-mountain-1408299_640.jpg",
        description: "An iconic flat-topped mountain.",
      },
      {
        site_name: "Robben Island",
        site_photo:
          "https://cdn.pixabay.com/photo/2019/01/09/13/07/robben-island-3922824_640.jpg",
        description: "A historical site where Nelson Mandela was imprisoned.",
      },
      {
        site_name: "Victoria & Alfred Waterfront",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/12/08/00/22/port-1089983_640.jpg",
        description: "A bustling shopping and entertainment hub.",
      },
    ],
  },
  {
    city: "London",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Big Ben",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/10/12/23/23/big-ben-1739016_640.jpg",
        description: "An iconic clock tower.",
      },
      {
        site_name: "London Eye",
        site_photo:
          "https://cdn.pixabay.com/photo/2013/11/23/01/53/london-eye-215350_640.jpg",
        description: "A giant Ferris wheel on the South Bank.",
      },
      {
        site_name: "Buckingham Palace",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/12/09/23/04/buckingham-palace-1081873_640.jpg",
        description: "The residence of the British monarch.",
      },
    ],
  },
  {
    city: "Bangkok",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#carnival", "#beach", "#culture"],
    itinerary: [
      {
        site_name: "Grand Palace",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/12/08/00/21/bangkok-1089899_640.jpg",
        description: "A complex of magnificent buildings.",
      },
      {
        site_name: "Wat Arun",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/05/23/10/58/wat-arun-1414564_640.jpg",
        description: "A stunning temple on the Chao Phraya River.",
      },
      {
        site_name: "Chatuchak Market",
        site_photo:
          "https://cdn.pixabay.com/photo/2019/10/24/21/03/bangkok-4573470_640.jpg",
        description: "One of the world's largest weekend markets.",
      },
    ],
  },
  {
    city: "Buenos Aires",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#tango", "#culture", "#food"],
    itinerary: [
      {
        site_name: "Obelisco de Buenos Aires",
        site_photo:
          "https://cdn.pixabay.com/photo/2018/10/15/13/04/buenos-aires-3740384_640.jpg",
        description: "Iconic monument in the heart of the city.",
      },
      {
        site_name: "La Boca",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/01/19/15/01/argentina-1149744_640.jpg",
        description: "Colorful neighborhood known for its art and tango.",
      },
      {
        site_name: "Recoleta Cemetery",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/12/17/15/42/cemetery-1093532_640.jpg",
        description: "Historic cemetery with ornate tombs.",
      },
    ],
  },
  {
    city: "Dubai",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#luxury", "#architecture", "#shopping"],
    itinerary: [
      {
        site_name: "Burj Khalifa",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/09/18/20/15/dubai-950096_640.jpg",
        description: "The tallest building in the world.",
      },
      {
        site_name: "Palm Jumeirah",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/11/01/22/17/dubai-1026292_640.jpg",
        description: "Man-made island known for its resorts.",
      },
      {
        site_name: "Dubai Mall",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/07/06/16/48/architecture-1504570_640.jpg",
        description: "One of the largest shopping malls in the world.",
      },
    ],
  },
  {
    city: "Toronto",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#skyline", "#culture", "#nature"],
    itinerary: [
      {
        site_name: "CN Tower",
        site_photo:
          "https://cdn.pixabay.com/photo/2017/07/21/21/23/toronto-2524366_640.jpg",
        description: "Iconic tower offering panoramic views.",
      },
      {
        site_name: "Royal Ontario Museum",
        site_photo:
          "https://cdn.pixabay.com/photo/2017/07/24/17/54/rom-2533517_640.jpg",
        description: "Museum with diverse exhibits.",
      },
      {
        site_name: "Toronto Islands",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/09/16/10/29/toronto-islands-1679702_640.jpg",
        description: "Scenic islands with beaches and parks.",
      },
    ],
  },
  {
    city: "Rome",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#history", "#art", "#food"],
    itinerary: [
      {
        site_name: "Colosseum",
        site_photo:
          "https://cdn.pixabay.com/photo/2015/03/29/18/58/colosseum-697624_640.jpg",
        description: "Ancient amphitheater and iconic landmark.",
      },
      {
        site_name: "Vatican Museums",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/12/09/18/50/rome-1896761_640.jpg",
        description: "Home to masterpieces of art and history.",
      },
      {
        site_name: "Trevi Fountain",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/11/23/14/07/trevi-fountain-1859849_640.jpg",
        description: "Famous Baroque fountain.",
      },
    ],
  },
  {
    city: "Singapore",
    username: "Carlos Silva",
    userphoto: "photo_url_carlos",
    price: "💵💵💵💵",
    duration: 9,
    likes: 0,
    hashtags: ["#citylife", "#food", "#gardens"],
    itinerary: [
      {
        site_name: "Marina Bay Sands",
        site_photo:
          "https://cdn.pixabay.com/photo/2017/02/19/15/35/marina-bay-sands-2081737_640.jpg",
        description: "Iconic hotel with a rooftop infinity pool.",
      },
      {
        site_name: "Gardens by the Bay",
        site_photo:
          "https://cdn.pixabay.com/photo/2016/08/02/20/41/singapore-1569310_640.jpg",
        description: "Futuristic park with Supertree structures.",
      },
      {
        site_name: "Chinatown",
        site_photo:
          "https://cdn.pixabay.com/photo/2017/01/20/18/20/chinatown-1999700_640.jpg",
        description: "Vibrant district with street food and shops.",
      },
    ],
  },
];

Itinerarie.insertMany(itinerarie);

const slides = 
[
  { name: "New York", photo: "./NewYork.jpg" },
  { name: "Paris", photo: "./Paris.jpg" },
  { name: "Tokyo", photo: "./Tokyo.jpg" },
  { name: "London", photo: "./London.jpg" },
  { name: "Sydney", photo: "./Sydney.jpg" },
  { name: "Dubai", photo: "./Dubai.jpg" },
  { name: "Rome", photo: "./Rome.jpg" },
  { name: "Istanbul", photo: "./Istanbul.jpg" },
  { name: "Bangkok", photo: "./Bangkok.jpg" },
  { name: "Moscow", photo: "./Moscow.jpg" },
  { name: "Buenos Aires", photo: "./Buenos Aires.jpg" },
  { name: "Cairo", photo: "./Cairo.jpg" }
]
 
Slider.insertMany(slides)