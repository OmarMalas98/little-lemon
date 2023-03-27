import Nav from './Nav';
import littleLemonLogo from './littleLemonLogo.png';

function Header() {
    return(
        <header className='header'>
            <img className='logo' src={littleLemonLogo} alt={"Little Lemon Logo"}/>
            <Nav/>

        </header>
    )
}
export default Header;