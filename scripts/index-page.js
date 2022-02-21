// display function which sends newly submitted comments to the top

function displayComment(commentsDiv, option) {
  let commentsTop = document.querySelector(".comments__top");
  let commentsSection = document.querySelector(".comments__section");

  if (option) {
    commentsTop.appendChild(commentsDiv);
  } else {
    commentsSection.appendChild(commentsDiv);
  }
}

// renders comments takes two arguments for display function

function renderComments(moreData, boolean) {
  let commentsContainer = document.createElement("div");
  commentsContainer.classList.add("comments__container");

  let nameContainer = document.createElement("div");
  nameContainer.classList.add("comments__split");

  let containerContainer = document.createElement("div");
  containerContainer.classList.add("comments__container-container");

  let name = document.createElement("p");
  name.classList.add("name");
  name.innerText = moreData.name;

  let timeStamp = document.createElement("p");
  timeStamp.classList.add("comments__time-stamp");

  let date = moreData.timestamp;
  transferedDate = new Date(date);
  let newDate = transferedDate.toDateString();
  timeStamp.innerText = newDate;

  let comment = document.createElement("p");
  comment.classList.add("comment");
  comment.innerText = moreData.comment;

  let avatar = document.querySelector(".avatar");

  let avatarAtrribute = avatar.getAttribute("src");
  let avatarImage = document.createElement("img");
  avatarImage.classList.add("avatar");
  avatarImage.setAttribute("src", avatarAtrribute);

  nameContainer.appendChild(name);
  nameContainer.appendChild(timeStamp);
  containerContainer.appendChild(nameContainer);
  containerContainer.appendChild(comment);
  commentsContainer.appendChild(containerContainer);
  commentsContainer.appendChild(avatarImage);

  displayComment(commentsContainer, boolean);
}

// scans through each object in API array

function scanComments(data) {
  data.forEach((element) => {
    renderComments(element, false);
  });
}

// fetches information from API

function fetchComments(url) {
  axios.get(url).then(function (response) {
    console.log(response);

    // sorts through objects in array and puts them in order of newest to oldest
    
    let newArr = response.data.sort((a, b) => (a.color > b.color ? 1 : -1));

    scanComments(newArr);
  });
}

// adds new comment to API

function addComment(newName, newComment) {
  axios
    .post(
      "http://project-1-api.herokuapp.com/comments?api_key=1eda2d0d-2124-48b5-9b00-f2b1b91be3b5",
      {
        name: newName,
        comment: newComment,
      }
    )
    .then((response) => {
      console.log(response);
    });
}

// code starts here

let apiUserUrl =
  "https://project-1-api.herokuapp.com/comments?api_key=1eda2d0d-2124-48b5-9b00-f2b1b91be3b5";

let submitFunction = document.querySelector(".conversation__form");
submitFunction.addEventListener("submit", (e) => {
  e.preventDefault();

  let newName = e.target.name.value;
  let newComment = e.target.comments.value;
  addComment(newName, newComment);

  let newObj = {
    name: newName,
    comment: newComment,
    timestamp: new Date(),
  };
  renderComments(newObj, true);
  submitFunction.reset();
});

fetchComments(apiUserUrl);
