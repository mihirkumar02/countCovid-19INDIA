import React from 'react';

const Footer = () => {
    return (  
        <div>
            <div className="row">
                <div className="col-md-12">
                    <div className="footer p-3 mt-4 text-center bg-dark text-light">
                        Made By: 
                        &nbsp;<span className="font-weight-normal">
                        <a className="text-warning" target="blank" rel="noopener noreferrer" href="https://github.com/mihirkumar02"> Mihir Kumar Singh</a>
                        </span>
                        , using <a className="text-success" target="blank" rel="noopener noreferrer" href="https://covid19-india-adhikansh.herokuapp.com/">Covid-19 INDIA API</a> in collaboration with <a className="text-danger" target="blank" rel="noopener noreferrer" href="https://github.com/HrithikMittal">Adhikansh Mittal</a>.
                        <div>The data has been extracted from </div>
                        <div>the Ministry of Health and Family Welfare, Govt. of India <a href="https://www.mohfw.gov.in/" className="text-primary" target="blank" rel="noopener noreferrer">website</a> and <a className="text-primary" target="blank" rel="noopener noreferrer" href="https://www.who.int/news-room/q-a-detail/q-a-coronaviruses">WHO Official website</a>.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Footer;