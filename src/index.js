import _ from "lodash";
import myName from "./myName.js";
import "./style.css";
import Photo from "./photo.png";

function component() {
    const element = document.createElement("div");

    //// Lodash, currently included via a script, is required for this line to work
    ////See <script> in html
    element.innerHTML = _.join(["Hello", "webpack"], " ");

    element.textContent = myName("BigFatDuck1");

    element.classList.add("hello");

    //Add image
    const myPhoto = new Image();
    myPhoto.src = Photo;

    element.appendChild(myPhoto);

    return element;
}

document.body.appendChild(component());