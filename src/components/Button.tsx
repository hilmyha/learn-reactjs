type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export const Button = (props: ButtonProps) => {
  return (
    <button
      className="p-2 bg-blue-500 text-white"
      onClick={(event) => props.handleClick(event, 1)}
    >
      Click Me
    </button>
  );
};
