import { getCardRootOverlayStyles } from './card-root-styles';

export const cardOverlay = `
<div class="page__container card-generator-page">
  
  <section class="card-settings">
  <h2 class="visibility-hidden">Card generator</h2>
    
    <section>
      <h3 class="card-section__title">Styles</h3>
      <div class="settings__section" id="cardStyles">
        <figure class="img-container focus" id="overlayStyle">
          <svg class="img-icon">
            <use xlink:href="./icons.svg#overlay-icon"></use>
          </svg>
          <figcaption>Overlay</figcaption>
        </figure>
        <figure class="img-container" id="stackedStyle">
          <svg class="img-icon">
            <use xlink:href="./icons.svg#stacked-icon"></use>
          </svg>   
          <figcaption>Stacked</figcaption>
        </figure>
      </div>
    </section>

    <div class="spacer"></div>

    <section id="cardContent">
      <h3 class="card-section__title">Card Content</h3>
      <div class="settings__section">      
        <div class="sub-section">
          <h4 class="sub-section__title">Horizontal</h4>
          <div class="buttons-group" id="horizontal-card-content">
            <button class="setting__button focus" id="horizontal-left-button">Left</button>
            <button class="setting__button" id="horizontal-center-button">Center</button>
            <button class="setting__button" id="horizontal-right-button">Right</button>
          </div>
        </div>
        
        <div class="sub-section">
          <h4 class="sub-section__title">Vertical</h4>
          <div class="buttons-group" id="vertical-card-content">
          <button class="setting__button" id="vertical-top-button">Top</button>
          <button class="setting__button" id="vertical-center-button">Center</button>
          <button class="setting__button focus" id="vertical-bottom-button">Bottom</button>
          </div>
        </div>
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
            <div class="buttons-group" id="aspectRatio">
              <button class="setting__button" id="aspectRatio_4_3">4/3</button>
              <button class="setting__button focus" id="aspectRatio_1_1">1/1</button>
              <button class="setting__button" id="aspectRatio_1_2">1/2</button>
            </div>
        </div>        
      </div>
    </section>

   <div class="spacer"></div>

    <section>
      <h3 class="card-section__title">Card Overlay</h3>
      <div class="settings__section">      
        <div class="sub-section">
          <h4 class="sub-section__title">Style/Direction</h4>
          <div class="buttons-group" id="cardOverlay">
            <button class="setting__button" id="top-button">Top</button>
            <button class="setting__button focus" id="bottom-button">Bottom</button>
            <button class="setting__button" id="bottom-right-button">
              <svg class="button-icon">
                <use xlink:href="./icons.svg#bottom-right"></use>
              </svg>
            </button>
            <button class="setting__button" id="top-right-button">
              <svg class="button-icon">
                <use xlink:href="./icons.svg#top-right"></use>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>

    <div class="spacer"></div>

    <section>
      <h3 class="card-section__title">Text Shadow</h3>
      <div class="settings__section">
        <div class="buttons-group" id="textShadow">
          <button class="setting__button focus" id="basicButton">Basic</button>
          <button class="setting__button" id="heavyButton">Heavy</button>
          <button class="setting__button" id="noneButton">None</button>
        </div>
      </div>
    </section>

    <div class="spacer"></div>

    <section>
      <h3 class="visibility-hidden">Border & Padding</h3>
      <div class="settings__section" id="inputRange">
        <div class="slider-section">
          <h4 class="sub-section__title">Border Radius</h4>        
              
          <div >
          <input class="card__slider" name="border" type="range" min="1" max="100" value="8" id="borderRadius">
          </div>
        </div>

        <div class="slider-section">
          <h4 class="sub-section__title">Padding</h4>
          <div>
              <input class="card__slider" name="padding" type="range" min="1" max="63" value="10" id="padding">
          </div>
        </div>
      </div>
    </section>

  </section>


  <div class="preview">
    <section class="preview__image">
      <h2 class="visibility-hidden">Image Preview</h2>
      <article class="card overlay" id="imagePreview">
          <div class="image-wrap">
            <div class="gradient"></div>
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
        <pre class="code__section"><code language-html">
      &lt;article class="card overlay"&gt;
        &lt;div class="image-wrap"&gt;
          &lt;div class="gradient"&gt;&lt;/div&gt;
          &lt;img class="card-image" src="./im-fine.svg" alt="image preview"&gt;
        &lt;/div&gt;
        &lt;div class="card-content"&gt;
          &lt;div class="card-side"&gt;
            &lt;h2 class="card-title"&gt;Amazing article&lt;/h2&gt;
            &lt;cite class="card-subtitle"&gt;By great author&lt;/cite&gt;
          &lt;/div&gt;
        &lt;/div&gt;
      &lt;/article&gt;        
        </code></pre>
        <button class="code-copy">Copy</button>
        </div>
        
        <div>
        <h3>CSS</h3>
        <pre class="code__section">
          <code class="language-css" id="cssCodeBlock">
    :root {
      --border-radius-card: 8px;
      --padding-card: 10px;
      --aspect-ratio-card: 1/1;
      --overlay-direction: 0deg;
      --overlay-color: rgba(0, 0, 0, 0);
      --card-text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
      --gap-card: 8px;
      --radius-button: 10px;
      --color-button: #6d7bf8;
      --aspect-ratio-image: 1/1;
      --justify-content-value: flex-end;
      --align-items-value: flex-start;
      --text-align-value: start;
      --margin-top-subtitle: 0;
      --margin-inline-value: 0 auto;
      --card-side-margin: ;
      --card-image-position:  absolute;
      --card-image-object-fit: cover;
      --card-title-color: #fff;
      --card-subtitle-color: #fff;
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
    
    .gradient {
      background: linear-gradient(var(--overlay-direction), rgba(0, 0, 0, 0.94) 0%, var(--overlay-color) 64.17%);
      height: 100%;
      width: 100%;
      opacity: 0.4;
      position: absolute;
      z-index: 1;
      inset: 0;
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
      
        </code>
        </pre>
        <button class="code-copy">Copy</button>
        </div>

    </section>      
  </div>
</div>
`;

export function setCssOverlayCodeBlock() {

  const cssCodeBlock = document.getElementById('cssCodeBlock') as HTMLElement;
  cssCodeBlock.textContent = `
  :root {${getCardRootOverlayStyles()}}
  
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
  
  .gradient {
    background: linear-gradient(var(--overlay-direction), rgba(0, 0, 0, 0.94) 0%, var(--overlay-color) 64.17%);
    height: 100%;
    width: 100%;
    opacity: 0.4;
    position: absolute;
    z-index: 1;
    inset: 0;
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
  `;

}