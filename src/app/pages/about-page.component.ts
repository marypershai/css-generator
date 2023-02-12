import { checkLang } from '../service/lang.service';
import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class AboutPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
    this.createContent();
  }

  createContent(): void {
    const { lang } = checkLang();
    this.template = `<div class="about_container">

                      <section class="application">
                        <div class="about_greeting">${lang.about_welcome}<span class="about_logo">style<span class="about_sublogo">It</span></span></div>
                        <div>${lang.about_greeting1} <a href="#css-generator">«${lang.cssGenerator}»</a>. ${lang.about_greeting2} <a href="#card-generator">«${lang.cardGenerator}»</a>${lang.about_greeting3} <a href="#game">«${lang.game}»</a> ${lang.about_greeting4}</div>
                      </section>

                      <section class="team">
                        <h2 class="about_team_subheader">${lang.about_team}</h2>
                        <div class="developers">
                          <a href="https://github.com/marypershai">
                            <div class="developer">  
                              <div class="developer_img"></div>
                              <div class="developer_name">${lang.about_developer1}</div>
                              <div class="developer_tasks">CSS-generator</div>
                            </div>
                          </a>
                          <a href="https://github.com/bartoshevich">
                            <div class="developer">  
                              <div class="developer_img"></div>
                              <div class="developer_name">${lang.about_developer2}</div>
                              <div class="developer_tasks">Card Generator</div>
                            </div>
                          </a>
                          <a href="https://github.com/4Quark">
                            <div class="developer">  
                              <div class="developer_img"></div>
                              <div class="developer_name">${lang.about_developer3}</div>
                              <div class="developer_tasks">Flex Sloth, About</div>
                            </div>
                          </a>
                        </div>
                      </section>
                      
                      <section class="acknowledgements">
                        <h2>${lang.about_inspiration}</h2>
                        <ul class=thanks_list>
                          <a href="https://css-generator.netlify.app"> <li class="inspiration">  CSS-generator </li></a>
                          <a href="https://card-generator-lab.vercel.app"> <li class="inspiration">  Card Generator  </li></a>
                          <a href="https://flexboxfroggy.com"> <li class="inspiration">  Flexbox Froggy  </li></a>
                          <a href="https://sloths.rs.school">  <li class="inspiration"> Sloths  </li></a>
                        </ul>
                      </section>

                      <a href="https://github.com/marypershai/css-generator">
                        <section class="scope">
                          <div class="about_git">${lang.about_more} <b>GitHub</b> ${lang.about_repo}</div>
                          <div class="about_git_img"></div>
                        </section>
                      </a>

                    <div>`;
  }
}

export const aboutPageComponent = new AboutPageComponent({
  selector: 'app-card-generator-page',
  template: '',
  childComponents: [],
});
