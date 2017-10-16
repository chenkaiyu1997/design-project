import React, {Component} from 'react'

export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{
          overflow:'hidden', 
          position: 'absolute',
          top: '97',
          bottom: '0',
          width: '100%',
          height: 'calc(100% - 97px)' ,
          overflow: 'hidden'}}>

        <video ref="video" autoPlay muted loop playsInline poster="/image/hori_poster.jpg" style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'}}>
          <source src="/image/horizontal.mp4" type="video/mp4" />
        </video>
      </div>
    )
  }
}
