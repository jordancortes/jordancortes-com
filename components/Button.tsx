import ButtonUnstyled from "@mui/base/ButtonUnstyled";

export const Button = ({ ...props }: any) => {
  let l_size = "";
  switch (props.size) {
    case "big":
      l_size = "py-3 px-5 text-base md:py-4 md:px-6 md:text-xl";
      break;
    default:
      l_size = "py-2 px-3 text-sm md:py-3 md:px-5 md:text-base";
  }

  // primary (default), secondary, tertiary
  let l_variant = "";
  switch (props.variant) {
    case "secondary":
      l_variant =
        "bg-transparent text-primary border-primary hover:text-white hover:bg-primary active:bg-primary-dark active:border-primary-dark active:text-white focus:ring-primary-light disabled:border-primary-light disabled:text-primary-light";
      break;
    case "tertiary":
      l_variant = "text-primary underline";
      break;
    default:
      l_variant =
        "bg-primary text-white border-transparent hover:bg-primary-dark active:bg-primary-darker focus:ring-primary-light disabled:bg-primary-darker";
  }

  props.className =
    props.className +
    " " +
    l_size +
    " " +
    l_variant +
    " font-medium rounded-sm border disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-offset-2 focus:ring-2";

  return <ButtonUnstyled {...props} />;
};
