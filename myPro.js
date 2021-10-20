const mainContainer = $("#mainContainer");
const nameInput = $("#name");
const year = $("#age");
const img1 = $("#imgInput");
const theModel = $("#model");
const thePrice = $("#price");

const allCar = JSON.parse(localStorage.getItem("car")) || [
  {
    name: "dadtsun",
    age: 1977,
    price: "  ",
    img: "https://d3cxve53lbqhxv.cloudfront.net/images/user_adv/resize1000/1631947800692052541.jpg",
    model: "   ددتسن 1977 تراثيه مخزنه على السوم 0532744290 صالح شخير ",
  },
  {
    name: "camrey",
    age: 2017,
    price: "",
    img: "https://images.squarespace-cdn.com/content/v1/53a48333e4b0a2a8b880c701/1514355652356-C9SMKQMTT9YBTHIPLZFJ/IMG_3312.JPG?format=1000w",
    model: "  كامري وكاله السوم 56 الف للتواصل054873484 حجي الشمري",
  },
  {
    name: "hilux",
    age: 2017,
    price: "   ",
    img: "https://img4cdn.haraj.com.sa/userfiles30/2020-07-08/800x692-1_-GO__MTU5NDIyNTE1MzQ2MjcxMjcyNjg0Ng.jpg",
    model:
      "  هايلوكس دبل 2017 نظيفه على الشرط الحد 87 الف للتواصل 0506381995 موسى الرشيدي",
  },
  {
    name: "optima",
    age: 2017,
    price: "",
    img: "https://i.ytimg.com/vi/3N01_uHou1U/hqdefault.jpg",
    model:
      "    اوبتما 2017مكينه وقير على الشرط البدي فيه دعمه خفيفه من وراء للتواصل 0536954022",
  },
  {
    name: "landcrusir",
    age: 2020,
    price: "  ",
    img: "https://striveme.com/img/article/13469/%D9%84%D8%A7%D9%86%D8%AF%D9%83%D8%B1%D9%88%D8%B2%D8%B1_1_1.jpg",
    model:
      " خالد المسعود جيب لاند كروزر 2020 فل كامل وكاله الحد 200 الف للتواصل 0561664250",
  },
  {
    name: "GT",
    age: 1977,
    price: "",
    img: "https://4.bp.blogspot.com/-nKfcVUQPdak/V2Z92Fmm5xI/AAAAAAAAABY/5NW-u_ha7L8zaHPTnl_OdGndJZFdd1PggCLcB/s1600/11093047_526031257529032_1917556715_n1.jpg",
    model:
      "     سامي الرويلي0507715534 جيتي 77  الشرط قير ومكينه وبدي بها سمكره خفيفه من وراء للتواصل ",
  },
];
function renderArr(array) {
  for (let i = 0; i < array.length; i++) {
    const div = $(`<div class="secondryContainer">
          <h1 class ="carName">${array[i].name}</h1>
          <h1>${array[i].age}</h1>
          <h1>${array[i].price}</h1>
          <img  class ="img"src =${array[i].img} >
          <h1>${array[i].model}</h1>
          <button id="bt"  onclick="remove(${i})">delete</button>

      </div>`);
    mainContainer.append(div);
  }
  localStorage.setItem("car", JSON.stringify(allCar));
}
renderArr(allCar);
function addCar() {
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
  $(".hide").show();
}
function showHandler() {
  mainContainer.show();
  $(".hide").hide();
}
function remove(i) {
  allCar.splice(i, 1);
  console.log(i);
  mainContainer.html("");
  renderArr(allCar);
}
