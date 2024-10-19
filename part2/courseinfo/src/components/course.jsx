
const Course = ({ courses }) => {
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <Header course={course} />
                    {course.parts.map(part =>(
                        <Part key={part.id} part={part}/>
                    ))}
                    <Total sum={course.parts.reduce((total, part) => total + part.exercises, 0)} />
                </div>
            ))}
        </div>
    )
}


const Header = ({ course }) => <h1>{course.name}</h1>

const Part = ({part}) => <p>{part.name} {part.exercises}</p>




const Total = ({sum}) => <strong>total of {sum} exercises</strong>

export default Course