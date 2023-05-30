var today = dayjs();
$('#1a').text(today.format('MMM D, YYYY'));

var reformatDate = dayjs('2020-11-03').format('dddd, MMMM D YYYY, h:mm:ss a');
$('#3a').text(reformatDate);

var beginningOfYear = dayjs('2022-01-01');
var weekNum = today.diff(beginningOfYear, 'week');

var takeOut = weekNum % 2 === 1;
$('#4a').text(takeOut + ", because it's currently week " + weekNum);