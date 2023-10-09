import './styles.css';
import Github from '../Images/tech-stack/githuub.svg';
import Jira from '../Images/tech-stack/jira.png';
import Js from '../Images/tech-stack/js.svg';
import Css from '../Images/tech-stack/css.svg';
import Html from '../Images/tech-stack/html.svg';


import { MyIcon } from './SingleIcon';

export const TechStack = () => {
  return (
    <div>
      <div>
        <h3> {'<'} TECHSTACK</h3>
        <p>
          Poniżej znajdziesz tech stack oraz nadzędzia, jakich nauczylem się
          podczas kursu.{' '}
          <span className="atetnion">DODAĆ IKONKĘ DO SIDEBARA!</span>
        </p>
        <div className="techstack">
          <div className="techstack-icons">
            <MyIcon ImgSrc={Github} name={'github'} />
            <MyIcon ImgSrc={Jira} name={'jira'} />
            <MyIcon ImgSrc={Css} name={'CSS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Html} name={'html'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
            <MyIcon ImgSrc={Js} name={'JS'} />
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};
