import React, { useState } from "react";
import useHistoryState from "use-history-state";
 function ConnectComp() {
  let abortController = new AbortController();
 	 const [teamName, setTeamName] = useState([]);
 	  const [ifName, setIfName] = useHistoryState("","LETSGOOOO");
  const url = " http://api.football-data.org/v2/competitions/";
fetch(url, {
  method: "GET",
  headers: {
    "X-Auth-Token": "${process.env.REACT_APP_API_KEY}"
  }})
	.then(res => res.json())
	.then(data => {
		 setTeamName(data.competitions);
    
	})


return (   <div className="container">
	<h1>Список соревнований </h1>
	<input type="text" value={ifName} onInput={e =>  setIfName(e.target.value)} /> {ifName.value}
  {ifName}
	  <ul>

         {teamName.filter(it =>{
           if(ifName=="") return true;
           if(!ifName) return false;
           if(it.name.indexOf(ifName)){
            return false;
          }return true;
         }
          ).map(item => (
          <li key={item.id}>
          
          {item.name}

          </li>
        ))}
      </ul>
      </div>);

}

export default ConnectComp;
