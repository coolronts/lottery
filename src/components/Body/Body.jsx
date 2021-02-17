import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';


const Body = (props) => {
  const classes = {
    body: 'flex items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 min-h-screen',
    card: 'bg-white rounded-2xl shadow-2xl p-4 border-black border-solid border-10',
    header: 'flex justify-between font-semibold mb-2',
    fiveEmptyCircle: 'animate-spin-slow ring-2 ring-black ring-opacity-50  rotate-0 rounded-full h-7 w-7 flex items-center justify-center bg-black text-red-300 font-medium border-gray-100 shadow-sm',
    twoEmptyCircle: 'animate-spin-slow ring-2 ring-red-300 ring-opacity-50 rounded-full h-7 w-7 flex items-center justify-center bg-red-300 text-black font-bold border-gray-100 shadow-sm',  
    row: 'flex flex-row space-x-2 ml-2 ',
    line: 'flex flex-row m-2',
    box: 'w-1 mr-8 font-bold',
    btn: 'outline-none cursor-pointer',
    payBtn: 'transition duration-700 ease-in-out hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 px-4 py-1 flex justify-between bg-green-500 shadow-2xl text-white w-32 h-8 ',
    pay: 'py-4 flex justify-center',
   
  };
   
  const fiveEmptyCircle = [1, 2, 3, 4,5];
  const twoEmptyCircle = [1, 2];
  const tickets = props.tickets;
  var noTickets = tickets.length;
 
  return (
    <div className={classes.body}>
      <div className={classes.card}>
        <div className={classes.header}>
          <div>Completed - {noTickets} row</div>
          <div>1 week</div>
        </div>
        <div>{(Object.keys(tickets).map((Row) => (
          <div className={classes.line} key={Row}>
            <div className={classes.box}>{parseInt(Row)+1}</div>
            <span className={classes.row}>
              {fiveEmptyCircle.map((circle) => (
                <span className={classes.fiveEmptyCircle} key={circle}>{tickets[Row].number.fiveNumber[circle - 1]}</span>
              ))}
              <span>|</span>
              {twoEmptyCircle.map((circle) => (
                <span className={classes.twoEmptyCircle} key={circle}>{tickets[Row].number.twoNumber[circle - 1]}</span>
              ))}
              <button className={classes.btn} key={Row} onClick={() => props.deleteTicket(tickets[Row].ticketNumber)}><DeleteIcon/></button>
            </span>
          </div>
        )))}
        <div className={classes.line} key={parseInt(noTickets)+1}>
          <div className={classes.box}>{parseInt(noTickets)+1}</div>
          <span className={classes.row}>
            {fiveEmptyCircle.map((circle) => (
              <span className={classes.fiveEmptyCircle} key={circle}></span>
            ))}
            <span>|</span>
            {twoEmptyCircle.map((circle) => (
              <span className={classes.twoEmptyCircle} key={circle}></span>
            ))}
            <button className={classes.btn} key={1} onClick={() => props.addTicket(parseInt(noTickets)+1)}><AddIcon/></button>
          </span>
        </div>
      </div>
      <div className={classes.pay}>
        <button className={classes.payBtn}>Pay <span>Kr {noTickets*25}</span></button>
      </div>
    </div>
  </div>
  )
}

export default Body
