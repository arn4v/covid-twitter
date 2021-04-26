import { useRouter } from "next/router"
import * as React from "react"
import Navbar from "~/components/Navbar"

const Team = () =>{
    const router = useRouter()
    var links = [{  
        name: 'Anshul Agarwala',
        social:'https://twitter.com/anshulagx',
        image: 'https://pbs.twimg.com/profile_images/1363831677542273026/Rfpa_d7M_400x400.jpg'
    }, 
    {   name: 'Apoorv Singal',
        social : 'https://twitter.com/ApoorvSingal',
        image: 'https://pbs.twimg.com/profile_images/1364826453465067520/kXJIOwRo_400x400.jpg'
    },
    {   name: 'Arnav Gosain',
        social : 'https://twitter.com/arn4v',
        image: 'https://pbs.twimg.com/profile_images/1345143364123938816/xyMaKHLe_400x400.jpg'
    },
    {   name: 'Jay Kapoor',
        social : 'https://twitter.com/Jaykapoor24',
        image: 'https://pbs.twimg.com/profile_images/1382015514927538176/6WPx5Gbc_400x400.jpg'
    },
    {   name: 'Naveen Sahu',
        social : 'https://twitter.com/heyNvN',
        image: 'https://pbs.twimg.com/profile_images/1042117866672156672/E3PKqgkg_400x400.jpg'
    },
    {   name: 'Neeraj Chouhan',
        social : 'https://twitter.com/_neerajchouhan',
        image: 'https://pbs.twimg.com/profile_images/1361225951678357504/54aQSGQs_400x400.jpg'
    },
    {   name: 'Praneeth Margam',
        social : 'https://dribbble.com/praneethmargam',
        image: 'https://cdn.dribbble.com/users/4130730/avatars/normal/e419c928c5df1d4ad3cc9a8b19fc8e3f.jpg?1590754517'
    },
    {   name: 'Rahul Garg',
        social : 'https://twitter.com/rgxai',
        image: 'https://pbs.twimg.com/profile_images/1367467814257360898/vBzZcuoX_400x400.jpg'
    },
    {   name: 'Rutvij Karkhanis',
        social : 'https://twitter.com/rutvijkarkhanis',
        image: 'https://pbs.twimg.com/profile_images/1284193881169395712/46YQxUjO_400x400.jpg'
    },
    {   name: 'Sant Sharma',
        social : 'https://twitter.com/sntksh',
        image: 'https://pbs.twimg.com/profile_images/1378521976084426755/AhwqNzgv_400x400.jpg'
    },
    {   name: 'Simran Sachdeva',
        social : 'https://twitter.com/jr_sachdeva',
        image: 'https://pbs.twimg.com/profile_images/1378522840383692800/GGmMVUZx_400x400.jpg'
    },
    {   name: 'Swarnim Walavalkar',
        social : 'https://twitter.com/SwarnimVW',
        image: 'https://pbs.twimg.com/profile_images/1334575215901175808/Vjpdyqf1_400x400.jpg'
    },
    {   name: 'Utkarsh Bhimte',
        social : 'https://twitter.com/BhimteBhaisaab',
        image: 'https://pbs.twimg.com/profile_images/1284769236305338368/1QMpU-YP_400x400.jpg'
    },
    {   name: "Vedant Kaushik",
        social : 'https://twitter.com/VedantRusty',
        image: 'https://pbs.twimg.com/profile_images/1301086790451826690/64PaA8Mr_400x400.jpg'
    },
    {   name: 'Vishnu Singh Sengar',
        social : 'https://www.linkedin.com/in/contactvishnu',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQFg98t4x72rSQ/profile-displayphoto-shrink_800_800/0/1600088800520?e=1625097600&v=beta&t=iiPSKVEo2x3Mb2In09Ka824KT3rX0P5SUZsw8OwRrN4'
    },
]
    return(
        <div>
            <Navbar/>
            <div>
            <section className="section-team">
                <div className="container">
                    <div className="row justify-center flex text-center">
                        <div className="md:col-span-8 lg:col-span-6">
                            <div className="header-section">
                                <h3 className="small-title">Our Team</h3>
                                <h2 className="title">Let's meet with our team members</h2>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row">
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="single-person">
                                <div className="person-image">
                                    <img src="https://i.ibb.co/G2CBWvb/person1.jpg" alt="" />
                                    <span className="icon">
                                        <i className="fab fa-html5"></i>
                                    </span>
                                </div>
                                <div className="person-info">
                                    <h3 className="full-name">John Doe</h3>
                                    <span className="speciality">Web Developer</span>
                                </div>
                            </div>
                        </div>
                       
                        <div className="sm:col-span-6 lg:col-span-4 xl:col-span-3">
                            <div className="single-person">
                                <div className="person-image">
                                    <img src="https://i.ibb.co/nbpNr4r/person2.jpg" alt="" />
                                    <span className="icon">
                                        <i className="fab fa-wordpress-simple"></i>
                                    </span>
                                </div>
                                <div className="person-info">
                                    <h3 className="full-name">Robert Smith</h3>
                                    <span className="speciality">WordPress Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="single-person">
                                <div className="person-image">
                                    <img src="https://i.ibb.co/25zdRMr/person3.jpg" alt="" />
                                    <span className="icon">
                                        <i className="fab fa-angular"></i>
                                    </span>
                                </div>
                                <div className="person-info">
                                    <h3 className="full-name">John Doe</h3>
                                    <span className="speciality">Angular Developer</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-6 col-lg-4 col-xl-3">
                            <div className="single-person">
                                <div className="person-image">
                                    <img src="https://i.ibb.co/w0ynr2Q/person4.jpg" alt="" />
                                    <span className="icon">
                                        <i className="fab fa-js"></i>
                                    </span>
                                </div>
                                <div className="person-info">
                                    <h3 className="full-name">John Smith</h3>
                                    <span className="speciality">Javascript Developer</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </div>
    )
    
}

export default Team