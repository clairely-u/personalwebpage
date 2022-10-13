import React, {useState} from "react";


export default function Main() {
    const [showAbout, setShowAbout] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [showContact, setShowContact] = useState(false);

    return (
        <div>
            <div className="Main">
            <div className="MainPic__container"><img id="MainPic" src="moi.jpg" alt="It me!"></img>
            </div>

            <div className="MainBody">
                <div className="MBSuperior"><h1>claire utrecht</h1></div>

                <div className="MBButtons">
                <button id = "Button__About" onClick = {() => {setShowAbout(true); setShowContact(false); setShowGallery(false)}}>home</button>

                <button id= "Button__Gallery" onClick = {() => {setShowAbout(false); setShowContact(false); setShowGallery(true)}}>gallery</button>
                <button id="Button__Contact" onClick={() => {setShowAbout(false); setShowContact(true); setShowGallery(false)}}>contact</button>
                </div>
            </div>
        </div>
        <div className="AltContent">
        
        {
            showAbout ?
            <div className="About">
                <h2>Howdy, what's up! A little about me...</h2>
            <div className="AboutDiv">
            <div className="HardCoded">
            <h3>first, the hard coded "professional" stuff...</h3>
            <p> My name's Claire, I'm about to be 29 years old, originally from the lovely city of Kalamazoo, MI and currently living in beautiful Grand Rapids, MI for the last two years. In 2018 I earned a <b>Bachelors Degree in Anthropology with a minor in Communications from Western Michigan University</b>, both of which I still love to continue learning about in my free time. This past June, I also completed <b>Grand Circuses Full-stack AH JavaScript boot camp</b>, in which my cohort was familiarized with <b>HTML, CSS, JavaScript, TypeScript, React, Express, unit testing, data structures and manipulation, Google Firebase/hosting, and APIs</b>. Prior to that, I also took part in a class offered by two coworkers thorugh my employer called Programming 101, where we covered many of the basic concepts of JavaScript that would eventually help me through boot camp. In recent months, I've also began studying Duck Creek technologies under the guidance of a close friend.</p>
            <p> I many cumulative years of experience in <b>retail, food service, and direct customer service</b>. This time has allowed me to become familiar with and skilled at:
            <ul>
                <li>exceptional service and strong attention to detail</li>
                <li>active listening, often to identify an issue or the best product for a customer</li>
                <li>quickly managing and prioritizing multiple tasks at once</li>
                <li>staying cool in very high-stress situations</li>
                <li>adapting to quickly-changing environments</li>
                <li>deliver the highest-quality support</li>
                <li>conducting shadowing/reverse shadowing training sessions via Zoom, answering new-hire questions while they are first being deployed as agents, and even once acted as point person for a new hires entire final training day.</li>
            </ul>
            </p>
            <p> Next up, I'm excited to take on my first professional programming role, and commit myself to forever continue learning about coding and technology.</p>
            </div>
            <div className="FunFacts">
                <h3>
                    ... and then some fast fun facts!
                </h3>
                <ul>
                    <li id="funfact"> I love to <b>travel</b> (duh!) I've traveled to Japan for 6 weeks when I was 13, Italy for 2 weeks when I was sixteen, and have visited many U.S. states. </li>
                    <li id="funfact"> I've been playing <b>acoustic guitar</b> for three years, bass for two, ukelele for one. I really like to play mostly indie/folk rock.</li>
                    <li id="funfact"> I love to <b>cook</b>! I will usually make one big recipe a week or two if I'm feeling ambitious. My favorite dish to make is creamy white wine chicken pasta!</li>
                    <li id="funfact"> I have a <b>cat</b>, my sweet little baby man, named Fischer. He's a Maine Coon mix that's almost 13 years old. He's got extra toes on his front paws!</li>
                    <li id="funfact">I like to <b>run and exercise</b>. I'm not that fast and can't go very far, but it's still a good workout!</li>
                </ul>
            </div>
            </div>
            <h3 className="SpecialThanksTitle">Some very special thanks...</h3>
            <div className="SpecialThanksSection">
            <p id="specialthanks"> I would like to thank the following people for helping me get here today, and being a part of where I may be headed next. I would literally not be sitting here today creating this webpage without you:</p>
            <p id="specialthanks">Lisa Schuler, my GC boot camp instructor. Thank you thank you thank you for your seven months of dedication to our questions, frustrations, successes. Thank you for passing on what you know to a bunch of almost-totally-green n00bs. </p>
            <p id="specialthanks">Daniel Blumberg and Josh Wilson, my first Programming 101 instructors. You two kept me in class and got me through when I was ready to never look at coding again, and then continued to support me in my studies after it concluded. You co-wrote my absolutely beautiful letter of recommendation for my boot camp scholarship, without which I would never have been able to attend at all. I have already told you both personally, but I want to make it clear to everyone the impact you've had on this journey. None of this would have <i>ever even left the ground without you.</i></p>
            <p id="specialthanks">Evelyn Henry, who has supported me the most enthusiastically and unfailingly since she first told me what a coding boot camp was.</p>
            <p id="specialthanks">Pat Chizek and Logan Pauli, two very old friends, who started me down the path of learning Duck Creek, and are now helping me learn by sharing their infinite wisdom.</p>
            </div>
            </div>
            :
            <p></p>
        }

        {
            showGallery ?
            <div className="GalleryContainer">
            <p id="GalleryCaption">here are some fun recent pictures! last updated: 10/13/2022 at 10:22 AM</p>
            <div className = "PicsContainer">
            <img className = "GalleryPic" src="pilea.jpg" alt="some new sprouts on my pilea plant after a good repotting"/>
            <img className = "GalleryPic" src = "mysteryflowers.jpg" alt = "i don't know what kind of flowers these are, but they're really pretty! look at that gradient."/>
            <img className = "GalleryPic" src = "duck.jpg" alt = "this duck was hanging out among some seaweed that was flowing around really beautifully. this was taken at the Blue Bridge in Grand Rapids, MI."/>
            <img className="GalleryPic" src = "catmug.jpg" alt = "a cat mug that was found at a goodwill containing really tasty hawaiian coffee."/>
            <img className="GalleryPic" src = "crinoid.jpg" alt = "a super super old crinoid fossil found at pilgrim haven beach"/>
            <img className="GalleryPic" src = "rockbeach.jpg" alt = "a picture from pilgrim haven rock beach"/>
            </div>
            </div>
            :
            <p></p>
        }

        {
            showContact ?
            <div className="Contact">
                <h3>Please feel free to contact me by any of the means below.</h3>
            <div>personal email: utrechtc@gmail.com</div>
            <div>linkedin: https://www.linkedin.com/in/claireutrecht/</div>
            <div>IG: __peachblood</div>
            <div>discord: nabiya#6172</div>
            </div>
            :
            <p>     </p>
        }

        </div>
        </div>
    )
}