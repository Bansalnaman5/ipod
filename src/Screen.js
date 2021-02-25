// the main screen 

import Listitem from './Listitem';
const Screen=(props)=>{
    const dispMenu=props.dispmenu;
    const options=props.options;
    const activeid=props.activeid;
    const dispWall=props.dispWall;
    // console.log('wall',dispWall);
    // console.log('menu',dispMenu);
    return(
        <div  style={styles.mainScreen}>
            <div style={styles.statusBar} >
                <img style={styles.icon1} src="https://www.flaticon.com/svg/vstatic/svg/748/748151.svg?token=exp=1614064281~hmac=7c2791b7eb2c165a5e62f2ba49bf620f" />
                <img style={styles.icon} src="https://www.flaticon.com/svg/vstatic/svg/3103/3103277.svg?token=exp=1614064459~hmac=fd8da0d5a09aaecdd63d477814b4393f" />
            </div>
            {/* conditional rendering for wallpaper and side menu */}
            { dispMenu && <Listitem activeid={activeid} options={options}/>}
            {dispWall &&<img style={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZDMvfchVd3td7_ESYYneQ4Mhq9mmU3knVw&usqp=CAU" />}
            {!dispWall && props.jsx}
        </div>
    )
}

const styles={
    mainScreen:{
        background:'white',
        width:270,
        height:250,
        marginLeft:'auto',
        marginRight:'auto',
        marginBottom:7,
        border:'2px solid',
        borderRadius:'10%'
    },
    img:{
        height:235,
        width:270,
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%'
    },
    statusBar:{
        width:270,
        height:15,
        diplay:'flex',
        flexDirection:'row-reverse',
        },
    icon:{
        height:12,
        width:12,
        padding:2,
        marginLeft:3
    },
    icon1:{
        height:12,
        width:12,
        padding:2,
        marginLeft:'80%'

    }
}

export default Screen;