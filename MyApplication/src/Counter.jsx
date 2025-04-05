const Application = ({plus,cnt,minus,reset}) => {
    return (
        <div>
            <h1>Counter-App</h1>
            <h2>Count : {cnt}</h2>

            <button onClick={() => plus()} style={{marginRight: '10px'}}>Increment</button>
            <button  onClick={() => minus()} style={{marginRight: '10px'}}>Decrement</button>
            <button  onClick={() => reset()} style={{marginRight: '10px'}}>Reset</button>

        </div>
    )
}

export default Application