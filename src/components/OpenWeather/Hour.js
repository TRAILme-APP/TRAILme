import moment from "moment";

function getHour(props) {
  
  var d = moment((props.time *1000 )).format("MM/DD hh A") 
  return (
    d
  )
}

export default getHour;
