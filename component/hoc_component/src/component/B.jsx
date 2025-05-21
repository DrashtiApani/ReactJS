import CounterHOC from "./CounterHOC";

const ComponentB = ({ cnt, inc, dec }) => {
  const styles = {
    container: {
      textAlign: "center",
      border: "2px solid #444",
      borderRadius: "12px",
      padding: "20px",
      width: "250px",
      margin: "20px auto",
      backgroundColor: "#f9f9f9",
      boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    },
    title: {
      color: "#333",
      marginBottom: "10px",
    },
    count: {
      fontSize: "1.5em",
      color: "#222",
      display: "block",
      margin: "10px 0",
    },
    buttonGroup: {
      display: "flex",
      justifyContent: "center",
      gap: "15px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1.2em",
      border: "none",
      borderRadius: "8px",
      backgroundColor: "#28a745",
      color: "white",
      cursor: "pointer",
      transition: "0.2s ease-in-out",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>B Counter</h1>
      <span style={styles.count}>Count: {cnt}</span>
      <div style={styles.buttonGroup}>
        <button style={styles.button} onClick={inc}>+</button>
        <button style={styles.button} onClick={dec}>-</button>
      </div>
    </div>
  );
};

export default CounterHOC(ComponentB);



// import CounterHOC from "./CounterHOC"

// const ComponentB = ({cnt, inc, dec}) => {
//   return (
//    <div align="center">
//     <h1> ~: B counter :~ </h1>
//     <span> counte :~ {cnt} </span>
//     <button onClick={() => inc()}> + </button>
//     <button onClick={() => dec()}> - </button>
//    </div>
//   )
// }

// let B = CounterHOC(ComponentB)
// export default B