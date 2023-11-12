import DefaultLayout from "../templates/DefaultLayout"
import MemberStyle from "../../styles/Member/Member.module.css"
import Image from "next/image"

export const Member = (props) => {
  const { member } = props
  return (
    <DefaultLayout>
        <div className={MemberStyle.members}>
            <div className={MemberStyle.memberSectionTitle}>
                <span className={MemberStyle.before}></span>
                <span className={MemberStyle.works}>MEMBER</span>
                <span className={MemberStyle.before}></span>
            </div>
            <div className={MemberStyle.memberItem}>
              {member.contents.map((mem) => {
                return (
                  <div className={MemberStyle.name_roll_status}>
                    <div className={MemberStyle.name_roll}>
                      <Image height={841} width={610} src={mem.image.url} className={MemberStyle.image}/>
                      <div className={MemberStyle.name}>
                        <h4>{mem.name}</h4>
                        <h2>{mem.name_English}</h2>
                      </div>
                    </div>
                    <div className={MemberStyle.introduce_wrapper}>
                      <div className={MemberStyle.introduce}>
                        {mem.intruduce}
                      </div>
                      <div className={MemberStyle.introduce}>
                        {mem.introduce_English}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
        </div>
    </DefaultLayout>
  )
}
