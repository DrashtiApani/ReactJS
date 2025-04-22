import React from 'react';

const Comments = ({ commentsData }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 align="center" style={{ color: "#2c3e50", margin: "30px 0" }}>~: Comments :~</h1>

          <table className="comment-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Body</th>
                <th>Likes</th>
                <th>Post ID</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {
                commentsData.map((val, index) => (
                  <tr key={index} className={index % 2 === 0 ? "even" : "odd"}>
                    <td>{val.id}</td>
                    <td>{val.body}</td>
                    <td>{val.likes}</td>
                    <td>{val.postId}</td>
                    <td>
                      <table className="nested-user-table">
                        <thead>
                          <tr>
                            <th>ID</th>
                            <th>Full Name</th>
                            <th>Username</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>{val.user.id}</td>
                            <td>{val.user.fullName}</td>
                            <td>{val.user.username}</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>

      {/* ✅ Modern CSS Styles */}
      <style>{`
        .comment-table {
          width: 100%;
          border-collapse: collapse;
          font-family: 'Segoe UI', sans-serif;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          border-radius: 10px;
          overflow: hidden;
        }

        .comment-table th {
          background-color: #34495e;
          color: white;
          padding: 12px;
          text-align: center;
          font-size: 14px;
        }

        .comment-table td {
          padding: 10px;
          border: 1px solid #e0e0e0;
          text-align: center;
          font-size: 13px;
          color: #2c3e50;
          vertical-align: top;
        }

        .comment-table .even {
          background-color: #f9f9f9;
        }

        .comment-table .odd {
          background-color: #ffffff;
        }

        .comment-table tr:hover {
          background-color: #f1f1f1;
        }

        .nested-user-table {
          width: 100%;
          border-collapse: collapse;
        }

        .nested-user-table th {
          background-color: #6c757d;
          color: white;
          font-size: 12px;
          padding: 6px;
        }

        .nested-user-table td {
          font-size: 12px;
          padding: 6px;
          border: 1px solid #ccc;
        }

        @media (max-width: 768px) {
          .comment-table th,
          .comment-table td {
            font-size: 11px;
            padding: 6px;
          }

          .nested-user-table th,
          .nested-user-table td {
            font-size: 11px;
            padding: 4px;
          }
        }
      `}</style>
    </>
  );
}

export default Comments;
