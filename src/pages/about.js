import React, {Component} from 'react';

import aboutBg from '../assets/UMaT_Auditorium.jpg';

import campusOne from '../assets/about/thecampus.jpg';
import campusTwo from '../assets/about/thecampus1.jpg';
import campusThree from '../assets/about/thecampus3.jpg';
import campusFour from '../assets/about/thecampus3.jpg';

class About extends Component {
    render() {
        return (
            <div>
                <div className="bg-no-repeat bg-center bg-cover w-full h-64 "
                     style={{backgroundImage: `url(${aboutBg})`}}>
                    <div className="w-full h-full" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                        <h1 className="text-white font-bold text-4xl flex justify-center items-center">About Us</h1>
                    </div>
                </div>
                <div className="px-64 mt-10">
                    <h2 className="text-red-800 font-bold underline">University History</h2>
                    <p className="mt-3 text-sm text-justify">The University of Mines and Technology (UMaT) started as
                        the Tarkwa Technical Institute (TTI)
                        on 3rd November, 1952 but was officially commissioned by the Government of Ghana, more
                        precisely by His Excellency the Governor of the Gold Coast, Sir Charles Noble Arden Clarke,
                        on 7th October, 1953. In 1961, the Government, upon the advocacy of the Ghana Chamber of Mines,
                        redefined the mission of TTI to incorporate the training of mining technicians and other middle
                        level manpower for the country’s mining and related industries.</p>
                    <p className="mt-2 text-sm text-justify">In 1961, it was reorganized to become the Tarkwa School
                        of Mines (TSM) to train the required manpower for the mining and allied industries in Ghana.
                        In 1976, the Government took cognizance of the capability of TSM and its strategic location,
                        Tarkwa, which is at the centre of mining activities in the country. As this location gave TSM a
                        special strength for mining education, TSM was affiliated to the Kwame Nkrumah University of
                        Science and Technology (KNUST) as a faculty of the University so as to enable TSM offer degree,
                        diploma and certificate programmes in mining and related fields.The name TSM was changed to
                        KNUST School of Mines (KNUSTSM), Tarkwa. The KNUSTSM, Tarkwa and the Kumasi School of Mines
                        were put together to become the Institute of Mining and Mineral Engineering (IMME).
                    </p>
                    <p className="mt-2 text-sm text-justify">
                        In 1988, a University Rationalization Committee (URC), commissioned by the Ministry of
                        Education, recommended the development of the School and its conversion into a University.
                        In 2000, the conversion of KNUSTSM into a University was again strongly recommended by Louis
                        Berger Inc. in association with Kwame Asante and Associates in a report on partial
                        commercialization of KNUST.
                    </p>
                    <p className="mt-2 text-sm text-justify">
                        In 2001, the Council of KNUST considered and approved proposals and recommendations of the
                        Academic Board to merge the School of Mines at Kumasi and the School of Mines at Tarkwa into
                        the Western University College of KNUST, Tarkwa.
                    </p>
                    <p className="mt-2 text-sm text-justify">
                        On 3rd November, 2004, at exactly 11.35hrs GMT, the Parliament of the Republic of Ghana passed
                        the bill on the University of Mines and Technology into an Act of Parliament. On 11th November,
                        2004, the President of Ghana gave the Presidential Assent and on 12th November, 2004 the
                        University of Mines and Technology, Tarkwa Act 2004 (Act 677) was gazetted and thus,
                        became a law.
                    </p>

                    <h3 className="mt-5 text-red-800 font-bold underline text-sm">Vision</h3>
                    <p className="mt-2 text-sm text-justify">
                        The vision of the University is to be a Centre of Excellence in Ghana and Africa for producing
                        world-class professionals in the fields of mining, petroleum, technology and related disciplines.
                    </p>
                    <h3 className="mt-5 text-red-800 font-bold underline text-sm">Mission</h3>
                    <p className="mt-2 text-sm text-justify">
                        The mission is to provide higher education in mining, petroleum, technology and related
                        disciplines through effective teaching and learning; to promote knowledge through active
                        research and dissemination of information and to offer professional services through extension
                        activities to the mining and allied industries.
                    </p>
                    <h3 className="mt-5 text-red-800 font-bold underline text-sm">Core Values</h3>
                    <p className="mt-2 text-sm text-justify">
                        The core values of the University are Knowledge, Truth and Excellence.
                    </p>
                    <h3 className="mt-5 text-red-800 font-bold underline text-sm">Guiding Philosophy</h3>
                    <p className="mt-2 text-sm text-justify">
                        The philosophy of UMaT is to guide students to develop their intellectual capabilities and
                        appreciate good social and moral values. The major aim is to produce world-class graduates
                        capable of providing useful professional services.
                    </p>
                </div>
                <div className="px-64 mt-10 ">
                    <h2 className="text-red-800 font-bold underline">The Campus</h2>
                    <div className="w-full">
                        <img className="w-full" src={campusOne} alt="Pictures of the campus of UMaT"/>
                    </div>
                    <p className="mt-2 text-sm text-justify">
                        The University is situated approximately on a 1.39 square-kilometre campus of undulating land
                        and pleasant surroundings, about 2 kilometres south of the town of Tarkwa. The campus presents
                        a panorama of beautiful old as well as modern buildings interspersed with verdant lawns and
                        tropical flora which provide a cool and refreshing atmosphere congenial to academic work.
                        Within the short period of its existence, it has become an important centre for the training of
                        engineers and technologists not only for Ghana but also for other African countries as well as
                        other parts of the world.
                    </p>
                    <p className="mt-2 text-sm text-justify">
                        UMaT has two halls of residence. They are the Chamber of Mines Hall and the Gold Refinery Hall.
                        The Chamber of Mines Hall is located at the western end of the campus. The Gold Refinery Hall
                        is located on a highland at the northern outskirts of Tarkwa. Each Hall is equipped with
                        kitchen, dining hall and a separate junior and senior common room for members.
                    </p>
                    <p className="mt-2 text-sm text-justify">
                        The Administration Block, the Library, the Faculty Buildings, and the Auditorium occupy the
                        central portion of the grounds. There are two Faculties and a Centre. They are the Faculty of
                        Mineral Resources Technology, Faculty of Engineering and Centre for Communication and
                        Entrepreneurship Skills (CENCES). In addition, there is a School of Postgraduate Studies which
                        co-ordinates all postgraduate studies in the University.
                    </p>

                </div>
            </div>
        );
    }
}

export default About;