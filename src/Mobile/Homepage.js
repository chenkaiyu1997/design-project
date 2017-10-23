import React, {Component} from 'react'
import ReactPlayer from 'react-player'
export default class extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div style={{
          overflow:'hidden', 
          position: 'absolute',
          bottom: '0',
          width: '100%',
          height: '100%' ,
          overflow: 'hidden'}}>
        {
          false ? 
          <img src="image/vertical.gif" style={{
            minWidth: '100%',
            minHeight: '100%',
            width: 'auto',
            height: 'auto',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%,-50%)'}}/>
          :
          <ReactPlayer url='/image/vertical.mp4' playing controls playsinline loop muted style={{
              minWidth: '100%',
              minHeight: '100%',
              width: 'auto',
              height: 'auto',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%,-50%)'}}/>
        }
      </div>
    )
  }
}
