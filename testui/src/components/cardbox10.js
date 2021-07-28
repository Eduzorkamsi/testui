import '../styles/cardbox10.css';
import Patients from '../icons/purple_p.png';
import Bpatients from '../icons/blue_p.png';
import Ppatients from '../icons/pink_p.png';
import Gpatients from '../icons/green_p.png'
import { Card } from 'antd';

const Cardbox10 = () => {
  return(
    <>
    <div className="box_10">
        <Card style={{width: 252, marginRight: 17}}classname="expense_summary1">
<div style={{marginBottom: 41}} className="top">
    <img alt="" rc={Patients}/>
    <text style={{marginLeft: 116, fontWeight:"bold"}}>6</text>
</div>
<text style={{fontWeight: "bold"}}>Total Patients</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary2">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Bpatients}/>
    <text style={{marginLeft: 116, fontWeight:"bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}} >Male</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary3">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Ppatients}/>
    <text style={{marginLeft: 136, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Female</text>
        </Card>
        <Card style={{width: 252}} classname="expense_summary4">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Gpatients}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Returning Patients</text>
        </Card>
    </div>
    </>    
  ) ;
};

export default Cardbox10;
