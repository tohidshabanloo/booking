import Button from "@/ui/Button";
import Select from "@/ui/Select";
import type { FC } from "react";
import styles from "./Home.module.css";

const HomeTemplate: FC = () => {
  const handleSelectChange = (value: string) => {
    console.log(value);
  };

  return (
    <div className={styles.maintemplate}>
      <Button>دکمه</Button>
      <Select
        data={[
          { value: "1", label: <p>one</p> },
          { value: "2", label: <p>two</p> },
          { value: "3", label: <p>three</p> },
        ]}
        onChange={handleSelectChange}
      />
    </div>
  );
};

export default HomeTemplate;
