import "./Button.scss";

export type ButtonProps = {
  /** The label of the button */
  label: string;
  /** The buttons variant:
   * Two additional options have been added
   * icon : for the close button of the modal
   * ghost : for the cancel button of the modal
   */
  variant?: "primary" | "secondary" | "link" | "icon" | "ghost";
  /** The callback to be use by the button, this doesn't work with the "link" variant, for link use href */
  onClick?: () => void;
  /** A special prop for the Link variant, we're using anchor for links */
  href?: string;
  /** For external styles */
  className?: string;
};

const Button = ({
  label,
  variant = "primary",
  onClick,
  href,
  className = "",
}: ButtonProps) => {
  if (variant === "link")
    return (
      <a className={`button link ${className}`} href={href} target="_blank">
        {label}
      </a>
    );
  return (
    <button onClick={onClick} className={`button ${className} ${[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
