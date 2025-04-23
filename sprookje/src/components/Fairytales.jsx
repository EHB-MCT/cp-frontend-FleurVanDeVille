import { useState } from 'react'

function Movie(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <img src={props.image} alt="" style={{ width: "200px", height: "auto" }}/>
        <h3>{props.title}</h3>
        <p>{props.student}</p>
      </div>
    </>
  )
}

export default Movie;