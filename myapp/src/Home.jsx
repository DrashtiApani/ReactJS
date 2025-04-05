import React from 'react'

const Home = ({ ab, col }) => {
    return (
        <>
            <h1>Value of A: {ab}</h1>

            <h2>Color
                <ul>

                    {
                        col.map((val) => {
                            return (
                                <li style={{ color: val }}>{val}</li>
                            )
                        })
                    }

                </ul>


            </h2>
        </>
    )
}

export default Home