import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Back = () => {
    return (
        <div>
            <Link><Button  variant="primary"><FontAwesomeIcon icon={faAngleLeft}/> Back</Button></Link>
        </div>
    );
};

export default Back;