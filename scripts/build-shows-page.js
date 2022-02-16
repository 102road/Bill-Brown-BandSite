let concertArr = [
  {
    date: "Mon Sept 06 2021",
    venue: "Ronald Lane",
    location: "San Francisco, CA",
  },
  {
    date: "Tue Sept 21 2021",
    venue: "Pier 3 East",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Oct 15 2021",
    venue: "View Lounge",
    location: "San Francisco, CA",
  },
  {
    date: "Sat Nov 06 2021",
    venue: "Hyatt Agency",
    location: "San Francisco, CA",
  },
  {
    date: "Fri Nov 26 2021",
    venue: "Moscow Center",
    location: "San Francisco, CA",
  },
  {
    date: "Wed Dec 15 2021",
    venue: "Press Club",
    location: "San Francisco, CA",
  },
];

function createConcertListing(values) {
  //Select Section
  let concertSection = document.querySelector(".shows");
  //Create Div Element
  let concertContainer = document.createElement("div");
  //Add Class
  concertContainer.classList.add("concert-container");
  //Create P element for Date
  let concertDate = document.createElement("p");
  //Create Text for Date
  concertDate.innerText = "DATE";
  // Add class
  concertDate.classList.add("title");
  //Place Date in div element
  concertContainer.appendChild(concertDate);
  //Create P element for Concert Date
  let concertDateDescription = document.createElement("p");

  let timeStamp = values.date;
  console.log(timeStamp);
  changeDate = Number(timeStamp)
  transferedDate = new Date(changeDate);
  console.log(transferedDate);
  let newDate = transferedDate.toDateString();

  //Create Text for Concert Date
  concertDateDescription.innerText = newDate;
  // Add class
  concertDateDescription.classList.add("date");
  //Place Concert Date in div element
  concertContainer.appendChild(concertDateDescription);
  //Create P element for Venue
  let concertVenue = document.createElement("p");
  //Create Text for Venue
  concertVenue.innerText = "VENUE";
  // Add class
  concertVenue.classList.add("title");
  //Place Venue in div element
  concertContainer.appendChild(concertVenue);
  //Create P for Concert Venue
  let concertVenueDescription = document.createElement("p");
  //Create text for Concert Venu
  concertVenueDescription.innerText = values.place;
  // add class
  concertVenueDescription.classList.add("description");
  //Place concert in div element
  concertContainer.appendChild(concertVenueDescription);
  //Create p for location
  let concertLocation = document.createElement("p");
  //Create text for location
  concertLocation.innerText = "LOCATION";
  // Add class
  concertLocation.classList.add("title");
  //Place location in element div
  concertContainer.appendChild(concertLocation);
  //Create p for concert location
  let concertLocationDescription = document.createElement("p");
  //Create text for concert location
  concertLocationDescription.innerText = values.location;
  // Add Class
  concertLocationDescription.classList.add("description");
  //Place concert location in div element
  concertContainer.appendChild(concertLocationDescription);
  //Create button
  let concertButton = document.createElement("button");
  //Create text for button
  concertButton.innerText = "Buy Tickets";
  //Place button in div element
  concertContainer.appendChild(concertButton);
  //Place div in shows section
  concertSection.appendChild(concertContainer);
}
// function with a for each to loop through each object in the concert array
function displayConcertListing(concert) {
  concert.forEach((element) => {
    createConcertListing(element);
  });
}
// call function to display listings
function fetchComments(url) {
  axios.get(url).then(function (response) {
    console.log(response);
    displayConcertListing(response.data);
  });
}
//Create a div with Date Venue Location to be hidden for mobile display
let concertSection = document.querySelector(".shows");
let concertFirstDiv = document.createElement("div");
concertFirstDiv.classList.add("concert-first-div");
let firstDate = document.createElement("p");
firstDate.innerText = "DATE";
firstDate.classList.add("first");
concertFirstDiv.appendChild(firstDate);
let firstVenue = document.createElement("p");
firstVenue.innerText = "VENUE";
firstVenue.classList.add("first");
concertFirstDiv.appendChild(firstVenue);
let firstLocation = document.createElement("p");
firstLocation.innerText = "LOCATION";
firstLocation.classList.add("first");
concertFirstDiv.appendChild(firstLocation);
concertSection.appendChild(concertFirstDiv);



fetchComments(
  "https://project-1-api.herokuapp.com/showdates?api_key=1166f440-3999-4ee9-8377-3e240b1a786c"
);
