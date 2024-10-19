const Form = (props) => {

  return (
    <div>
      <div>
        name: <input value={props.newName} onChange={props.handleNameChange} />
      </div>
      <div>
        number: <input value={props.newNum} onChange={props.handleNumChange} />
      </div>
    </div>
  )
}

export default Form