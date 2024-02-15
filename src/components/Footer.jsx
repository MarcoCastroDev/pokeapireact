import { Link } from "react-router-dom";
import { PokemonPic, ItemsPic, LocationPic } from './index';
import styles from "./Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Link to="/pokemons" className={styles.footerLink}>
                <img src={PokemonPic} alt="Pokeball" className={styles.footerIcon} /> Pokemons
            </Link>
            <Link onClick={(event) => event.preventDefault()} to="/items" className={styles.footerLink}>
                <img src={ItemsPic} alt="Pokeball" className={styles.footerIcon} />Items
            </Link>
            <Link onClick={(event) => event.preventDefault()} to="/location" className={styles.footerLink}>
                <img src={LocationPic} alt="Pokeball" className={styles.footerIcon} />Location
            </Link>
        </footer>
    )
}

export default Footer