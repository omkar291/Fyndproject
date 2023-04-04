<template>
    <div class="home-page">
      <header>
        <div class="hero">
          <header>
            <h1>Welcome to the Calligraphy Studio</h1>
          </header>
        </div>
      </header>
      <center>
      <!-- <div id="slider">
    <ul id="slideWrap"> 
      <li><img src="https://archive.smashing.media/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/c3495b8c-f6b9-4410-bec5-1a5c80461c79/english-roundhand-large-opt.jpg" alt=""></li>
      <li><img src="https://1.bp.blogspot.com/-pl0VR_xS5Cw/YPCQp1scezI/AAAAAAAACXc/oB9xc6k8RuY5rPksMSy01f3iUn8zSIFzwCNcBGAsYHQ/s16000/2.jpg" alt=""></li>
      <li><img src="https://1.bp.blogspot.com/-dt6CL2fiBq0/YPCQp0zmK6I/AAAAAAAACXY/0PevDL7pvx87mefb4oCnO613N1UitdicQCNcBGAsYHQ/s16000/3.jpg" alt=""></li>
      <li><img src="https://1.bp.blogspot.com/-T_V-s57aVDo/YPCQrWayswI/AAAAAAAACXg/h1ifJGnBuXovvBdGDNvmhg-DXIVK4Xw9QCNcBGAsYHQ/s16000/4.jpg" alt=""></li>
      <li><img src="https://1.bp.blogspot.com/-TNT1a5M1v3o/YPCQrWmn_fI/AAAAAAAACXk/p8nx_OB2R6Aw172WIv5vuB8jF-qWDsHlwCNcBGAsYHQ/s16000/5.jpg" alt=""></li>
    </ul>
    <a id="prev" href="#">&#8810;</a>
    <a id="next" href="#">&#8811;</a>
  </div> -->
    </center>
     
      
      <center><p>We specialize in creating unique and personalized calligraphy pieces for weddings, events, and personal projects.</p></center>
     
      
      <footer>
        <center>
        <p>&copy; 2023 Calligraphy Studio. All Rights Reserved.</p> </center>
      </footer>
   
    </div>

  </template>


<style>
.home-page {
  background-color: #fff;
  /* padding: 125px ; */
  margin-top:25px;
  color: #1a1919;
  height: max-content;
}

.hero {
  background-size:auto;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero h1 {
  font-size: 4rem;
  color: #312e2e;
  text-shadow: 1px 1px #333;
  margin-bottom: 30px;
}

.hero p {
  font-size: 1.2rem;
  color: #2e2c2c;
  text-shadow: 1px 1px #333;
}

.services {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 50px;
}

.service {
  width: 30%;
  min-width: 300px;
  background-color: #fff;
  padding: 30px;
  margin-bottom: 30px;
  text-align: center;
  box-shadow: 2px 2px 10px #ccc;
}

.service h2 {
  color: #333;
  margin-bottom: 20px;
}

.service p {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 20px;
}

.service button {
  background-color: #333;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.service button:hover {
  background-color: #555;
}

.about {
  background-color: #fff;
  padding: 50px;
  margin-top: 50px;
}

.about h2 {
  color: #333;
  margin-bottom: 30px;
}

.about p {
  color: #777;
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 30px;
}

.about img {
  max-width: 100%;
  margin-bottom: 30px;
}

.team-members {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.member-card {
  flex-basis: 30%;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #ddd;
  transition: all 0.3s ease;
}

.member-card:hover {
  transform: translateY(-10px);
  box-shadow: 2px 2px 10px #ccc;
}

.member-image {
  width: 100%;
  margin-bottom: 10px;
}

.member-name {
  font-size: 1.2rem;
  margin-bottom: 5px;
}

.member-description {
  font-size: 0.9rem;
  color: #777;
}

.contact {
  background-color: #333;
  padding: 50px;
  color: #fff;
  text-align: center;
}

.contact h2 {
  margin-bottom: 30px;
}

.contact p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.contact button {
  background-color: #fff;
  color: #333;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.contact button:hover {
  background-color: #ccc;
  color: #333;
} 


#slider {
  position: relative;
  width: 1500px;
  height: 500px;
 
  overflow: hidden;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.3);
}
#slider ul {
  position: relative;
  list-style: none;
  height: 100%;
  width: 10000%;
  padding: 0;
  margin: 0;
  transition: all 750ms ease;
  left: 0;
}
#slider ul li {
  position: relative;
  height: 100%;
 
  float: left;
}
#slider ul li img{
  width: 100%;
  /* height: 100%; */
}
 
#slider #prev, #slider #next {
  width: 50px;
  line-height: 50px;
  border-radius: 50%;
  font-size: 2rem;
  text-shadow: 0 0 20px rgba(0, 0, 0, 0.6);
  text-align: center;
  color: white;
  text-decoration: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: all 150ms ease;
}
#slider #prev:hover, #slider #next:hover {
  background-color: rgba(0, 0, 0, 0.5);
  text-shadow: 0;
}
#slider #prev {
  left: 10px;
}
#slider #next {
  right: 10px;
}


</style>



  <script>

// var responsiveSlider = function() {

// var slider = document.getElementById("slider");
// var sliderWidth = slider.offsetWidth;
// var slideList = document.getElementById("slideWrap");
// var count = 1;
// var items = slideList.querySelectorAll("li").length;
// var prev = document.getElementById("prev");
// var next = document.getElementById("next");

// window.addEventListener('resize', function() {
//   sliderWidth = slider.offsetWidth;
// });

// var prevSlide = function() {
//   if(count > 1) {
//     count = count - 2;
//     slideList.style.left = "-" + count * sliderWidth + "px";
//     count++;
//   }
//   else if(count == 1) {
//     count = items - 1;
//     slideList.style.left = "-" + count * sliderWidth + "px";
//     count++;
//   }
// };

// var nextSlide = function() {
//   if(count < items) {
//     slideList.style.left = "-" + count * sliderWidth + "px";
//     count++;
//   }
//   else if(count == items) {
//     slideList.style.left = "0px";
//     count = 1;
//   }
// };

// next.addEventListener("click", function() {
//   nextSlide();
// });

// prev.addEventListener("click", function() {
//   prevSlide();
// });

// setInterval(function() {
//   nextSlide()
// }, 5000);

// };

// window.onload = function() {
// responsiveSlider();  
// }
 

export default {}
  </script>
  


