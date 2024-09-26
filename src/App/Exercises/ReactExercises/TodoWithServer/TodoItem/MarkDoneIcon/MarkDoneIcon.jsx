import './MarkDoneIcon.css';

export function MarkDoneIcone({ isDone }) {
  const svgClassName = `mark-icon ${isDone ? 'mark-icon--done' : ''}`;
  return (
    <svg
      width="35"
      height="20"
      viewBox="0 0 45 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={svgClassName}
    >
      <path
        d="M15.9375 30C15.6912 30.0003 15.4473 29.952 15.2198 29.8577C14.9923 29.7635 14.7856 29.6252 14.6117 29.4509L1.48584 16.326C1.3117 16.1519 1.17357 15.9453 1.07932 15.7178C0.985066 15.4903 0.936545 15.2465 0.936523 15.0002C0.936502 14.754 0.984982 14.5101 1.07919 14.2826C1.17341 14.0551 1.31151 13.8484 1.48561 13.6743C1.65971 13.5001 1.86641 13.362 2.09389 13.2678C2.32138 13.1735 2.56521 13.125 2.81145 13.125C3.05769 13.1249 3.30152 13.1734 3.52902 13.2676C3.75652 13.3618 3.96324 13.4999 4.13738 13.6741L15.9375 25.4731L40.8632 0.548308C41.2149 0.197058 41.6917 -0.000160776 42.1888 9.83439e-08C42.6859 0.000160973 43.1626 0.197689 43.5141 0.549166C43.8656 0.900644 44.0632 1.37731 44.0634 1.8744C44.0636 2.37148 43.8664 2.84831 43.5152 3.20008L17.2635 29.4509C17.0895 29.6252 16.8828 29.7635 16.6552 29.8577C16.4277 29.9519 16.1838 30.0003 15.9375 30Z"
        fill="#000000"
      />
    </svg>
  );
}
