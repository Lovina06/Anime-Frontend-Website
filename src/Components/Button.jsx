

const Button = ({ id, title, leftIcon, rightIcon, containerClass, onClick }) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden
        rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {leftIcon}
        {title}
        {rightIcon}
      </span>
    </button>
  );
};

export default Button;