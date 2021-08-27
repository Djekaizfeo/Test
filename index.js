const buttonElement = document.querySelector(".button1");

const buttonHandler = (evt) => {
    document.body.append(cloneElement(evt.target, "After"));
    document.body.prepend(cloneElement(evt.target, "Before"));

    document.querySelector("audio").play();
};

const cloneElement = (oldElement, textInsert) => {
    const newElement = oldElement.cloneNode();
    
    newElement.textContent = textInsert;

    return newElement;
};

buttonElement.addEventListener("click", buttonHandler);