import React from "react";
import style from "./styles.module.scss";

function Schedule() {
  const columns = 15;
  const rows = 7;

  return (
    <div className={style.wrapper}>
      <h2>Schedule</h2>
      <div className={style.scheduleContainer}>
        <div className={style.time}>
          {Array.from({ length: columns }, (_, i) => (
            <p key={i}>{i + 8}</p>
          ))}
        </div>
        <div className={style.containerCalendar}>
          <div className={style.days}>
            {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day, i) => (
              <div key={i} className={style.btnDays}>
                {day}
              </div>
            ))}
          </div>

          <div className={style.grid}>
            {Array.from({ length: rows * columns }, (_, i) => (
              <div key={i} className={style.gridItem}></div>
            ))}
          </div>
        </div>
      </div>
      <div className={style.order}>order</div>
    </div>
  );
}

export default Schedule;


// import React, { useState } from "react";
// import style from "./styles.module.scss";

// function Schedule() {
//   const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//   const hours = Array.from({ length: 15 }, (_, i) => i + 8); // Ваши часы от 8 до 22

//   const [freeSlots, setFreeSlots] = useState([]);



//   return (
//     <div className={style.wrapper}>
//       <h2>Schedule</h2>
//       <div className={style.scheduleContainer}>
//         <div className={style.time}>
//           {hours.map((hour) => (
//             <p key={hour}>{hour}:00</p>
//           ))}
//         </div>
//         <div className={style.containerCalendar}>
//           <div className={style.days}>
//             {daysOfWeek.map((day, dayIndex) => (
//               <div key={dayIndex} className={style.btnDays}>
//                 {day}
//               </div>
//             ))}
//           </div>

//           <div className={style.grid}>
//             {daysOfWeek.map((day, dayIndex) => (
//               <div key={dayIndex} className={style.gridRow}>
//                 {hours.map((hour) => (
//                   <div
                  
//                   ></div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//       <div className={style.order}>order</div>
//     </div>
//   );
// }

// export default Schedule;
