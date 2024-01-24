const userInfoContainer = document.querySelector(".weather-information");
const searchForm = document.querySelector("[data-searchForm]");
const API_KEY = "94bc6cfd8a21d7fa5cf82577d9df6812";
const cityName = document.querySelector("[data-cityName]");
const countryIcon = document.querySelector("[data-countryIcon]");
const desc = document.querySelector("[data-weatherDesc]");
const weatherIcon = document.querySelector("[data-weatherIcon]");
const temp = document.querySelector("[data-temp]");
const windspeed = document.querySelector("[data-windspeed]");
const humidity = document.querySelector("[data-humidity]");
const cloudiness = document.querySelector("[data-cloudiness]");
const services = document.querySelector(".services");
/*music section*/
const music_name1 = document.querySelector(".namee1");
const music_desc1 = document.querySelector(".desc1");
const music_video1 = document.querySelector("[video_link1]");
const music_name2 = document.querySelector(".namee2");
const music_desc2 = document.querySelector(".desc2");
const music_video2 = document.querySelector("[video_link2]");
const music_name3 = document.querySelector(".namee3");
const music_desc3 = document.querySelector(".desc3");
const music_video3 = document.querySelector("[video_link3]");
const music_name4 = document.querySelector(".namee4");
const music_desc4 = document.querySelector(".desc4");
const music_video4 = document.querySelector("[video_link4]");
const music_name5 = document.querySelector(".namee5");
const music_desc5 = document.querySelector(".desc5");
const music_video5 = document.querySelector("[video_link5]");
const music_name6 = document.querySelector(".namee6");
const music_desc6 = document.querySelector(".desc6");
const music_video6 = document.querySelector("[video_link6]");
const music_btn = document.querySelector("#music_btn");
const music_sec = document.querySelector(".music");

// food sec
const food_name1 = document.querySelector(".img_name1");
const food_video1 = document.querySelector("[img_link1]");

const food_name2 = document.querySelector(".img_name2");
const food_video2 = document.querySelector("[img_link2]");

const food_name3 = document.querySelector(".img_name3");
const food_video3 = document.querySelector("[img_link3]");

const food_name4 = document.querySelector(".img_name4");
const food_video4 = document.querySelector("[img_link4]");

const food_name5 = document.querySelector(".img_name5");
const food_video5 = document.querySelector("[img_link5]");

const food_name6 = document.querySelector(".img_name6");
const food_video6 = document.querySelector("[img_link6]");

const food_btn = document.querySelector("#food_btn");
const food_sec = document.querySelector(".food");
/**movie */
const m_name1 = document.querySelector(".m_namee1");
const m_desc1 = document.querySelector(".m_desc1");
const m_video1 = document.querySelector("[m_video_link1]");
const m_name2 = document.querySelector(".m_namee2");
const m_desc2 = document.querySelector(".m_desc2");
const m_video2 = document.querySelector("[m_video_link2]");
const m_name3 = document.querySelector(".m_namee3");
const m_desc3 = document.querySelector(".m_desc3");
const m_video3 = document.querySelector("[m_video_link3]");
const m_name4 = document.querySelector(".m_namee4");
const m_desc4 = document.querySelector(".m_desc4");
const m_video4 = document.querySelector("[m_video_link4]");
const m_name5 = document.querySelector(".m_namee5");
const m_desc5 = document.querySelector(".m_desc5");
const m_video5 = document.querySelector("[m_video_link5]");
const m_name6 = document.querySelector(".m_namee6");
const m_desc6 = document.querySelector(".m_desc6");
const m_video6 = document.querySelector("[m_video_link6]");
const movie_btn = document.querySelector("#movie_btn");
const movie_sec = document.querySelector(".movie");
var type;

function renderWeatherInfo(weatherInfo) {
  // Fetch values from weatherInfo and put it in UI
  music_sec.classList.remove("active");
  food_sec.classList.remove("active");
  movie_sec.classList.remove("active");
  cityName.innerText = weatherInfo?.name;
  countryIcon.src = `https://flagcdn.com/160x120/${weatherInfo?.sys?.country.toLowerCase()}.png`;

  desc.innerText = weatherInfo?.weather?.[0]?.description;
  type = weatherInfo?.weather?.[0]?.description;
  weatherIcon.src = `https://openweathermap.org/img/wn/${weatherInfo?.weather?.[0]?.icon}.png`;
  temp.innerText = `${weatherInfo?.main?.temp}°C`;
  windspeed.innerText = `${weatherInfo?.wind?.speed}m/s`;
  humidity.innerText = `${weatherInfo?.main?.humidity}%`;
  cloudiness.innerText = `${weatherInfo?.clouds?.all}%`;

}
function resetSearchForm() {
  const searchForm = document.getElementById("searchForm");
  searchForm.reset();
}
async function fetchSearchWeatherInfo(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();

    if (data.name) {
      userInfoContainer.classList.add("active");
      services.classList.add("active");

      renderWeatherInfo(data);


    } else {
      window.alert("No such city found. Please try again");
    }

    resetSearchForm();
  } catch (err) {
    console.error("Error:", err);
  }
}

