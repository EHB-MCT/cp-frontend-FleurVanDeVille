function Fairytales(props) {
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

export default Fairytales;