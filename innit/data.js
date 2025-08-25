const sampleListings = [
 {
    title: "Aurora Over the Mountains",
    description: "A stunning view of the northern lights over a snowy mountain range.",
    image:{ 
      filename:"listingimage",
      url: "https://images.stockcake.com/public/e/c/5/ec5d6681-20bf-48fa-a2f3-1f611e01b1f1_large/tropical-sunset-beach-stockcake.jpg"
    }, 
    price: 1200,
    location: "Tromsø",
    country: "Norway"
  },
  
  {
    title: "Cherry Blossom Festival",
    description: "A beautiful spring scene with cherry trees in full bloom.",
     image:{ 
      filename:"listingimage",
      url: "https://res.cloudinary.com/enchanting/f_auto,q_70,w_900,h_490,c_fill/et-web/2019/03/Himeji-Castle.jpg"
    },
    price: 400,
    location: "Kyoto",
    country: "Japan"
  },
  {
    title: "Desert Dunes",
    description: "Golden sand dunes under a clear blue sky, ideal for adventure lovers.",
     image:{ 
      filename:"listingimage",
      url: "https://media.vrbo.com/lodging/34000000/33660000/33657000/33656943/364aaa81.jpg?impolicy=resizecrop&rw=575&rh=575&ra=fill"
    },
    price: 600,
    location: "Merzouga",
    country: "Morocco"
  },
  {
    title: "City Skyline at Night",
    description: "The city lights up as skyscrapers reflect in the river below.",
     image:{ 
      filename:"listingimage", 
      url: "https://images.unsplash.com/photo-1446062061624-594b6e3403d7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2l0eSUyMHNreWxpbmUlMjBhdCUyMG5pZ2h0fGVufDB8fDB8fHww"
    },
    price: 950,
    location: "New York City",
    country: "USA"
  },
  {
    title: "Rainforest Waterfall",
    description: "A majestic waterfall hidden deep within the Amazon rainforest.",
     image:{ 
      filename:"listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0kR47k-JhvFSLCUzcJAcuvBwtyb7ZFcxIsA&s"
    },
    price: 1100,
    location: "Amazonas",
    country: "Brazil"
  },
  {
    title: "Autumn in Bavaria",
    description: "Charming Bavarian village surrounded by fall foliage.",
     image:{ 
      filename:"listingimage", 
      url:"https://a0.muscache.com/im/pictures/hosting/Hosting-896245633790132067/original/5b0ee8eb-7cb4-460d-b344-d08bbb9d6c28.jpeg"
    },
    price: 700,
    location: "Bavaria",
    country: "Germany"
  },
  {
    title: "Hot Air Balloons at Sunrise",
    description: "Colorful balloons float over ancient rock formations.",
     image:{ 
      filename:"listingimage",
      url:"https://www.pelago.com/img/products/TR-Turkey/full-day-cappadocia-tour-with-sunrise-hot-air-balloon-ride/5cd13c6b-6428-46bc-b537-e5c71990f367_full-day-cappadocia-tour-with-sunrise-hot-air-balloon-ride-xlarge.jpg"
    },
    price: 950,
    location: "Cappadocia",
    country: "Turkey"
  },
  {
    title: "Safari Adventure",
    description: "Witness elephants and lions in their natural habitat.",
     image:{ 
      filename:"listingimage",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0D3Imq6ELnVOvWyl3Snm-1ry-QAjXxHTyPw&s"
    },
    price: 1300,
    location: "Serengeti",
    country: "Tanzania"
  },
  {
    title: "Icelandic Glaciers",
    description: "Massive glaciers and icy landscapes stretch for miles.",
     image:{ 
      filename:"listingimage", 
      url: "https://www.theblondeabroad.com/wp-content/uploads/2021/03/Screen-Shot-2021-03-08-at-9.20.38-PM.jpg"
    },
    price: 1250,
    location: "Vatnajökull",
    country: "Iceland"
  },
  {
    title: "Ancient Temples",
    description: "Explore the ruins of a once-mighty civilization.",
     image:{ 
      filename:"listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5lyhmx34KwEFQmTDBp0wsnIBxttWnebkGHQ&s3"
    },
    price: 500,
    location: "Siem Reap",
    country: "Cambodia"
  },
  {
    title: "Great Wall Walk",
    description: "Trek across one of the wonders of the ancient world.",
     image:{ 
      filename:"listingimage",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzfzXSGKEpxZFjZVpKg35x8nfzwgOUiOr8SQ&s"},
    price: 900,
    location: "Beijing",
    country: "China"
  },
  {
    title: "Northern Wilderness",
    description: "Breathtaking solitude among lakes and forests.",
    image:{ 
      filename:"listingimage",
      url: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/02/e6/1b/74/palm-meadows-club.jpg?w=1200&h=-1&s=1"
    },
    price: 650,
    location: "Yukon",
    country: "Canada"
  },
  {
    title: "Underwater Paradise",
    description: "Swim through coral reefs and see marine life up close.",
    image:{ 
      filename:"listingimage",
      url: "https://weburbanist.com/wp-content/uploads/2016/03/airbnb-shark-suite.jpg"
    },
    price: 1050,
    location: "Great Barrier Reef",
    country: "Australia"
  },
  {
    title: "Savannah Sunset",
    description: "A fiery sunset sets the savannah ablaze with color.",
     image:{ 
      filename:"listingimage",
      url:"https://www.southernliving.com/thmb/cgX9dGC8pHOSbZn53uISfCjY9Nc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-560335173-438d7cbf959a40d1b8ff0e39aef4f2e4.jpg"
    },
    price: 800,
    location: "Masai Mara",
    country: "Kenya"
  },
  {
    title: "Sunset in Santorini",
    description: "Golden hour lighting up the iconic white buildings with blue domes.",
     image:{ 
      filename:"listingimage",
      url: "https://plus.unsplash.com/premium_photo-1661963145672-a2bd28eba0fb?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FudG9yaW5pJTIwc3Vuc2V0fGVufDB8fDB8fHww"
    },
    price: 850,
    location: "Oia",
    country: "Greece"
  },

];

module.exports = { data: sampleListings };