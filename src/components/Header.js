import React, {Component} from 'react';
import umat from '../assets/umat.png';

class Header extends Component {

    componentDidMount() {
        const home = document.getElementById('home');
        home.addEventListener('focus', () => {
            window.responsiveVoice.speak('Home');
        });

        const about = document.getElementById('about');
        about.addEventListener('focus', () => {
            window.responsiveVoice.speak('About.');
        });
        const academics = document.getElementById('academics');
        academics.addEventListener('focus', () => {
            window.responsiveVoice.speak('Academics.');
        });
        const student = document.getElementById('student');
        student.addEventListener('focus', () => {
            window.responsiveVoice.speak('Student.');
        });
        const staff = document.getElementById('staff');
        staff.addEventListener('focus', () => {
            window.responsiveVoice.speak('Staff.');
        });
        const contact = document.getElementById('contact');
        contact.addEventListener('focus', () => {
            window.responsiveVoice.speak('contact.');
        });
    }

    render() {
        return (
            <>
            <header className="px-24 py-3 bg-yellow-300">
                <div className="flex justify-between items-center">
                    <div className="logo">
                        <img src={umat} alt="university of mines and technology logo"/>
                    </div>
                    <nav>
                        <ul className="flex">
                            <li id="home" className="mr-4" tabIndex="1">Home</li>
                            <li id="about" className="mr-4" tabIndex="2">About</li>
                            <li id="academics" className="mr-4" tabIndex="3">Academics</li>
                            <li id="student" className="mr-4" tabIndex="4">Student</li>
                            <li id="staff" className="mr-4" tabIndex="5">Staff</li>
                            <li id="contact" tabIndex="6">Contact</li>
                        </ul>
                    </nav>
                </div>
            </header>
            </>
        );
    }
}

export default Header;