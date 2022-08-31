import React, { Component } from "react";

const testimonials = [
    {
        testimonial: "Wow! @Yaman Suneja -- you are the man! I just pulled down your branch for the new header and I wasted half a day just admiring it and showing it to the rest of the office, lol. Very impressive work, you are awesome.",
        by: "Zach Chatterton"
    },
    {
        testimonial: "We love having you on the team and we love the work you are doing and we are as excited as ever about the future. As a simple oken of appreciation for the work done so far, I just added a $100 bonus. Thanks again for all your hard work.",
        by: "Zach Chatterton"
    },
    {
        testimonial: "Just wanted to take a moment to say thanks for all of your hard work Yaman and your growth in your role with Gather. You continually impress the team and we feel grateful to have you working on Gather.It is amazing to see all of the hard work and late nights pay off and we are thrilled to have you helping us along the way. It's crazy to look at all of the software we've built and daunting to look at all of the software we have left to build but it will be a very fun adventure.Thanks for the awesome work Yaman!! Miles to go! We are lucky to have you on the team!",
        by: "Paul Price"
    },
    {
        testimonial: "By the way, I remain happy with the service that you are providing. I am intending to pass along as much development work as I have, so that I can work on some other things. I wasn't planning on doing that, but you are doing a good enough job that I feel comfortable in doing so.",
        by: "Eric Lentz"
    },
    {
        testimonial: "You have been an incredible team member. You have had your fingerprints on so many aspects of the project and we wouldn't be here without your help. I wish you and your loved ones the best in everything you do and I will 100 % support you in everything you do.Wish you a Happy New Year! I added a $700 bonus for your hard work throughout the year.Thanks again for all your hard work.",
        by: "Cardmoola Team"
    },
    {
        testimonial: "Yaman has delightly surprised me with his work performance, he has helped support the explosive growth of users our platform experienced, and took initiative inside the engineering team to research and create organizational processes that ensured our app can be used bug free. Despite working from home in India, he was able to allocate time to meet and coordinate with other Engineering team members to launch product releases in time. Thank you so much for the incredible work youve done for us.",
        by: "Nathan Lu"
    }
]

class Testimonials extends Component {
    render() {
        return (
            <section id="testimonials">
                <div className="col-md-12">
                    <h1 className="header-label" style={{ color: "black", marginBottom: 36 }}>
                        <span>Testimonials</span>
                    </h1>
                    <div className="row center mx-auto mb-5">
                        {testimonials.map(t =>
                            <div className="testimonials-card col-lg-5">
                                <p>{t.testimonial}</p>
                                <h5>{t.by}</h5>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        );
    }
}

export default Testimonials;
