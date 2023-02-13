import { getCardRootStackedStyles } from './card-root-styles';

export const cardStacked = `
<div class="page__container card-generator-page">
  
  <section class="card-settings">
  <h2 class="visibility-hidden">Card generator</h2>
    
    <section>
      <h3 class="card-section__title">Styles</h3>
      <div class="settings__section" id="cardStyles">
        <figure class="img-container " id="overlayStyle">
          <svg class="img-icon">
            <use xlink:href="./icons.svg#overlay-icon"></use>
          </svg>
          <figcaption>Overlay</figcaption>
        </figure>
        <figure class="img-container focus" id="stackedStyle">
          <svg class="img-icon">
            <use xlink:href="./icons.svg#stacked-icon"></use>
          </svg>   
          <figcaption>Stacked</figcaption>
        </figure>
      </div>
    </section>

    <div class="spacer"></div>

    <section>
      <h3 class="card-section__title">Card Content</h3>
      <div class="settings__section">      
        <button class="card__image focus">
        <img class="image" src="https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1676108124/rs-school/css/cardContentSimple.jpg" alt="simple card layout" width="530" height="108">
        </button>

        <button class="card__image">
        <img class="image" src="https://res.cloudinary.com/bartoshevich/image/upload/f_auto,q_auto/v1676108124/rs-school/css/cardContentStandart.jpg" alt="stantard card layout" width="530" height="112">
        </button>

        <button class="card__image">
        <img class="image" src="https://res.cloudinary.com/bartoshevich/image/upload/v1676108124/rs-school/css/cardContentColumn.jpg" alt="column card layout" width="530" height="165">
        </button>


      </div>
    </section>

    <div class="spacer"></div> 

    <section>
      <h3 class="card-section__title">Card Image</h3>
      <div class="settings__section">
        <div class="file-upload-section">
          <button class="file-upload">Change Image...</button>
        </div>
        <div class="sub-section">
            <h4 class="sub-section__title">Aspect Ratio</h4>
            <div class="buttons-group">
              <button class="setting__button ">4/3</button>
              <button class="setting__button focus">1/1</button>
              <button class="setting__button">1/2</button>
            </div>
        </div>        
      </div>
    </section>

   <div class="spacer"></div>

      

    <section>
      <h3 class="visibility-hidden">Border & Padding</h3>
      <div class="settings__section">
        <div class="slider-section">
          <h4 class="sub-section__title">Border Radius</h4>        
              
          <div >
          <input class="card__slider" name="border" type="range" min="1" max="100" value="10">
          </div>
        </div>

        <div class="slider-section">
          <h4 class="sub-section__title">Padding</h4>
          <div>
              <input class="card__slider" name="padding" type="range" min="1" max="63" value="10">
          </div>
        </div>
      </div>
    </section>

  </section>


  <div class="preview">
    <section class="preview__image">
      <h2 class="visibility-hidden">Image Preview</h2>
      <article class="card stacked">
          <div class="image-wrap">
            <img class="card-image" src="./im-fine.svg" alt="image preview">
          </div>
          <div class="card-content">
            <div class="card-side">
              <h2 class="card-title">Amazing article</h2>
              <cite class="card-subtitle">By great author</cite>
            </div>
          </div>
      </article>
    </section>


    <section class="code__block">
      <h2 class="visibility-hidden">Code</h2>
        <div>
        <h3>HTML</h3>
        <pre class="code__section"><code class="language-html">
        &lt;article class="card stacked"&gt;
          &lt;div class="image-wrap"&gt;
            &lt;img class="card-image" src="./im-fine.svg" alt="image preview"&gt;
          &lt;/div&gt;
          &lt;div class="card-content"&gt;
            &lt;div class="card-side"&gt;
              &lt;h2&nbsp;class="card-title"&gt;Amazing article&lt;/h2&gt;
              &lt;cite class="card-subtitle"&gt;By great author&lt;/cite&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        &lt;/article&gt; 
            
        </code></pre>
        <button class="code-copy">Copy</button>
        </div>
        
        <div>
        <h3>CSS</h3>
        <pre class="code__section"><code class="css" id="cssCodeBlock">
  :root {
    --border-radius-card: 8px;
    --padding-card: 10px;
    --aspect-ratio-card: 1/1;
    --overlay-direction: 0deg;
    --overlay-color: rgba(0, 0, 0, 0);
    --card-text-shadow: none;
    --gap-card: 16px;
    --radius-button: 10px;
    --color-button: #6d7bf8;
    --aspect-ratio-image: 1/1;
    --justify-content-value: flex-end;
    --align-items-value: stretch;
    --text-align-value: start;
    --margin-top-subtitle: 0;
    --margin-inline-value: ;
    --card-side-margin: 16px;
    --card-image-position: ;
    --card-image-object-fit: contain;
    --card-title-color: #111;
    --card-subtitle-color: #333;
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: var(--justify-content-value);
    align-items: var(--align-items-value);
    min-height: 254px;
    width: 340px;
    border-radius: var(--border-radius-card);
    overflow: hidden;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.09);
    aspect-ratio: var(--aspect-ratio-card);
    text-align: var(--text-align-value);
  }
  
  .card-content {
    z-index: 1;
    text-shadow: var(--card-text-shadow);
    padding: var(--padding-card);
  }
          
  .image-wrap {
    position: absolute;
    inset: 0;
  }
  
  .card-content-wrapper .card-button {
    margin-inline: var(--margin-inline-value);
  }
  
  .card-title {
    font-weight: 700;
    font-size: 20px;
    color: var(--card-title-color);
    margin-bottom: 16px;
  }
  
  .card-subtitle {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--card-subtitle-color);
  }
         
  .card-image {
    display: block;
    max-width: 100%;
    object-fit: var(--card-image-object-fit);
    position: var(--card-image-position);
    inset: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: var(--aspect-ratio-image);
  }
          
  .stacked {
  
    & > .card-content {
      text-shadow: revert !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    & > .image-wrap {
      position: revert;
      inset: 0;
    }
  
    & > .card-title {
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 16px 0;
    }
  
    & > .card-subtitle {
      font-weight: 400;
      display: block;
      font-style: normal;
      margin-top: var(--margin-top-subtitle);
  
    & > .card-side {
      margin-top: var(--card-side-margin);
    }
  
  }
                  
  .card-button {
    display: block;
    margin-inline: auto;
    border: none;
    background: var(--color-button);
    color: white;
    padding: 8px 16px;
    border-radius: var(--radius-button);
    cursor: pointer;
  }
          
  .dropdown-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
    
        </code>
        </pre>
        <button class="code-copy">Copy</button>
        </div>

    </section>      
  </div>
</div>
`;




export function setCssStackedCodeBlock() {

  const cssCodeBlock = document.getElementById('cssCodeBlock') as HTMLElement;
  cssCodeBlock.textContent = `
  :root { 
  ${getCardRootStackedStyles()}
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: var(--justify-content-value);
    align-items: var(--align-items-value);
    min-height: 254px;
    width: 340px;
    border-radius: var(--border-radius-card);
    overflow: hidden;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.09);
    aspect-ratio: var(--aspect-ratio-card);
    text-align: var(--text-align-value);
  }
  
  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: var(--justify-content-value);
    align-items: var(--align-items-value);
    min-height: 254px;
    width: 340px;
    border-radius: var(--border-radius-card);
    overflow: hidden;
    box-shadow: 0 0 7px 3px rgba(0, 0, 0, 0.09);
    aspect-ratio: var(--aspect-ratio-card);
    text-align: var(--text-align-value);
  }
  
  .card-content {
    z-index: 1;
    text-shadow: var(--card-text-shadow);
    padding: var(--padding-card);
  }
          
  .image-wrap {
    position: absolute;
    inset: 0;
  }
  
  .card-content-wrapper .card-button {
    margin-inline: var(--margin-inline-value);
  }
  
  .card-title {
    font-weight: 700;
    font-size: 20px;
    color: var(--card-title-color);
    margin-bottom: 16px;
  }
  
  .card-subtitle {
    display: block;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: var(--card-subtitle-color);
  }
         
  .card-image {
    display: block;
    max-width: 100%;
    object-fit: var(--card-image-object-fit);
    position: var(--card-image-position);
    inset: 0;
    width: 100%;
    height: 100%;
    aspect-ratio: var(--aspect-ratio-image);
  }
          
  .stacked {
  
    & > .card-content {
      text-shadow: revert !important;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  
    & > .image-wrap {
      position: revert;
      inset: 0;
    }
  
    & > .card-title {
      font-weight: 700;
      font-size: 20px;
      margin: 0 0 16px 0;
    }
  
    & > .card-subtitle {
      font-weight: 400;
      display: block;
      font-style: normal;
      margin-top: var(--margin-top-subtitle);
  
    & > .card-side {
      margin-top: var(--card-side-margin);
    }
  
  }
                  
  .card-button {
    display: block;
    margin-inline: auto;
    border: none;
    background: var(--color-button);
    color: white;
    padding: 8px 16px;
    border-radius: var(--radius-button);
    cursor: pointer;
  }
          
  .dropdown-button {
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  `;

}