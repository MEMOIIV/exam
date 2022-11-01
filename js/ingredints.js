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

let ingred = "";
async function cati() {
     let responseingred = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list");
     let dataingred = await responseingred.json();
     console.log(dataingred);
     let desc = dataingred.meals[20].strDescription.length;
     console.log(desc);
     for (let i = 0; i < 20 ; i++) {
        ingred+=` <div class="col-lg-3 col-md-6">
        <div class="text-center">
            <div><i class="i-ingred fa-solid fa-bowl-food fa-3x"></i></div>
            <div class="content">
                <h4>${dataingred.meals[i].strIngredient}</h4>
                <p><textarea max-lenght="10" class="bg " cols="30" rows="10">${dataingred.meals[i].strDescription}</textarea></p>
            </div>
        </div>
    </div>`
}
     document.querySelector("#inner-igredientes").innerHTML=ingred
     
}

cati();