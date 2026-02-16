import { useState } from 'react'
const Statistics= ({neutral, bad, good} ) =>{
const isTotal= (neutral  + good + bad ) 

let isAverage
let isPositive
if (isTotal===0){
  
  return(
    <p>No feedback given</p>
  )} 
  isAverage=( ((-bad )  + good )/ isTotal )
  isPositive = ((( good / isTotal) * 100 ))  

  return (
    <>
    <h1>Staticstics</h1>
    <table>
      <tbody>
    
 <StatisticLine text="good" value={good} />
    <StatisticLine text="neutral" value={neutral} />
    <StatisticLine text="bad" value={bad} />
    <StatisticLine text="All" value={isTotal} />
    <StatisticLine text="Average" value={isAverage}/>
    <StatisticLine text="Positive" value={isPositive + ' %'} />
    </tbody>
    </table>
    </>
  )
}
const Button = ({text, onClick}) =>{
return (<button onClick={onClick} >{text} </button>)
}
const StatisticLine=({text, value})=>((<tr><td>{text}</td><td>{value}</td></tr>))

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give us feedback</h1>

      <Button text='Good' onClick={()=>{setGood(good + 1)}}/>
      <Button text='neutraL' onClick={()=>{setNeutral(neutral+ 1)}}/>
      <Button  text='BAD' onClick={() => {setBad(bad + 1)}}/> 


 <Statistics good={good} neutral={neutral} bad={bad}/>

 
   
    </div>
  )
}

export default App

