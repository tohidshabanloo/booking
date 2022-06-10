import {
  ButtonHTMLAttributes,
  Children,
  createElement,
  FC,
  ReactNode,
} from "react";
import styles from "./Button.module.css";

interface IButtonProps extends ButtonHTMLAttributes<Element> {
  children: ReactNode;
}
const Button: FC<IButtonProps> = (props) => {
  const { children, className, ...otherprops } = props;
  return createElement(
    "button",
    {
      className: `${styles.buttonRoot} ${className}`,
      ...otherprops,
    },
    children
  );
};
export default Button;
