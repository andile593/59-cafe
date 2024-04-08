import Picture1 from "../../../assets/images/pic-1.jpg"
import Picture2 from "../../../assets/images/pic-2.jpg"
import Picture3 from "../../../assets/images/pic-3.jpg"

import "./BlogsSection.css"

const BlogsSection = () => {
    return (
        <div className="blogs-section">
            <h1>
                Blogs
            </h1>
            <div className="blogs-wrapper">
                <div className="blog">
                    <img src={Picture1} alt="" />
                    <div>
                        <h2>The Art of Decorating Cakes: Tips and Tricks from Our Expert Bakers</h2>
                        <p className="author">By Lauren Daniels</p>
                        <p>At 59 Cafe, we believe that decorating cakes is an art form. From creating intricate designs to mastering the perfect buttercream, there's so much that goes into creating a beautiful, delicious cake. In this post, we'll be sharing some of our top tips and tricks for decorating cakes like a pro.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="blog">
                    <img src={Picture2} alt="" />
                    <div>
                        <h2>5 Tips for Baking Perfectly Flaky Croissants at Home</h2>
                        <p className="author">By Dave Smith</p>
                        <p>There's nothing quite like biting into a warm, flaky croissant fresh from the oven. While it may seem like a daunting task to make croissants from scratch, it's actually easier than you might think. In this post, we'll share our top tips for baking perfectly flaky croissants at home.</p>
                        <button>Read more</button>
                    </div>
                </div>
                <div className="blog">
                    <img src={Picture3} alt="" />
                    <div>
                        <h2>How to Make the Perfect Chocolate Chip Cookies: Tips from the Pros at 59 Cafe</h2>
                        <p className="author">By Adrian Willams </p>
                        <p>Is there anything better than a warm, freshly baked chocolate chip cookie? We don't think so! At 59 Cafe, we've been perfecting our chocolate chip cookie recipe for years, and we're excited to share some of our tips and tricks with you. Whether you're a seasoned baker or a newbie in the kitchen, these tips will help you create the perfect chocolate chip cookies every time.</p>
                        <button>Read more</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogsSection