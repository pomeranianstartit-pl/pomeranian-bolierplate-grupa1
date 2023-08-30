import { SettingIcon } from '../Icons/SettingIcon';
import { MenuArrow } from '../Icons/MenuArrow';
export function HeaderMenu() {
  return (
    <div className="images-container">
      <SettingIcon />
      {/* todo let's replace thist with:<RoundImage/>*/}
      <div className="circular_image">
        <img src="kursantmikolaj.png" alt="kursant" />
      </div>
      <div className="name-surname-container">
        <h4>YourNameAndSurname</h4>
        <h5>Test</h5>
      </div>
      <MenuArrow className="menu-arrow" />
    </div>
  );
}
