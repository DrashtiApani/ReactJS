import { Component } from "react"

class Counter extends Component {

    constructor() {
        super()

        this.state = {
            count: 0,
            users: [
                { id: 1, name: "Rahul"},
                { id: 2, name: "Ravi"},
                { id: 3, name: "Rohit"},
            ],
            color: ["red", " purple", "skyblue","green", "yellow", "white", "orange", "pink"]
        }
    }

    componentDidMount() {
        console.log("start")
    }

    componentDidUpdate() {
        console.log("update")
    }

    componentWillUnmount() {
        console.log("end")
    }


    Incremenr = () => {
        this.setState(
            {
                count: this.state.count + 1
            }
        )
    }

    Decrement = () => {
        this.setState(
            { count: this.state.count - 1 }
        )
    }

    Reset = () => {
        this.setState(
            {
                count: 0
            }
        )
    }

    render() {
        return (
            <div>

                <h1>Counter</h1>
                <hr />
                <h2>Counte : {this.state.count}</h2>
                <button onClick={this.Incremenr} style={{ marginRight: "15px" }}>Increment</button>
                <button onClick={this.Decrement}>Decrement</button>
                <button onClick={this.Reset}>Reset</button>
                <br />
                <hr />
                <h2>USERS</h2>
                {
                    this.state.users.map((u, i) => {
                        const { id, name } = u
                        return (
                            <div key={i}>
                                <h2>{id} : {name}</h2>
                            </div>
                        )

                    })
                }
                <hr />
                <h2>COLORS</h2>
                {
                    this.state.color.map((c, i) => {
                        return (
                            <div key={i}>
                                <h2 style={{ color: c }}>{c}</h2>
                            </div>
                        )
                    })
                }
            </div>
        )
    }

}

export default Counter