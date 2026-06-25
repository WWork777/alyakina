'use client'
import './CookieConsent.scss'
import { useEffect, useState } from 'react'

export default function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    try {
      if (!localStorage.getItem('cookie-consent')) {
        setVisible(true)
      }
    } catch (e) {
      setVisible(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem('cookie-consent', 'accepted')
    } catch (e) {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite">
      <p className="cookie-consent__text">
        Мы используем файлы cookie для корректной работы сайта и аналитики. Продолжая
        пользоваться сайтом, вы соглашаетесь с использованием cookie и{' '}
        <a href="/politika-konfidencialnosti.pdf" target="_blank" rel="noopener noreferrer">
          политикой конфиденциальности
        </a>
        .
      </p>
      <button type="button" className="cookie-consent__btn" onClick={accept}>
        Принять
      </button>
    </div>
  )
}
