import './Footer.css'

export function Footer() {

  return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div className="site-footer__grid">
                    <div className="site-footer__brand-col">
                        <a className="brand-title__footer" href="/">
                            <img src="src\assets\logo.svg" alt="Cosmith logo" className="cosmith-logo__footer" />
                            COS<span>MITH</span>
                        </a>
                        <p className="site-footer__tagline">
                            The digital resource superstore for world-builders and video game developers.
                        </p>
                        <div className="site-footer__newsletter">
                            <div className="site-footer__newsletter-title">Free Cosmic Transmission</div>
                            <p className="site-footer__newsletter-desc">
                                Receive news about our new products directly in your email.
                            </p>
                            <form className="site-footer__form">
                                <input className="site-footer__input" type="email"
                                    placeholder="cosmither@station.com" />
                                <button type="button" className="site-footer__submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="site-footer__col">
                        <div className="site-footer__col-title">NAVIGATION</div>
                        <ul className="site-footer__links">
                            <a className="site-footer__link" href="/">Home</a>
                            <a className="site-footer__link" href="/pixel-studio">Pixel studio</a>
                            <a className="site-footer__link" href="/gui-textures">GUI Textures</a>
                            <a className="site-footer__link" href="/items">Items</a>
                            <a className="site-footer__link" href="/3d-extures">3D Textures</a>
                            <a className="site-footer__link" href="/configs">Configs</a>
                        </ul>
                    </div>

                    <div className="site-footer__col">
                        <div className="site-footer__col-title">COMUNITY</div>
                        <ul className="site-footer__links">
                            <a className="site-footer__link" href="https://discord.gg/qHAy2PnB83" target="_blank">Discord</a>
                        </ul>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__bottom-left">
                        <span>ALL RIGHTS RESERVED © 2026</span>
                    </div>
                    <div className="site-footer__bottom-right">
                        <a href="/terms-of-use" className="site-footer__bottom-link">TERMS OF SERVICE</a>
                        <a href="/help-us" className="site-footer__bottom-link">HELP US IMPROVE</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}