let searchInput = document.querySelector("[data-searchInput]");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let cityName = searchInput.value;
  if (cityName === "") return;
  else fetchSearchWeatherInfo(cityName);
});

// Music section
music_data = {
  "clear sky": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],
  "few clouds": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],

  "scattered clouds": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],

  "broken clouds": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],




  "shower rain": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],






  "thunderstorm": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],

  "snow": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],



  "mist": [
    {
      song1: {
        name: "zindagi ek safar",
        desc: "Andaz(1971)",
        link: "https://www.youtube.com/embed/qPj3AFhbqMM?si=WP3BN_0jsr6ipEBh",
      },
      song2: {
        name: "Challa",
        desc: "Jab Tak Hai Jaan",
        link: "https://www.youtube.com/embed/9a4izd3Rvdw?si=mpt1CBVR0C6lH06o",
      },

      song3: {
        name: "Shayarana",
        desc: "Daawat-e-Ishq",
        link: "https://www.youtube.com/embed/RtBAwPW0sBs?si=ayprN0I9N86n7dwc",
      },
      song4: {
        name: "Badal Pe Paon Hai",
        desc: "Chak De India",
        link: "https://www.youtube.com/embed/DmsOinqrPvQ?si=cZ7Y_TKWNdKyQurN",
      },
      song5: {
        name: "Teri Dastaan",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/nWazIXT3Xno?si=q69vzEERrnIHvSBN",


      },

      song6: {
        name: "Khol De Par ",
        desc: "Hichki",
        link: "https://www.youtube.com/embed/AENWeaHNDxs?si=0zjDNIl_S2DHUDy8",

      },
    },
  ],
}

// food section 

