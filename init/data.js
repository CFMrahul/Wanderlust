const sampleListings = [
  {
    "title": "Eiffel Tower",
    "description": "An iconic landmark of Paris offering stunning city views from the top.",
    "image": "https://example.com/images/eiffel.jpg",
    "price": 150,
    "location": "Paris",
    "country": "France"
  },
  {
    "title": "Taj Mahal",
    "description": "A symbol of eternal love, this marble mausoleum is a UNESCO World Heritage Site.",
    "image": "https://example.com/images/tajmahal.jpg",
    "price": 120,
    "location": "Agra",
    "country": "India"
  },
  {
    "title": "Great Wall of China",
    "description": "A historic fortification stretching thousands of miles across China.",
    "image": "https://example.com/images/greatwall.jpg",
    "price": 200,
    "location": "Beijing",
    "country": "China"
  },
  {
    "title": "Machu Picchu",
    "description": "Ancient Incan citadel set high in the Andes Mountains.",
    "image": "https://example.com/images/machupicchu.jpg",
    "price": 250,
    "location": "Cusco Region",
    "country": "Peru"
  },
  {
    "title": "Statue of Liberty",
    "description": "A gift from France, this statue represents freedom and democracy.",
    "image": "https://example.com/images/liberty.jpg",
    "price": 100,
    "location": "New York",
    "country": "USA"
  },
  {
    "title": "Colosseum",
    "description": "Rome's largest amphitheater and one of the greatest works of Roman engineering.",
    "image": "https://example.com/images/colosseum.jpg",
    "price": 180,
    "location": "Rome",
    "country": "Italy"
  },
  {
    "title": "Santorini",
    "description": "A beautiful Greek island known for whitewashed houses and blue-domed churches.",
    "image": "https://example.com/images/santorini.jpg",
    "price": 220,
    "location": "Santorini",
    "country": "Greece"
  },
  {
    "title": "Sydney Opera House",
    "description": "Famous performing arts center with unique sail-like architecture.",
    "image": "https://example.com/images/sydneyopera.jpg",
    "price": 160,
    "location": "Sydney",
    "country": "Australia"
  },
  {
    "title": "Pyramids of Giza",
    "description": "Ancient Egyptian pyramids built as tombs for pharaohs.",
    "image": "https://example.com/images/pyramids.jpg",
    "price": 190,
    "location": "Giza",
    "country": "Egypt"
  },
  {
    "title": "Niagara Falls",
    "description": "One of the most famous waterfalls in the world, straddling USA and Canada.",
    "image": "https://example.com/images/niagara.jpg",
    "price": 130,
    "location": "Ontario",
    "country": "Canada"
  },
  {
    "title": "Petra",
    "description": "The Rose City carved into sandstone cliffs, known for its rock-cut architecture.",
    "image": "https://example.com/images/petra.jpg",
    "price": 170,
    "location": "Ma'an",
    "country": "Jordan"
  },
  {
    "title": "Christ the Redeemer",
    "description": "Massive statue of Jesus overlooking Rio de Janeiro.",
    "image": "https://example.com/images/redeemer.jpg",
    "price": 140,
    "location": "Rio de Janeiro",
    "country": "Brazil"
  },
  {
    "title": "Burj Khalifa",
    "description": "The world's tallest building, offering panoramic views of Dubai.",
    "image": "https://example.com/images/burjkhalifa.jpg",
    "price": 200,
    "location": "Dubai",
    "country": "UAE"
  },
  {
    "title": "Stonehenge",
    "description": "A prehistoric monument with a ring of standing stones.",
    "image": "https://example.com/images/stonehenge.jpg",
    "price": 110,
    "location": "Wiltshire",
    "country": "UK"
  },
  {
    "title": "Banff National Park",
    "description": "A Canadian national park with turquoise lakes and mountain peaks.",
    "image": "https://example.com/images/banff.jpg",
    "price": 150,
    "location": "Alberta",
    "country": "Canada"
  },
  {
    "title": "Angkor Wat",
    "description": "A vast temple complex and the largest religious monument in the world.",
    "image": "https://example.com/images/angkorwat.jpg",
    "price": 170,
    "location": "Siem Reap",
    "country": "Cambodia"
  },
  {
    "title": "Mount Fuji",
    "description": "Japan's highest peak, a sacred symbol and popular climbing spot.",
    "image": "https://example.com/images/fuji.jpg",
    "price": 130,
    "location": "Honshu",
    "country": "Japan"
  },
  {
    "title": "Times Square",
    "description": "A bustling hub of entertainment and neon lights in Manhattan.",
    "image": "https://example.com/images/timessquare.jpg",
    "price": 80,
    "location": "New York",
    "country": "USA"
  },
  {
    "title": "Serengeti National Park",
    "description": "Famous for wildlife safaris and the Great Migration.",
    "image": "https://example.com/images/serengeti.jpg",
    "price": 300,
    "location": "Serengeti",
    "country": "Tanzania"
  },
  {
    "title": "Table Mountain",
    "description": "Flat-topped mountain overlooking Cape Town.",
    "image": "https://example.com/images/tablemountain.jpg",
    "price": 120,
    "location": "Cape Town",
    "country": "South Africa"
  },
  {
    "title": "Golden Gate Bridge",
    "description": "A world-famous suspension bridge connecting San Francisco to Marin County.",
    "image": "https://example.com/images/goldengate.jpg",
    "price": 90,
    "location": "San Francisco",
    "country": "USA"
  },
  {
    "title": "Hallstatt",
    "description": "A picturesque Austrian village by a serene lake and surrounded by mountains.",
    "image": "https://example.com/images/hallstatt.jpg",
    "price": 160,
    "location": "Hallstatt",
    "country": "Austria"
  },
  {
    "title": "Sagrada Familia",
    "description": "An unfinished basilica by Antoni Gaudí, blending Gothic and Art Nouveau styles.",
    "image": "https://example.com/images/sagradafamilia.jpg",
    "price": 150,
    "location": "Barcelona",
    "country": "Spain"
  },
  {
    "title": "Maldives",
    "description": "A tropical paradise of white-sand beaches and luxury resorts.",
    "image": "https://example.com/images/maldives.jpg",
    "price": 400,
    "location": "Male",
    "country": "Maldives"
  },
  {
    "title": "Grand Canyon",
    "description": "A breathtaking natural wonder carved by the Colorado River.",
    "image": "https://example.com/images/grandcanyon.jpg",
    "price": 180,
    "location": "Arizona",
    "country": "USA"
  }
]

module.exports = { data: sampleListings};