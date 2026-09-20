import './Header.css'
import styles from './Header.module.css'

const AVATAR_URL =
  'https://media.discordapp.net/attachments/1096169021143011428/1550224409397301380/Chamber.jpeg?ex=6ab182fc&is=6ab0317c&hm=7f1032d3ab7c73b219af3410272cf011e0413fcb0fc95f755f56d694a5bdae5b&=&format=webp&width=1024&height=1020'

export function Header() {
    const currentPath = window.location.pathname

    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="site-header__top">
                    <div className="site-header__left">
                        <a className="brand-title" href="/">
                            <img src="src\assets\logo.svg" alt="Cosmith logo" className="cosmith-logo" />
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

                            <a target="_blank" href="https://discord.gg/qHAy2PnB83" className="main-nav__link">
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