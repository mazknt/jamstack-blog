import TopStyle from "../styles/Top/Top.module.css";
import { Button } from "../components/atomics/Button";
import DefaultLayout from "../components/templates/DefaultLayout.jsx";
import Image from "next/image";
import { client } from "../libs/client";
import { useState } from "react";
import Modal from "react-modal";

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const gears = await client.get({ endpoint: "gears" });
  const movie = await client.get({ endpoint: "movie" });
  const member = await client.get({ endpoint: "member" });
  return {
    props: {
      gears: gears,
      movie: movie,
      member: member,
    },
  };
};

export default function Top({ movie, member, gears }) {
  const [modal, setModal] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // 現在開いている映画のIDを保持する新しい状態を追加
  const [currentMovieId, setCurrentMovieId] = useState(null);

  // モーダルを開く関数を更新して、現在の映画のIDを設定
  const clickModal = (id) => {
    setCurrentMovieId(id);
    setModalIsOpen(true);
  };

  // モーダルを閉じる関数を更新して、現在の映画のIDをリセット
  const closeModal = () => {
    setCurrentMovieId(null);
    setModalIsOpen(false);
  };

  // モーダル内の映画情報を選択するために現在の映画のIDを使用
  const currentMovie =
    movie.contents.find((mov) => mov.id === currentMovieId) || null;
  const wrap = modal ? TopStyle.wrap : TopStyle.notWrap;
  const modalEl = !modal ? TopStyle.modalEl : TopStyle.notModalEl;
  // モーダルのスタイリングを設定するオブジェクト
  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.7)", // 背景色を黒色に設定
    },
    content: {
      // ここに他のスタイリングを追加
      // 第4話 ときをつなぐ
      color: "white",
      fontSize: 36,
      fontFamily: "Noto Sans JP",
      fontWeight: "700",
      wordWrap: "break-word",
      backgroundColor: "black", // モーダル内の背景色を黒色に設定
      border: "none",
    },
  };
  return (
    <DefaultLayout>
      <div id="wrap" className={`${wrap}`}>
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
              {movie.contents.map((mov, index) => {
                return (
                  <>
                    <div
                      className={TopStyle.work}
                      key={index}
                      onClick={() => clickModal(mov.id)}
                    >
                      <button onClick={clickModal}>
                        <Image
                          width={1000}
                          height={1000}
                          src={mov.image.url}
                          className={TopStyle.image}
                        />
                      </button>
                      <br />
                      <h2>{mov.title}</h2>
                    </div>
                    {/* react-modalコンポーネント */}
                    {currentMovie !== null && (
                      <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={closeModal}
                        contentLabel="Example Modal"
                        style={customStyles}
                      >
                        {/* モーダル内のコンテンツ */}
                        <div>
                          <Image
                            width={1072}
                            height={603}
                            src={currentMovie.image.url}
                            style={{
                              position: "relative",
                              borderRadius: 20,
                              border: "1px black solid",
                            }}
                          />
                          <div
                            style={{
                              justifyContent: "flex-start",
                              alignItems: "flex-end",
                              gap: 313,
                              display: "inline-flex",
                            }}
                          >
                            <div
                              style={{
                                flexDirection: "column",
                                justifyContent: "flex-start",
                                alignItems: "flex-start",
                                gap: 32,
                                display: "inline-flex",
                              }}
                            >
                              <div
                                style={{
                                  flexDirection: "column",
                                  justifyContent: "flex-start",
                                  alignItems: "flex-start",
                                  gap: 16,
                                  display: "flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "white",
                                    fontSize: 36,
                                    fontFamily: "Noto Sans JP",
                                    fontWeight: "700",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  {currentMovie.title}
                                </div>
                                <div
                                  style={{
                                    justifyContent: "flex-start",
                                    alignItems: "flex-start",
                                    gap: 48,
                                    display: "inline-flex",
                                  }}
                                >
                                  <div
                                    style={{
                                      color: "white",
                                      fontSize: 16,
                                      fontFamily: "Avenir",
                                      fontWeight: "800",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    {currentMovie.created_by}
                                  </div>
                                  <div
                                    style={{
                                      color: "white",
                                      fontSize: 16,
                                      fontFamily: "Avenir",
                                      fontWeight: "800",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    {currentMovie.release_date}
                                  </div>
                                  <div
                                    style={{
                                      color: "white",
                                      fontSize: 16,
                                      fontFamily: "Avenir",
                                      fontWeight: "800",
                                      wordWrap: "break-word",
                                    }}
                                  >
                                    {currentMovie.client}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              style={{
                                width: 133,
                                height: 46,
                                justifyContent: "center",
                                alignItems: "center",
                                display: "flex",
                              }}
                            >
                              <div
                                style={{
                                  paddingLeft: 24,
                                  paddingRight: 24,
                                  paddingTop: 12,
                                  paddingBottom: 12,
                                  borderRadius: 2,
                                  overflow: "hidden",
                                  border: "2px white solid",
                                  justifyContent: "center",
                                  alignItems: "baseline",
                                  gap: 8,
                                  display: "inline-flex",
                                }}
                              >
                                <div
                                  style={{
                                    color: "white",
                                    fontSize: 16,
                                    fontFamily: "Avenir",
                                    fontWeight: "800",
                                    wordWrap: "break-word",
                                  }}
                                >
                                  YouTube
                                </div>
                                <div
                                  style={{
                                    width: 11,
                                    height: 12,
                                    position: "relative",
                                    transform: "rotate(90deg)",
                                    transformOrigin: "0 0",
                                  }}
                                >
                                  <div
                                    style={{
                                      width: 4.99,
                                      height: 9.62,
                                      left: 0.83,
                                      top: 8.41,
                                      position: "absolute",
                                      transform: "rotate(-90deg)",
                                      transformOrigin: "0 0",
                                      border: "1.42px white solid",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Modal>
                    )}
                  </>
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
              {member.contents.map((mem, index) => {
                return (
                  <div key={index}>
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
              {gears.contents.map((gear, index) => {
                return (
                  <div className={TopStyle.Image} key={index}>
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
      </div>
    </DefaultLayout>
  );
}
