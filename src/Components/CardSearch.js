
import {  useEffect,useState } from "react";
import axios from "axios";
const CardSearch = (data) => {
    const [comment, setComment] = useState([]);

 let url = "http://localhost:8080/evaluation/AllComment/"+data.data.doctorId;
useEffect(() => {
    axios.get(url).then((r) => {
        setComment(r.data);
      console.log(r.data);
     
    }).catch((err)=> {
        console.log(err)
      });
  }, [data]);
  return (
    <>
      <div className="doctor-maincard-container">
        <div className="doctor-name">
          <h5>{data.data.name}</h5>
        </div>
        <div className="hospital-name">
          <h5>hospital name: {data.data.sectionId.hospital.name}</h5>
        </div>
        <div className="comment">
        <h5>comment: {comment}{" "}  </h5>
           
        </div>
        <h5>Rating: {data.data.total_rate}{" "}  </h5>
        <div>
          <button>More</button>
        </div>
      </div>
    </>
  );
};
export default CardSearch;
