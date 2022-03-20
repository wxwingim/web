<template>
  <main class="main-container">
      <div class="main-block main-unfinished-cources">
          <!-- header -->
          <div class="main-head">
              <h4>Your unfinished cources</h4>
              <button>...</button>
          </div>
          
          <!-- cards -->
          <div class="main-cources-card">

            <!-- card1 -->
            <div class="card card1">
                <div class="cources-card-top">
                    <div class="cources-autor">
                        <div class="person person1"></div>
                        <div class="about-person">
                            <p>Dianne Edwards</p>
                            <a href="">@dianneed</a>
                        </div>
                    </div>
                    <button>82 min</button>
                </div>
                <div class="cources-card-bottom">
                    <p>Learning how to create simple Swift applications in 8 lessons</p>
                </div>
            </div>

            <!-- card2 -->
            <div class="card card2">
                <div class="cources-card-top">
                    <div class="cources-autor">
                        <div class="person person2"></div>
                        <div class="about-person">
                            <p>Dianne Edwards</p>
                            <a href="">@dianneed</a>
                        </div>
                    </div>
                    <button>90 min</button>
                </div>
                <div class="cources-card-bottom">
                    <p>Best tips for drawing some good thematic illustration</p>
                </div>
            </div>

          </div>
      </div>

      <div class="main-block main-live-lessons">
          <!-- header -->
          <div class="main-head">
              <h4>Live lessons</h4>
              <button>...</button>
          </div>
          
          <!-- cards -->
          <div class="main-lessons">

              <!-- card1 -->
              <div class="card-lesson card-1">
                    <img src="./../assets/images/live-lesson-autors/1.png">
              </div>

                <!-- card2 -->
              <div class="card-lesson card-2">
                    <img src="./../assets/images/live-lesson-autors/2.png">
              </div>

                <!-- card3 -->
              <div class="card-lesson card-3">
                    <img src="./../assets/images/live-lesson-autors/3.png">
              </div>

                <!-- card4 -->
              <div class="card-lesson card-4">
                    <img src="./../assets/images/live-lesson-autors/4.png">
              </div>

                <!-- card5 -->
              <div class="card-lesson card-5">
                    <img src="./../assets/images/live-lesson-autors/5.png">
              </div>

                <!-- card6 -->
              <div class="card-lesson card-6">
                    <img src="./../assets/images/live-lesson-autors/6.png">
              </div>

                <!-- card7 -->
              <div class="card-lesson card-7">
                    <img src="./../assets/images/live-lesson-autors/7.png">
              </div>

              <button class="next-button"><img src="./../assets/images/live-lesson-autors/next.svg"></button>
              
          </div>
      </div>
  </main>
</template>

<script>
export default {

}
</script>

<style scope>
@import './../css/main.css';
</style>