food_data = {
  "clear sky": [
    {
      img1: {
        name: "simple bhog",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://assets.architecturaldigest.in/photos/6188f39b20afa08b81fd39c0/master/w_1600%2Cc_limit/cloud%25206.jpg",
      },
      img2: {
        name: "prantha",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://img.freepik.com/free-photo/aloo-paratha-gobi-paratha-also-known-as-potato-cauliflower-stuffed-flatbread-dish-originating-from-indian-subcontinent_466689-76172.jpg?w=740&t=st=1697097109~exp=1697097709~hmac=6f55cb3a8911beddda268f0bc5eaef934a1aa20b02b25adbd5bd08e82a1e13c6",
      },
      img3: {
        name: "Simple Food",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://assets.architecturaldigest.in/photos/6188f8ee50169ea0b918f564/16:9/w_1600,c_limit/cloud%201.png",
      },
      img4: {
        name: "Butter chicken",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347444/india-food-butter-chicken/india-food-butter-chicken-1120x732.jpg",
      },
      img5: {
        name: "Dal Tadka",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347425/india-food-dal-tadka/india-food-dal-tadka-1120x732.jpg",
      },
      
      img6: {
          name: "Burger",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1696982400&semt=sph",
      },
    },
  ],
  "few clouds": [
    {
      img1: {
        name: "club Sandwich",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1697099711~exp=1697100311~hmac=0686d6e5c0c035613722b51e21dd3cca4c36d0d329bc789cdad96c36cbc13836",
      },
      img2: {
        name: "Litti Chokha",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/shutterstock_414834802.jpg",
      },
      img3: {
        name: "Burger and fries",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1696982400&semt=sph",
      },
      img4: {
        name: "Chole Bhature",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/chole-bhature-del.jpg",
      },
      img5: {
        name: "Masala Dosa",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347401/india-food-masala-dosa/india-food-masala-dosa-1120x732.jpg",
      },
      
      img6: {
          name: "prantha",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347392/india-food-paratha/india-food-paratha-1120x732.jpg",
        },
    },
  ],
  "scattered clouds": [
    {
      img1: {
        name: "idli",
        // desc: "Dangal",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347416/india-food-idli/india-food-idli-1120x732.jpg",
      },
      img2: {
        name: "naan",
        // desc: "Chhichhore",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347396/india-food-naan/india-food-naan-1120x732.jpg",
      },

      img3: {
        name: "Night Changes",
        // desc: "One Direction",
        link: "https://www.youtube.com/embed/syFZfO_wfMQ?si=JC6AaxQY3sFprJLe",
      },
      img4: {
        name: "Paneer Tikka",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76797.jpg?w=360",
      },
      img5: {
        name: "Pizza",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg?w=740&t=st=1697097243~exp=1697097843~hmac=4cb988fcb753a4c059a4f2f51f5b0c6da97af845c07a951d72077f9385eec8d6",
      },
      
      img6: {
          name: "Chicken skewers",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-sweet-peppers-dill_2829-18813.jpg?w=740&t=st=1697097350~exp=1697097950~hmac=466e2e3c505db71760469f8f1ed43d170e4a5212f3b8760235c18a27fd118605",
        },
    },
  ],
  "haze": [
    {
      img1: {
        name: "Sambhar",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347374/india-food-sambar/india-food-sambar-1120x732.jpg",
      },
      img2: {
        name: "Dal Makhni",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347429/india-food-dal-makani/india-food-dal-makani-1120x732.jpg",
      },

      img3: {
        name: "Sahi Paneer",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347365/india-food-shahi-paneer/india-food-shahi-paneer-1120x732.jpg",
      },
      img4: {
        name: "Tandoori Chicken",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347361/india-food-tandoori-chicken/india-food-tandoori-chicken-1120x732.jpg",
      },
      img5: {
        name: "Neelambari Kinaron ka Antariksh",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://assets.architecturaldigest.in/photos/6188f3c850169ea0b918f55a/master/w_1600,c_limit/cloud%203.jpg",
      },
      
      img6: {
          name: "Chicken khebab",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://img.freepik.com/free-photo/chicken-skewers-with-slices-apples-chili-top-view_2829-19996.jpg?w=740&t=st=1697100914~exp=1697101514~hmac=6c440f47cf843c3dd9029644bd4a20c8c58921a2813bdcedbec0735fe5df27a2",
        },
    },
  ],
  "broken clouds": [
    {
      img1: {
        name: "Thali",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://img.freepik.com/premium-photo/indian-hindu-veg-thali-food-platter-selective-focus_466689-35929.jpg?w=360",
      },
      img2: {
        name: "Sandwich",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://img.freepik.com/free-photo/side-view-club-sandwich-with-salted-cucumbers-lemon-olives-round-white-plate_176474-3049.jpg?w=740&t=st=1697099711~exp=1697100311~hmac=0686d6e5c0c035613722b51e21dd3cca4c36d0d329bc789cdad96c36cbc13836",
      },

      img3: {
        name: "Chicken shawarma",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=740&t=st=1697100320~exp=1697100920~hmac=a12b98fef7f4bb28597f2944afdf36fdcc58bc7dfd2786d0e6fef0cc5589dd89",
      },
      img4: {
        name: "Nirmal Aakash Chhaviyan",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://assets.architecturaldigest.in/photos/6188f2e920afa08b81fd39be/master/w_1600,c_limit/cloud%202.jpg",
      },
      img5: {
        name: "Neelambari Kinaron ka Antariksh",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://assets.architecturaldigest.in/photos/6188f3c850169ea0b918f55a/master/w_1600,c_limit/cloud%203.jpg",
      },
      
      img6: {
          name: "Akash Gagan Ki Rangin Umang",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1696982400&semt=sph",
        },
    },
  ],
  "shower rain": [
    {
      img1: {
        name: "pakoda",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://static.toiimg.com/thumb/82024963.cms?imgsize=342985&width=800&height=800",
      },
      img2: {
        name: "aalo tikki chaat",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://sinfullyspicy.com/wp-content/uploads/2023/03/1-1.jpg",
      },

      img3: {
        name: "vada pav",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://assets.gqindia.com/photos/625e4dacfcfaab5b0ecc5ee0/16:9/w_1280,c_limit/vada-pav%20(1).jpg",
      },
      img4: {
        name: "Samosa",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://res.cloudinary.com/rainforest-cruises/images/c_fill,g_auto/f_auto,q_auto/w_1120,h_732,c_fill,g_auto/v1661347369/india-food-samosa/india-food-samosa-1120x732.jpg",
      },
      img5: {
        name: "Momos",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://c.ndtvimg.com/2023-03/fqpicf98_momos_625x300_15_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
      },
      
      img6: {
          name: "Bread Pakora",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://www.vegrecipesofindia.com/wp-content/uploads/2010/08/bread-pakora-recipe.jpg",
        },
    },
  ],

  "thunderstorm": [
    {
      img1: {
        name: "Burger",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://img.freepik.com/free-photo/big-sandwich-hamburger-with-juicy-beef-burger-cheese-tomato-red-onion-wooden-table_2829-19631.jpg?size=626&ext=jpg&ga=GA1.1.672697106.1696982400&semt=sph",
      },
      img2: {
        name: "aalo tikki chaat",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://sinfullyspicy.com/wp-content/uploads/2023/03/1-1.jpg",
      },

      img3: {
        name: "Penne Pasta",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://img.freepik.com/free-photo/penne-pasta-tomato-sauce-with-chicken-tomatoes-wooden-table_2829-19744.jpg?w=740&t=st=1697097720~exp=1697098320~hmac=d584ee877abf7e8cedb96bde15bf3d78119119d2d1b7f8b1d4da7b1295c9f5e7",
      },
      img4: {
        name: "Chicken shawarma",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://img.freepik.com/free-photo/side-view-shawarma-with-fried-potatoes-board-cookware_176474-3215.jpg?w=740&t=st=1697100320~exp=1697100920~hmac=a12b98fef7f4bb28597f2944afdf36fdcc58bc7dfd2786d0e6fef0cc5589dd89",
      },
      img5: {
        name: "Paneer Tikka",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://img.freepik.com/premium-photo/paneer-tikka-is-indian-dish-made-from-chunks-cottage-cheese-marinated-spices-grilled-tandoor_466689-76797.jpg?w=360",
      },
      
      img6: {
        name: "Soup",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://as1.ftcdn.net/v2/jpg/02/45/00/72/1000_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg",
      },
    },
  ],
  "snow": [
    {
      img1: {
        name: "Soup",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://as1.ftcdn.net/v2/jpg/02/45/00/72/1000_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg",
      },
      img2: {
        name: "Brown-butter banana bread",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://www.foodandwine.com/thmb/ppODZqvNhYlt2MF3er1OygBT3lg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-pot-pie-with-leeks-thyme-recipe-FT-BLOG1019-e54f6fc7248b4cc298cdcf009acccda7.jpg",
      },

      img3: {
        name: "Pork-and-Ricotta Stuffed Jumbo Shells",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://www.foodandwine.com/thmb/ouKaRWRCXfgmGmZ3Rno5vF-oOZw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/pork-and-ricotta-stuffed-jumbo-shells-XL-RECIPE0117-9e04564a38504038b839e9ccccc0a9ce.jpg",
      },
      img4: {
        name: "Sausage and Red Onion Sheet Pan Quiche",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://www.foodandwine.com/thmb/k6-F0tZHoonQka2b6wlAWS0HNSE=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/sausage-and-red-onion-sheet-pan-quiche-FT-RECIPE0221-84ebfe2eed4f48e79e4b0c36803c6d6e.jpg",
      },
      img5: {
        name: "Braised Oxtails with Carrots and Chiles",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://www.foodandwine.com/thmb/8iIIe0Z_pBPeLXTZHpAXGp8-7ek=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/braised-oxtails-with-carrots-and-chiles-FT-RECIPE0121-9e0e16070329408f93e21fa0d6cf274b.jpg",
      },
      
      img6: {
          name: "Chicken Pot Pie",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://www.foodandwine.com/thmb/ppODZqvNhYlt2MF3er1OygBT3lg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-pot-pie-with-leeks-thyme-recipe-FT-BLOG1019-e54f6fc7248b4cc298cdcf009acccda7.jpg",
        },
    },
  ],
  "mist": [
    {
      img1: {
        name: "Soup",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://as1.ftcdn.net/v2/jpg/02/45/00/72/1000_F_245007231_vDwC9ceDNtjUCA5YDuq6mPDRG5ocPg0B.jpg",
      },
      img2: {
        name: "Makki Di Roti n Sarson Da Saag",
        // desc: "Neelambari Kinaron ka Antariksh invites you to immerse yourself in the purity of the natural sky.",
        link: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/makki.jpg",
      },

      img3: {
        name: "Prawn Gassi",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://assets.traveltriangle.com/blog/wp-content/uploads/2018/01/prawn-gassi.jpg",
      },
      img4: {
        name: "Malai Kofta",
        // desc: "Nirmal Aakash Chhaviyan showcases the uniqueness of natural beauty",
        link: "https://carveyourcraving.com/wp-content/uploads/2021/09/Sofyt-creamy-Malai-Kofta-recipe.jpg",
      },
      img5: {
        name: "Chicken Pot Pie",
        // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
        link: "https://www.foodandwine.com/thmb/ppODZqvNhYlt2MF3er1OygBT3lg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chicken-pot-pie-with-leeks-thyme-recipe-FT-BLOG1019-e54f6fc7248b4cc298cdcf009acccda7.jpg",
      },
      
      img6: {
          name: "Biang Biang Noodles",
          // desc: "Akash Gagan Ki Rangin Umang presents a colorful array of clear sky images.",
          link: "https://www.foodandwine.com/thmb/evRC6646HT9uIYlVu9Od4HiZJRY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/biang-biang-noodles-ft-recipe0920-a68eb2036b834a889bcf5d3d531c98cb.jpg",
        },
    },
  ]

}

