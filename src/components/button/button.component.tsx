type ButtonPropTypes = {
  text: string;
  styles?: string;
  onClick?: () => void;
};

export const Button = ({
  text,
  styles = "",
  onClick = () => {
    console.log("clicked");
  },
}: ButtonPropTypes) => (
  <button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}
    onClick={onClick}
  >
    {text}
  </button>
);
