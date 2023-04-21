
const Course = ({courses}) => {
    return(
        courses.map( course => {
            return(
                <div key={course.id}>
                    <CourseName name={course.name}></CourseName>
                    <CourseExercises parts={course.parts}></CourseExercises>
                    <Total parts={course.parts}></Total>
                </div>           
            )
        }) 
    )
    
}

const CourseName = ( {name} ) => {
    return (
        <h1>{name}</h1>
    )
}

const CourseExercises = ({parts}) => {

    return (
        parts.map(e => <p key={e.id}>{e.name} {e.exercises}</p>)
    )
}

const Total = ({parts}) => {

    let total = parts.reduce((acc,c) => acc + c.exercises, 0)

    return (
        <p><b>total of {total} exercises</b></p>
    )
}

export default Course