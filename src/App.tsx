import { useEffect, useRef, useState } from 'react'
import coverImage from './assets/cover.jpg'
import streetsImage from './assets/image 66.jpg'
import bandImage from './assets/image 69.jpg'
import merchHoodie from './assets/merch-hoodie.png'
import merchJacket from './assets/merch-jacket.png'

const members = [
  { name: 'ivan', previewClass: 'member-preview-1' },
  { name: 'ivan 2', previewClass: 'member-preview-2' },
  { name: 'ivan 3', previewClass: 'member-preview-3' },
  { name: 'ivan 4', previewClass: 'member-preview-4' },
  { name: 'ivan 5', previewClass: 'member-preview-5' },
]

function useSmoothParallax() {
  const pageRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const page = pageRef.current

    if (!page) {
      return undefined
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined
    }

    let targetY = window.scrollY
    let currentY = targetY
    let frameId = 0

    const setLayer = (name: string, speed: number, min = -Infinity, max = Infinity) => {
      const value = Math.min(max, Math.max(min, currentY * speed))
      page.style.setProperty(name, `${value.toFixed(2)}px`)
    }

    const applyParallax = () => {
      currentY += (targetY - currentY) * 0.12

      if (Math.abs(targetY - currentY) < 0.1) {
        currentY = targetY
      }

      setLayer('--parallax-cover-image', 0.12, 0, 180)
      setLayer('--parallax-streets-frame', 0.018, 0, 95)
      setLayer('--parallax-merch-left', 0.016, 0, 95)
      setLayer('--parallax-merch-right', -0.012, -80, 0)
      setLayer('--parallax-band', 0.02, 0, 140)

      if (currentY === targetY) {
        frameId = 0
        return
      }

      frameId = window.requestAnimationFrame(applyParallax)
    }

    const requestParallax = () => {
      targetY = window.scrollY

      if (frameId === 0) {
        frameId = window.requestAnimationFrame(applyParallax)
      }
    }

    requestParallax()
    window.addEventListener('scroll', requestParallax, { passive: true })

    return () => {
      window.removeEventListener('scroll', requestParallax)

      if (frameId !== 0) {
        window.cancelAnimationFrame(frameId)
      }
    }
  }, [])

  return pageRef
}

export default function App() {
  const pageRef = useSmoothParallax()
  const [activeMemberIndex, setActiveMemberIndex] = useState<number | null>(null)
  const activeMember = activeMemberIndex === null ? null : members[activeMemberIndex]

  return (
    <main className="prehod-page" ref={pageRef} aria-label="Prehod">
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

      <section className="members-section" aria-labelledby="members-title">
        <h2 className="members-title" id="members-title">
          Members
        </h2>

        <div className="members-grid">
          {members.map((member, index) => (
            <button
              className={`member-name member-name-${index + 1}`}
              type="button"
              onBlur={() => setActiveMemberIndex(null)}
              onFocus={() => setActiveMemberIndex(index)}
              onPointerEnter={() => setActiveMemberIndex(index)}
              onPointerLeave={() => setActiveMemberIndex(null)}
              key={member.name}
            >
              <span>{member.name}</span>
            </button>
          ))}
        </div>

        {activeMember && (
          <img
            src="/ivan.jpg"
            alt=""
            className={`member-preview ${activeMember.previewClass}`}
            aria-hidden="true"
          />
        )}
      </section>
    </main>
  )
}
