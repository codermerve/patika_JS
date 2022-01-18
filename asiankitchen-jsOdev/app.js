const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img:
      "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img:
      "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
    desc: `Dan dan noodle, serving with green onion `,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickles `,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
    desc: `Rice Sandwich, serving with soy sauce`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
    desc: `Black bean sauce noodle, serving with green onion `,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  },
];

/* Obje içindeki bazı degerleri degiştirildi */
menu[1].title="Udon";
menu[8].price="7.49";

/* menu'nun  bulunacagı ce  butonların bulunacagı elementler seçildi */
const menuSection = document.querySelector(".section-center")
const btnContainer = document.querySelector(".btn-container")


/*Butonlar oluşturulup btn-container'e eklendi ve  eventListener eklendi */
const buttonCreate = () => {

  let buttons = `
  <button type="button" id="all" class="btn btn-outline-dark mx-2">All</button>
  <button type="button" id="korea" class="btn btn-outline-dark mx-2">Korea</button>
  <button type="button" id="japan" class="btn btn-outline-dark mx-2">Japan</button>
  <button type="button" id="china" class="btn btn-outline-dark mx-2">China</button>
  `
  btnContainer.innerHTML = buttons;

  let all = document.getElementById("all")
  let korea = document.getElementById("korea")
  let japan = document.getElementById("japan")
  let china = document.getElementById("china")
  all.addEventListener("click", listAllMenu);
  korea.addEventListener("click", koreaList);
  japan.addEventListener("click", japanList);
  china.addEventListener("click", chinaList);

}


/* Sayfa açıldıgı  zaman  tüm  menü yüklenir , all butonuna  tıklayıncada tüm menuyu  ekranda gösterir */
const listAllMenu = () => {
  let allMenu = "";
  menu.map(item => {
    allMenu += createMenu(item);
  })
  menuSection.innerHTML = allMenu;
}

/* kategori'si Kore olan yemekleri  listeler */
const koreaList = () => {
  let allMenu = "";
  menu.filter(menu => {
    if (menu.category == "Korea") {
      allMenu += createMenu(menu);
    }
  })
  menuSection.innerHTML = allMenu;
}

/* kategori'si Japon olan yemekleri  listeler */
const japanList = () => {
  let allMenu = "";
  menu.filter(menu => {
    if (menu.category == "Japan") {
      allMenu += createMenu(menu);
    }
  })
  menuSection.innerHTML = allMenu;
}

/* kategori'si Çin olan yemekleri  listeler */
const chinaList = () => {
  let allMenu = "";
  menu.filter(menu => {
    if (menu.category == "China") {
      allMenu += createMenu(menu);
    }
  })
  menuSection.innerHTML = allMenu;
}


/* Menu  üçündeki verileri  tek tek  element'e  döker  diger  fonkisyonların isteklerine göre çalışır
fonksiyonların içindeki  döngüler  ile  şart  saglandıgı sürece  her bir öge  için  tekrar  çalışır */
const createMenu = (food) => {

  let item = ` 
  <div class="menu-item row col-6 justify-content-between mb-5 mt-2">
  <div class="left col-4 ">
    <img class=" photo w-100" src="${food.img}"
      alt="">
  </div>
  <div class="right col-8 ps-3 p-0">
    <div class="head row  border-bottom border-dark p-0 ">
      <h4 class="title col-6 p-0">${food.title}</h4>
      <h4 class="price col-6 text-end p-0">${food.price}</h4>
    </div>
    <div class="menu-text">${food.desc}</div>
  </div>
  </div>`
  return item

}

/* Buttonları  ekledigimiz fonksiyonu çalıştırdık */
buttonCreate();

/* Sayfa yüklendigi  zaman  menüyüde yüklemesi  için  burada fonksiyonu çalıştırdık */
listAllMenu();