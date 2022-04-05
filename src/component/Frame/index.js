import React from 'react'
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import {withRouter} from "react-router-dom"
import style from "./index.module.less"
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

class Frame extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };
  change = (e) =>{
    this.props.history.push(e.key)
  }
  render() {
    const { collapsed } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider className={style.Layout} collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
          <div className="logo" style={{height:"60px",fontSize:"30px", color:"white"}}>用户画像系统</div>
          <Menu theme="dark" defaultSelectedKeys={['/home/base']} defaultOpenKeys={['sub1']} mode="inline">
            <SubMenu key="sub1" icon={<TeamOutlined />} title="群体画像">
              <Menu.Item key="/home/base" onClick={this.change}>基本属性群体画像</Menu.Item>
              <SubMenu key="sub10"  title="行为属性群体画像">
              <Menu.Item key="/home/behavior" onClick={this.change}>行为统计群体画像</Menu.Item>
              <Menu.Item key="/home/model" onClick={this.change}>模型划分群体画像</Menu.Item>
            </SubMenu>
            </SubMenu>
            <SubMenu key="sub2" icon={<UserOutlined />} title="个人画像">
              <Menu.Item key="/home/search" onClick={this.change}>画像查询</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout" >
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>群体画像</Breadcrumb.Item>
              <Breadcrumb.Item>基本属性群体画像</Breadcrumb.Item>
            </Breadcrumb>

            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {this.props.children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(Frame) 
