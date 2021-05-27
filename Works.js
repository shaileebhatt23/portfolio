import "./work.scss"

export default function works() {
    return (
       <div className="works" id="works">
           <h1> My Projects</h1>
           <div id="slider">
   <input type="radio" name="slider" id="slide1" checked/>
   <input type="radio" name="slider" id="slide2" checked/>
   <input type="radio" name="slider" id="slide3" checked/>
   <input type="radio" name="slider" id="slide4" checked/>
   <div id="slides">
      <div id="overflow">
         <div class="inner">
            <div class="slide slide_1">
            <img src="assets/todo.JPG" alt=""/>
               <div class="slide-content">
                   
                  <h2>ToDo List</h2><br/>
                  <p>Using React.js</p>
               </div>
            </div>
            <div class="slide slide_2">
                <img src="assets/online.JPG"/>
               <div class="slide-content">
                  <h2>Online Voting System</h2><br/>
                  <p>  using HTML , CSS , PHP</p>
               </div>
            </div>
            <div class="slide slide_3">
                <img src="assets/tip.JPG"/>
               <div class="slide-content">
                  <h2>Tip calculator</h2><br/>
                  <p>using HTML , CSS , JAVASCRIPT</p>
               </div>
            </div>
            <div class="slide slide_4">
                <img src="assets/pf.JPG" alt=""/>
               <div class="slide-content">
                  <h2>Portfolio</h2><br/>
                  <p>using HTML,CSS</p>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="controls">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
   <div id="bullets">
      <label for="slide1"></label>
      <label for="slide2"></label>
      <label for="slide3"></label>
      <label for="slide4"></label>
   </div>
</div>
       </div>
    )
}