music_btn.addEventListener("click", () => {

  // Get the weather description from your data

  music_sec.classList.add("active");
  movie_sec.classList.remove("active");
  food_sec.classList.remove("active");
  //
  const weatherDesc = type.toLowerCase(); // Assuming weather description is in lowercase

  // Check if there's a matching key in music_data
  if (music_data.hasOwnProperty(weatherDesc)) {
    // Access the name of the songs from the matching key
    const song1 = music_data[weatherDesc][0].song1;
    const song2 = music_data[weatherDesc][0].song2;
    const song3 = music_data[weatherDesc][0].song3;
    const song4 = music_data[weatherDesc][0].song4;
    const song5 = music_data[weatherDesc][0].song5;
    const song6 = music_data[weatherDesc][0].song6;

    // Set the text and source for song1
    music_name1.innerText = song1.name;

    music_desc1.innerHTML = song1.desc;
    music_video1.src = song1.link;

    // Set the text and source for song2
    music_name2.innerText = song2.name;
    music_desc2.innerHTML = song2.desc;
    music_video2.src = song2.link;



    music_name3.innerText = song3.name;
    music_desc3.innerHTML = song3.desc;
    music_video3.src = song3.link;

    music_name4.innerText = song4.name;
    music_desc4.innerHTML = song4.desc;
    music_video4.src = song4.link;


    music_name5.innerText = song5.name;
    music_desc5.innerHTML = song5.desc;
    music_video5.src = song5.link;

    music_name6.innerText = song6.name;
    music_desc6.innerHTML = song6.desc;
    music_video6.src = song6.link;

  } else {
    // Handle the case where no matching key is found
    music_name1.innerText = "No song found for this weather";
    music_desc1.innerHTML = "";
    music_video1.src = "";

    music_name2.innerText = "No song found for this weather";
    music_desc2.innerHTML = "";
    music_video2.src = "";
  }
});

