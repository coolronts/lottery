import React from 'react';

function Rows(props){
  const classes = {
    emptyCircle: 'ring-2 ring-black ring-opacity-50 rounded-full h-7 w-7 flex items-center justify-center bg-black text-red-300 font-medium border-gray-100 shadow-sm',
    emptyCircle1: 'ring-2 ring-red-300 ring-opacity-50 rounded-full h-7 w-7 flex items-center justify-center bg-red-300 text-black font-bold border-gray-100 shadow-sm',  
    row: 'flex flex-row space-x-2 ml-2 ',
    line: 'flex flex-row m-2',
    box: 'w-1 mr-8 font-bold',
    btn:'outline-none cursor-pointer',
  }
  const numberRows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const fiveEmptyCircle = [1, 2, 3, 4,5];
  const twoEmptyCircle = [1, 2];
  
 
  return (
          
    <div>
      {numberRows.map((Row) => (
      
        <div className={classes.line} key={Row.toString()}>
        
          <div className={classes.box} >{Row}</div>
          <span className={classes.row}>
          {fiveEmptyCircle.map((circle) => (
            <span className={classes.emptyCircle} key={circle}></span>
          ))}
          {twoEmptyCircle.map((circle) => (
              <span className={classes.emptyCircle1} key={circle}></span>
            ))}
            
            <button className={classes.btn} key={Row} onClick={() => props.addTicket}>+</button>
          </span>
          </div>
        ))}
         
        
  
      
    






      {/* {all.map((lo) => (
        <div className={classes.line}>
          <div className={classes.box}>{lo.id}</div>
          <span className={classes.row}>
           {lo.number[0].map((ko) => (
              <span className={classes.emptyCircle}>{ko}</span>
            ))}
            {lo.number[1].map((row) => (
              (row === "|" ? <span>|</span>:<span className={classes.emptyCircle1}>{row} </span>) 
            ))}
            <button>+</button>
          </span>
          </div>
      ))}  */}
          
      </div>
  )
}

export default Rows
