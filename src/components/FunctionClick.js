import React from 'react'

function FunctionClick() {
    function clickHandler() {
        console.log('Botan ga kurikku saremashita')
    }

  return (
    <div>
      <button onClick={clickHandler}>Kurikku</button>
    </div>
  )
}

export default FunctionClick


