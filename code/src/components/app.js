import React from "react"

const heroimg = "./images/medium-image.png"
const puff1 = "./images/medium-image-puff-1.jpeg"
const puff2 = "./images/medium-image-puff-2.png"
const puff3 = "./images/medium-image-puff-3.png"
const puff4 = "./images/medium-image-puff-4.jpeg"
const writer1 = "./images/writer-1.png"
const writer2 = "./images/writer-2.jpeg"
const writer3 = "./images/writer-3.jpeg"
const writer4 = "./images/writer-4.jpeg"
const bookmark = "./images/bookmark.png"

class App extends React.Component {

  render() {
    return (

      <div className="App">

        <nav>
          <ul>
            <li><a href="#top" className="active">Home</a></li>
            <li><a href="#top">Technology</a></li>
            <li><a href="#top">Creativity</a></li>
            <li><a href="#top">Entrepreneurship</a></li>
            <li><a href="#top">Self</a></li>
            <li><a href="#top">Culture</a></li>
            <li><a href="#top">Digital Design</a></li>
            <li><a href="#top">Popular on Medium</a></li>
            <li><a href="#top">Politics</a></li>
            <li><a href="#top">More</a></li>
            <li><div className="nav-button">Get started</div></li>
          </ul>
        </nav>

        <hr />

        <div className="content">

          <div className="hero-box">
            <div className="hero-copy">
              <div className="inner-margin">
                <h1>Interesting ideas that set your mind in motion.</h1>
                <h3>Hear directly from the people who know it best.
                  From tech to politics to creativity and more —
                  whatever your interest, we&lsquo;ve got you covered.
                </h3>
              </div>
              <div className="CTA-button CTA-button-1">Get started</div>
              <div className="CTA-button CTA-button-2">Learn more</div>
            </div>
            <div className="hero-image">
              <img src={heroimg} alt="Hero-bild" />
            </div>
          </div>

          <div className="content-boxes">

            <div className="puff-box">
              <div className="image-box" style={{ backgroundImage: `url(${puff1})` }} />
              <div className="copy-box">
                <div className="inner">
                  <h2>The Boy Who Tamed the Sea</h2>
                  <p className="paragraph">At 5:30 am, on a morning I can handle it, I&lsquo;ll slip out of the dark mouth of my covers and creep through the silver lig...</p>
                  <div className="writer first">
                    <div className="writer-image" style={{ backgroundImage: `url(${writer1})` }} />
                    <div className="writer-byline">
                      <h4>Carl Moore</h4>
                      <p>Oct 27, 8 min read</p>
                    </div>
                    <div className="bookmark"><img src={bookmark} alt="bookmark" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" style={{ backgroundImage: `url(${puff2})` }} />
              <div className="copy-box">
                <div className="inner">
                  <h2>The Role of Human Emotions in the Future of Transport</h2>
                  <p>Getting from A to B is about to feel very different.</p>
                  <div className="writer second">
                    <div className="writer-image" style={{ backgroundImage: `url(${writer2})` }} />
                    <div className="writer-byline">
                      <h4>Ben Bland</h4>
                      <p>Nov 1, 7 min read</p>
                    </div>
                    <div className="bookmark"><img src={bookmark} alt="bookmark" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" style={{ backgroundImage: `url(${puff3})` }} />
              <div className="copy-box">
                <div className="inner">
                  <h2>The March of the Losers</h2>
                  <p>Around the world, the victims are becoming the abusers,
                    and Donald Trump is their king.
                  </p>
                  <div className="writer third">
                    <div className="writer-image" style={{ backgroundImage: `url(${writer3})` }} />
                    <div className="writer-byline">
                      <h4>Henrt Wismayer</h4>
                      <p>Nov 10, 8 min read</p>
                    </div>
                    <div className="bookmark"><img src={bookmark} alt="bookmark" /></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="puff-box">
              <div className="image-box" style={{ backgroundImage: `url(${puff4})` }} />
              <div className="copy-box">
                <div className="inner">
                  <h2>The Burning Season</h2>
                  <p>You cannot save everything when the fires come to Northern California.</p>
                  <div className="writer fourth">
                    <div className="writer-image" style={{ backgroundImage: `url(${writer4})` }} />
                    <div className="writer-byline">
                      <h4>Lindsey Smith</h4>
                      <p>Nov 9, 31 min read</p>
                    </div>
                    <div className="bookmark"><img src={bookmark} alt="bookmark" /></div>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    )
  }

}
export default App
