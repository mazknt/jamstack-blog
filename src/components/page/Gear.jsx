import DefaultLayout from "../templates/DefaultLayout"
import Image from "next/image"
// import gears from "../../pages/gears"

export const Gear = (props) => {
  const { gears } = props
  return (
    <DefaultLayout>
        <div style={{width: '100%', height: '100%', paddingLeft: 208, paddingRight: 208, paddingTop: 80, paddingBottom: 80, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', gap: 80, display: 'inline-flex'}}>
    <div style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 8, display: 'flex'}}>
        <div style={{justifyContent: 'flex-start', alignItems: 'center', gap: 36, display: 'inline-flex'}}>
            <div style={{width: 48, height: 0, border: '2px #111111 solid'}}></div>
            <div style={{color: '#111111', fontSize: 36, fontFamily: 'Avenir', fontWeight: '800', letterSpacing: 1.80, wordWrap: 'break-word'}}>GEAR</div>
            <div style={{width: 48, height: 0, border: '2px #111111 solid'}}></div>
        </div>
        <div style={{color: '#111111', fontSize: 20, fontFamily: 'Avenir', fontWeight: '900', letterSpacing: 1, wordWrap: 'break-word'}}>Gear rental available. </div>
    </div>
    <div style={{alignSelf: 'stretch', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'flex'}}>
        {gears.contents.map((gear, index)=>{
            {console.log(gear.gearName_isRental)}
            return(
        <div style={{alignSelf: 'stretch', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 48, display: 'inline-flex'}} key={index}>
            <div style={{width: 422, height: 301, borderRadius: 4, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
                <Image width={422} height={301} style={{ borderRadius: 2}} src={gear.image.url} />
            </div>
            <div style={{flex: '1 1 0', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 16, display: 'inline-flex'}}>
                <div style={{alignSelf: 'stretch', height: 72, flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', display: 'flex'}}>
                    <div style={{color: '#111111', fontSize: 16, fontFamily: 'Noto Sans JP', fontWeight: '500', wordWrap: 'break-word'}}>{gear.section_title}</div>
                    <div style={{color: '#111111', fontSize: 36, fontFamily: 'Avenir', fontWeight: '800', wordWrap: 'break-word'}}>{gear.title_English}</div>
                </div>
                <div style={{alignSelf: 'stretch', height: 167, flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', gap: 8, display: 'flex'}}>
                    {gear.gearName_isRental.map((gear_rental, index) => {
                        return (
                            <div style={{paddingLeft: 24, paddingRight: 24, justifyContent: 'center', alignItems: 'flex-end', gap: 24, display: 'inline-flex'}} key={index}>
                                <div style={{color: '#111111', fontSize: 20, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>{gear_rental.gear_name}</div>
                                {gear_rental.is_rental ? (
                                    <div style={{paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, borderRadius: 100, border: '1px #111111 solid', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                                        <div style={{color: '#111111', fontSize: 12, fontFamily: 'Avenir', fontWeight: '900', wordWrap: 'break-word'}}>Available for rent</div>
                                    </div>
                                ) : null}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
        )})}
    </div>
        </div>
    </DefaultLayout>
  )
}
