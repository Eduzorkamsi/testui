import '../styles/cardbox12.css';
import PurpleStaff from '../icons/purple_s.png';
import GreenStaff from '../icons/green_s.png';
import DarkGreenStaff from '../icons/darkgreen_s.png';
import PinkStaff from '../icons/pink_s.png';
import YellowStaff from '../icons/yellow_s.png';
import { Card } from 'antd';

const Cardbox12 = () => {
  return(
    <>
    <div className="box_12">
        <Card style={{width: 252, marginRight: 17}}classname="expense_summary1">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={PurpleStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>6</text>
</div>
<text style={{fontWeight: "bold"}}>Total Employees</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary2">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={GreenStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Departments</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary3">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={GreenStaff}/>
    <text style={{marginLeft: 136, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>On duty</text>
        </Card>
        <Card style={{width: 252}} classname="expense_summary4">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={GreenStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Leave</text>
        </Card>
    </div>
    <div className="box_12b">
        <Card style={{width: 252, marginRight: 17}}classname="expense_summary1">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={DarkGreenStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>6</text>
</div>
<text style={{fontWeight: "bold"}}>Male</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary2">
<div style={{marginBottom: 41}} className="top">
    <img  alt="" src={PinkStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Female</text>
        </Card>
        <Card style={{width: 252, marginRight: 17}} classname="expense_summary3">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={YellowStaff}/>
    <text style={{marginLeft: 136, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Suspended</text>
        </Card>
        <Card style={{width: 252}} classname="expense_summary4">
<div style={{marginBottom: 41}} className="top">
    <img alt="" src={PinkStaff}/>
    <text style={{marginLeft: 116, fontWeight: "bold"}}>5</text>
</div>
<text style={{fontWeight: "bold"}}>Terminated staff</text>
        </Card>
    </div>
    </>    
  ) ;
};

export default Cardbox12;
