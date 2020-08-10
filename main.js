/**function key(n) {
    for (let index = 0; index < n; index++) {
        console.log(index)

    }
}
key(4);
var languege = [
    'key',
    'keye',
    'keyyyy'
]
for (const lan of languege) {
    console.log(lan)
}
*/

function writeLog() {
  var myString = "";
  for (var param of arguments) {
    // myString = myString + `${param} - `;
    // hoặc
    myString += `${param} -`;
  }
  console.log(myString);
}
writeLog("hihi", "hhaa", "hh");
/**function cong(a, b) {
    return a + b
}*/

/**for (var i = 97; i <= 122; i++) {
    console.log(String.fromCharCode(i))
}

function cong(a, b) {
    return a + b
}
var result = cong(8, 9)
console.log(result)

var cous = [{
        id: 1,
        coin: 0
    },
    {
        id: 2,
        coin: 0
    },
    {
        id: 3,
        coin: 10
    }
];
var isFree = cous.forEach(function (cou, index) {
    console.log(cou.coin === 0);
});
console.log(isFree);

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
console.log(date)
*/
var langueges = ["js", "keyy", "keyyy"];
var leng = langueges.length;
for (var i = 0; i < leng; i++) {
  console.log(langueges[i]);
}
for (var key in langueges) {
  console.log(key);
}
for (var value of langueges) {
  console.log(value);
}
var myInfo = {
  Name: "key ",
  Age: 19,
  Address: "Mỹ Đức A",
};
console.log(Object.keys(myInfo));
for (var value of Object.keys(myInfo)) {
  console.log(myInfo[value]);
}
var arrayvalue = Object.values(myInfo);
for (var value of arrayvalue) {
  console.log(value);
}
var i = 0;
var isSuccess = false;
do {
  i++;
  console.log("Nạp thẻ lần " + i);
  if (false) {
    isSuccess = true;
  }
} while (!isSuccess && i <= 3);
for (var i = 0; i < 10; i++) {
  if (!(i % 2 !== 0)) {
    continue;
  }
  console.log(i);
}
//nhiều cách để lồng vòng lặp for
var myArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (var key in myArray) {
  console.log("key", key);
  for (var value of myArray[key]) {
    console.log(value);
  }
}
//cách 2
for (var value of myArray) {
  for (values of value) {
    console.log(values);
  }
}
//cách 3
var lengthA = myArray.length;
for (var i = 0; i < lengthA; i++) {
  for (var j = 0; j < myArray[i].length; j++) {
    console.log(myArray[i][j]);
  }
}
/// 3 cách này đều dựa trên việc đầu tiên t sẽ lấy value của myArray sau đó lại lấy từng dữ liệu trong mảng vừa lấy được
/// Cách 3 thì đầu tiên ta sẽ duyệt qua theo chiều dài của mảng từ 0,1,2 sau đó ta sẽ ra được 3 mảng và đối với mỗi mảng đó ta lại tiếp tục lấy dữ liệu trong mảng từ 0,1
// Sửa code tại vị trí dấu [3 chấm]
var a = 10;
var h = 20;

var myfunction = function run(a, h) {
  var s = (1 / 2) * a * h;
  return s;
};
// //////////////////
var a = ["1", "2", "3", "112"];
var b = ["5", "2", "3"];
var c = "1";
// duyệt qua các giá trị và kiểm tra xem có giá trị nào của mảng a giống với x thì trả về mảng mới;
function includes1(a, c) {
  return a.filter(function (x) {
    return x.includes(c);
  });
}
console.log(includes1(a, c));
// duyệt qua các giá trị và kiểm tra xem có giá trị nào của mảng b giống với a thì trả về mảng mới;
function includes2(a, b) {
  return a.filter(function (x) {
    return b.includes(x);
  });
}
console.log(includes2(a, b));
////
var x = {
  a: "m",
  b: "a",
  c: "auzz",
};

for (var key in x) {
  for (var value of x[key]) {
    console.log(value);
  }
}

for (var value of Object.values(x)) {
  console.log(value);
}

var boxHTMLCollection = document.getElementsByClassName("box");
var box1Element = document.getSelector(".box:first-child");
var box2Element = document.getSelector(".box:last-child");
var allItemElements = document.getElementsByTagName("li)