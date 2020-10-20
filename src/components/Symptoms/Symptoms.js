import React from 'react';
import '../../css/interface.css';
import '../../css/symptoms.css';

class Symptoms extends React.Component {

    constructor(props) {
        super(props);
    }

    scrollSymptoms = (step, period) => {
        
        let block = document.querySelector('.symptoms-block');
        const startTime = Date.now();
        const startLeft = block.scrollLeft;

        const render = () => {
            const dt = Date.now() - startTime;
            if (dt < period){
                block.scrollLeft = startLeft + step * dt / period 
                requestAnimationFrame(render)
            }
        }
        requestAnimationFrame(render);

    }

    // scrollSymptomsToRigth = (step, period) => {
        
    //     let block = document.querySelector('.symptoms-block');
    //     const startTime = Date.now();
    //     const startLeft = block.scrollLeft;

    //     const render = () => {
    //         const dt = Date.now() - startTime;
    //         if (dt < period){
    //             block.scrollLeft = startLeft + step * dt / period 
    //             requestAnimationFrame(render)
    //         }
    //     }
    //     requestAnimationFrame(render);

    // }

    render () {

        const { symptomsData } = this.props;
        
        return (
            <section className='symptoms'>
                <div className='container symptoms-wrapper'>
                    <div className='symptoms-block'>
                    {
                        symptomsData.map( (symptom) => {
                            return (
                                
                                <a className='symptoms-item' style={ { backgroundImage: symptom.color } } href="#">
                                    <div className='symptoms-img'>
                                        <img src={symptom.img}></img>
                                    </div>
                                    <img className='symptoms-dots' src="/images/symptoms/dots.png"></img>
                                    <span className='symptoms-text'>{symptom.text}</span>
                                    
                                </a>
                            );
                        })
                    }
                    <button className='symptoms-button symptoms-button__prev' onClick={() => this.scrollSymptoms(-200, 200)}>
                        <img src='/images/prev.png'></img>
                    </button>
                    <button className='symptoms-button symptoms-button__next' onClick={() => this.scrollSymptoms(200, 200)}>
                        <img src='/images/next.png'></img>
                    </button>
                    </div>     
                </div>
            </section>
            
        );
    }
}

export default Symptoms;