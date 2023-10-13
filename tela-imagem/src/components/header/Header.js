import styles from './Header.module.css';

function Header(){
    const logo = 'https://logodownload.org/wp-content/uploads/2014/07/pernambucanas-logo.png'
    return(
        <div className={styles.header}>
            <svg className={styles.bars} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/></svg>
            <img className={styles.logo} src={logo} alt='logo pernambucanas'/>
        </div>
    )
}

export default Header