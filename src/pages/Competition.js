import React, { useEffect, useState } from 'react';
import axios from 'axios';


export const Competition = () => {
    const [season, setSeason] = useState("2021");
    const [league, setLeague] = useState("PL")
    const [match, setMatch] = useState("38")
    const [standings, setStandings] = useState([]);
    const [scorers, setScorers] = useState([]);
    const [matches, setMatches] = useState([]);
    const [refresh, setRefresh] = useState(false);
    

    function handleSubmit(e){
        e.preventDefault();
    }


        
    const url = "/competitions/";
    const score = "/scorers/?season=";
    const stand = "/standings?season=";
    const matche = "/matches?matchday=";
    const link = "&season=";
    const scorers_url = (url)+(league)+(score)+(season);
    const standings_url = (url)+(league)+(stand)+(season);
    const matches_url = (url)+(league)+(matche)+(match)+(link)+(season);
     
        const fetchData = () => {
        axios({
            method: 'GET',
            url: (scorers_url),
            headers: { 
              'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16',
            }
          })
            .then((res) => {
                setScorers(res.data.scorers);
            })
            .catch((err) => {
            })

            axios({
                method: 'GET',
                url: (standings_url),
                headers: { 
                  'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16',
                }
              })
                .then((res) => {
                    setStandings(res.data.standings[0].table);
                })
                .catch((err) => {
                })

                axios({
                    method: 'GET',
                    url: (matches_url),
                    headers: { 
                      'X-Auth-Token': '5f32f9b961e844a59e305add54b77a16',
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
                Competition
            </h2>
        </nav> 
        <nav className="navbar text-dark bg-light mt-2">   
            <form className='row' onSubmit={handleSubmit}>  
            <div className="col">
            <select name='league' onChange={(event) => {setLeague(event.target.value); setRefresh(!refresh)}} value={league} className="form-select" data-live-search="true">
            <option value="PL">Premier league</option>
            <option value="PD">Spanish Laliga</option>
            <option value="BL1">Bundesliga</option>
            <option value="SA">Seria A</option>
            <option value="FL1">Ligue 1</option>
            <option value="DED">Eredevisie</option>
            </select>
            </div>
            <div className="col-lg-4">
            <select name='season' onChange={(event) => {setSeason(event.target.value); setRefresh(!refresh)}} value={season} className="form-select" data-live-search="true">
            <option value="2021">2021/2022</option>
            <option value="2020">2020/2021</option>
            </select>
            </div>
            <div className="col">
            <select name='match' onChange={(event) => {setMatch(event.target.value); setRefresh(!refresh)}} value={match} className="form-select" data-live-search="true">
            <option value="38">38</option>
            <option value="37">37</option>
            <option value="36">36</option>
            <option value="35">35</option>
            <option value="34">34</option>
            <option value="33">33</option>
            <option value="32">32</option>
            <option value="31">31</option>
            <option value="30">30</option>
            <option value="29">29</option>
            <option value="28">28</option>
            <option value="27">27</option>
            <option value="26">26</option>
            <option value="25">25</option>
            <option value="24">24</option>
            <option value="23">23</option>
            <option value="22">22</option>
            <option value="21">21</option>
            <option value="20">10</option>
            <option value="19">19</option>
            <option value="18">18</option>
            <option value="17">17</option>
            <option value="16">16</option>
            <option value="15">15</option>
            <option value="14">14</option>
            <option value="13">13</option>
            <option value="12">12</option>
            <option value="11">11</option>
            <option value="10">10</option>
            <option value="9">09</option>
            <option value="8">08</option>
            <option value="7">07</option>
            <option value="6">06</option>
            <option value="5">05</option>
            <option value="4">04</option>
            <option value="3">03</option>
            <option value="2">02</option>
            <option value="1">01</option>
            </select>
            </div>
            </form>
        </nav> 
        <section className="content-info">
            <div className="col-xl-12 padding-top-mini">
                <div className="tab-content">
                    <div className="tab-pane active" id="stats">

                        <div className="row">
                            <div className="col-lg-8">
                            <div className="recent-results">

                            <h5><a href="group-list.html">Table Standings</a></h5>

<table className="table-responsive result-point small table-inverse">
    <thead className="point-table-head">
        <tr>
            <th className="text-left">No</th>
            <th className="text-left">TEAM</th>
            <th className="text-center">P</th>
            <th className="text-center">W</th>
            <th className="text-center">D</th>
            <th className="text-center">L</th>
            <th className="text-center">GF</th>
            <th className="text-center">GA</th>
            <th className="text-center">GD</th>
            <th className="text-center">PTS</th>
        </tr>
    </thead>

    <tbody className="text-center">
    { standings?.map((item, index) => { return( 
        <tr key={index+1}>
            <td className="text-left number">{item.position}</td>
            <td className="text-left">
                    <img style={{border: "none"}} src={item.team.crest} alt={item.team.name}/><span>{item.team.name}</span>
            </td>
            <td>{item.playedGames}</td>
            <td>{item.won}</td>
            <td>{item.draw}</td>
            <td>{item.lost}</td>
            <td>{item.goalsFor}</td>
            <td>{item.goalsAgainst}</td>
            <td>{item.goalDifference}</td>
            <td>{item.points}</td>
        </tr>
         ) } ) }
      </tbody>
</table>
</div>
                            </div>


                            <div className="col-lg-6 col-xl-4">
                            <div className="player-ranking">
                                                    <h5><a href="group-list.html">Top Scorer</a></h5>
                                                    <div className="info-player">
                                                        <ul>
                                                        { scorers?.map((item, index) => { return( 
                                                            <li key={index+1}>
                                            

                                                              <span className="position">
                                                                {index+1} 
                                                              </span>
                                                               <a href="single-team.html">
                                                                    <img src={item.team.crest}alt={item.team.name}/>
                                                                    {item.player.name}
                                                                </a>
                                                                <span className="points">
                                                                {item.goals}
                                                                </span>
                                                            </li>
                                                         ) } ) }
                                                        </ul>
                                                    </div>
                                               </div>
                            </div>
                        

                        <div className="col-lg-6 col-xl-4 mt-2">
                                <div className="recent-results">
                                                    <h5><a href="group-list.html">Recent Result</a></h5>
                                                    <div className="info-results">
                                                        <ul>
                                                        { matches?.map((item, index) => { return( 
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
        </section>
    </>
  )
}
