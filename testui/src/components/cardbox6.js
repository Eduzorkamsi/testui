import '../styles/cardbox6.css';
import MoneyBag from "../icons/moneybag.png";
import Cash from '../icons/coins.png';
import Cheque from '../icons/cheque.png';
import Transfer from '../icons/transfer.png';
import { Card } from 'antd';

const Cardbox6 = () => {
  return(
    <>
    <div className="box_6">
        <Card style={{width: 265}}classname="expense_summary1">
<div className="top">
    <img src={MoneyBag}/>
    <text style={{marginLeft: 13, fontWeight:"bold"}}>Total</text>
</div>
<text style={{marginTop: 16, fontWeight:"bold"}}>₦90,000,000.00</text>
        </Card>
        <Card style={{width : 265}} classname="expense_summary2">
<div className="top">
    <img src={Cash}/>
    <text style={{marginLeft: 13, fontWeight:"bold"}}>Cash</text>
</div>
<text  style={{marginTop: 16, fontWeight:"bold"}}>₦900,000.00</text>
        </Card>
        <Card style={{width: 265}} classname="expense_summary3">
<div className="top">
    <img src={Cheque}/>
    <text style={{marginLeft: 13, fontWeight:"bold"}}>Cheque</text>
</div>
<text  style={{marginTop: 16, fontWeight:"bold"}}>₦5,000,000.00</text>
        </Card>
        <Card style={{width: 265}} classname="expense_summary4">
<div className="top">
    <img src={Transfer}/>
    <text style={{marginLeft: 13, fontWeight:"bold"}}>Transfer</text>
</div>
<text  style={{marginTop: 16, fontWeight:"bold"}}>₦9,000,000.00</text>
        </Card>
    </div>
    </>    
  ) ;
};

export default Cardbox6;
