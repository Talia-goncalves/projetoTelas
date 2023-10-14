import styles from './Header.module.css';

function Header(){
    const logo = 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png'
    const bars = 'https://cdn-icons-png.flaticon.com/512/7216/7216128.png'

    return(
        <div className={styles.header}>
            <img className={styles.bars} src={bars}/>
            <img className={styles.logo} src={logo} alt='logo pernambucanas'/>
        </div>
    )
}

export default Header