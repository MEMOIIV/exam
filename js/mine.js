
// Nav Width  \\
let ineerWidth = $('header').innerWidth();
    // console.log(ineerWidth);
let eventIconNav = $(".fa-align-justify")
eventIconNav.click(() => {
    eventIconNav.toggleClass("fa-times");
    // or \\
    // Remove Class put this in if \\
        // let icon_op_cl =  document.getElementById("icon-op-cl");
        // icon_op_cl.classList.remove("fa-times");

        // Add Class put this in eles \\ 
        // let icon_op_cl =  document.getElementById("icon-op-cl");
        // icon_op_cl.classList.add("fa-times");

        // open Nav \\
    if ( $('header').css("left") == "0px") {
        $("header").animate({left: - ineerWidth}, );
        $(".search").fadeOut( () => {
            $(".categories").fadeOut( () => {
                $(".area").fadeOut(() => {
                    $(".ingredients").fadeOut(()=>{
                        $(".contact").fadeOut()
                    })
                })
            })
        })

    }else{
        // Close Nav \\ 
        $("header").animate({left: - 0} );
        $(".search").fadeIn( () => {
            $(".categories").fadeIn( () => {
                $(".area").fadeIn(() => {
                    $(".ingredients").fadeIn(()=>{
                        $(".contact").fadeIn()
                    })
                })
            })
        })
        
    };
    
});

// event layer \\ 
// home \\
  function layer() {
     $(".layer").fadeIn();
  };
  function layerClo() {
      $(".layer").fadeOut();
  };
let meals1 = $(".img-home").click(() => {
    layer();
});
let meals2= $(".food-home").click(()=>{
    layer();
});
$(".icon-close").click(() => {
    layerClo();
});
document.addEventListener("keydown" , (e) => {
    if (e.code == "Escape") {
        layerClo();
        
    }
});



let allData;
let meals = [];
let areaArray = [];
 async function ineer () {
    let apiResponHome = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=");
    let resbonDataHome = await apiResponHome.json()
    allData= resbonDataHome.meals
    meals = allData   
    displayHome();
}

let carton = "";
function displayHome() {
    for (let i = 0; i < meals.length; i++) {
        carton+=` <div class="col-lg-3 col-md-6">
            <figure class="img-home position-relative">
                <div id=${meals[i].idMeal} class="img-inner-home"><img src="${meals[i].strMealThumb}" alt=""></div>
                <figcaption class="food-home position-absolute ps-3">
                    <h3 class="Api-NameFood">${meals[i].strMeal}</h3>
                </figcaption>
            </figure>
        </div>`
        
     }
    let xx = document.getElementById('innerhome').innerHTML = carton;
}

ineer();

////////////////// search \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\


let valueInputLrtter = ''; 
document.getElementById("search-letter-btn").addEventListener("keyup" , ()=>{
    valueInputLrtter = document.getElementById("search-letter-btn").value;
    console.log(valueInputLrtter);
    getMealListLetter();
})

let carton3 = "";
function allsearch() {
    carton3 ="";
    for (let i = 0; i < meals.length; i++) {
        carton2+=` <div class="col-lg-3 col-md-6">
        <figure class="img-home position-relative">
        <div id=${meals[i].idMeal} class="img-inner-home"><img src="${meals[i].strMealThumb}" alt=""></div>
        <figcaption class="food-home position-absolute ps-3">
        <h3 class="Api-NameFood">${meals[i].strMeal}</h3>
        </figcaption>
        </figure>
        </div>`
        
    }
    let xx = document.getElementById('allsearch').innerHTML = carton3;
    console.log(carton2)
}

async function getMealListLetter(){
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${valueInputLrtter}`);
    let responseData = await apiResponse.json();
    allData= responseData.meals
    meals = allData   
    allsearch()
};
let valueInput = '';
document.getElementById("search-input").addEventListener("keyup" , () =>{
    valueInput = document.getElementById("search-input").value;
    console.log(valueInput);
    getMealList();
})

let carton2 = "";
function allsearch() {
    carton2 ="";
    for (let i = 0; i < meals.length; i++) {
        carton2+=` <div class="col-lg-3 col-md-6">
            <figure class="img-home position-relative">
                <div id=${meals[i].idMeal} class="img-inner-home"><img src="${meals[i].strMealThumb}" alt=""></div>
                <figcaption class="food-home position-absolute ps-3">
                    <h3 class="Api-NameFood">${meals[i].strMeal}</h3>
                </figcaption>
            </figure>
        </div>`
        
     }
    let xx = document.getElementById('allsearch').innerHTML = carton2;
    console.log(xx)
}

async function getMealList(){
    let apiResponse = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${valueInput}`);
    let responseData = await apiResponse.json();
    allData= responseData.meals
    meals = allData   
    allsearch()
};






