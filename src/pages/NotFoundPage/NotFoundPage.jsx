import styles from './NotFoundPage.module.css'

export function NotFoundPage() {
    return (
        <main className={styles.main__content}>
            <img src="src\assets\error404.svg" alt="404 Page not found" className={styles.NotFoundPage}/>
            <a href="/" className={styles.NotFound__home}>Back to home page</a>
        </main>
    )
}