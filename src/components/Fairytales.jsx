function Fairytales(props) {
  return (
    <>
      <div>
        <img src={props.image} alt="" style={{ width: "200px", height: "auto"}}/>
        <h3>{props.title}</h3>
        <p>{props.student }</p>
        <img src="../../public/info.png" style={{ width: "50px", height: "auto" }}/>
      </div>
    </>
  )
}

export default Fairytales;