import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li className="aside-row">
            <HouseIcon />
            <NavLink to="dashboard">Dashboard</NavLink>
          </li>
          <li className="aside-row">
            <ElementIcon />
            <NavLink to="blocks">Bloki</NavLink>
          </li>
          <li className="aside-row">
            <EditIcon />
            <NavLink to="exercises">Ćwiczenia</NavLink>
          </li>
          <li className="aside-row">
            <PersonalCardIcon />
            <NavLink to="CV">CV</NavLink>
          </li>
          <li className="aside-row">
            <CalendarIcon />
            <NavLink to="Calendar">Kalendarz</NavLink>
          </li>
          <li className="aside-row">
            <SettingIcon />
            <NavLink to="Settings">Ustawienia</NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
