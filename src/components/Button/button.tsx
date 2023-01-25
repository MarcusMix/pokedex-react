import { FC } from "react";
import { FlexBox } from "../Flexbox/flexbox";

// styles
import * as Styles from "./button.styles";

// types
import type { IButton } from "./button.types";

// ::
const Button: FC<IButton> = ({ children, disabled, onClick }) => {
  return (
    <Styles.Button disabled={disabled} onClick={onClick}>
      <FlexBox align="center" justify="flex-start" direction="row" gap="xxxs">
        {children}
      </FlexBox>
    </Styles.Button>
  );
};

export default Button;