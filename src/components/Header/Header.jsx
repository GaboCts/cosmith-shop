import './Header.css'

const AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBJchO07YjI-hIdlHypL0HJx08W9oDg4_zcd_nxEnK5JE2_sNsUfk2d6loeX3xQ8xINksnPvGE3WhKvyCzf73ksBmTKkWPyokpOWGt_vtONcgRAiiqxu-5VLXrnQcOGtpVn0n_yLoK2_fsb01sDJ_iRXHXcL3vPyYr1TG9hFqrXCY4zChIj-FSAuCqVUvOKIrr7j9Lv-jp-HwAFFy1nBJKvo2ZGnak5JfUPz62lqIRsZzGzELTSu9XniQ'

export function Header() {
    return (
        <header className="site-header">
            <div className="container site-header__inner">
                <div className="site-header__top">
                    
                    <div className="site-header__left">

                        <a className="brand-title" href="/">
                            Cosmith
                        </a>

                    </div>
                    
                    <nav className="main-nav">
                        <a href="" className="main-nav__link">
                            Home
                        </a>

                        <a href="/pixel-studio" className="main-nav__link">
                            Pixel Title Studio
                            <span className="main-nav__badge">New</span>
                        </a>

                        <a target="_blank" href="https://www.instagram.com/" className="main-nav__link">
                            Discord Community
                        </a>
                    </nav>

                    <div className="site-header__right">
                        <div className="profile">
                            <div className="profile__info">
                                <div className="profile__title">Profile</div>
                            </div>
                            <a className="profile__avatar-link" href="#" data-path="perfil">
                                <img className="profile__avatar" src={AVATAR_URL} alt="Profile" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="category-tabs">
                    
                    <a href="" className="category-tabs__item">
                        GUI TEXTURES
                    </a>

                    <a href="" className="category-tabs__item">
                        ITEMS
                    </a>

                    <a href="" className="category-tabs__item">
                        3D TEXTURES
                    </a>

                    <a href="" className="category-tabs__item">
                        CONFIGS
                    </a>
                </div>
            </div>
        </header>
    )
}