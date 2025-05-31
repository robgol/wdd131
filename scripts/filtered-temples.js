const hambutton = document.querySelector('#menuButton');

hambutton.addEventListener('click', () => {
  document.querySelector('h1').classList.toggle('show');
  document.querySelector('#navMenu').classList.toggle('show');
  hambutton.classList.toggle('show');
});

function toggleActive(element) {
  element.classList.toggle("active");
}

const temples = [
  {
    templeName: "Praia Cape Verde Temple",
    location: "Praia, Cape Verde",
    dedicated: "2022, June, 19",
    area: 8759,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/praia-cape-verde-temple/praia-cape-verde-temple-27204-main.jpg",
  },
  {
    templeName: "Lisbon Portugal Temple",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/lisbon-portugal-temple/lisbon-portugal-temple-6315-main.jpg",
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg",
  },
  {
    templeName: "Rome Italy Temple",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg",
  },
  {
    templeName: "Hamilton New Zealand Temple",
    location: "Hamilton, New Zealand",
    dedicated: "1958, April, 20",
    area: 45251,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg",
  },
  {
    templeName: "Edmonton Alberta Temple",
    location: "Edmonton, Alberta, Canada",
    dedicated: "1999, December, 11",
    area: 10700,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/edmonton-alberta-temple/edmonton-alberta-temple-51155-main.jpg",
  },
  {
    templeName: "Tokyo Japan Temple",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg",
  },
];


const templeContainer = document.querySelector(".temples");

function displayTemples(filteredTemples) {
  templeContainer.innerHTML = ""; 

  filteredTemples.forEach((temple) => {
    const templeCard = document.createElement("div");
    templeCard.classList.add("temple-card");

    const templeName = document.createElement("h3");
    templeName.textContent = temple.templeName;

    const location = document.createElement("p");
    location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.innerHTML = `<strong>Dedicated:</strong> ${temple.dedicated}`;

    const area = document.createElement("p");
    area.innerHTML = `<strong>Size:</strong> ${temple.area} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName}`;
    image.loading = "lazy";

    templeCard.appendChild(templeName);
    templeCard.appendChild(location);
    templeCard.appendChild(dedicated);
    templeCard.appendChild(area);
    templeCard.appendChild(image);

    templeContainer.appendChild(templeCard);
  });
}

function filterTemples(criteria) {
  let filteredTemples = temples;

  if (criteria === "Old") {
    filteredTemples = temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(", ")[0], 10);
      return year < 1900;
    });
  } else if (criteria === "New") {
    filteredTemples = temples.filter((temple) => {
      const year = parseInt(temple.dedicated.split(", ")[0], 10);
      return year > 2000;
    });
  } else if (criteria === "Large") {
    filteredTemples = temples.filter((temple) => temple.area > 90000);
  } else if (criteria === "Small") {
    filteredTemples = temples.filter((temple) => temple.area < 10000);
  }

  displayTemples(filteredTemples);
}

document.querySelectorAll("#navMenu a").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();

    const criteria = event.target.textContent;
    if (criteria === "Home") {
      displayTemples(temples);
    } else {
      filterTemples(criteria);
    }
  });
});

displayTemples(temples);