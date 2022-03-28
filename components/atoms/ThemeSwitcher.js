// Icons
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";

// Mantine Components
import { ActionIcon, useMantineColorScheme } from "@mantine/core";

const ThemeSwitcher = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <ActionIcon
      variant="outline"
      color={dark ? "blue" : "yellow"}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      size="lg"
    >
      {dark ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
    </ActionIcon>
  );
};

export default ThemeSwitcher;
