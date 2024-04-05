import Daniel from '../../../assets/images/daniel-warts.jpg'
import Danny from '../../../assets/images/danny-lauren.jpg'
import Rose from "../../../assets/images/rose-doll.png"
import John from '../../../assets/images/john-sean.jpg'
import Joseph from '../../../assets/images/joseph-russell.jpg'
import Bakers from '../../../assets/images/baker-assistants.jpg'
import './AboutDescription.css'

const AboutDescription = () => {
    return (
        <div className="about-wrapper">
            <h2>About us</h2>
            <p>
                Weclome to 59-Cafe, where every treat is made with passion and care. We are a family-owned bakery that has beed serving our community for 3years. Our story began when Daniel Warts first discovered their love for baking as a child.
                Over the years, that love grew into a passion and 2021, they decided to run that passion into a business.
            </p>
            <p>
                At 59-Cafe, we believe that baking is an art form. We take pride in every treat we make, using only finest ingredients and time-tested recipes. form classic chocolate chip cookies to our famous custom cakes, every item in our bakery is made from scratch, with care and attention to detail.
            </p>
            <p>
                One of the things that set us apart from other bakeries is our commitment to personalized service. We believe that every customer is unique and we strive to make every order special. Whether you're looking for a custom cake for special occasion, or just want to pick up a dozen cupcakes for a casual get-together, we're here to help.
            </p>
            <p>
                Thank you for considering 59 Cafe for your next baking needs. We look forward to welcoming you into our bakery and sharing our passion for baking with you.
            </p>

            <h2 className='about-title'> Our Core Values</h2>
            <div className='values-container'>
                <ul>
                    <li>Quality</li>
                    <li>Creativity</li>
                    <li>Personalized</li>
                </ul>
                <ul>
                    <li>Community</li>
                    <li>Sustainability</li>
                    <li>Excellance</li>
                </ul>
            </div>

            <h2 className='about-title'>Meet our Team</h2>
            <div className='about-images'>
                <div>
                    <img src={Daniel} alt='Ceo' />
                    <h3>Ceo</h3>
                    <h4>Daniel Warts</h4>
                </div>
                <div>
                    <img src={Danny} alt='Head baker' />
                    <h3>Head baker</h3>
                    <h4>Danny Lauren</h4>
                </div>
                <div>
                    <img src={Rose} alt='Baker' />
                    <h3>Baker</h3>
                    <h4>Rose Doll</h4>
                </div>
                <div>
                    <img src={John} alt='Pastry chef' />
                    <h3>Pastry chef</h3>
                    <h4>John Sean</h4>
                </div>
                <div>
                    <img src={Joseph} alt='Baker' />
                    <h3>Baker</h3>
                    <h4>Joseph Rusell</h4>
                </div>
                <div>
                    <img src={Bakers} alt='Baker Assistants' />
                    <h3>Baker Assistants</h3>
                </div>
            </div>

        </div>
    )
}

export default AboutDescription