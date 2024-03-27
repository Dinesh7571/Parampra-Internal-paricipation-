import { rule } from 'postcss'
import React from 'react'
import { useParams } from 'react-router-dom'
import Descp from '../../public/Discription.json'
const Details = () => {
    const { code } = useParams()
    console.log(`params${code}`)
    // const discriptions=[
    //                     {
    //                         name:"Medi-Quist",
    //                         VENUE : "room no-405",
    //                         DATE:"",
    //                         TIMING:"",
    //                         Winning_Prize:"Certificate of Merit & ₹1500 for winner ₹1000 for runner up ",
    //                         COORDINATER:"Mr. Abhishek Jaiswal,Mrs. Vandita Vishwakarma",
    //                         HEAD:"Vijay Gupta (B.Ph,3rd) (7705823339) , Saloni Chaudhary(B.Ph,3rd)",
    //                         CO_HEAD:"Harshita  (B.ph,2nd)  Sanya shukla (B.Ph, 2nd) , Payal  Singh(D.Ph, 2nd) ",
    //                         About_Event:"realte to mcQ of Medical field and General Knowledge" ,
    //                         link:"https://forms.gle/EZ1pqFeLPfQLfdbSA",
    //                         rulesArray : [
    //                             "The final decision rests with the coordinator. Disputing the coordinator's decision may result in disqualification.",
    //                             "The organizer's judgment is conclusive in all circumstances.",
    //                             "Participants must maintain discipline during the event. Any misconduct towards faculty, coordinators, or organizers is unacceptable and may lead to disqualification.",
    //                             "Participants arriving late to the event venue will be disqualified.",
    //                             "Fair Play:- All participants must adhere to the rules of fair play, refraining from cheating or seeking unfair advantages.",
    //                             "Everyone should have an equal opportunity to solve the riddles without outside assistance (can not use smart phones).",
    //                             "Raise Hand Protocol:- Listen to the whole riddle or puzzle without interrupting. Only raise your hand once the question is fully asked if you know the answer. This ensures everyone has a fair chance to hear the entire question and think about their response before someone answers.",
    //                             "The event consists of 2 to 3 preliminary rounds followed by a final round.",
    //                             "Fair Play Enforcement:- If any team is found to be using unfair means, they will be immediately disqualified from the game.",
                               
    //                         ],



    //                     },

    //                     {
    //                         name:"WEB STACK",
    //                         VENUE : "217 Lab",
    //                         DATE:"",
    //                         TIMING:"",
    //                         Winning_Prize:"Certificate of Merit & ₹3000 for winner ₹1500 for runner up ",
    //                         COORDINATER:"Mrs. Shivani Singh ,Ms. Shivangi Srivastava",
    //                         HEAD:"Sakshi Sharma[CSE, 3rd] (8546005093) ,Swayam Srivastav [CSE,3rd](8381857658) ",
    //                         CO_HEAD:"Divyansh Srivastava [AI/ML, 2nd] (8299877578), Roshini Nishad [CSE, 2 nd] (6394893280) ",
    //                         About_Event:"he purpose of this competition is to produce a full-fledged website (which will be announced on the day of competition We will provide the website design to the participants and they have to build the website by using their own development skills." ,
    //                         link:"https://forms.gle/J9Vp9daNJx5Et6Td7",
    //                         rulesArray : [
    //                             "Students can participate individually or with team (Maximum 3 members allowed)",
    //                             "If participating in a team, they should decide their team name and the head of the team.",
    //                             "The whole website will be divided into different sections and each section will have some points assigned to it.",
    //                             " Time limit for the contest will be 3 hours",
    //                             "Participants can bring their own laptop for convenience",
    //                             "Website sections - Navbar – 10 points, Hero section – 10 points, Services – 10 points, Projects – 10 points,Team – 10 points,Footer – 10 points "
    //                         ],



    //                     },
    //                     {
    //                         name:"MIND BEND(Riddle)",
    //                         VENUE : "",
    //                         DATE:"",
    //                         TIMING:"",
    //                         Winning_Prize:"Certificate of Merit & ₹1500 for winner ₹1000 for runner up ",
    //                         COORDINATER:"Mr. Rishabh Srivastava,Ms. Arjudeep Kulshreetha",
    //                         HEAD:"Dinesh Kannaujiya (CSE,3rd) (8808090282) , Ranika Chauhan (CSE,3rd) (8429700616)",
    //                         CO_HEAD:"Satendra Jaiswal (CSE,3rd) (8948807279) Ujjwal Tiwari (CSE, 3rd) (8222074647) ",
    //                         About_Event:"This is a group event of 3-4 students in this competetion there will be some riddles will asked you have the give the answer of that ." ,
    //                         link:"///",
    //                         rulesArray : [
    //                             "The final decision rests with the coordinator. Disputing the coordinator's decision may result in disqualification.",
    //                             "The organizer's judgment is conclusive in all circumstances.",
    //                             "Participants must maintain discipline during the event. Any misconduct towards faculty, coordinators, or organizers is unacceptable and may lead to disqualification.",
    //                             "Participants arriving late to the event venue will be disqualified.",
    //                             "Fair Play:- All participants must adhere to the rules of fair play, refraining from cheating or seeking unfair advantages.",
    //                             "Everyone should have an equal opportunity to solve the riddles without outside assistance (can not use smart phones).",
    //                             "Raise Hand Protocol:- Listen to the whole riddle or puzzle without interrupting. Only raise your hand once the question is fully asked if you know the answer. This ensures everyone has a fair chance to hear the entire question and think about their response before someone answers.",
    //                             "The event consists of 2 to 3 preliminary rounds followed by a final round.",
    //                             "Fair Play Enforcement:- If any team is found to be using unfair means, they will be immediately disqualified from the game.",
    //                             "Team Size Requirement:- Minimum:- 3 members Maximum:- 4 members"
    //                         ],



    //                     },
    // ]

  return (
    <div className="container mx-auto px-4 py-8   text-white " >
    <h1 className="text-3xl font-bold mb-4">{Descp.Data[code].name}</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-gray-800  rounded-md shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Event Details</h2>
            <p><span className="font-bold">VENUE:</span> {Descp.Data[code].VENUE}</p>
            <p><span className="font-bold">DATE:</span> {Descp.Data[code].DATE}</p>
            <p><span className="font-bold">TIMING:</span> {Descp.Data[code].TIMING}</p>
            <p><span className="font-bold">Winning Prize:</span> {Descp.Data[code].Winning_Prize}</p>
            <p><span className="font-bold">COORDINATOR(S):</span> {Descp.Data[code].COORDINATER}</p>
            <p><span className="font-bold">HEAD:</span> {Descp.Data[code].HEAD}</p>
            <p><span className="font-bold">CO-HEAD:</span> {Descp.Data[code].CO_HEAD}</p>
            <p><span className="font-bold">About Event:</span> {Descp.Data[code].About_Event}</p>
            <br />
            <a href={Descp.Data[code].link}  class={`whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white rounded-lg px-4 flex flex-col items-center justify-center`}>Participate</a>
        </div>
        <div className="bg-gray-800 hover:bg-green-600  rounded-md shadow-md p-6">
            <h2 className="text-xl font-bold mb-2">Event Rules</h2>
            <ol className="list-decimal pl-4">
                {Descp.Data[code].rulesArray.map((rule,index)=>(
                    <li key={index} className="mb-2">{rule}</li>
                ))}
            </ol>
        </div>
    </div>
</div>
  )
}

export default Details