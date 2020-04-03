let welcome = () => {
    if(localStorage.getItem("mtks") == null) {
        let welcomeMsg = "Welcome to My Profile!!";
        alert(welcomeMsg);
        localStorage.setItem("mtks","1");
    }
    
}


let init = () => {
welcome();
let discussionBoard = document.getElementById('discussionBoard');
discussionBoard && discussionBoard.addEventListener("click",()=>{
    window.location = "https://www.quikr.com/homes/listing/3-bhk-villa-of-2200sqft-for-sell-in-bangalore-337869158#forumModuleVAP";
});

let clickToView = document.getElementById("clickToview");
clickToView && clickToView.addEventListener("click",()=>{
    alert("Please see the Click to View Number CTA on website");
    window.location = "https://www.quikr.com/homes/listing/3-bhk-villa-of-2200sqft-for-sell-in-bangalore-337869158";
});

let homeloan = document.getElementById("homeLoan");
homeloan && homeloan.getElementById("click",() => {
    window.location = "https://www.quikr.com/homes/homeloan";
});

let seo = document.getElemenetById("seo");
seo && seo.addEventListener("click",() => {
    window.location = "https://www.quikr.com/homes;
});

let bibilophile = document.getElementById('biblophile');
bibilophile && bibilophile.addEventListener("click",() => {
    window.location = "https://github.com/MTK30/Bibliophile";
});

let carrieCarrier = document.getElementById("carreer");

carrieCarrier && carrieCarrier.addEventListener('click',() => {
    window.location = "https://github.com/MTK30/PlayStarter";
})

}
