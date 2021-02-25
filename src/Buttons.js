
const Squarediv=(props)=>{
    return(
        // id for the zingtouch class respoonse
        <div id="container-element" style={styles.outerSquare} >
            <div id="rotable" style={styles.whiteCircle}>
                <div className='hv' onClick={()=>props.centerButtonClicked()} style={styles.innerCircle}></div>
                <div className='hv' onClick={()=>{props.menuButtonFunction()}} style={styles.menuButton} >MENU</div>
                <div className='hv' style={styles.fastForward} >
                    <img style={styles.img} src="https://www.flaticon.com/svg/vstatic/svg/1792/1792919.svg?token=exp=1613989452~hmac=f84076397e4d85443a5e70f08f807c23" />
                </div>
                <div className='hv' style={styles.stopPause} >
                    <img style={styles.img} src="https://www.flaticon.com/svg/vstatic/svg/1792/1792864.svg?token=exp=1613989303~hmac=7d52adc31068a61ff1367b27d3013898" />
                </div>
                <div className='hv' style={styles.fastReverse}>
                    <img style={styles.img} src="https://www.flaticon.com/svg/vstatic/svg/1792/1792913.svg?token=exp=1613989462~hmac=d99258edc6b8518d99e157c6a4848d45" />
                </div>
            </div>
        </div>
            )
}

const styles={
    outerSquare:{
        height:200,
        width:270,
        background:'#D6DBDF',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:'auto'
        
    }
    ,whiteCircle:{
        background:'white',
        height:200,
        width:200,
        marginLeft:35,
        borderRadius:'50%'
    },
    innerCircle:{
        background:'#D6DBDF',
        height:100,
        width:100,
        borderRadius:'50%',
        position:'relative',
        top:'25%',
        left:'25%'
    },
    stopPause:{
        position:'absolute',
        left:'49%',
        top:'54%'
    },
    fastForward:{
        position:'absolute',
        left:'54.5%',
        top:'45.5%'
    },
    fastReverse:{
        position:'absolute',
        left:'44%',
        top:'45.5%'
    },
    menuButton:{
        position:'absolute',
        top:'36.5%',
        left:'48.3%',
        hover:{
            cursor:'pointer'
        }
    },
    img:{
        height:20,
        width:20
    }
}

export default Squarediv;