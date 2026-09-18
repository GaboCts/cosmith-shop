import './Header.css'
import styles from './Header.module.css'

const AVATAR_URL =
  'https://media.discordapp.net/attachments/1096169021143011428/1550224409397301380/Chamber.jpeg?ex=6aad8e7c&is=6aac3cfc&hm=e2559666122a11c72375fc31fa36875962f550b01b1fc161379d1f77692152be&=&format=webp&width=1024&height=1020'

export function Header() {
    const currentPath = window.location.pathname

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="site-header__top">
                    <div className="site-header__left">
                        <a className="brand-title" href="/">
                            <svg className="cosmith-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
                                <defs>
                                    <linearGradient id="outerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#00D2FF" />
                                        <stop offset="50%" stopColor="#7B2CBF" />
                                        <stop offset="100%" stopColor="#F72585" />
                                    </linearGradient>
                                    <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor="#9D4EDD" />
                                        <stop offset="100%" stopColor="#7209B7" />
                                    </linearGradient>
                                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                        <feGaussianBlur stdDeviation="6" result="blur" />
                                        <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                    </filter>
                                </defs>
                                <polygon points="100,20 165,57.5 165,132.5 100,170 35,132.5 35,57.5"
                                    fill="url(#outerGlow)" filter="url(#glow)" />
                                <polygon points="100,26 159,60 159,130 100,164 41,130 41,60" fill="#0B0E17" />
                                <polygon points="100,38 149,66 149,124 100,152 51,124 51,66" fill="none"
                                    stroke="#00E5FF"   strokeWidth="2.5" strokeLinejoin="round" />
                                <path
                                    d="M 100,75 C 100,90 102,98 117,100 C 102,102 100,110 100,125 C 100,110 98,102 83,100 C 98,98 100,90 100,75 Z"
                                    fill="url(#starGrad)" />
                                <circle cx="100" cy="100" r="5" fill="#FFFFFF" />
                            </svg>
                            COS<span>MITH</span>
                        </a>

                    </div>
                    
                    <div>
                        <nav className="main-nav">
                            <a href="/" className={currentPath === "/" ? `${styles.isActive} main-nav__link` : 'main-nav__link'}>
                                HOME
                            </a>

                            <a href="/pixel-studio" className={currentPath === "/pixel-studio" ? `${styles.isActive} main-nav__link` : 'main-nav__link'}>
                                PIXEL STUDIO
                                <span className="main-nav__badge">New</span>
                            </a>

                            <a target="_blank" href="https://www.instagram.com/" className="main-nav__link">
                                DISCORD
                            </a>
                        </nav>
                    </div>
                    

                    <div className="site-header__right">
                        <a href="/profile" className="profile__avatar-link">
                            <div className="profile__info">
                                <div className="profile__title">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" width="100%" height="100%">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                    </svg>
                                </div>
                            </div>
                            <img className="profile__avatar" src={AVATAR_URL} alt="Profile" />
                        </a>
                    </div>
                </div>


                <div className="category-tabs">
                    
                    <a href="/gui-textures" className={currentPath === "/gui-textures" ? `${styles.isActive} category-tabs__item` : 'category-tabs__item'}>
                        GUI TEXTURES
                    </a>

                    <a href="/items" className={currentPath === "/items" ? `${styles.isActive} category-tabs__item` : 'category-tabs__item'}>
                        ITEMS
                    </a>

                    <a href="/3d-textures" className={currentPath === "/3d-textures" ? `${styles.isActive} category-tabs__item` : 'category-tabs__item'}>
                        3D TEXTURES
                    </a>

                    <a href="/configs" className={currentPath === "/configs" ? `${styles.isActive} category-tabs__item` : 'category-tabs__item'}>
                        CONFIGS
                    </a>
                </div>
            </div>
        </header>
    )
}