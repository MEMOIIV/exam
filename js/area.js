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

let area = "";
async function arr() {
     let responseArea = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list");
     let dataArea = await responseArea.json();
     console.log(dataArea);
     for (let i = 0; i < 20 ; i++) {
       area+=`<div class="col-lg-3 col-md-6">
       <div class="area m-4">
           <div class="i-area"><i class="fa-solid fa-city fa-3x"></i></div>
           <div><h3>${dataArea.meals[i].strArea}</h3></div>
       </div>
   </div>`
}
     document.querySelector("#area-inner").innerHTML= area
     
}

arr();