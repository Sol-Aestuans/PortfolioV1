import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Recent Graduate",
          "Software Developer",
          "Continuous Learner",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        delay: 75,
      }}
    />
  );
}

export default Type;
