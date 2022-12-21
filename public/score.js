const scoreSection = () => {
    const scoreContainer = document.createElement("div");
    scoreContainer.className = "score-container";
    scoreContainer.style.display = "flex";
    scoreContainer.style.flexDirection = "column";
    scoreContainer.style.alignItems = "center";

    const score = document.createElement("div");
    score.className = "score";

    const scoreTitle = document.createElement("span");
    scoreTitle.innerText = "Popularity score: ";

    const scoreValue = document.createElement("span");
    scoreValue.className = "score-value";
    scoreValue.innerText = "0";

    score.append(scoreTitle, scoreValue);
}
