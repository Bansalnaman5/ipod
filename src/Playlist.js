const Playlist=()=>{
    return(
        <div style={styles.play} >
            <h3 style={{display:'inline-block', paddingTop:5,marginLeft:7}} >Your Playlist is :</h3>
            <div style={styles.li} >Song 1</div>
            <div style={styles.li} >Song 2</div>
            <div style={styles.li} >Song 3</div>
            <div style={styles.li} >Song 4</div>
            <div style={styles.li} >Song 5</div>
        </div>
    )
}

const styles={
    play:{
        height:235,
        width:270,
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%',
        borderTopLeftRadius:'2%',
        borderTopRightRadius:'2%',
        background:'#AED6F1',
        
    },
    li:{
        boxShadow:'1px 2px 2px 1px rgb(93 200 226/50%)',
        height:20,
        width:135,
        marginLeft:10,
        paddingLeft:10,
        paddingTop:10
    }
}

export default Playlist;