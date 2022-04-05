import React, { Component } from 'react'
import * as echarts from 'echarts';
// import {Button} from "antd"
export default class index extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'));
        var myChart1 = echarts.init(document.getElementById('main1'));

        // 绘制图表
        myChart.setOption({
            title: {
                text: '用户价值划分群体画像'
            },
            tooltip: {},
            xAxis: {
                data: ['高价值用户', '一般价值用户', '低价值用户', '偏低价值用户',]
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    // name: '用户价值',
                    type: 'bar',
                    data: [1687,  3560,  483, 1270]
                }
            ]
        });
        myChart1.setOption({
          title: {
              text: '用户活跃度划分群体画像'
          },
          tooltip: {},
          xAxis: {
              data: ['活跃用户', '一般活跃用户', '不活跃用户', '待流失用户']
          },
          yAxis: {
              type: 'value'
          },
          series: [
              {
                  // name: '用户活跃度',
                  type: 'bar',
                  data: [2440, 2880,1424,256]
              }
          ]
      });
        
    }
    render() {
        return (
            <div style={{ marginTop: "50px" }}>
                <div id="main1" style={{ width: 500, height: 500, float: "left", marginLeft: "50px" }}></div>
                <div id="main" style={{ width: 500, height: 500, float: "left", marginLeft: "50px" }}></div>
            </div>
        )
    }
}
