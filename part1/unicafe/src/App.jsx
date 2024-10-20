import { useState } from 'react'

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGood = () => {
        setGood(good + 1)
    }
    const handleNeutral = () => {
        setNeutral(neutral + 1)
    }
    const handleBad = () => {
        setBad(bad + 1)
    }
    return (
        <div>
            <h1>give feedback</h1>
            <Button handleClick={() => handleGood()} text="good" />
            <Button handleClick={() => handleNeutral()} text="neutral" />
            <Button handleClick={() => handleBad()} text="bad" />

            <h1>statistics</h1>
            <Statistics good={good} neutral={neutral} bad={bad} />
        </div>
    )
}

const Statistics = (props) => {
    if(props.good === 0 && props.neutral === 0 && props.bad === 0) {
        return (
            <div>
                <div>No feedback given</div>
            </div>
        )
    }
    return(
        <table>
            <tbody>
            <StatisticLine text="good" value={props.good} />
            <StatisticLine text="neutral" value={props.neutral} />
            <StatisticLine text="bad" value={props.bad} />
            <StatisticLine text="average" value={(props.good - props.bad) / (props.good + props.bad + props.neutral)} />
            <StatisticLine text="average" value={props.good / (props.good + props.bad + props.neutral) * 100} />
            </tbody>
        </table>
    )
}

const Button = (props) => {

    return (
        <div>
            <button onClick={props.handleClick}>{props.text}</button>
        </div>
    )
}

const StatisticLine = (props) => {
    return (
        <tr><td>{props.text} </td> <td>{props.value}</td></tr>
    )
}
export default App