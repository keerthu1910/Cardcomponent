import './style.scss';
import ReactStars from 'react-rating-stars-component';
import image from './assets/image.jpg'
export const Cardcomponent = () => {
    return(
        <div className="card-container">
            <div className='card'>
                <div className='img-container'>
                    <img src={image} alt='image' />
                </div>
                <div className='card-content-container'>
                    <div className='card-content'>
                        <p className='heading'>Cactus Paradise</p>
                        <p className='content'>Explore varieties of cacti and learn the basics of botany at our workshop</p>
                    </div>
                    <div className='review-container'>
                        <p>{'\u20ac'}15 per person</p>
                        <ReactStars count={5} size={20} activeColor="#583F9F" />
                        <div className='btn-container'>
                            <p>Prices may vary depending on selected date</p>
                            <button>Book now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}