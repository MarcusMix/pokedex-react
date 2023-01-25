import { FC } from "react";
import { FlexBox } from "../Flexbox/flexbox";

// components
import * as Styles from "../Input/input.styles";

// types
import type { IInput } from "./input.types";

// ::
const Input: FC<IInput> = ({ label, ...rest }) => {
  return (
    <FlexBox align="flex-start" justify="center" direction="column" gap="xxs">
      {label}
      <Styles.Input {...rest} />
    </FlexBox>
  );
};

export default Input;