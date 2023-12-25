type mainTypes = {
  openSidebar: () => void;
}

let sidebar = document.querySelector('#sidebar');
const openSidebar:mainTypes["openSidebar"] = () => sidebar?.classList.toggle("active");
$().ready(function(){
  $('.slick-carousel').slick({
    centerPadding: "0px",
    dots: true,
    slidesToShow: 1,
    infinite: true
  });
});