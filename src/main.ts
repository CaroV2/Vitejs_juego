import './style.css'
import p5 from 'p5'

/*const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h1>Hello Vite!</h1>
  <a href="https://vitejs.dev/guide/features.html" target="_blank">Documentation</a>
`
*/


let sketch = function(p: any) {
  p.setup = function() {
      p.createCanvas(700, 410);

      p.x = p.width / 2;
      p.y = p.height / 2;
  };
  
  p.draw = function() {
      p.background(0);
      p.ellipse(p.x, p.y, 50);
  };

  p.move = function(){
      p.velx = 0;

  };
}

let myp5 = new p5(sketch);