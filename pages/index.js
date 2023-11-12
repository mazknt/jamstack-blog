import TopStyle from "../styles/Top/Top.module.css";
import { Button } from "../components/atomics/Button";
import DefaultLayout from "/components/templates/DefaultLayout.jsx";
import Image from "next/image";
import { client } from "../libs/client";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const gears = await client.get({ endpoint: "gears" });
  const movie = await client.get({ endpoint: "movie" });
  const member = await client.get({ endpoint: "member" });
  // console.log(member);
  // console.log("------------------------------------------------");
  // console.log(gears);
  // console.log("------------------------------------------------");
  // console.log(movie.image);
  return {
    props: {
      gears: gears,
      movie: movie,
      member: member,
    },
  };
};

export default function Top({ movie, member, gears }) {
  return (
    <DefaultLayout>
      <div className={TopStyle.main}>
        <div className={TopStyle.worksRow}>
          <Image width={720} height={405} src="/Thumnail_left.png" />
          <Image width={720} height={405} src="/Thumnail_center.png" />
          <Image width={720} height={405} src="/Thumnail_right.png" />
        </div>
        <div className={TopStyle.worksRow}>
          <Image width={720} height={405} src="/Thumnail.png" />
          <Image width={720} height={405} src="/Thumnail (2).png" />
          <Image width={720} height={405} src="/Thumnail (1).png" />
        </div>
        <div className={TopStyle.title}>
          <Image width={354} height={48} src="/footer_logo.png" />
          <span className={TopStyle.inline}></span>
          <h3 className={TopStyle.logo1}>shingo saegusa</h3>
          <h3 className={TopStyle.logo2}>Daichi Kasai</h3>
        </div>
        <div className={TopStyle.scroll}>
          <Image
            layout="fill"
            src="/Scroll.png"
            className={TopStyle.scrollImage}
          />
        </div>
      </div>
      <div className={TopStyle.worksField}>
        <div className={TopStyle.worksWrapper}>
          <span className={TopStyle.before}></span>
          <span className={TopStyle.works}>WORKS</span>
          <span className={TopStyle.before}></span>
        </div>
        <div className={TopStyle.worksContent}>
          <div className={TopStyle.worksRow}>
            {movie.contents.map((mov) => {
              return (
                <div className={TopStyle.work}>
                  <Image
                    width={1000}
                    height={1000}
                    src={mov.image.url}
                    className={TopStyle.image}
                  />
                  <br />
                  <h2>{mov.title}</h2>
                </div>
              );
            })}
          </div>
        </div>
        <Button className={TopStyle.button} />
      </div>
      <div className={TopStyle.member}>
        <div className={TopStyle.worksWrapper}>
          <span className={TopStyle.before}></span>
          <span className={TopStyle.works}>MEMBER</span>
          <span className={TopStyle.before}></span>
        </div>
        <div className={TopStyle.memberContents}>
          <div className={TopStyle.memberRow}>
            {member.contents.map((mem) => {
              return (
                <div>
                  <div>
                    <Image
                      width={1000}
                      height={1000}
                      src={mem.image.url}
                      alt="イメージです"
                      className={TopStyle.image}
                    />
                  </div>
                  <div className={TopStyle.nameAndRoll}>
                    <h4>{mem.status}</h4>
                    <h3>{mem.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
          <Button className={TopStyle.button} />
        </div>
      </div>
      <div className={TopStyle.gearContents}>
        <div className={TopStyle.geartitle}>
          <div className={TopStyle.gearSectionTitle}>
            <span className={TopStyle.before}></span>
            <span className={TopStyle.works}>GEAR</span>
            <span className={TopStyle.before}></span>
          </div>
          <span>GEAR RENTAL AVAILABLE</span>
        </div>
        <div className={TopStyle.gearContainer}>
          <div className={TopStyle.gearImages}>
            {gears.contents.map((gear) => {
              return (
                <div className={TopStyle.Image}>
                  <Image
                    height={301}
                    width={422}
                    src={gear.image.url}
                    alt="gear image deth"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <Button />
      </div>
      {/* {console.log(member.contents)}
      {console.log("------------------------------------------------")}
      {console.log(gears.contents)}
      {console.log("------------------------------------------------")}
      {console.log(movie.contents)} */}
    </DefaultLayout>
  );
}
