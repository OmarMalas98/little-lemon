import Pasta from './pasta.png';
import Pasta2 from './pasta2.png';
import Mousse from './mousse.png';
import Lasagna from './lasagna.png';
import Table from './table.png';
function Main() {
    return(
        <main className="shadow">
            <div className='banner'>
                <div className='banner-text'><h1>Little Lemon Restaurant</h1></div>
                <div className='button-wrapper'><a className='button' href="#">Book Now</a></div>
            </div>
            <div className='about'>
                <h1>About Us</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eget velit aliquet sagittis id consectetur purus ut. Euismod in pellentesque massa placerat duis ultricies. Sed libero enim sed faucibus turpis. Enim praesent elementum facilisis leo. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Vulputate enim nulla aliquet porttitor lacus. Vitae justo eget magna fermentum iaculis eu non diam. Donec enim diam vulputate ut pharetra sit amet aliquam id. Facilisi etiam dignissim diam quis. Amet purus gravida quis blandit turpis cursus in hac habitasse. Amet tellus cras adipiscing enim eu turpis. Eget dolor morbi non arcu risus quis varius quam quisque. Morbi tristique senectus et netus et malesuada fames ac turpis. Elementum tempus egestas sed sed risus pretium quam. Elementum nibh tellus molestie nunc non blandit massa enim nec. Fermentum leo vel orci porta non pulvinar neque.</p>
            </div>
            <div>
                <div><img alt='pasta' src={Pasta}/></div>
                <div>
                    <h1>We Would love to know what you think</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <a href="#">Contact Us</a>
                </div>
            </div>
            <div>
                <div><h1>Our Golden Dishes</h1></div>
                <div>
                    <div>
                        <img alt='pasta' src={Pasta2}></img>
                        <h3>Spaguetti a la italiana</h3>
                    </div>
                    <div>
                        <img alt='mousse' src={Mousse}></img>
                        <h3>Orange Mousse</h3>
                    </div>
                    <div>
                        <img alt='lasagna' src={Lasagna}></img>
                        <h3>Nonna's Lasagna</h3>
                    </div>
                </div>
            </div>
            <div>
                <img alt='table' src={Table}></img>
            </div>
            <div>
                <h1>‘’what is done in love is well done’’</h1>
                <h1>Vincent Van Gogh</h1>
            </div>
            <div>
                <div>
                    <h2>find us at</h2>
                    <p>101 ST, Buenos Aires
opening hours:
9:00 - 00:00</p>
                </div>
            </div>
        </main>
    )
}
export default Main;