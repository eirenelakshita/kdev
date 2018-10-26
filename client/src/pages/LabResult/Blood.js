import React , { Component }from 'react';
import {Container, Row ,Col} from "reactstrap";
import API from "../../utils/API";
import { Table } from 'semantic-ui-react';


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
        // console.log(res.data)
        this.setState({
          BloodResult:
          res.data[0]
          // First_Name: "",
	        // Last_Name: "",
          // Insurances: "",
          // Age: 0,
          // Gender: "",
          // WBC:0,
          // RBC:0,
          // HB:0,
          // HCT:0,
          // MCV:0,
          // MCH:0,
          // MCHC:0,
          // RDW:0,
          // Platelet:0,
          // Mean_Platelet_Volume:0, 
        })
        )
        .catch(err => console.log(err));
  }
  


  render(){
    return(
     
  <div>
      <h3 id="center">Blood Testing Result:</h3>
      {console.log("blood test: " , this.state.BloodResult)}
      <Table celled inverted selectable>
    <Table.Header>
      <Table.Row>
        <Table.Cell>1.First Name:{this.state.BloodResult.First_Name}</Table.Cell>
        <Table.Cell>2.Last Name:{this.state.BloodResult.Last_Name}</Table.Cell>
        <Table.Cell>3.Insurances:{this.state.BloodResult.Insurances}</Table.Cell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>4.Time:{this.state.BloodResult.Time}</Table.Cell>
        <Table.Cell>5.Age:{this.state.BloodResult.Age}</Table.Cell>
        <Table.Cell>6.Gender:{this.state.BloodResult.Gender}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>7.White Blood Cell:{this.state.BloodResult.WBC}</Table.Cell>
        <Table.Cell>8.Red Blood Cell:{this.state.BloodResult.RBC}</Table.Cell>
        <Table.Cell>9. Hemoglobin:{this.state.BloodResult.HB}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>10.Hematocrit:{this.state.BloodResult.HCT}</Table.Cell>
        <Table.Cell>11.Mean Cell Volume:{this.state.BloodResult.MCV}</Table.Cell>
        <Table.Cell>12.Mean Cell Hemoglobin:{this.state.BloodResult.MCH}</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>13.Mean Cell Hb Conc:{this.state.BloodResult.MCHC}</Table.Cell>
        <Table.Cell>14.Red Cell Dist Width:{this.state.BloodResult.RDW}</Table.Cell>
        <Table.Cell>15. Platelet count:{this.state.BloodResult.Platelet}</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>

</div>
    )
  }
}

export default Blood;