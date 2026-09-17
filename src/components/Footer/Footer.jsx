import './Footer.css'

export function Footer() {

  return (
        <footer className="site-footer">
            <div className="container site-footer__inner">
                <div className="site-footer__grid">
                    <div className="site-footer__brand-col">
                        <a className="brand-title__footer" href="/">
                            <svg className="cosmith-logo__footer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100%" height="100%">
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
                                    placeholder="tripulante@estacion.io" />
                                <button type="button" className="site-footer__submit">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="site-footer__col">
                        <div className="site-footer__col-title">CONTACT US</div>
                        <ul className="site-footer__links">
                            <li className="site-footer__link">
                                List 1
                            </li>
                        </ul>
                    </div>

                    <div className="site-footer__col">
                        <div className="site-footer__col-title">ENVIROMENT</div>
                        <ul className="site-footer__links">
                            <li className="site-footer__link">
                                List 2
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="site-footer__bottom">
                    <div className="site-footer__bottom-left">
                        <span>ALL RIGHTS RESERVED © 2026</span>
                    </div>
                    <div className="site-footer__bottom-right">
                        <a href="/terms-of-use" className="site-footer__bottom-link">TERMS OF USE</a>
                        <a href="/help-us" className="site-footer__bottom-link">HELP US IMPROVE</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}