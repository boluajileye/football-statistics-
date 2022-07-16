import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Team = () => {

    const [refresh, setRefresh] = useState(false);
    const [club, setClub] = useState([]);
    const [clubid, setClubid] = useState("61");
    const [teams, setTeams] = useState({});
    const [matches, setMatches] = useState([]);
    const [squad, setSquad] = useState([]);
    const url = "/teams/";
    const team_url = (url)+(clubid)+"/";
    const match_url = (url)+(clubid)+"/matches/";
   
    const fetchData = () => {
        axios({
            method: 'GET',
            url: '/teams?limit=400',
            headers: { 
              'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16'
            }
          })
            .then((res) => {
                setClub(res.data.teams);
            })
            .catch((err) => {
            })


        axios({
            method: 'GET',
            url: (team_url),
            headers: { 
              'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16'
            }}
            )
            .then((res) => {
                setTeams(res.data);
                setSquad(res.data.squad);
            })
            .catch((err) => {
            })

            axios({
                method: 'GET',
                url: (match_url),
                headers: { 
                  'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16'
                                }
              })
                .then((res) => {
                    setMatches(res.data.matches);
                })
                .catch((err) => {
                })

        }
    useEffect(() => {
        fetchData();
    }, [refresh]);

  return (
    <>
        <nav className="navbar text-dark bg-light">
            <h2 className="font-weight-bold text-center">
                Team
            </h2>
        </nav>
        <nav className="navbar text-dark bg-light mt-2">   
            <form className='row'>  
            <div className="col">
            <select name='club' onChange={(event) => {setClubid(event.target.value); setRefresh(!refresh)}} value={clubid} className="form-select" data-live-search="true">
            {club.map((item, index) => { return( 
            <option key={index+1} value={item.id}>{item.name}</option>
            )})}
            </select>
            </div>
            </form>
        </nav> 
            <div className="section-title-team">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-7">
                            <div className="row">
                                <div className="col-md-3">
                                    <img src={teams.crest} alt={teams.name}/>
                                </div>

                                <div className="col-md-9">
                                    <h1>{teams.name}</h1>
                                    <ul className="general-info">
                                        <li><h3><strong className='text-white'>Founded:</strong><span className='text-light'> {teams.founded}</span></h3></li>
                                        <li><h3><strong className='text-primary'>ShortName:</strong><span className='text-light'> {teams.tla}</span></h3></li>
                                        <li><h3><strong className='text-primary'>Jersey Color:</strong><span className='text-light'> {teams.clubColors}</span></h3></li>
                                        <li><h3><strong className='text-primary'>Stadium:</strong> <span className='text-light'>{teams.venue}</span></h3></li>
                                        <li><h3><strong className='text-primary'>Country:</strong><span className='text-light'> {teams.area && teams.area.name}</span></h3></li>
                                        <li>
                                            <h6>
                                                <i className="bi bi-link" aria-hidden="true"></i>
                                                <a href={teams.website} rel="noreferrer" target="_blank">{teams.website}</a>
                                            </h6>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-image-team"></div>
            </div>
            <section className="content-info">

                <div className="single-team-tabs">
                   <div className="container">
                        <div className="row">
                            <div className="col-xl-12 col-md-12 sticky-top">
                                <ul className="nav nav-tabs" id="myTab">
                                   <li><a href="#squad" data-bs-toggle="tab">SQUAD</a></li>
                                   <li><a href="#fixtures" data-bs-toggle="tab">FIXTURES</a></li>
                                </ul>
                            </div>

                            <div className="col-xl-12 padding-top-mini">
                                <div className="tab-content">
                                    <div className="tab-pane active" id="squad">
                                        <div className="row">
                                            
                                        { squad?.map((item, index) => { return( 
                                            <div className="col-xl-4 col-lg-6 col-md-6"  key={index+1}>
                                                <div className="item-player">
                                                    
                                                    <div className="info-player">
                                                        <h4>
                                                            {item.name}
                                                            <span>{item.position}</span>
                                                        </h4>
                                                        <ul>
                                                            <li><strong>NATIONALITY</strong> <span>{item.nationality} </span></li>
                                                            <li><strong>MATCHES:</strong> <span>{teams.name}</span></li>
                                                            <li><strong>DATE OF BIRTH:</strong> <span>{item.dateOfBirth}</span></li>
                                                        </ul>
                                                    </div>
                                                    
                                                </div>
                                                </div>

                                            ) } ) }
                                    </div>

                                    <div className="col-lg-6 col-xl-6 mt-2" id="fixtures">
                                <div className="recent-results">
                                                    <h5><a href="group-list.html">Recent Result</a></h5>
                                                    <div className="info-results">
                                                        <ul>
                                                        { matches.map((item, index) => { return( 
                                                            <li key={index+1}>
                                                                <span className="head">
                                                                <img src={item.competition && item.competition.emblem} alt={item.competition && item.competition.name}/>
                                                                    {item.competition && item.competition.name} <span className="date">Match Day: {item.matchday}</span>
                                                                </span>

                                                                <div className="goals-result">
                                                                        <img src={item.homeTeam && item.homeTeam.crest} alt={item.homeTeam && item.homeTeam.name}/>
                                                                        {item.homeTeam && item.homeTeam.shortName}

                                                                    <span className="goals">
                                                                        <b>2</b> - <b>3</b>
                                                                    </span>

                                                                        <img src={item.awayTeam && item.awayTeam.crest} alt={item.awayTeam && item.awayTeam.name}/>
                                                                        {item.awayTeam && item.awayTeam.shortName}
                                                                </div>
                                                            </li>
                                                            ) } ) }
                                                        </ul>
                                                    </div>
                                               </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
							
            </section>
            
    </>
  );
}

