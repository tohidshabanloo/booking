import styles from "./Select.module.css";
import type { FC, ReactNode } from "react";

interface ISelectProps {
  data: {
    value: string;
    label: ReactNode;
  }[];
  onChange: (param: string) => void;
}

const Select: FC<ISelectProps> = (props) => {
  const { data, onChange } = props;

  return (
    <>
      {data.map((el) => (
        <div key={el.value} onClick={() => onChange(el.value)}>
          {el.label}
        </div>
      ))}
    </>
  );
};

export default Select;
