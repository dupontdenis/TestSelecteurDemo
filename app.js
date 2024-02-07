// config
const HTML = [
  `<div class="top">
    <h1>h1</h1>      
    <ul>     
       <li class="A B" id="item.A">l1</li>    
       <li class="A" id="b">l2</li>    
       <li class="B" id="c">l3</li>   
     </ul>
     <footer> footer </footer>
</div>
`,
  ` <p id="item1" class="t">para 1</p><br>
    <p id="item2" class="t">para 2</p><br>
    <p id="item3" class="t">para 3</p><br>
    <p id="item4" class="t">para 4</p><br>
`,
  `<div class="wrapper">
  <div class="card">
    <h3>Flex</h3>
    <div class="date">Année 2024</div>
    <p>Cours L1</p>
  </div>
  <div class="card">
    <h3>Grid</h3>
    <div class="date">Année 2025</div>
    <p>Cours L2</p>
  </div>
    <div class="card">
    <h3>Grid</h3>
    <div class="date">Année 2026</div>
    <p>Cours L3</p>
  </div>
</wrapper>
`,
];
const CSS = [
  `.A.B, ul ~ :last-child {
    border: 1px dotted white;
}`,
  `p:nth-child(2n+1) {
      border: 1px dotted white
}`,
  ` .wrapper {
        display: flex;
        flex-wrap:wrap;
        // gap:10px;
}
 
.card {
      flex: 0 0 200px;
      border: 2px solid rgb(96, 139, 168);
      display: flex;
      flex-direction: column;
}
.date {
    order: -1;
    text-align: right;
}
`,
];

// DOM
const exemple = document.querySelector("#nb");
const html = document.querySelector(".html");
const css = document.querySelector(".css");
const textareaHTML = document.querySelector(".user-html");
const textareaCSS = document.querySelector(".user-css");

textareaHTML.value = HTML[0];
textareaCSS.value = CSS[0];

function change() {
  css.innerHTML = textareaCSS.value;
  html.innerHTML = textareaHTML.value;
}

exemple.addEventListener("change", function () {
  textareaHTML.value = HTML[this.value];
  textareaCSS.value = CSS[this.value];
  nb = this.value;
  change();
});

textareaHTML.addEventListener("input", change);
textareaCSS.addEventListener("input", change);

change();
