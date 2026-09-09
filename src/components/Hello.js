import React from "react";

const Hello = () => {
//   return (
//     <div>
//       <h1>Konnichiwa Kurasu no minasan</h1>
//     </div>
//   );

    return React.createElement('div', {id: 'Dochira', className: 'doko'}, 
            React.createElement('h1', null, 'Kuroko no Basuke'))
};

export default Hello