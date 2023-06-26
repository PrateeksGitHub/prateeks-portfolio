const Icon = ({ className }) => {
  return (
    <svg
      className={className}
      fill
      viewBox="0 0 40 28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="40" height="4" rx="2" />
      <rect y="12" width="40" height="4" rx="2" />
      <rect y="24" width="40" height="4" rx="2" />
    </svg>
  );
};

export default Icon;
