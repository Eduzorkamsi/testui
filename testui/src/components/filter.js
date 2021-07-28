import { Menu, Dropdown, Button, message, Space } from 'antd';
import { DownOutlined, UserOutlined } from '@ant-design/icons';


function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}

const Filter = () => {
const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1" icon={<UserOutlined />}>
      1st menu item
    </Menu.Item>
    <Menu.Item key="2" icon={<UserOutlined />}>
      2nd menu item
    </Menu.Item>
    <Menu.Item key="3" icon={<UserOutlined />}>
      3rd menu item
    </Menu.Item>
  </Menu>
);
return(
    <div>
        <Space wrap>
    <Dropdown overlay={menu}>
      <Button style={{color:"#848282"}}>
       Today<DownOutlined />
      </Button>
    </Dropdown>
  </Space>,
    </div>
  
);
    };
export default Filter;