// Write your code here

import {Component} from 'react'

import './index.css'

const headsImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
class CoinToss extends Component {
  state = {tossResultImage: headsImgUrl, headsCount: 0, tailsCount: 0}

  onClickCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let updateHeadsCount = headsCount
    let updateTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImgUrl
      updateHeadsCount += 1
    } else {
      tossImage = tailsImgUrl
      updateTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: updateHeadsCount,
      tailsCount: updateTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="container">
        <div className="coin-container">
          <div>
            <h1 className="heading">Coin Toss Game</h1>
            <p className="description">Heads (or) Tails</p>
            <div className="inner-container">
              <img
                src={tossResultImage}
                alt="toss result"
                className="coin-img"
              />
            </div>
            <div className="button-container">
              <button
                type="button"
                className="button"
                onClick={this.onClickCoin}
              >
                Toss Coin
              </button>
            </div>
          </div>
          <div className="counter">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
