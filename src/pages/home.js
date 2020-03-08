import React, {Component} from 'react';
import bannerOne from '../assets/01-slide_960_240.jpg';

import postImageOne from '../assets/news/Prof_Temeng_Presenting_a_Gold_Medal_to_the_Captian_of_the_Winning_Team.JPG';
import postImageTwo from '../assets/news/A_Group_Picture_of_the_Afosu_Delegation_and_the_UMaT_Team1.jpg';
import postImageThree from '../assets/news/A_Group_Photograph_of_the_Team_from_ParisTech_and_UMaT_Staff.JPG';
import postImageFour from '../assets/news/Prof_Kuma_Delivering_the_End_of_Year_Message_to_Staff.JPG';

class Home extends Component {
    render() {
        return (
            <div className="body">
                <div className="slider">
                    <img src={bannerOne} className="object-center w-full" alt="Admissions open for 20/21 academic year"/>
                </div>
                <div className="main-body grid grid-cols-3 gap-4 px-48 mt-8 ">
                    <div className="latest-news col-span-2 px-10">
                        <h1 className="capitalize font-semibold text-xl">Latest News</h1>
                        <div className="new mt-5">
                            <img src={postImageOne} className="w-full h-64 object-center object-cover"
                                 alt="Prof Temeng presenting a gold metal to the captain of the winning team"/>
                            <h2 className="text-green-900 mt-2 font-bold underline">
                                <a href="#">Department of Geological Engineering Retains
                                Vice Chancellor’s Challenge Cup</a></h2>
                            <p className="text-red-900 text-xs font-bold mt-3">Wednesday, 11 March 2020</p>
                            <p>Prof Temeng Presenting a Gold Medal to t... more details</p>
                        </div>
                        <div className="new mt-10">
                            <img src={postImageTwo} className="w-full h-64 object-center object-cover"
                                 alt="Prof Temeng presenting a gold metal to the captain of the winning team"/>
                            <h2 className="text-green-900 mt-2 font-bold underline">
                                <a href="#">UMaT to Partner Chiefs and People of Akyem Afosu and
                                    other Stakeholders to Set up a Satellite Campus...</a></h2>
                            <p className="text-red-900 text-xs font-bold mt-3">Thursday, 13 February 2020</p>
                            <p>A Group Picture of the Afosu Delegation ... More detail</p>
                        </div>
                        <div className="new mt-10">
                            <img src={postImageThree} className="w-full h-64 object-center object-cover"
                                 alt="Prof Temeng presenting a gold metal to the captain of the winning team"/>
                            <h2 className="text-green-900 mt-2 font-bold underline">
                                <a href="#">UMaT Receives a Delegation from ParisTech Schools in France</a></h2>
                            <p className="text-red-900 text-xs font-bold mt-3">Friday, 31 January 2020</p>
                            <p>A Group Photograph of the Team from Pari... More detail</p>
                        </div>
                        <div className="new mt-10">
                            <img src={postImageFour} className="w-full h-64 object-center object-cover"
                                 alt="Prof Temeng presenting a gold metal to the captain of the winning team"/>
                            <h2 className="text-green-900 mt-2 font-bold underline">
                                <a href="#">4th End of Year and New Year Services held for Staff of the University</a></h2>
                            <p className="text-red-900 text-xs font-bold mt-3">Thursday, 16 January 2020</p>
                            <p>Prof Kuma Delivering the End of Year Mes... More detail</p>
                        </div>
                    </div>
                    <div className="categories">
                        <div>
                            <h1 className="text-red-900 font-bold">Programmes in FOE</h1>
                            <ol>
                                <li className="mt-5 text-blue-800 underline"><a href="#">Electrical and Electronics Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Computer Science and Engineering </a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Mechanical Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Renewable Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Mathematics</a></li>
                            </ol>
                        </div>
                        <div>
                            <h1 className="text-red-900 font-bold mt-10">Programmes in FMRT</h1>
                            <ol>
                                <li className="mt-5 text-blue-800 underline"><a href="#">Geomatics Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Environmental and Safety Engineering </a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Geological Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Minning Engineering</a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Minerals Engineering</a></li>

                            </ol>
                        </div>

                        <div>
                            <h1 className="text-red-900 font-bold mt-10">Programmes in FMs</h1>
                            <ol>
                                <li className="mt-5 text-blue-800 underline"><a href="#">Technical Communication </a></li>
                                <li className="mt-2 text-blue-800 underline"><a href="#">Management Studies </a></li>
                            </ol>
                        </div>
                       
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;