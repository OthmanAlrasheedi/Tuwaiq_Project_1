const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const year = $("#age");
const img1 = $("#imgInput");
const theModel = $("#model");
const thePrice = $("#price");

const allCar = [
  {
    name: "dadtsun",
    age: 1977,
    price: " الف 20000",
    img: "https://d3cxve53lbqhxv.cloudfront.net/images/user_adv/resize1000/1631947800692052541.jpg",
    model: "ددتسن 1977 تراثيه مخزنه على السوم 0532744290",
  },
  {
    name: "camrey",
    age: 2017,
    price: "56000",
    img: "https://images.squarespace-cdn.com/content/v1/53a48333e4b0a2a8b880c701/1514355652356-C9SMKQMTT9YBTHIPLZFJ/IMG_3312.JPG?format=1000w",
    model: "كامري وكاله السوم 56 الف للتواصل054873484",
  },
  {
    name: "hilux",
    age: 2017,
    price: "87000",
    img: "https://img4cdn.haraj.com.sa/userfiles30/2020-07-08/800x692-1_-GO__MTU5NDIyNTE1MzQ2MjcxMjcyNjg0Ng.jpg",
    model: " هايلوكس دبل 2017 نظيفه على الشرط الحد 87 الف للتواصل 0506381995",
  },
  {
    name: "optima",
    age: 2017,
    price: "60000",
    img: "https://i.ytimg.com/vi/3N01_uHou1U/hqdefault.jpg",
    model:
      "  اوبتما 2017مكينه وقير على الشرط البدي فيه دعمه خفيفه من وراء للتواصل 0536954022",
  },
];
function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
          <h1">${array[i].name}</h1>
          <h1>${array[i].age}</h1>
          <h1>${array[i].price}</h1>
          <img  class ="img"src =${array[i].img} >
          <h1>${array[i].model}</h1>
<hr>
      </div>`);
    mainContainer.append(div);
  }
}
renderArr(allCar);
function addStudent() {
  const newCar = {
    name: nameInput.val(),
    age: year.val(),
    img: img1.val(),
    model: theModel.val(),
    price: thePrice.val(),
  };
  allCar.push(newCar);
  renderArr([newCar]);
}

function hideHandler() {
  mainContainer.hide();
}

function showHandler() {
  mainContainer.show();
}
function removeHandler() {
  mainContainer.remove();
}
