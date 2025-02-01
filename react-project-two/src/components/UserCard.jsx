import React from 'react'
import userimg from '../assets/userimg.png'
import "../components/UserCard.css"


const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style}>
      <h3 id='user-name'>{props.name}</h3>
      <img src={props.image} id='user-img' alt={props.name}/>
      <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard
