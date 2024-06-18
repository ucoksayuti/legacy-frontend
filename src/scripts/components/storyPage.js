import '../index.js'
const storyPage = (content) => `
  
   <article>
        <section id="slideShow">
          <div class="container-1">
            <div class="wrapper-1">
              <div class="slideshow">
                <img src="${content.image[0]}" class="slide-img" />
                <div class="overlay"></div>
              </div>

              <div class="slideshow">
                <img src="${content.image[1]}" class="slide-img" />
                <div class="overlay"></div>
              </div>

              <div class="slideshow">
                <img src="${content.image[2]}" class="slide-img" />
                <div class="overlay"></div>
              </div>
            </div>
            <div class="indicators-1">
              <button class="active"></button>
              <button></button>
              <button></button>
              
            </div>
          </div>
        </section>
      </article>
      <div>
      <div class="Desc">
            <h2>${content.title}</h2>
            <h1>${content.source}</h1>
            <p>${content.story}</p>
            
        </div>
`;

export {storyPage};

