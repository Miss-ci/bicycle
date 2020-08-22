import React from 'react'
import { Row, Col } from "antd"

import Uitl from '../../utils/utils.js'
import "./index.less"
import Api from '../../api'
export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      uname: "河畔一角"
    })
    setInterval(() => {
      let sysTime = Uitl.formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    }, 1000);
  }
  componentDidMount() {
    // this.getWeatherData()
  }

  getWeatherData = () => {
    let city = "北京"
    // encodeURIComponent对中文进行编码
    Api.jsonp({
      url: "http://api.map.baidu.com/telematics/v3/weather?location=" + encodeURIComponent(city) + "&output=json&ak=6tYzTvGZSOpYB5Oc2YGGOKt8"
    }).then((res) => {
      if (res.status === "success") {
        let data = res.results[0].weather_data[0]
        console.log(data)
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather
        })
      }
    })
  }
  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span={24}>
            <span>欢迎， {this.state.uname}</span>
            <a href="#">退出</a>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span={4} className="breadcrumb-title">首页</Col>
          <Col span={20} className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-image">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    )
  }
}