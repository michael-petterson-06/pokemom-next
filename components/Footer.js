import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                <span>Pokemom</span>&copy; 2023
                <span> Michael Petterson</span>
            </p>
        </footer>
    )
}