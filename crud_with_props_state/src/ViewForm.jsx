const ViewForm = ({ formInput }) => {
    return (
        <div align="center">
            <h1>View Form</h1>
            <table border={1}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Gender</th>
                        <th>Courses</th>
                       
                    </tr>
                </thead>
                <tbody>
                    {formInput.map((val, index) => (
                        <tr key={index}>
                            <td>{val.username}</td>
                            <td>{val.email}</td>
                            <td>{val.password}</td>
                            <td>{val.gender}</td>
                            <td>{val.courses.join(", ")}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewForm;
