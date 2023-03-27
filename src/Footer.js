import littleLemonLogo from './littleLemonLogo.png';
function Footer() {
    return(
        <footer className="footer">
            <div className="footer-logo"> <img className='logo' src={littleLemonLogo} alt={"Little Lemon Logo"}/></div>
            <div>Copyright &copy;</div>
        </footer>
    )
}
export default Footer;