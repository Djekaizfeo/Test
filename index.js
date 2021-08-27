const buttonElement = document.querySelector(".button1");

const buttonHandler = (evt) => {
    document.body.append(cloneElement(evt.target, "wuewue"));
    document.body.prepend(cloneElement(evt.target, "wuewue"));

    document.querySelector("audio").play();
};

const cloneElement = (oldElement, textInsert) => {
    const newElement = oldElement.cloneNode();
    
    newElement.textContent = textInsert;

    return newElement;
};

buttonElement.addEventListener("click", buttonHandler);