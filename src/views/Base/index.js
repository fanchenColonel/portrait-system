import React, { Component } from 'react'
import * as echarts from 'echarts';
// import {Button} from "antd"
export default class echart extends Component {
    componentDidMount() {
        var myChart = echarts.init(document.getElementById('main'));
        var myChart1 = echarts.init(document.getElementById('main1'));

        // 绘制图表
        myChart.setOption({
            title: {
                text: '用户性别比例'
            },
            tooltip: {},
            xAxis: {
                data: ['18以下', '18-25', '26-35', '36-45', '45-60', '60以上']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    // name: '用户性别',
                    type: 'bar',
                    data: [670, 1835, 2785, 1450, 210, 50]
                }
            ]
        });
        myChart1.setOption({

            title: {
                text: ' 用户性别比例',
                // subtext: 'Fake Data',
                left: 'center'
            },
            tooltip: {
                trigger: 'item'
            },
            legend: {
                orient: 'vertical',
                left: 'left'
            },
            series: [
                {
                    // name: 'Access From',
                    type: 'pie',
                    radius: '50%',
                    data: [
                        { value: 2060, name: '男' },
                        { value: 4360, name: '女' },
                        { value: 580, name: '未知' },
                        // { value: 484, name: 'Union Ads' },
                        // { value: 300, name: 'Video Ads' }
                    ],
                    emphasis: {
                        itemStyle: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
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
