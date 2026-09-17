import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"

import { HomePage } from "./pages/Home/HomePage"
import { PixelStudio } from "./pages/PixelStudio/PixelStudio"
import { NotFoundPage } from "./pages/NotFoundPage/NotFoundPage"

function App() {
    const currentPath = window.location.pathname

    let page = <NotFoundPage />
    if (currentPath === '/') {
        page = <HomePage />
    } else if (currentPath === '/pixel-studio') {
        page = <PixelStudio />
    }

    return (
        <>
            <Header />
            {page}
            <Footer />
        </>
    )
}

export default App
