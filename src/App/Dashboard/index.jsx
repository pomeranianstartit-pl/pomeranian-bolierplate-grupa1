import './styles.css';
import hand from '../Images/emogiHand.svg';
import { useState } from 'react';
import { DashboardCard } from '../Components/DashboardCard/DashboardCard';
import exerciseIcone from '../Images/exerciseIcone.svg';
import BlogIcone from '../Images/blogIcon.svg';
import CodeIcone from '../Images/codeIcon.svg';
import FaqIcon from '../Images/FaqIcone.svg';
import personalcard from '../Images/personalcard.svg';
export const Dashboard = () => {
  const [availableCards] = useState([
    {
      sectionTitle: 'Moje CV',
      icon: <img src={personalcard} alt="business card resume" />,
      description: 'podgląd cv wraz z doświadczeniem',
      link: '/cv',
    },
    {
      sectionTitle: ' Ćwiczenia',
      icon: <img src={exerciseIcone} alt="business card resume" />,
      description: 'wszystkie wykonane ćwiczenia',
      link: '/excercise',
    },
    {
      sectionTitle: 'Blog',
      icon: <img src={BlogIcone} alt="business card resume" />,
      description: 'wpisy blogowe o technologii front-end',
      link: '/blog',
    },
    {
      sectionTitle: 'Tech stack',
      icon: <img src={CodeIcone} alt="business card resume" />,
      description: 'stack technologiczny realizowany na kursie',
      link: '/tech',
    },
    {
      sectionTitle: 'FAQ',
      icon: <img src={FaqIcon} alt="business card resume" />,
      description: 'odpowiedzi na najczęstsze pytania',
      link: '/faq',
    },
  ]);
  return (
    <div className="dashboard">
      <div className="dasboard-head">
        <img src={hand} />
        <h3 style={{ marginLeft: '10px' }}>Hej, tutaj Dominik!</h3>
      </div>
      <p>
        Poniżej znajdziesz najważniejsze informacje na temat mojej działalności
      </p>
      <div className="windows">
        {availableCards.map((card) => {
          return (
            <div className="window-main">
              <DashboardCard
                sectionTitle={card.sectionTitle}
                icon={card.icon}
                description={card.description}
                link={card.link}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
