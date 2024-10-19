const Filter = ({ persons, searchName, handleDelete }) => {
  const filteredPeople = persons.filter(person =>
    person.name.toLowerCase().includes(searchName.toLowerCase()),
  )

  return (
    <div>
      {filteredPeople.map(person => (
        <div key={person.id}>
          {person.name} {person.number}
          <button onClick={() => handleDelete(person.id)}>delete</button>
        </div>
      ))}
    </div>
  )
}
export default Filter