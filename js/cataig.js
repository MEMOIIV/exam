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

let catig = "";
async function cati() {
     let responseCati = await fetch("https://www.themealdb.com/api/json/v1/1/categories.php");
     let dataCati = await responseCati.json();
     console.log(dataCati);
     for (let i = 0; i < dataCati.categories.length; i++) {
       catig+=`<div class="col-lg-3 col-md-6">
       <div class="img-Categ position-relative">
           <div class="img-inner-Categ"><img src="${dataCati.categories[i].strCategoryThumb}" alt=""></div>
           <div class="food-Categ position-absolute ps-3">
              <div>
               <h3>${ dataCati.categories[i].strCategory}</h3>
               <p>${dataCati.categories[i].strCategoryDescription}</p>
              </div>
           </div>
       </div>
   </div>`
}
     document.querySelector("#inner-catego").innerHTML=catig
     
}

cati();