import { useEffect, useState } from "react";
import "./style.css";

const TikTakToe = () => {
  const [square, setsquare] = useState(Array(9).fill(""));
  const [isXtrrn, setIsXtrun] = useState(true);
  const [status, setStatus] = useState("");

  function handelclick(getcurrentsqaure) {
    const cpyarray = [...square];
    if (getwinner(cpyarray) || cpyarray[getcurrentsqaure]) return;
    cpyarray[getcurrentsqaure] = isXtrrn ? "X" : "O";

    setIsXtrun(!isXtrrn);
    setsquare(cpyarray);
  }
  function getwinner(square) {
    const winner = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winner.length; i++) {
      const [x, y, z] = winner[i];
      if (square[x] && square[x] == square[y] && square[x] == square[z]) {
        return square[x];
      }
    }
    return null;
  }
  function handelrestart(){
   setsquare(Array(9).fill(''))
   setIsXtrun(true)
  }
  useEffect(() => {
    if (!getwinner(square) && square.every((item) => item !== "")) {
      setStatus(`This is a Draw please restart`);
    } else if (getwinner(square)) {
      setStatus(`Winner is ${getwinner(square)}`);
    } else {
      setStatus(`Next player is ${isXtrrn ? "X" : "O"}`);
    }
  }, [square, isXtrrn]);
  return (
    <div className="tic-tak-toe-conatiner">
      <div className="row">
        <Square value={square[0]} onClick={() => handelclick(0)} />
        <Square value={square[1]} onClick={() => handelclick(1)} />
        <Square value={square[2]} onClick={() => handelclick(2)} />
      </div>
      <div className="row">
        <Square value={square[3]} onClick={() => handelclick(3)} />
        <Square value={square[4]} onClick={() => handelclick(4)} />
        <Square value={square[5]} onClick={() => handelclick(5)} />
      </div>
      <div className="row">
        <Square value={square[6]} onClick={() => handelclick(6)} />
        <Square value={square[7]} onClick={() => handelclick(7)} />
        <Square value={square[8]} onClick={() => handelclick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={handelrestart}>Restart</button>
    </div>
  );
};

const Square = ({ value, onClick }) => {
  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
};
export default TikTakToe;
