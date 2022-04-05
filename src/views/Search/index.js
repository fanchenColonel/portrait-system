import React, { useEffect, useState } from 'react'
import { Input ,Table,Button} from 'antd';

const { Search } = Input;
const Index = () => {
  const onSearch = (e) => {
    console.log(e)
    if(e !== '') {
      setCount(true)
    }
  }
  const [count,setCount] = useState("none")
  useEffect(()=>{
    console.log(count)
  })
  const dataSource = [
    {
      key: '1',
      label: '标签内容',
      name:"Calthy",
      age: 29,
      sex: '女',
      position:"老师"
    },
  ];
  const dataSource1 = [
    {
      key: '1',
      label: '标签内容',
      days:4,
      times: 23,
      money: 3300,
      ndays:2,
      stimes:500,
      ostimes:320,
      value:"高价值",
      user:"高活跃度",
    },
  ];

  const columns = [
    {
      title: '标签名称',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '性别',
      dataIndex: 'sex',
      key: 'sex',
    },
    {
      title: '职业',
      dataIndex: 'position',
      key: 'positon',
    },
  ];
  const columns1 = [
    {
      title: '标签名称',
      dataIndex: 'label',
      key: 'label',
    },
    {
      title: '最近一次购买间隔天数',
      dataIndex: 'days',
      key: 'days',
    },
    {
      title: '购买总次数',
      dataIndex: 'times',
      key: 'times',
    },
    {
      title: '购买金额',
      dataIndex: 'money',
      key: 'money',
    },
    {
      title: '最近一次浏览间隔天数',
      dataIndex: 'ndays',
      key: 'ndays',
    },
    {
      title: '浏览网页次数',
      dataIndex: 'stimes',
      key: 'stimes',
    },
    {
      title: '独立浏览网页次数',
      dataIndex: 'ostimes',
      key: 'ostimes',
    },
    {
      title: '用户价值',
      dataIndex: 'value',
      key: 'value',
    },
    {
      title: '用户活跃度',
      dataIndex: 'user',
      key: 'user',
    },
  ];

  return (
    <div>
      <Search
        placeholder="请输入用户ID"
        allowClear
        enterButton="查询"
        size="large"
        onSearch={onSearch}
        style={{ width: "400px", marginLeft: "50px" }}
      />
      <div style={{display:count,marginTop:"60px"}}>
        <div>
          <Button type="primary">基本属性标签</Button>
          <Table dataSource={dataSource} columns={columns} />
          
        </div>
        <div>
          <Button type="primary">行为属性标签</Button>
          <Table dataSource={dataSource1} columns={columns1} />
        </div>
      </div>
    </div>
  )
}

export default Index
