import React, { useState } from "react";
import docs from "../Speech/bubbles/chris docs.JPG";
import errors from "../Speech/bubbles/chris errors.JPG";
import google from "../Speech/bubbles/chris google.JPG";
import hive from "../Speech/bubbles/chris hive.JPG";
import idiot from "../Speech/bubbles/chris idiot.JPG";
import know from "../Speech/bubbles/chris know.JPG";
import minutes from "../Speech/bubbles/chris minutes.JPG";
import nearly from "../Speech/bubbles/chris nearly.JPG";
import nice from "../Speech/bubbles/chris nice.JPG";
import plan from "../Speech/bubbles/chris plan.JPG";

function Speech({ size }) {
  const [picture, setPicture] = useState("");
  const bubbles = [
    docs,
    errors,
    google,
    hive,
    idiot,
    know,
    minutes,
    nearly,
    nice,
    plan
  ];

  if (size > 70 && size < 100) {
    setPicture(bubbles[Math.floor(Math.random() * 10)]);
    console.log("over 70");
    // } else if (size > 100 && size < 130) {
    //   setPicture(bubbles[Math.floor(Math.random() * 10)]);
    //   console.log("over 100");
  }

  return (
    <div>
      <img src={picture} alt="speech" />
    </div>
  );
}

// export default Speech;
