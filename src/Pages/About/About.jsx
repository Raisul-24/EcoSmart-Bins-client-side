import SectionTitle from "../../Components/SectionTitle/SectionTitle";


const About = () => {
    return (
        <div>
            {/* banner */}
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/Xu0zw5m.jpg)' }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-white">
                    <div className="">
                        <h1 className="mb-5 text-6xl font-bold ">About us</h1>
                        <p className="text-xl">Welcome to EcoSmartBin: Navigating a Greener Future</p>

                    </div>
                </div>
            </div>

            {/* our story */}
            <div className="lg:px-20 lg:py-20 p-5">
                <SectionTitle
                    heading="Our Story"
                    subHeading="Founding Inspiration"
                ></SectionTitle>
                <section>
                    <p className="lg:text-xl">
                        EcoSmartBin was born from a shared vision among a group of environmental enthusiasts who believed that technology could play a pivotal role in revolutionizing waste management practices. Fueled by a passion for the planet, our founders set out to create a platform that empowers individuals and communities to make smarter, greener choices. Since our inception, we have embarked on a journey filled with challenges, triumphs, and a growing community of like-minded individuals. From the early days of conceptualization to the development of cutting-edge features, every step has been guided by the belief that small actions, when multiplied, can make a significant impact on our environment.
                    </p>
                </section>
            </div>

            {/* vision */}
            <div className="lg:px-20 lg:py-20 p-5">
                <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className="lg:w-1/2"><img src="https://i.imgur.com/yFrqsxu.jpg" alt="Album" /></figure>
                    <div className="card-body lg:w-1/2">
                        <div className="flex justify-center">
                            <h3 className="w-fit capitalize pt-5 pb-2 text-3xl border-b-4 border-brand-color mb-10 font-semibold text-[#101a30]">
                                Our Vision
                            </h3>
                        </div>
                        <p className="lg:text-xl">At EcoSmartBin, we envision a world where waste is not just managed but transformed into a valuable resource. Our long-term goal is to create a global network of communities actively engaged in sustainable waste practices, reducing environmental impact and fostering a sense of shared responsibility for our planet.At EcoSmartBin, our vision is a world where waste becomes a valuable resource, transformed through innovative technologies and global community collaboration. We strive for a future with significantly reduced environmental footprints, empowered individuals, and communities making informed, sustainable choices. We envision a shift towards mainstream sustainable lifestyles, inspiring positive environmental impact. Committed to continuous innovation, EcoSmartBin aims to lead the way in addressing evolving environmental challenges, fostering a legacy of responsibility for a cleaner, greener tomorrow. Join us on this journey, where collective action shapes a harmonious coexistence between humanity and the planet we call home.</p>

                    </div>
                </div>
            </div>

            {/* Values and Principles */}
            <div className="py-20">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.imgur.com/TIyh6wG.jpg)' }}>
                    {/* <div className="hero-overlay bg-opacity-60"></div> */}
                    <div >
                        
                        <h1 className="mb-5 lg:text-5xl text-3xl font-bold text-center">Values and Principles</h1>
                        <div className="lg:flex gap-48 mx-10 ">
                            <div className="card mt-20 bg-green-100 shadow-xl bg-opacity-70">
                                <div className="card-body ">
                                    <h2 className="card-title border-brand-color border-b-4 lg:text-2xl">Commitment to Sustainability!</h2>
                                    <p className="lg:text-xl">EcoSmartBin is built on a foundation of sustainability. We believe that through innovation and collective action, we can create positive change for our planet. Our commitment to eco-friendly practices extends beyond the virtual realm, influencing every aspect of our platform.</p>
                                    
                                </div>
                            </div>
                            <div className="card mt-20 bg-green-100 shadow-xl bg-opacity-70">
                                <div className="card-body ">
                                    <h2 className="card-title border-brand-color border-b-4 lg:text-2xl">Community Focus</h2>
                                    <p className="lg:text-xl">We understand that real change happens at the community level. EcoSmartBin is designed to facilitate collaboration and communication among neighbors, local businesses, and municipalities, creating a united front against waste-related challenges.</p>
                                    
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;