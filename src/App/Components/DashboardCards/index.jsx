import './styles.css';
import { PersonalCardIcon } from '../Icons/PersonalCardIcon'

export const DashboardCards = (props) => {

    return (
        <div className="dashboard-card-wrapper">
            <p className="dashboard-card-title">{props.title}</p>
            {props.icon}
            <p className="dashboard-card-description">{props.description}</p>
            <a href="#" className='dashboard-card-navlink'>zobacz więcej</a>
        </div>







    );
};