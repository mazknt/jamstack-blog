import { Member } from "../components/page/Member";
import { client } from "../../libs/client";

export const getStaticProps = async () => {
  const member = await client.get({ endpoint: "member" });
  return {
    props: {
      member: member,
    },
  };
};

export default function member({ member }) {
  return <Member member={member} />;
}
