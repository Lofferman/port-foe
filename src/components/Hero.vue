<template>
  <div class="env">
      <div id="canvas"></div>
  </div>
</template>

<script>
import P5 from 'p5'
import { onMounted } from "vue";
export default {
    setup() {
        onMounted(() => {
            const sketch = s => {
                var drop = []
                let w = window.innerWidth-5;
                let h = window.innerHeight-7;



                s.setup = () => {
                    s.createCanvas(w, h);
                    for(var i = 0; i < 200; i++) {
                        drop[i] = new Drop();
                    }
                };


                s.draw = () => {
                    s.background(255);
                    drop.filter((d) => {
                        d.show();
                        d.update();
                    })
                    //red
                    s.fill(255);
                    s.stroke(255, 0, 0)
                    s.strokeWeight(4)
                    s.textSize(192)
                    s.textAlign(s.CENTER);
                    s.text('Offerman', w/1.9999, h/1.68888);

                    //blue
                    s.fill(255);
                    s.stroke(0, 0, 255)
                    s.strokeWeight(4)
                    s.textSize(192)
                    s.textAlign(s.CENTER);
                    s.text('Offerman', w/2.01111, h/1.71111);

                    //black
                    s.fill(255);
                    s.stroke(51)
                    s.strokeWeight(4)
                    s.textSize(192)
                    s.textAlign(s.CENTER);
                    s.text('Offerman', w/2, h/1.7);

                    

            };
            class Drop{
                    x;
                    y;
                    speed;
                    gravity;
                    constructor(){
                        this.x = s.random(0, window.innerWidth);
                        this.y = s.random(0, -window.innerHeight);
                        this.speed = 0;
                        this.gravity = 0;
                    }
                
                    
                    show = function() {
                        s.noStroke();
                        s.fill(0);
                        s.ellipse(this.x, this.y, s.random(1, 5), s.random(1, 5));   
                    }
                    update = function() {
                        this.speed = s.random(5, 15);
                        this.gravity = 3
                        this.y = this.y + this.speed*this.gravity;  
                        
                        if (this.y > window.innerHeight) {
                        this.y = s.random(0, -window.innerHeight);
                        this.gravity = 0;
                    }

                }
                }
            }
            return new P5(sketch, 'canvas');
            });
    }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to component only -->
<style scoped>
    .env{
        width: 100vw;
    }
    #canvas{
    }
</style>
