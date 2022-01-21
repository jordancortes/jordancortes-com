import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const Button = ({ ...props }: any) => {
  props.className = props.className + " btn " + props.variant;

  return <ButtonUnstyled {...props} />;
};
