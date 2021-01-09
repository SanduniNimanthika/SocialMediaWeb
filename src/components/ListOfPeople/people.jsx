import React , { useEffect , useState } from 'react'
import { useHistory } from "react-router";
import { useParams } from 'react-router-dom';
import axios from 'axios'
import { ButtonWrapper,PeopleCard, PeopleContainer, PeopleEmail, PeopleInfo, PeopleTitle, SinglePeopleImg, PeopleButton, PeopleWrapper } from './peopleElement';
import NavBar from '../NaviBar';


function people() {

    const [people , setPeople] = useState(null)

    const { userId } = useParams();
    const history = useHistory()

    useEffect( async() =>{
        const result = await axios.get(`https://reqres.in/api/users/${userId}`)

        setPeople(result.data.data)

        return(()=>{})
    },[])

    const deletePeople = async () =>{
        const result = await axios.delete(`https://reqres.in/api/users/${userId}`)
        if(result.status === 204){
            history.push({pathname:"/ListOfUser"})
        }else{
            alert("Something went wrong")
        }

    }

    return (
        <PeopleContainer>
            <NavBar/>
                <PeopleWrapper>
                <PeopleCard>
                         <SinglePeopleImg src ={people != null && people.avatar}></SinglePeopleImg>
        
                    <PeopleInfo>
                        <PeopleTitle>{people != null && people.first_name + people.last_name}</PeopleTitle>
                         <PeopleEmail>{people != null && people.email}</PeopleEmail>
                     </PeopleInfo>
            

                </PeopleCard>
            </PeopleWrapper>
        <ButtonWrapper>
            <PeopleButton onClick={ ()=>{ history.push({pathname : "/ListOfUser"}) } }>back to list</PeopleButton>
            <PeopleButton onClick={ () =>{
                deletePeople() 
            } }>delete user</PeopleButton>
        </ButtonWrapper>
        </PeopleContainer>
    )
}

export default people
