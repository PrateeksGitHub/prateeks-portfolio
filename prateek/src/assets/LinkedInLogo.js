const Icon = ({ className }) => {
  return (
    <svg
      className={className}
      fill
      viewBox="0 0 30 31"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M30 3.49991C30 1.84305 28.6569 0.499908 27 0.499908H3C1.34315 0.499908 0 1.84306 0 3.49991V27.4999C0 29.1568 1.34315 30.4999 3 30.4999H27C28.6569 30.4999 30 29.1568 30 27.4999V3.49991ZM8.96484 11.9257H4.57031V26.2226H8.96484V11.9257ZM11.3672 11.9257H15.5859L15.6445 13.8593C17.8125 10.7538 25.0195 9.87492 25.6055 16.9062V26.2226H21.2109L21.2695 17.8437C20.918 14.914 16.9922 13.9569 15.8203 17.5312V26.2226H11.3672V11.9257ZM9.25781 7.35538C9.25781 5.4335 7.69531 4.87491 6.85547 4.83585C6.01562 4.83585 4.33594 5.33975 4.33594 7.35538C4.33594 9.371 6.01562 9.87491 6.85547 9.87491C7.69531 9.83585 9.25781 9.27725 9.25781 7.35538Z"
      />
    </svg>
  );
};

export default Icon;