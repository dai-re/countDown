const countDown = () => {
  const from_date = new Date("dec 22, 2023 00:00:00").getTime();
  const now_date = new Date().getTime();
  const space = from_date - now_date;

  const second = 1000;
  const min = second * 60;
  const hour = min * 60;
  const day = hour * 24;

  const getday = Math.floor(space / day);
  const gethour = Math.floor((space % day) / hour);
  const getmin = Math.floor((space % hour) / min);
  const getsecond = Math.floor((space % min) / second);

  document.getElementById("day").innerHTML = getday;
  document.getElementById("hour").innerHTML = gethour;
  document.getElementById("min").innerHTML = getmin;
  document.getElementById("second").innerHTML = getsecond;
  // alert(gethour);
};

setInterval(countDown, 1000);
