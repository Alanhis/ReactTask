import React, { useState } from "react";
import Calendar from 'react-awesome-calendar';
import moment from "moment";
import useHistoryState from "use-history-state";

 function ConnectTeamDate() {
 	const [teamName, setTeamName] = useState([])
    const [teamMatches, setTeamMatches] = useState([])
    const [dateBegin, setDateBegin] = useHistoryState({varOne:new Date()},"Hola")
    const [dateEnd, setDateEnd] = useHistoryState({varTwo:new Date()},"Amigo")

    const url = "http://api.football-data.org/v2/teams/10/matches";
    fetch(url, {
      method: "GET",
      headers: {
        "X-Auth-Token": "${process.env.REACT_APP_API_KEY}"
      }})
      .then(res => res.json())
      .then(data => {
        setTeamMatches(data.matches);
         
      })  

 const url2= "http://api.football-data.org/v2/teams/10";
 fetch(url2, {
    method: "GET",
    headers: {
      "X-Auth-Token": "2ef38426a3154156b092d92004581970"
    }})
      .then(res => res.json())
      .then(data => {
           setTeamName(data.name);
          
      })
      const events = teamMatches.map(item =>{ 
        if(item.season === null){
          return({id: 2,
            color: "#1ccb9e",
            from: "1970-01-01",
            to: "1970-01-01",
            title: item.name
         });
        }else{
        return ({
          id: item.season?.id,
          color: "#fd3153",
          from: item.utcDate,
          to: item.utcDate,
          title: item.competition.name
        })
        }
       })
       
  const filtEvents=events.filter(it =>{
     const date1= new Date(it.from);
     
     const date2 = new Date(it.to);
     
     
     
     if(moment(dateBegin).format('DD.MM.YYYY') ==moment().format('DD.MM.YYYY') && moment(dateEnd).format('DD.MM.YYYY') ==moment().format('DD.MM.YYYY')){
       return true
     }
     if(moment(date1) > moment(dateBegin) && moment(date2) < moment(dateEnd)){
       
       return true
     }
   })

return (   <div className="container">
    
	<h1>Календарь команды "{teamName}" </h1>
  <input id="startDate" type="date" value={dateBegin} onInput={e =>  setDateBegin(e.target.value)}></input>
  <input id="endDate" type="date"value={dateEnd} onInput={e =>  setDateEnd(e.target.value)}></input>
  <Calendar events = {filtEvents}
     />
</div>);

}

export default ConnectTeamDate;

