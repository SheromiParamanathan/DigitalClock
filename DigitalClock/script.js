function clock() {

  function updateDate() {
    let now = new Date();
    const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    const weekdayOptions = { weekday: 'long' };
    
    const currentDate = now.toLocaleDateString('en-US', dateOptions);
    const currentWeekday = now.toLocaleDateString('en-US', weekdayOptions);

    const fullDateString = `${currentWeekday}, ${currentDate}`;
    document.getElementById('date').innerHTML = fullDateString;

    let timeOptions = { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true };
    let currentTime = now.toLocaleTimeString('en-US', timeOptions);
    document.getElementById('currentTime').innerHTML = currentTime;
}
	
setInterval(() => {

  let hours = document.getElementById('hours');
  let minutes = document.getElementById('minutes');
  let secondes = document.getElementById('seconds');
  let ampm = document.getElementById('ampm');

  let hh = document.getElementById('hh');
  let mm = document.getElementById('mm');
  let ss = document.getElementById('ss');

  let dotH = document.querySelector('.hour_dot');
  let dotM = document.querySelector('.minute_dot');
  let dotS = document.querySelector('.second_dot');

  let now = new Date();
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ap = h >= 12 ? 'PM' : 'AM';

  // convert to 12 hour format
  if (h > 12) {
    h = h - 12;
  }

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  hours.innerHTML = h + ' <br>HOURS';
  minutes.innerHTML = m + ' <br>MINUTES';
  secondes.innerHTML = s + ' <br>SECONDS';
  ampm.innerHTML = ap;

  hh.style.strokeDashoffset = 440 - (440 * h) / 12;
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
  ss.style.strokeDashoffset = 440 - (440 * s) / 60;

  dotH.style.transform = `rotate(${h * 30}deg)`;
  dotM.style.transform = `rotate(${m * 6}deg)`;
  dotS.style.transform = `rotate(${s * 6}deg)`;

  updateDate();

}, 1000);
}

clock();