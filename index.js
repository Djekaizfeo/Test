const buttonElement = document.querySelector(".button1");
const buttonsElement = document.querySelector(".buttons")

const buttonHandler = (evt) => {
    buttonsElement.append(cloneElement(evt.target, "wuewue"));
    buttonsElement.prepend(cloneElement(evt.target, "wuewue"));
    
    if (!document.querySelector(".jezzImage")) {
        document.body.append(createImage());
    }

    document.querySelector("audio").play();
    evt.target.classList.add("shake");
};

const cloneElement = (oldElement, textInsert) => {
    const newElement = oldElement.cloneNode();
    
    newElement.textContent = textInsert;
    newElement.classList.add("button2");

    return newElement;
};

const createImage = () => {
    const imageElement = document.createElement("img");

    imageElement.src = "jezz.jpg";
    imageElement.classList.add("jezzImage");

    return imageElement;
};

buttonElement.addEventListener("click", buttonHandler);