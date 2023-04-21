const Course = ({courses}) => {

    const total = courses.reduce(e => e.parts.reduce((acc,c) => acc + c.exercises, 0))

    return (

        <div>
            <CourseName name={courses[0].name} />
            <CourseExercises parts={courses[0]} />
            <Total total={courses[0]} />
            <CourseName name={courses[1].name} />
            <CourseExercises parts={courses[1]} />
            <Total total={courses[1]} />
        </div>
    )
}

const CourseName = ( {name} ) => {
    return (
        <h1>{name}</h1>
    )
}

const CourseExercises = props => {

    return (
        props.parts.parts.map(e => <p key={e.id}>{e.name} {e.exercises}</p>)
    )
}

const Total = props => {

    let total = props.total.parts.reduce((acc,c) => acc + c.exercises, 0)

    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default Course