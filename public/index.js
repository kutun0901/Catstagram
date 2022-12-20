// Your code here

const initialPage = () => {
    const container = document.createElement("section");
    container.className = "container";
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    document.body.appendChild(container);
}
const addElement = () => {

    const newHeader = document.createElement("h1");
    newHeader.innerText = "Kitten Pic";
    const newImage = document.createElement("img");
    newImage.style.margin = "20px";
    const newContainer = document.querySelector(".container")

    newContainer.append(newHeader, newImage)

}

const getImage = async () => {
    try {
        let res = await fetch("https://api.thecatapi.com/v1/images/search")
        const data = await res.json();
        const catImg = document.querySelector("img");
        catImg.src = data[0].url;
        // const url = data[0].url;
        }
        catch {
            console.log("fail img")
        }
}
window.onload = () => {
    initialPage();
    addElement();
    getImage();
}