// clilck display \\

let homeNav = $(".home");

let searchNav = $(".search");

let categoriesNav = $(".categories");

let areaNav = $(".area");

let ingredientsNav = $(".ingredients");

let contactNav = $(".contact");

homeNav.click(() => { 
    location.replace("index.html")
})
searchNav.click(() =>{
    location.replace("html/search.html")
})
categoriesNav.click(()=>{
    location.replace("html/categories.html")
})    
areaNav.click(()=>{
    location.replace("html/area.html")
})
ingredientsNav.click(()=>{
    location.replace("html/ingredients.html")
})
contactNav.click(()=>{
    location.replace("html/contact.html")
})


// contact \\

let nameInput = document.getElementById("name");
let phoneInput = document.getElementById("phone");
let passwordInput = document.getElementById("password");
let emailInput = document.getElementById("email");
let ageInput = document.getElementById("age");
let rePasswordInput = document.getElementById("Repassword");
let warningName = document.querySelector(".warning-name");
let warningPhone = document.querySelector(".warning-phone");
let warningEmail = document.querySelector(".warning-email");
let warningpassword = document.querySelector(".warning-password");
let warningAge = document.querySelector(".warning-age");
let warningRepassword = document.querySelector(".warning-repassword");
let pInput = document.querySelector(".p-input");
let emailAcss = document.querySelector(".email-acss")

let allUser; 
if (localStorage.getItem("userList")==null) {
    allUser=[];
}else{
    allUser = JSON.parse(localStorage.getItem("userList"));
}

function addUser() {
   if (!checkIn()) {
    if (exist()) {
        emailAcss.innerHTML=`<h4> This email already exists </h4>`
        clerForm();
    }else{
        let user= {
            name : nameInput.value,
            email :emailInput.value,
            phpneUser:phoneInput.value,
            password:passwordInput.value,
            ageUser:ageInput.value,
            rePasswordUser:rePasswordInput.value,
        }
            allUser.push(user);
            localStorage.setItem("usersList",JSON.stringify(allUser) );
            clerForm();
    }
    
   }
}

function checkIn(){
    if(nameInput.value!="" && emailInput.value !="" && passwordInput.value !=""){
        return false;
    }
    else{
        return true;
    }
}

function exist() {
    for(var i=0 ; i<allUser.length; i++){
        if (allUser[i].email==emailInput.value) {
            return true ; 
            
        }
    }
    return false ; 
    
}

let regularName = /^[A-Z][a-z]{3,10}$/
let testName = regularName.test(nameInput);
let regularPhone = /^01 [0125][0-9]{8}/
let testPhone = regularPhone.test(phoneInput);
let regularPassword = /^[A-Z]{1,}[a-z]{1,}[0-9]{4,}/
let regularRePassword = /^[A-Z]{1,}[a-z]{1,}[0-9]{4,}/
let testPassw = regularPhone.test(passwordInput);
let testRePassw = regularPhone.test(rePasswordInput);
let regularEmail = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
let testEmail = regularPhone.test(emailInput);
let regularAge = /^[1-8][0-9]/
let testAge = regularPhone.test(ageInput);

function checkRegu() {
    if (testName == true && testPhone == true && testPassw == true && testRePassw == true  && testEmail == true && testAge == true) {
        pInput.classList.add("pp-input") 
        return true
    }else{
        warningName.innerHTML = "<p>Special Characters and Numbers not allowed</p>"
        warningPhone.innerHTML = "<p>Enter valid Phone Number</p>"
        warningEmail.innerHTML = "<p>Enter valid password *Minimum eight characters, at least one letter and one number:*</p>"
        warningpassword.innerHTML = "<p>Enter valid email. *Ex: xxx@yyy.zzz</p>"
        warningAge.innerHTML = "<p>Enter valid Age</p>"
        warningRepassword.innerHTML = "<p>*Ex: xxx@yyy.zzz or Make sure it's the same password</p>"
        pInput.classList.remove("pp-input") 

    }
}

