import { Layout, Menu, Breadcrumb } from "antd";
import Navbar from "../components/navbar";
import Manager from "../icons/manager.png";
import DashIcon from "../icons/dash_icon.png";
import Filter from "../components/filter";
import Cardbox4 from "../components/cardbox4";
import "../styles/dashboard.css";

// import AreaChart from "../components/AreaChart";

const Dashboard = () => {
  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{
              height: "100%",
              borderRight: 0,
              backgroundColor: "#713380",
            }}
          >
            <Menu.Item
              key="1"
              icon={<img src={Manager} />}
              style={{
                marginBottom: "21px",
                backgroundColor: "#3B0049",
                height: "100px",
                color: "#ffffff",
                padding:"25px",
                fontSize:"21px",
                fontWeight:400
              }}
            >
              {/* <div className="vl">
                <img src={Divider} style={{width:"5px"}}/>
              </div> */}
              Manager
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={<img src={DashIcon} />}
              style={{ backgroundColor: "#3B0049", color: "#ffffff" }}
            >
              Dashboard
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px", }}>
          <Breadcrumb
            style={{
              margin: "16px 0",
              backgroundColor: "#713380",
              width: "241px",
              padding: "10px",
            }}
            separator=">"
          >
            <Breadcrumb.Item href="">Home</Breadcrumb.Item>
            <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <div className="box_1">
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Revenue Statistics</text>

              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
            <div className="box_2">
              {/* <AreaChart/> */}
            </div>
            <div className="box_3">
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Income Summary</text>

              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
           <div>
             <Cardbox4/>
           </div>
            <div className="box_5">
              {" "}
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Expenses Summary</text>
              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
            <div className="box_6">6</div>
            <div className="box_7">
              {" "}
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Appointment Statistics</text>
              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
            <div className="box_8">8</div>
            <div className="box_9">
              {" "}
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Patient Statistics</text>
              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
            <div className="box_10">10</div>
            <div className="box_11">
              {" "}
              <text style={{fontWeight:"bold", fontSize:"20px",}}>Staff Summary</text>
              <div className="filter">
                <text>Filter</text>
                <Filter />
              </div>
            </div>
            <div className="box_12">12</div>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
