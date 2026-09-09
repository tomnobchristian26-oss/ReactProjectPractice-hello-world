import React from "react";

// function Greet() {
//     return <h1>Konnichiwa Sekai!</h1>
// }

 const Greet = props => {
    const {name, heroName} = props
  return (
    <div>
      <h1>
        Konnichiwa {name} a.k.a {heroName}
      </h1>
    </div>
  );
};

export default Greet;
