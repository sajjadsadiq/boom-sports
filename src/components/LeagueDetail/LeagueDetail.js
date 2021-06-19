import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlag, faFutbol, faMarsStroke, faPenNib} from '@fortawesome/free-solid-svg-icons'
import FooterIcons from '../FooterIcons/FooterIcons';
import Back from '../Back/Back';
import CopyRights from '../CopyRights/CopyRights';
import DetailsArticle from '../DetailsArticle/DetailsArticle';
import male from '../../images/male.png'

const LeagueDetail = () => {
    const { detailsID } = useParams();

    const [detail, setDetail] = useState([0]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${detailsID}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setDetail(data.leagues[0]));
    }, [detailsID]);
    return (
        <div>
            <div className="banarLogo">
                <img src={detail.strBanner} alt="" />
            </div>
            
            <div className="detail-container">
                <div className="detail-box">
                    <div className="detail-left">
                        <h3>{detail.strLeague}</h3>
                        <h5><FontAwesomeIcon icon={faPenNib} /> Founded: {detail.dateFirstEvent}</h5>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country: {detail.strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sports Type: {detail.strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMarsStroke} /> Gender: {detail.strGender}</h5>
                    </div>
                    <div className="detail-right">
                        <img src={male} alt=""/>
                    </div>
                </div>
                <Back></Back>
                <DetailsArticle></DetailsArticle>
                <FooterIcons></FooterIcons>
                <CopyRights></CopyRights>
            </div>
        </div>
    );
};

export default LeagueDetail;

