import React from 'react';
import './LeaguesDataShow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const LeaguesDataShow = (props) => {
    const { strLeague, strSport, idLeague } = props.league;
    return (
        <div className="main-container">
            <div className='box-container'>
                <div md="auto" className='box-cart'>
                    <h3>{strLeague}</h3>
                    <p className='sports-type'>Sports Type: {strSport}</p>
                    <Link to={`/league-details/${idLeague}`}><Button variant="success">Explore <FontAwesomeIcon icon={faAngleRight} /></Button></Link>
                </div>
            </div>
        </div>
    );
};

export default LeaguesDataShow;