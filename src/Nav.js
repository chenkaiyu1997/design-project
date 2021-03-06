import React, { Component } from 'react'
import {fadeIn} from 'react-animations'
import { Animation } from 'styled-animation'
import { browserHistory } from 'react-router'

export default class  extends Component {
  constructor() {
    super()
    this.mouseLeaveLogo = this.mouseLeaveLogo.bind(this)
    this.mouseLeaveAbout = this.mouseLeaveAbout.bind(this)
    this.mouseLeaveContact = this.mouseLeaveContact.bind(this)
    this.mouseLeavePortfolio = this.mouseLeavePortfolio.bind(this)

    browserHistory.listen( location =>  {
      this.forceUpdate()
    });
  }

  componentDidMount() {
    setTimeout(() => {
      let logoImage = document.getElementsByClassName("logoImage")
      logoImage[0].style.transform = "rotate(0deg)"
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < 4; ++i) {
        logo[i].style.marginTop = "30px"
      }
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = '166px'
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.marginRight = "136px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.marginRight = "173px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.marginRight = "154px"
    }, 0)
  }

  componentWillReceiveProps(nextProps) {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      let aboutLine = document.getElementsByClassName("aboutLine")
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      let contactLine = document.getElementsByClassName("contactLine")
      logoLine[0].style.transitionDelay = '0s'
      let logo = document.getElementsByClassName("logo")
      for(let i = 0; i < logo.length; ++i) {
        logo[i].style.transition = "all 0s ease"
        logo[i].style.transitionDelay = '0s'
      }
      for(let i = 0; i < logo.length; ++i) {
        logo[i].style.marginTop = "30px"
      }
      logoLine[0].style.width = (nextProps.home === 1 ? '166px' : '0px')
      aboutLine[0].style.width = (nextProps.about === 1 ? '76px' : '0px')
      portfolioLine[0].style.width = (nextProps.portfolio === 1 ? '118px' : '0px')
      contactLine[0].style.width = (nextProps.contact === 1 ? '103px' : '0px')
      let aboutLogo = document.getElementsByClassName("aboutLogo")
      aboutLogo[0].style.transition = "all 0s ease"
      aboutLogo[0].style.transitionDelay = '0s'
      aboutLogo[0].style.marginRight = "136px"
      let portfolioLogo = document.getElementsByClassName("portfolioLogo")
      portfolioLogo[0].style.transition = "all 0s ease"
      portfolioLogo[0].style.transitionDelay = '0s'
      portfolioLogo[0].style.marginRight = "173px"
      let contactLogo = document.getElementsByClassName("contactLogo")
      contactLogo[0].style.transition = "all 0s ease"
      contactLogo[0].style.transitionDelay = '0s'
      contactLogo[0].style.marginRight = "154px"
    }, 0)
  }

  mouseOverLogo() {
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      logoLine[0].style.width = '166px'
    })
  }

  mouseLeaveLogo(event) {
    event.preventDefault()
    setTimeout(() => {
      let logoLine = document.getElementsByClassName("logoLine")
      if(this.props.home === 0) logoLine[0].style.width = '0px'
    })
  }

  mouseOverAbout() {
    setTimeout(() => {
      let aboutLine = document.getElementsByClassName("aboutLine")
      aboutLine[0].style.width = '76px'
    })
  }

  mouseLeaveAbout(event) {
    event.preventDefault()
    setTimeout(() => {
      let aboutLine = document.getElementsByClassName("aboutLine")
      if(this.props.about === 0) aboutLine[0].style.width = '0px'
    })
  }

  mouseOverPortfolio() {
    setTimeout(() => {
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      portfolioLine[0].style.width = '118px'
    })
  }

  mouseLeavePortfolio(event) {
    event.preventDefault()
    setTimeout(() => {
      let portfolioLine = document.getElementsByClassName("portfolioLine")
      if(this.props.portfolio === 0) portfolioLine[0].style.width = '0px'
    })
  }

  mouseOverContact() {
    setTimeout(() => {
      let contactLine = document.getElementsByClassName("contactLine")
      contactLine[0].style.width = '103px'
    })
  }

  mouseLeaveContact(event) {
    event.preventDefault()
    setTimeout(() => {
      let contactLine = document.getElementsByClassName("contactLine")
      if(this.props.contact === 0) contactLine[0].style.width = '0px'
    })
  }

  render() {
    this.fixorabsolute = (window.location.pathname === '/page' ? 'absolute' : 'fixed')
    return (
      <div>
        <div style={{float: 'left'}} onClick={this.props.clickHome} onMouseOver={this.mouseOverLogo} onMouseOut={this.mouseLeaveLogo}>
          <div style={
              {
                transition: "all 0.5s linear",
                transitionDelay: "1.3s",
                backgroundColor: '#FFE300',
                marginTop: '39px',
                width: '0px',
                height: "16px",
                marginLeft: "77px",
                position: this.fixorabsolute
              }} className="logoLine"/>

            <img src="/image/logo1.png" className="logoImage" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              marginTop: "30px",
              transform: "rotate(90deg)",
              marginLeft: "83px",
              opacity: "0.9",
              height: 32,
              position: this.fixorabsolute
            }}/>
            <img src="/image/logo2.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.2s",
              marginTop: "-35px",
              marginLeft: "123px",
              opacity: "0.9",
              height: 32,
              position: this.fixorabsolute
            }}/>
            <img src="/image/logo3.pic" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.4s",
              marginTop: "-35px",
              marginLeft: "155px",
              opacity: "0.9",
              height: 32,
              position: this.fixorabsolute
            }}/>
            <img src="/image/logo4.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.6s",
              marginTop: "-35px",
              marginLeft: "184px",
              opacity: "0.9",
              height: 32,
              position: this.fixorabsolute
            }}/>
            <img src="/image/logo5.png" className="logo" style={{
              transition: "all 0.5s cubic-bezier(0.4, 0.5, 0.6, 1.7)",
              transitionDelay: "0.8s",
              marginTop: "-35px",
              marginLeft: "216px",
              opacity: "0.9",
              height: 32,
              position: this.fixorabsolute
            }}/>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickContact} onMouseOver={this.mouseOverContact} onMouseOut={this.mouseLeaveContact}>
          <div style={{
            marginTop: '33px',
            marginRight:'-200px',
            paddingRight: '4vw',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="contactLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "absolute",
              marginTop: '7px',
              marginLeft: 17
            }} className="contactLine" />
            <div style={{
              position: "absolute",
              marginLeft: 20,
              width: 94,
              fontSize: 20,
              cursor: 'default',
              fontFamily: "PingFangSC-Light"
            }}>
              CONTACT
            </div>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickPortfolio} onMouseOver={this.mouseOverPortfolio} onMouseOut={this.mouseLeavePortfolio}>
          <div style={{
            marginTop: '33px',
            marginRight:'-200px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="portfolioLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "absolute",
              marginTop: '7px',
              marginLeft: 17
            }} className="portfolioLine" />
            <div style={{
              position: "absolute",
              marginLeft: 20,
              width: 94,
              fontSize: 20,
              cursor: 'default',
              fontFamily: "PingFangSC-Light"
            }}>
              PORTFOLIO
            </div>
          </div>
        </div>
        <div style={{float: 'right'}} onClick={this.props.clickAbout} onMouseOver={this.mouseOverAbout} onMouseOut={this.mouseLeaveAbout}>
          <div style={{
            marginTop: '33px',
            marginRight:'-200px',
            float: 'right',
            transition: "all 0.5s linear",
            transitionDelay: '1.5s'
          }} className="aboutLogo">
            <div style={{
              height: '15px',
              width: '0px',
              backgroundColor: '#FFE300',
              transition: "all 0.5s linear",
              position: "absolute",
              marginTop: '7px',
              marginLeft: 16
            }} className="aboutLine" />
            <div style={{
              position: "absolute",
              marginLeft: 20,
              width: 94,
              fontSize: 20,
              cursor: 'default',
              fontFamily: "PingFangSC-Light"
            }}>
              ABOUT
            </div>
          </div>
        </div>
      </div>
    )
  }
}
