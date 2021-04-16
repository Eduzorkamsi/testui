import { Card } from 'antd';
import "../styles/cardbox4.css";
import MoneyBag from "../icons/moneybag.png";
import Coins from "../icons/coins.png";
import Hmobills from "../icons/hmobills.png";
import Patientbills from "../icons/patientbills.png";
import Pos from "../icons/pos.png";
import Transfer from "../icons/transfer.png";
import Wallet from "../icons/wallet.png";
import AtmCard from '../icons/card.png';


const Cardbox4 = ()=>{
return(
    <>
  <div className="box_4">
    <div className="row">
    <Card style={{width: 500, height: 148}} className="income_summary1">
      <div className="top">
        <img src={MoneyBag} />
      <text style={{marginLeft:"10px"}}>Revenue</text>
      </div>
      <text style={{marginTop:"19px"}}>₦90,000,000.00</text>

    </Card>
    <Card style={{width: 500,  height: 220, }} className="income_summary2">
      <text>HMO</text>
      <div className="row">
      <div className="left_box">
      <div style={{marginTop: 32, marginRight: "70px"}} className="top">
        <img src={Hmobills} />
      <text style={{marginLeft:"10px"}}>HMO Bills</text>
      </div>
      <text style={{marginTop:"19px"}}>₦90,000,000.00</text>
      </div>
      <div className="right_box">
      <div style={{marginTop: 32,}} className="top">
        {/* <img src={Patientbills} /> */}
      <text style={{marginLeft:"10px"}}>Patient Bills</text>
      </div>
      <text style={{marginTop:"19px"}}>₦81,000,000.00</text>
      </div>
      </div>
      
   
      
    </Card>
    </div>
   <div className="row">
   <Card style={{width: 500,  height: 293}} className="income_summary3">
    <div className="row">
    <div style={{marginBottom: 50, marginRight: "123px"}} className="left_box">
      <div className="top">
        <img src={MoneyBag} />
      <text style={{marginLeft:"10px"}}>Cheque</text>
      </div>
      <text style={{marginTop:"19px"}}>₦90,000,000.00</text>
      </div>
      <div className="right_box">
      <div className="top">
        <img src={Coins} />
      <text style={{marginLeft:"10px"}}>Cash</text>
      </div>
      <text style={{marginTop:"19px"}}>₦100,000.00</text>
      </div>
      </div>
      <div className="row">
      <div style={{ marginRight: "123px"}} className="down_left_box">
      <div className="top">
      <img src={Transfer} />
      <text style={{marginLeft:"10px"}}>Transfer</text>
      </div>
      <text style={{marginTop:"19px"}}>₦50,000,000.00</text>
      </div>
      <div className="down_right_box">
      <div className="top">
        <img src={Pos} />
      <text style={{marginLeft:"10px"}}>Pos Payment</text>
      </div>
      <text style={{marginTop:"19px"}}></text>
      </div>
      </div>
    </Card>
    <Card style={{width: 500, height: 220}} className="income_summary4">
      <text>Online Payment</text>
      <div style={{marginTop: 32,}} className="row">
    <div style={{ marginRight: "102px"}} className="left_box">
      <div  className="top">
        <img src={AtmCard} />
      <text style={{marginLeft:"10px"}}>Card</text>
      </div>
      <text style={{marginTop:"19px"}}>₦900,000.00</text>
      </div>
      <div className="right_box">
      <div className="top">
        <img src={Wallet} />
      <text style={{marginLeft:"10px"}}>Wallet</text>
      </div>
      <text style={{marginTop:"19px"}}>₦90,000.00</text>
      </div>
      </div>
    </Card>
   </div>
    
  </div>
  </>
);
};
export default Cardbox4;