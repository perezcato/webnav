import React, {useEffect} from 'react';
import SpeechRecognition from "react-speech-recognition";
import PropTypes from 'prop-types';
import MonkeyLearn from 'monkeylearn';


import Header from "./components/Header";
import './App.css';

const propTypes = {
    browserSupportsSpeechRecognition: PropTypes.bool,
    resetTranscript: PropTypes.bool,
    transcript: PropTypes.func,
    startListening: PropTypes.func,
    stopListening: PropTypes.func,
    listening: PropTypes.bool,
    finalTranscript: PropTypes.string
};

const options = {
    autoStart: false,
    continuous: false
};

function App({   browserSupportsSpeechRecognition,
                 resetTranscript,
                 listening,
                 transcript,
                 finalTranscript,
                 startListening,
                 stopListening }) {

    useEffect(() => {
        if(!browserSupportsSpeechRecognition){
         alert("The browser does not support speech recognition");
        }
    });

    useEffect(()=> {
        document.addEventListener('keydown',(e) => {
            if(e.keyCode === 32){
                if(browserSupportsSpeechRecognition){
                    startListening();
                }else{
                    alert('Your browser does not support');
                }
            }
            if(e.shiftKey){
                stopListening();
            }
        });
        if(!listening){
            if(finalTranscript){
                const ml = new MonkeyLearn('84724c0f9c3bd93c7d52c47260bcc23e8a128f41');
                let model_id = 'cl_qnyavxPY';
                let data = [finalTranscript];
                ml.classifiers.classify(model_id, data).then(res => {
                    console.log(res.body)
                })
            }
        }
    });

  return (
    <div className="App">
      <Header />
       <h1>This is the header</h1>
      <div>listening: {transcript}</div>
        <div>final Transcript: {finalTranscript}</div>
    </div>
  );
}

App.propTypes = propTypes;

export default SpeechRecognition(options)(App);
