import '../App.css'
import heroImage from '../assets/shoe_image.png'
import flipkart from '../assets/flipkart.png'
import amazon from '../assets/amazon.png'
export const Hero = () => {
  return (
    <main className="hero">
        <div className="hero-content">
            <h1>YOUR FEET DESERVE THE BEST</h1>

            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className="hero-btn">
                <button className="btn-1">Shop Now</button>
                <button className="btn-2">Category</button>
            </div>

            <div className="shopping">
                <p>Also Available On</p>
                <div className="brand-icons">
                    <img src={flipkart} alt="flipkart" />
                    <img src={amazon} alt="amazon" />
                </div>
            </div>
        </div>

        <div className="hero-image">
            <img src={heroImage} alt="shoe" />
        </div>
    </main>
  )
}

export default Hero;
