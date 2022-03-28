// Mantine Components
import {
  ColorScheme,
  ColorSchemeProvider,
  Container,
  MantineProvider,
} from "@mantine/core";

// Mantine Hooks
import { useColorScheme, useLocalStorageValue } from "@mantine/hooks";

const Theme = ({ children }) => {
  const userColorScheme = useColorScheme();

  const [colorScheme, setColorScheme] = useLocalStorageValue({
    key: "colorScheme",
    defaultValue: userColorScheme,
  });

  const toggleColorScheme = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
        }}
      >
        <Container px="sm" py="sm">
          {children}
        </Container>
      </MantineProvider>
    </ColorSchemeProvider>
  );
};

export default Theme;
