import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';
import { checkLang } from '../service/lang.service';

class HomePageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent(): void {
    const { lang } = checkLang();
    this.template = `<div class="home_container">

                      <section class="home_promo">
                        <h2 class="home_subheader">${lang.home_h2_promo}</h2>
                        <div class="home_promo_div">${lang.home_welcome}<span class="about_logo">style<span class="about_sublogo">It</span></span></div>
                        <div class="home_greeting">${lang.home_welcome2}</div>
                      </section>

                      <div class="slider">
                          <div class="slider-inner">
                              <input class="slider-open" type="radio" id="slider-1" name="slider" aria-hidden="true" hidden="" checked="checked">
                              <div class="slider-item">
                                <div class="home_section">
                                  <div class="section_info">
                                    <h3 class="home_subheader">${lang.home_h2_css_generator}</h3>
                                    <div class="home_body">${lang.home_div_css_generator}</div>
                                    <a href="#css-generator"><div class="home_link">GO</div></a>
                                  </div>
                                  <div class="home_img home_img_css-generator"></div>
                                </div>
                              </div>
                              <input class="slider-open" type="radio" id="slider-2" name="slider" aria-hidden="true" hidden="">
                              <div class="slider-item">
                                <div class="home_section">
                                  <div class="section_info">
                                    <h3 class="home_subheader">${lang.home_h2_card_generator}</h3>
                                    <div class="home_body">${lang.home_div_card_generator}</div>
                                    <a href="#card-generator"><div class="home_link">GO</div></a>
                                  </div>
                                  <div class="home_img home_img_card-generator"></div>
                                </div>
                              </div>
                              <input class="slider-open" type="radio" id="slider-3" name="slider" aria-hidden="true" hidden="">
                              <div class="slider-item">
                                <div class="home_section">
                                  <div class="section_info">
                                    <h3 class="home_subheader">${lang.home_h2_hexrgb}</h3>
                                    <div class="home_body">${lang.home_div_hexrgb}</div>
                                    <a href="#hex-rgb"><div class="home_link">GO</div></a>
                                  </div>
                                  <div class="home_img home_img_hex-rgb"></div>
                                </div>
                              </div>
                              <input class="slider-open" type="radio" id="slider-4" name="slider" aria-hidden="true" hidden="">
                              <div class="slider-item">
                                <div class="home_section">
                                  <div class="section_info">
                                    <h3 class="home_subheader">${lang.home_h2_game}</h3>
                                    <div class="home_body">${lang.home_div_game}</div
                                    <a href="#game"><div class="home_link">GO</div></a>
                                  </div>
                                  <div class="home_img home_img_game"></div>
                                </div>
                              </div>
                              <ol class="slider-indicators">
                                  <li>
                                      <label for="slider-1" class="slider-bullet">•</label>
                                  </li>
                                  <li>
                                      <label for="slider-2" class="slider-bullet">•</label>
                                  </li>
                                  <li>
                                      <label for="slider-3" class="slider-bullet">•</label>
                                  </li>
                                  <li>
                                      <label for="slider-4" class="slider-bullet">•</label>
                                  </li>
                              </ol>
                          </div>
                      </div>

                      <section>
                        <a href="#about">
                          <div class="home_about">
                            <div class="section_info">
                              <h3 class="home_subheader">${lang.home_h2_about}</h3>
                              <div class="home_body">${lang.home_div_about}</div>
                              
                            </div>
                            <div class="home_img home_img_about"></div>
                          </div>
                        </a>
                      </section>

                    <div>`;
  }

  public afterInit() {
    let currentSlideNumber = 0;
    const inputs = document.querySelectorAll('.slider-open');
    const next = function () {
      inputs.forEach(el => {
        if (el instanceof HTMLInputElement) el.checked = false;
      });
      const currentSlide = inputs[currentSlideNumber] as HTMLInputElement;
      currentSlide.checked = true;
      currentSlideNumber = (currentSlideNumber < 3) ? currentSlideNumber + 1 : 0;
    };
    setInterval(next, 3000);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: '',
  childComponents: [],
});