function clerForm() {
    nameInput.value = "";
    phoneInput.value = "";
    passwordInput.value = "";
    emailInput.value = "";
    ageInput.value = "";
    rePasswordInput.value = "";
}

$(".submit").click(()=>{
    clerForm();
    checkRegu();
    addUser();
})


// categories\\

let allDataCategories;
let categories = [];
let areaArrayCategories = [];
 async function ineerCategories () {
    let apiResponCategories = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
    let resbonDataCategories = await apiResponCategories.json()
    allDataCategories= resbonDataCategories.categories
    console.log(allDataCategories);
    categories = allDataCategories   
    displayCategories();
}

let carton4 = "";
function displayCategories() {
    carton4 ="";
    for (let i = 0; i < categories.length; i++) {
       console.log(categories.length);
        carton4+=` <div class="col-lg-3 col-md-6">
            <figure class="img-home position-relative">
                <div id=${categories[i].idCategory} class="img-inner-home"><img src="${categories[i].strCategoryThumb}" alt=""></div>
                <figcaption class="food-home position-absolute ps-3">
                    <h3 class="Api-NameFood">${categories[i].strCategory}</h3>
                    <p>${categories[i].strCategoryDescription}</p>
                </figcaption>
            </figure>
        </div>`
        
     }
    let o =  document.getElementById('inner-categoriese').innerHTML = carton4;
    console.log(o);
}
ineerCategories();

let dataCategories;
let categories2 = [];
let ArrayCategories = [];
 async function ineerCategories () {
    let apiResponCategories2 = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list");
    let resbonDataCategories2 = await apiResponCategories2.json()
    dataCategories= resbonDataCategories2.categories
    console.log(allDataCategories);
    categories2 = dataCategories   
    displayCategories();
}

let carton7 = "";
function displayCategories() {
    carton7 ="";
    for (let i = 0; i < categories.length; i++) {
       console.log(categories.length);
        carton4+=` <div class="col-lg-3 col-md-6">
            <figure class="img-home position-relative">
                <div id=${categories[i].idCategory} class="img-inner-home"><img src="${categories[i].strCategoryThumb}" alt=""></div>
                <figcaption class="food-home position-absolute ps-3">
                    <h3 class="Api-NameFood">${categories[i].strCategory}</h3>
                    <p>${categories[i].strCategoryDescription}</p>
                </figcaption>
            </figure>
        </div>`
        
     }
    let o =  document.getElementById('inner-Category').innerHTML = carton7;
    console.log(o);
}






// area \\

let allDataArea;
let area = [];
let areaArrayArea = [];
 async function ineerArea () {
    let apiResponArea = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
    let resbonDataArea = await apiResponArea.json()
    allDataArea= resbonDataArea.area
    console.log(resbonDataArea);
    area = allDataArea   
    displayArea();
}

let carton5 = "";
function displayArea() {
    carton5 ="";
    for (let i = 0; i < area.length; i++) {
        carton5 +=` <div class="col-lg-3 col-md-6 ">
                        <div class="icon-area shadow text-center">
                           <i class="icon-area shadow text-center"></i>
                          <div class="name-city py-3">
                              <h3>${area[i].strArea}</h3>
                            </div>
            
                         </div>
        
                     </div>`
        
     }
    let m =  document.getElementById('area-inner').innerHTML = carton5;
    console.log(m);
}
ineerArea ();

// ingredintes \\ 



let allDatIngred;
let ingred = [];
let areaArrayIngred = [];
 async function ineerIngred () {
    let apiResponIngred = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?i=");
    let resbonDataIngred = await apiResponIngred.json()
    allDatIngred= resbonDataIngred.meals
    console.log(allDatIngred);
    ingred = allDatIngred   
    displayArea();
}

let carton6 = "";
function displayIngred() {
    carton6 ="";
    for (let i = 0; i < ingred.length; i++) {
             carton6 +=`<div class="col-lg-3 col-md-6 ">
             <h4>${ingred[i].strMeal}.strMeal</h4>
                           <div class="icon-area shadow text-center" id="${ingred[i].idMeal}">
                           <img src="${ingred[i].strMealThumb}" alt="">
                                <div class="name-city py-3">
                                     <h3></h3>
                                     <p></p>
                                </div>
            
                            </div>
        
                        </div>`
        
     }
    let t=  document.getElementById('area-inner').innerHTML = carton6;
    console.log(t);
}
ineerIngred ();



