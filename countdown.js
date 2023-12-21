const targetDate = new Date(2024, 3, 1);
const animeName = "Về chuyện tôi chuyển sinh thành Slime";

function updateCountdown() {
  const currentDate = new Date();
  const timeDifference = targetDate - currentDate;

  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerHTML = `${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây`;
}

setInterval(updateCountdown, 1000);

updateCountdown();

document.getElementById('animeName').innerHTML = `${animeName} SS3`;
