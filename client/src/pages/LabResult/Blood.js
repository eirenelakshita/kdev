import React , { Component }from 'react';
import {Container, Row ,Col} from "reactstrap";
import API from "../../utils/API";


class Blood extends Component{

  state ={
    BloodResult:[]
  }

  componentDidMount(){
    this.loadBlood();
  }


  loadBlood = () =>{
    API.getLabresultBlood()
      .then(res => 
        this.setState({
          BloodResult:
          res.data,
          First_Name: "",
	        Last_Name: "",
          Insurances: "",
          Age: 0,
          Gender: "",
          WBC:0,
          RBC:0,
          HB:0,
          HCT:0,
          MCV:0,
          MCH:0,
          MCHC:0,
          RDW:0,
          Platelet:0,
          Mean_Platelet_Volume:0, 
        }))
        .catch(err => console.log(err));
  }


  render(){
    return(

  <div>
  <div className="container-fluid">
    <h3 id="center">Blood Testing Result:</h3>
    <Row>
      <Col>1. First Name:{this.state.BloodResult.First_Name}</Col>
      <Col>2. Last Name:{}</Col>
      <Col>3. Insurances:{}</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>4. Time:{}</Col>
      <Col>5. Age:{}</Col>
      <Col>6. Gender:{}</Col>
    </Row>
    <hr></hr>
    <Row>
      <Col>7. White Blood Cell:{}</Col>
      <Col>8. Red Blood Cell:{}</Col>
      <Col>9. Hemoglobin:{}</Col>
      <Col>10. Hematocrit:{}</Col>
      <Col>11. Mean Cell Volume:{}</Col>
   
    </Row>
    <hr></hr>
    <Row>
      <Col>12. Mean Cell Hemoglobin:{}</Col>
      <Col>13. Mean Cell Hb Conc:{}</Col>
      <Col>14. Red Cell Dist Width:{}</Col>
      <Col>15. Platelet count:{}</Col>
      <Col>16. Mean Platelet Volume:{}</Col>
    </Row>
    <hr></hr>
  </div>



</div>

    )


  }




}

export default Blood;