import React from "react";
import "../styles/join.css";
import usePageTracking from "../components/Common/TrafficTracker";

import Backdrop from "../assets/join/Backdropp.png";

const Join = () => {
    usePageTracking("Join Page");

    return (
        <>
            <div
                className="joinTitleCard"
                style={{ backgroundImage: `url(${Backdrop})` }}
            >
                <div className="joinColorOverlay" />
                <h1>Join Us!</h1>
            </div>

            <div className="join">
                <section className="oneOfUsOneOfUsOneOfUs">
                    <h1>
                        Wanna join SASE?
                    </h1>
                    <p>
                        We're glad to have you! Here's why and how you should join!
                    </p>
                </section>
                {/* One like and i'll add this sentence: Note: While we have a focus on the community of future asian scientists & engineers, you do not have to be part of this demographic to join SASE.  */}

                <section className="membershipBenefits">
                    <section className="oneOfUsOneOfUsOneOfUs">
                        <h1>Membership Benefits</h1>
                        <p>What perks do you get for being a paid member?</p>
                    </section>

                    <section className="initiatives">
                        <div className="blue">
                            <h2>
                                1. Cool Shirt
                            </h2>
                            <p>
                                Every school year, we release a cool shirt for paid members to wear and rep SASE. You don't want to miss out on the cool shirt!
                            </p>
                            <h2>
                                2. Senior Stole/ Cord
                            </h2>
                            <p>Being a paid member for the school year gets you a year of active status towards your senior stole/ cord. A senior stole/ cord can only be obtained after two years of active membership with SASE</p>
                            <h2>
                                3. End of Year Banquet
                            </h2>
                            <p>
                                Paid members can attend the banquet we host at the end of the year. At the banquet, we celebrate our members, welcome the eboard for the next school year, and eat yummy food! Yay!
                            </p>
                            <h2>
                                4. Snacks & Other Events
                            </h2>
                            <p>
                                Your dues help pay for snacks at our events as well as allow us to have the funds to make more events for everyone to attend.
                            </p>
                        </div>
                    </section>
                </section>

                <section className="joinInitiatives">
                    <section className="oneOfUsOneOfUsOneOfUs">
                        <h1>Our Initiatives</h1>
                        <p>What programs do your dues support? Here are just a few:</p>
                    </section>

                    <section className="initiatives">
                        <div className="blue">
                            <h2>Boba Social</h2>
                            <p>Free boba!! At the first general body meeting of the school year!! Hooray!!</p>

                            <h2>GeauxHack</h2>
                            <p>
                                Our yearly programming competition is a great way to measure your technical skills, make bonds with your fellow computer science classmates, and impress your professors! Grab a group of friends and join us for three days of coding, merge conflicts, and free food! More information can be found on our GeauxHack page.
                            </p>
                        </div>
                        {/* HELENA!! REMEMBER TO PUT THE GO HACK LINK LATER!! IN THE LAST SENTENCE!! REMEMBER IT!! (she is not remembering this) */}
                    </section>

                </section>
                <section className="joinHow">
                    <section className="oneOfUsOneOfUsOneOfUs">
                        <h1>How do I Join?</h1>
                        <p>Glad I convinced you to join! Just follow the steps listed below: </p>
                    </section>
                    <section className="initiatives">
                        {/* HELENA... CHANGE THE LINK COLOR HELENA... HELENA... DON'T FORGET THIS HELENA... (she forgot 2 seconds later) */}
                        <div className="blue">
                            <h2>
                                Step 1. Pay your dues
                            </h2>
                            <p>
                                Pay $25 to either the SASE treasurer in cash or to @saselsu on Venmo. Make sure to include your full name, t-shirt size, and LSU email alongside your payment.
                            </p>
                            <h2>
                                Step 2. Complete the Hazing Prevention Training
                            </h2>
                            <p><a href="https://lsu.prevent.zone">This is the link to complete the training.</a> When you are done with the two modules, make sure to save a copy of each of the Hazing Prevention Training Certificates in a PDF format. Name your file with the following naming convention: LastName, FirstName Hazing Certificate (ex. Tiger, Mike Hazing Certificate). You'll need this in the next step.</p>
                            <h2>
                                Step 3. Complete the Membership Form
                            </h2>
                            <p>
                                <a href="https://tr.ee/4-Z5qV6ttc">The link for the membership form is here.</a>
                            </p>
                            <h2>
                                Step 4. Yippeeeeeeeee!!
                            </h2>
                            <p>
                                You are now an official member of SASE for the school year! Hope you have fun :)
                            </p>
                        </div>
                    </section>
                </section>
                <section>

                </section>
            </div>
        </>
    );
};

export default Join;
