import coverImage from './assets/cover.jpg'
import streetsImage from './assets/image 66.jpg'
import bandImage from './assets/image 69.jpg'
import merchHoodie from './assets/merch-hoodie.png'
import merchJacket from './assets/merch-jacket.png'

export default function App() {
  return (
    <main className="prehod-page" aria-label="Prehod">
      <section className="header" aria-label="Cover">
        <img src={coverImage} alt="" className="cover-image" />

        <h1 className="cover-title">
          преходъ
        </h1>

        <p className="album-callout">
          new album out now
        </p>
      </section>

      <span className="frame-corner frame-corner-tl" aria-hidden="true" />
      <span className="frame-corner frame-corner-tr" aria-hidden="true" />
      <span className="frame-corner frame-corner-bl" aria-hidden="true" />
      <span className="frame-corner frame-corner-br" aria-hidden="true" />

      <section className="streets-frame" aria-label="Watch streets">
        <img src={streetsImage} alt="" className="streets-image" />
      </section>

      <p className="streets-ticker" aria-hidden="true">
        <span>улици / гледайте сега /</span>
        <em>улици</em>
        <span> / гледайте сега /</span>
        <em>улици</em>
        <span> / гледайте сега /</span>
      </p>

      <p className="merch-title">
        Official Merch
      </p>

      <img src={merchHoodie} alt="Prehod hoodie" className="merch-image merch-image-left" />
      <img src={merchJacket} alt="Prehod jacket" className="merch-image merch-image-right" />

      <p className="price price-left">12.99</p>
      <p className="price price-right">12.99</p>

      <img src={bandImage} alt="" className="band-image" />
    </main>
  )
}
