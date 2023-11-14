import { Gear } from "../components/page/Gear";
import { client } from "../libs/client";

export const getStaticProps = async () => {
  //   const gears = await client.get({ endpoint: "gears" });
  const gears = await client.get({ endpoint: "gears" });

  return {
    props: {
      gears: gears,
    },
  };
};

export default function gears({ gears }) {
  return <Gear gears={gears} />;
}
