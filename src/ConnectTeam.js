import React, { Fragment, useState } from "react";
import useHistoryState from "use-history-state";
 function ConnectTeam() {

 	 const [teamName, setTeamName] = useState([]);
   const [ifName, setIfName] = useHistoryState("", "name");
  const url = "https://api.football-data.org/v2/competitions/CL/matches";
fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "${process.env.REACT_APP_API_KEY}"
  }})
	.then(res => res.json())
	.then(data => {
		 setTeamName(data.matches);
     
	})
return (   <div className="container">
<Fragment>

	<h1>Список команд </h1>
  <input   value={ifName} onInput={e =>  setIfName(e.target.value)} />
  
  <ul>
          {teamName.filter(it =>{
           if(ifName=="") return true;
           if(!ifName) return false;
           if(it.homeTeam.name.indexOf(ifName)){
            return false;
          }return true;
         }
          ).map(item => (

            <li key={item.id}>
              
            {item.homeTeam.name}
          </li>


        ))}
      </ul>
      </Fragment>
      </div>);
}

export default ConnectTeam;
