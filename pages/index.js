// Next
import Head from "next/head";

// Pages
import Demo from "@/pages/demo/demo";

// Mantine Components
import { Grid } from "@mantine/core";

// Components
import ThemeSwitcher from "@/components/atoms/ThemeSwitcher";
import LanguageSwitcher from "@/components/atoms/LanguageSwitcher";

const Home = ({ t }) => {
  return (
    <>
      <Head>
        <title>Alexandru Bejenaru - CV / Resume Website</title>
        <meta
          name="description"
          content="CV / Resume Website of Alexandru Bejenaru"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid>
        <Grid.Col span={6}>
          <ThemeSwitcher />
        </Grid.Col>
        <Grid.Col span={6} className="flex justify-end">
          <LanguageSwitcher />
        </Grid.Col>
      </Grid>
      <Demo t={t?.home} />
    </>
  );
};

export default Home;
