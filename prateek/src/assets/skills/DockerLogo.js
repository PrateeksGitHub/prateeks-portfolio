const Icon = ({ className }) => {
  return (
    <svg
      className={className}
      fill
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="512" height="512" rx="256" fill="white" />
      <path
        d="M296 226H338ZM246 226H288ZM197 226H239ZM148 226H189ZM98 226H140ZM148 180H189ZM197 180H239ZM246 180H288ZM246 134H288Z"
        fill="black"
      />
      <path
        d="M296 226H338M246 226H288M197 226H239M148 226H189M98 226H140M148 180H189M197 180H239M246 180H288M246 134H288"
        stroke="#066DA5"
        stroke-width="38"
      />
      <path
        d="M472 228C472 228 454 211 417 217C413 188 382 171 382 171C382 171 353 206 374 245C368 248 358 252 343 252H68C63 271 63 397 201 397C300 397 374 351 409 267C461 271 472 228 472 228Z"
        fill="#066DA5"
      />
    </svg>
  );
};

export default Icon;
