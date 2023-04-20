const Course = props => {
    console.log(props.course.parts)
    return (
        <div>
            <h1>{props.course.name}</h1>
            {props.course.parts.map(e => <p key={e.id}>{e.name} {e.exercises}</p>)}
        </div>

        
    )
}

export default Course