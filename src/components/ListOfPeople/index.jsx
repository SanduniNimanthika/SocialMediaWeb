import React , { useEffect , useState  }  from 'react'
import { useHistory } from "react-router";
import axios from 'axios';
import { PeopleEmail,PeopleTitle, PeopleCard, PeopleContainer, PeopleImg, PeopleInfo, PeopleWrapper,PeopleButton } from './peopleElement';
import NavBar from '../NaviBar';


function index() {

  const history = useHistory();

  useEffect( async ()=>{
      const results = await axios.get("https://reqres.in/api/users");

      setPeoples(results.data.data)

  } , [])

  const [ peoples , setPeoples ] = useState([])

  return (
    
    <PeopleContainer>
    <NavBar/>
    <PeopleWrapper>
    <PeopleButton onClick={ ()=>{ history.push({pathname : "/ListofPeople/CreatePeople"}) } }>back to list</PeopleButton>
       {peoples.map((people) => (
         <PeopleCard key={people.id}>
                <PeopleImg src ={people.avatar} onClick={ () =>{
                   history.push({ pathname: `/ListofPeople/${people.id}` })
                  } }></PeopleImg>
            <PeopleInfo>
               <PeopleTitle>{people.first_name + people.last_name}</PeopleTitle>
               <PeopleEmail>{people.email }</PeopleEmail>
            </PeopleInfo>
              
        </PeopleCard>
        ))}
        </PeopleWrapper>
    </PeopleContainer>
  )
}

export default index;
