import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css';
import img1 from '../../Icon/Facebook.png'
import img2 from '../../Icon/Twitter.png'
import img3 from '../../Icon/YouTube.png'


const LeagueDetails = () => {
    const {id} = useParams()
    const [details,setDetails] = useState([]);
    const {strCountry,strLeagueAlternate,strGender,strSport,strCurrentSeason,strBadge,strDescriptionEN,strFanart2,strFanart3,strFanart4} = details;

    useEffect(()=>{
        fetch( `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${id}`)
        .then(res => res.json())
        .then(data => {
            setDetails(data.leagues[0]);
        });
    },[id])
    return (
        <div>
            <img src={strBadge}/>
            <div className="midPart">
                <div>
                    <img className="img" src={strFanart3}/>
                </div>
                <div>
                    <h1>{strLeagueAlternate}</h1>
                    <h2>country : {strCountry}</h2>
                    <h2>Sport type : {strSport}</h2>
                    <h2>Gender : {strGender}</h2>
                    <h2>Current Season : {strCurrentSeason}</h2>
                </div>
                <div>
                    <img className="img" src={strFanart4}/>
                </div>
                <div>
                    <img className="img" src={strFanart2}/>
                </div>
            </div>
            <p className="lastPart">{strDescriptionEN}</p>
            <img className="logo" src={img1} />
            <img className="logo"  src={img2} />
            <img className="logo"  src={img3} />
        </div>
    );
};

export default LeagueDetails;