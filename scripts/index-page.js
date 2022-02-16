// let commentsArr =[{
//     name: "Connor Walton",
//     date:"02/17/2021",
//     comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
// },
// {
//     name:"Emilie Beach",
//     date: "01/09/2021",
//     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
// },
// {
//     name: "Miles Acosta",
//     date: "12/20/2020",
//     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
// }
// ]


function renderComments(moreData){

    let commentsSection = document.querySelector(".comments__section");

    let commentsContainer = document.createElement("div");
    commentsContainer.classList.add("comments__container");

    let nameContainer = document.createElement("div");
    nameContainer.classList.add("comments__split");

    let name = document.createElement("p");
    name.classList.add("name");
    name.innerText = moreData.name;

    let timeStamp = document.createElement("p");
    timeStamp.classList.add("comments__time-stamp");
    timeStamp.innerText = moreData.timeStamp;

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
    commentsContainer.appendChild(nameContainer);
    commentsContainer.appendChild(comment);
    commentsContainer.appendChild(avatarImage);
    commentsSection.appendChild(commentsContainer);

    


    let likes = moreData.likes;


}

function scanComments(data){
    data.forEach(element => {
        renderComments(element)
    });
}
function fetchComments(url){
axios
  .get(url)
  .then(function (response) {
      console.log(response)
    scanComments(response.data)
  });}

  fetchComments("https://project-1-api.herokuapp.com/comments?api_key=1166f440-3999-4ee9-8377-3e240b1a786c")