// food button

food_btn.addEventListener("click", () => {

  // Get the weather description from your data
  food_sec.classList.add("active");
  music_sec.classList.remove("active");
  movie_sec.classList.remove("active");
  const weatherDesc = type.toLowerCase(); // Assuming weather description is in lowercase

  // Check if there's a matching key in music_data
  if (music_data.hasOwnProperty(weatherDesc)) {
    // Access the name of the songs from the matching key
    const img1 = food_data[weatherDesc][0].img1;
    const img2 = food_data[weatherDesc][0].img2;
    const img3 = food_data[weatherDesc][0].img3;
    const img4 = food_data[weatherDesc][0].img4;
    const img5 = food_data[weatherDesc][0].img5;
    const img6 = food_data[weatherDesc][0].img6;

    // Set the text and source for img1
    food_name1.innerText = img1.name;
    // img_desc1.innerHTML = img1.desc;
    food_video1.src = img1.link;

    // Set the text and source for img2
    food_name2.innerText = img2.name;
    // img_desc2.innerHTML = img2.desc;
    food_video2.src = img2.link;

    // Set the text and source for img3
    food_name3.innerText = img3.name;
    // img_desc3.innerHTML = img3.desc;
    food_video3.src = img3.link;

    // Set the text and source for img4
    food_name4.innerText = img4.name;
    // img_desc4.innerHTML = img4.desc;
    food_video4.src = img4.link;

    // Set the text and source for img5
    food_name5.innerText = img5.name;
    // img_desc5.innerHTML = img5.desc;
    food_video5.src = img5.link;

    // Set the text and source for img6
    food_name6.innerText = img6.name;
    // img_desc6.innerHTML = img6.desc;
    food_video6.src = img6.link;

  }
  else {
    // Handle the case where no matching key is found
    img_name1.innerText = "No food found for this weather";
    img_desc1.innerHTML = "";
    food1.src = "";

    img_name2.innerText = "No food found for this weather";
    img_desc2.innerHTML = "";
    food2.src = "";

    img_name3.innerText = "No food found for this weather";
    img_desc3.innerHTML = "";
    food3.src = "";

    img_name4.innerText = "No food found for this weather";
    img_desc4.innerHTML = "";
    food4.src = "";

    img_name5.innerText = "No food found for this weather";
    img_desc5.innerHTML = "";
    food5.src = "";

    img_name6.innerText = "No food found for this weather";
    img_desc6.innerHTML = "";
    food6.src = "";
  }
});

