import './styles.css';
import { SingleQuestion } from './SingleQuestion';

export const FAQ = () => {
  // const [isTrue, setIsTrue] = useState(true);

  // const clickHandler = () => {
  //   setIsTrue(!isTrue);

  return (
    <div>
      <h1 className="FAQ">FAQ</h1>
      <p className="naglowek">
        Tutaj znajdź odpowiedzi na najczęściej zadawane pytania.
      </p>

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />

      <SingleQuestion
        question={'Jak mogę zapisać się na szkolenie?'}
        answer={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eleifend rutrum ipsum, leo et in. Mattis porttitor volutpat placerat suspendisse ante in cursus etiam ullamcorper. Sollicitudin egestas aliquam, adipiscing adipiscing iaculis habitant. Viverra pretium tincidunt nisl pellentesque ut adipiscing non.Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        }
      />
    </div>
  );
};
