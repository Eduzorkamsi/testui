import '../styles/cardbox8.css';
import Appointments from '../icons/appointments.png';
import Uappointments from '../icons/u_appointments.png';
import Cappointments from '../icons/c_appointments.png';
import Aappointments from '../icons/a_appointments.png'
import { Card } from 'antd';

const Cardbox8 = () => {
  return(
    <>
    <div className="box_8">
        <Card style={{width: 252, marginRight: 17}}classname="expense_summary1">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Appointments}/>
    <text style={{marginLeft: 136, fontWeight:"bold"}}>6</text>
</div>
<text style={{fontWeight:"bold"}}>Appointments</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary2">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Aappointments}/>
    <text style={{marginLeft: 136, fontWeight:"bold"}}>5</text>
</div>
<text  style={{marginTop: 41, fontWeight:"bold"}}>Attended Appointments</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary3">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Uappointments}/>
    <text style={{marginLeft: 136, fontWeight:"bold"}}>5</text>
</div>
<text  style={{marginTop: 41, fontWeight:"bold"}}>Unattended Appointments</text>
        </Card>
        <Card style={{width: 252}} classname="expense_summary4">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={Cappointments}/>
    <text style={{marginLeft: 136, fontWeight:"bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Cancelled Appointments</text>
        </Card>
    </div>
    </>    
  ) ;
};

export default Cardbox8;
