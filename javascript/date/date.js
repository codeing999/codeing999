//오늘 현재 YYYY-MM-DDTHH:mm:ss.sssZ (표준시)
const now = new Date();
console.log(now);

/*현지 시간으로 값을 반환하는 메서드 (한국시간)
UTC 시간을 반환하는 메서드는 getUTCDate() 처럼 중간에 UTC가 붙음.
*/
//현재 년도
let nowYear = now.getFullYear();
//현재 월
let nowMonth = now.getMonth() + 1; //월은 0~11을 반환하여 항상 +1해줘야한다.
//현재 일
let nowDate = now.getDate();
//현재 시간
let nowHour = now.getHours();
//현재 분
let nowMinute = now.getMinutes();
//현재 초
let nowSecond = now.getSeconds();
//현재 밀리초
let nowMilliSecond = now.getMilliseconds();
//현재 요일
let nowDay = now.getDay();

//console.log(nowYear, nowMonth, nowDate, nowHour, nowMinute, nowSecond, nowMilliSecond, nowDay);
//console.log(dateFormat(now, "isoDate"));

const dd = `${nowYear}-${nowMonth}-${nowDate}`;
console.log('test', dd, '2023-03-01', dd === '2023-01-16');

/*mmdd 형식으로 오늘 표시
 */
// 월 표시가 한 자릿수일 경우
// if (nowMonth < 10) {
//   nowMonth = `0${nowMonth}`;
// } else {
//   nowMonth = String(nowMonth);
// }

// // 일 표시가 한 자릿수일 경우
// if (nowDate < 10) {
//   nowDate = `0${nowDate}`;
// } else {
//   nowDate = String(nowDate);
// }

//0으로 패딩하는 더 쉬운 방법
//const today = `${nowYear}-${String(nowMonth).padStart(2, "0")}-${String(nowDate).padStart(2, "0")}`;

// 오늘 날짜
const today = nowMonth + nowDate;
console.log('today : ', today);

// 한달 전
let oneMonthAgo = new Date(now.setMonth(now.getMonth() - 1));
console.log('oneMonthAgo : ', oneMonthAgo);

//어제 (24시간 전이라고 보면 될 듯)
let yesterday = new Date(now.setDate(now.getDate() - 1));
console.log('yesterday : ', yesterday);

//한국시간으로 어제
let yMonth = yesterday.getMonth() + 1;
let yDate = yesterday.getDate();
let yHour = yesterday.getHours();
console.log(yMonth, yDate, yHour);

// //굳이 어제에서 한국시간 어제를 구하지말고 now에서 구해보기 근데 이렇게 하면 저번달로 넘어갈 경우가 처리가 안되겠구나 그냥 위에꺼가 맞다.
// const yesterday2 = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() - 1}`;
// const yesterday3 = `${now.getFullYear()}-${now.getMonth() + 1}-${
//   now.getDate() - 1
// } ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
// console.log(yesterday2); //내가 관심있는건 날짜까지므로
// console.log(yesterday3);

const now2 = new Date();
let date = new Date('2023-01-01');
if (now2 <= date) {
  console.log('1', now2, date);
} else {
  console.log('2', now2, date);
}

const birthday = 20190101;
const now3 = new Date();
const petBirthdayYear = Math.floor(birthday / 10000);
const petBirthdayMonth = Math.floor(birthday / 100) - petBirthdayYear * 100 - 1;
const petBirthdayDate = Math.floor(birthday % 100);
const petBirthdayTime = new Date(
  petBirthdayYear,
  petBirthdayMonth,
  petBirthdayDate,
  9
);
console.log(
  petBirthdayYear,
  petBirthdayMonth,
  petBirthdayDate,
  petBirthdayTime
);
const diffDate = now3.getTime() - petBirthdayTime.getTime();
console.log(
  now3,
  now3.getTime(),
  petBirthdayTime.getTime(),
  'diffDate : ',
  diffDate
);
let petAge = Math.floor(Math.abs(diffDate / (1000 * 60 * 60 * 24 * 365)));
console.log('petAge : ', petAge);
