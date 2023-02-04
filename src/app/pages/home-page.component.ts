import { DMComponent } from '../../framework/index';
import { ComponentConfig } from '../../framework/tools/interfaces';

class HomePageComponent extends DMComponent {
  constructor(config: ComponentConfig) {
    super(config);
  }
}

export const homePageComponent = new HomePageComponent({
  selector: 'app-home-page',
  template: `
            <section class="main_slider">
              <input class="slider_input" type="radio" id="point-1" name="slider" checked>
              <input class="slider_input" type="radio" id="point-2" name="slider" >
              <input class="slider_input" type="radio" id="point-3" name="slider" >
              <input class="slider_input" type="radio" id="point-4" name="slider" >
              <div class="slides_wrapper">
                <div class="slides">
                  <img class="slider_img" src="https://cdn.rs.school/sloths/stickers/expert/image.svg" alt="slide CSS Generator">
                  <img class="slider_img" src="https://cdn.rs.school/sloths/stickers/deadline/image.svg" alt="slide Card Generator">
                  <img class="slider_img" src="https://cdn.rs.school/sloths/stickers/how-i-see-russian/image.svg" alt="slide Game">
                  <img class="slider_img" src="https://cdn.rs.school/sloths/stickers/mentor-with-his-students/image.svg" alt="slide About">
                </div>
              </div>
              <div class="slider_buttons">
                <label class="slider_label" for="point-1"></label>
                <label class="slider_label" for="point-2"></label>
                <label class="slider_label" for="point-3"></label>
                <label class="slider_label" for="point-4"></label>
              </div>
              <span class="capture">
                <a class="slide_caption caption1">CSS Generator</a>
                <a class="slide_caption caption2">Card Generator</a>
                <a class="slide_caption caption3">Game</a>
                <a class="slide_caption caption4">About</a>
              </span>
            </section>
            `,
  childComponents: [],
});
