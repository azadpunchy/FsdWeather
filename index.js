/*  Author Manan Bari */
/*  Company azadpunchy */

const cur_date = document.getElementById("date");
// const bodyWeathercon = document.getElementById("weathercon");

// defining date and time attributes
const date = new Date();

const getTime = () => {
  const days = [7];
  days[0] = "SUN";
  days[1] = "MON";
  days[2] = "TUE";
  days[3] = "WED";
  days[4] = "THU";
  days[5] = "FRI";
  days[6] = "SAT";

  // geting monthss
  const months = new Array(12);
  months[0] = "JAN";
  months[1] = "FEB";
  months[2] = "MAR";
  months[3] = "APR";
  months[4] = "MAY";
  months[5] = "JUN";
  months[6] = "JUL";
  months[7] = "AUG";
  months[8] = "SEP";
  months[9] = "OCT";
  months[10] = "NOV";
  months[11] = "DEC";

  const day = date.getDate();
  // getting time
  let hour = date.getHours();
  let mint = date.getMinutes();
  let aM = "am";
  if (hour > 11) {
    aM = "pm";
    if (hour > 12) {
      hour -= 12;
    }
    if (mint < 10) {
      mint = "0" + mint;
    }
  }

   rtrn = `${days[date.getDay()]} | ${
    months[date.getMonth()]
  } ${day} | ${hour}:${mint}${aM}`;
  console.log(rtrn);
  return rtrn

};

// calling metod getTime

cur_date.innerHTML =  getTime();