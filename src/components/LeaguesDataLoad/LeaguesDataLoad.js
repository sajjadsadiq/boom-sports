import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import LeaguesDataShow from '../LeaguesDataShow/LeaguesDataShow';


const LeaguesDataLoad = () => {
    // const newData = data.leagues.slice(0,10)
    const [leagues, setLeagues] = useState([]);
    
    useEffect(() =>{
        const url = ("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues))
        // const newData = data.leagues.slice(0,20)
    },[])
    return (
        <div>
            <Header></Header>
            {
                leagues.map(league => <LeaguesDataShow league = {league}></LeaguesDataShow> )
            }
        </div>
    );
};

export default LeaguesDataLoad;