movie_btn.addEventListener("click", () => {

  // Get the weather description from your data
  movie_sec.classList.add("active");
  music_sec.classList.remove("active");
  food_sec.classList.remove("active");
  //


  //
  const weatherDesc = type.toLowerCase(); // Assuming weather description is in lowercase

  // Check if there's a matching key in music_data
  if (movie_data.hasOwnProperty(weatherDesc)) {
    // Access the name of the songs from the matching key
    const movie1 = movie_data[weatherDesc][0].movie1;
    const movie2 = movie_data[weatherDesc][0].movie2;
    const movie3 = movie_data[weatherDesc][0].movie3;
    const movie4 = movie_data[weatherDesc][0].movie4;
    const movie5 = movie_data[weatherDesc][0].movie5;
    const movie6 = movie_data[weatherDesc][0].movie6;

    // Set the text and source for song1
    m_name1.innerText = movie1.name;

    m_desc1.innerHTML = movie1.desc;
    m_video1.src = movie1.link;

    // Set the text and source for song2
    m_name2.innerText = movie2.name;
    m_desc2.innerHTML = movie2.desc;
    m_video2.src = movie2.link;

    m_name3.innerText = movie3.name;
    m_desc3.innerHTML = movie3.desc;
    m_video3.src = movie3.link;

    m_name4.innerText = movie4.name;
    music_desc4.innerHTML = movie4.desc;
    m_video4.src = movie4.link;

    m_name5.innerText = movie5.name;
    m_desc5.innerHTML = movie5.desc;
    m_video5.src = movie5.link;


    m_name6.innerText = movie6.name;
    m_desc6.innerHTML = movie6.desc;
    m_video6.src = movie6.link;






  } else {
    // Handle the case where no matching key is found

  }
});
movie_data = {
  "clear sky": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  ],
 
  "few clouds": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  ],
  "scattered clouds": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  ],
  "broken clouds": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  ],
  "shower rain": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  ],
  "thunderstorm": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },

  ],

  "snow": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  
  ],

  "mist": [
    {
      movie1: {
        name: "3 Idiots (2009)",
        desc: "Comedy/Romance",
        link: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202003/3_idiots.jpeg",
      },
      movie2: {
        name: "Dil Chahta Hai (2001)",
        desc: "Romantic/Comedy",
        link: "https://upload.wikimedia.org/wikipedia/en/4/46/Dil_Chahta_Haialbum.jpg",
      },
      
      movie3: {
        name: "Chhichhore (2019)",
        desc: "Comedy/Romance",
        link: "https://c.ndtvimg.com/2019-09/4cdb1gr8_taran-adarsh-instagram_625x300_07_September_19.jpg",
      },
      movie4: {
        name: "Fukrey (2013)",
        desc: "Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BODI5MzQ2NDg0MV5BMl5BanBnXkFtZTcwNTEwMzI1OQ@@._V1_.jpg",
      },
      movie5: {
        name: "Jab We Met (2007)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/S/pv-target-images/517625285876b514a75f4ce5ad4ea8f78f8973fee162676e57704c6327c2c2db.jpg",
      },
        
      movie6: {
        name: "Zindagi Na Milegi Dobara (2011)",
        desc: "Romantic/Comedy",
        link: "https://m.media-amazon.com/images/M/MV5BZGFmMjM5OWMtZTRiNC00ODhlLThlYTItYTcyZDMyYmMyYjFjXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg",
      },
  },
  
  ],

}