// Your code here


const initialPage = () => {
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    document.body.appendChild(container);
}
const createMain = () => {

    const newHeader = document.createElement("h1");
    newHeader.innerText = "Kitten Pic";
    const newImage = document.createElement("img");
    newImage.style.margin = "20px";
    const newContainer = document.querySelector(".container")


    const reloadNewImage = document.createElement("button");
    reloadNewImage.id = "reload-button";
    reloadNewImage.innerText = "Reload";
    reloadNewImage.addEventListener("click", getImage);

    newContainer.append(newHeader, newImage, reloadNewImage)
}

const scoreSection = () => {
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    const scoreDisplay = document.createElement("div");
    scoreDisplay.className = "score-display";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity score: ";

    const score = document.createElement("span");
    score.className = "score";
    score.innerText = "0";

    scoreDisplay.append(scoreTitle, score);

    const buttonContainer = document.createElement("div");

    const upVoteButton = document.createElement("button");
    upVoteButton.id = "upVote-button";
    upVoteButton.innerText = "UpVote";

    const downVoteButton = document.createElement("button");
    downVoteButton.id = "downVote-button";
    downVoteButton.innerText = "DownVote";
    downVoteButton.style.marginLeft = "5px";

    buttonContainer.appendChild(upVoteButton);
    buttonContainer.appendChild(downVoteButton);

    scoreContainer.appendChild(scoreDisplay);
    scoreContainer.appendChild(buttonContainer)

    const container = document.querySelector(".container");
    container.appendChild(scoreContainer);
}

const createComment = () => {
    const commentForm = document.createElement("form");
    commentForm.className = "comment-form";
    commentForm.style.display = "flex";
    commentForm.style.justifyContent = "center";
    commentForm.style.alignItems = "center"

    const userCommentContainer = document.createElement("div");
    userCommentContainer.className = "user-comment-container";

    const label = document.createElement("label");
    label.setAttribute("for", "user-comment");
    label.innerText = "Comment: "

    const commentInput = document.createElement("input");
    commentInput.id = "user-comment";
    commentInput.name = "user-comment";
    commentInput.placeholder = "Add a comment... "
    commentInput.required =  true;

    userCommentContainer.append(label, commentInput);

    const submitBtn = document.createElement("input");
    submitBtn.id = "submit-comment"
    submitBtn.type = "submit";
    submitBtn.value = "Submit";

    commentForm.appendChild(userCommentContainer);
    commentForm.appendChild(submitBtn);

    const comments = document.createElement("div");
    comments.className = "comments";
    comments.style.border = "solid grey 1px";
    comments.style.height = "400px";
    comments.style.width = "80%";
    comments.style.margin = "10px";
    comments.style.padding = "5px";
    comments.style.overflow = "scroll";

    const container = document.querySelector(".container");
    container.appendChild(commentForm);
    container.appendChild(comments);
}

const getImage = async () => {
    try {
        let res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json();

        const catImg = document.querySelector("img");
        catImg.src = data[0].url;
        }
        catch {
            console.log("fail img")
        }
}
window.onload = () => {
    initialPage();
    createMain();
    getImage();
    scoreSection();
    createComment();
}
