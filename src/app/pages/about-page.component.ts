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
                    <div class="developer">  
                      <div class="developer_img"></div>
                      <div class="developer_name">Maryia Piarshai</div>
                      <div class="developer_tasks"></div>
                    </div>
                    <div class="developer">  
                      <div class="developer_img"></div>
                      <div class="developer_name">Dmitry Bartoshevich</div>
                      <div class="developer_tasks"></div>
                    </div>
                    <div class="developer">  
                      <div class="developer_img"></div>
                      <div class="developer_name">Maria Samoilova</div>
                      <div class="developer_tasks"></div>
                    </div>
                  </div>
                </section>
                
                <section class="acknowledgements">
                  <h2>Inspiration</h2>
                  <ul class=thanks_list>
                    <li class="inspiration"> <a href="https://css-generator.netlify.app"> CSS-generator</a> </li>
                    <li class="inspiration"> <a href="https://card-generator-lab.vercel.app"> Card Generator</a> </li>
                    <li class="inspiration"> <a href="https://flexboxfroggy.com"> Flexbox Froggy</a> </li>
                    <li class="inspiration"> <a href="https://sloths.rs.school"> Sloths</a> </li>
                  </ul>
                </section>

                <section class="scope">
                  <div class="about_git">More info about features and working process you can find in our <b><a href="https://github.com/marypershai/css-generator">GitHub</a></b> repository</div>
                  <div class="about_git_img"></div>
                </section>

              <div>`,
  childComponents: [],
});
