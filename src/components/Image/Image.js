import App from "../../App";
import "./Image.css";

function Image(props) {

  const style = {
    width: props.width,
    height: props.height,
  };


  return <img className="Image" style={style} crs={props.url}/>;
}

export default Image;