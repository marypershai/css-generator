import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class AboutPageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const aboutPageComponent = new AboutPageComponent({
  selector: 'app-card-generator-page',
  template: ` <div class="about_container">

                <section class="application">
                  <div class="about_greeting">Welcome to <span class="about_logo">style<span class="about_sublogo">It</span></span></div>
                  <div>This application can help you to learn CSS and style your project. You can find CSS-generator on page <a href="#css-generator">css-generator</a>. Also you can style card on page <a href="#card-generator">card creator</a>. And <a href="#game">Flex Sloths</a> is a game for learning CSS flexbox</div>
                </section>

                <section class="team">
                  <h2 class="about_team_subheader">Team</h2>
                  <div class="developers">
                    <a href="https://github.com/marypershai">
                      <div class="developer">  
                        <div class="developer_img"></div>
                        <div class="developer_name">Maryia Piarshai</div>
                        <div class="developer_tasks">CSS-generator</div>
                      </div>
                    </a>
                    <a href="https://github.com/bartoshevich">
                      <div class="developer">  
                        <div class="developer_img"></div>
                        <div class="developer_name">Dmitry Bartoshevich</div>
                        <div class="developer_tasks">Card Generator</div>
                      </div>
                    </a>
                    <a href="https://github.com/4Quark">
                      <div class="developer">  
                        <div class="developer_img"></div>
                        <div class="developer_name">Maria Samoilova</div>
                        <div class="developer_tasks">Flex Sloth, About</div>
                      </div>
                    </a>
                  </div>
                </section>
                
                <section class="acknowledgements">
                  <h2>Inspiration</h2>
                  <ul class=thanks_list>
                    <a href="https://css-generator.netlify.app"> <li class="inspiration">  CSS-generator </li></a>
                    <a href="https://card-generator-lab.vercel.app"> <li class="inspiration">  Card Generator  </li></a>
                    <a href="https://flexboxfroggy.com"> <li class="inspiration">  Flexbox Froggy  </li></a>
                    <a href="https://sloths.rs.school">  <li class="inspiration"> Sloths  </li></a>
                  </ul>
                </section>

                <a href="https://github.com/marypershai/css-generator">
                  <section class="scope">
                    <div class="about_git">More info about features and working process you can find in our <b>GitHub</b> repository</div>
                    <div class="about_git_img"></div>
                  </section>
                </a>

              <div>`,
  childComponents: [],
});
