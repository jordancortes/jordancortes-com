import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const Button = ({ ...props }: any) => {
  props.className =
    (props.variant === "primary"
      ? "bg-primary text-white"
      : props.variant === "bg-transparent text-primary border border-primary"
      ? "secondary"
      : "text-primary underline") +
    " py-2 px-3 text-sm font-medium rounded-sm disabled:opacity-50 disabled:cursor-not-allowed focus:ring-2 focus:ring-primary-light focus:ring-offset-1" +
    (props.className !== undefined ? " " + props.className : "");

  return <ButtonUnstyled {...props} />;
};
