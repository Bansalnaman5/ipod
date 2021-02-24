const Settings=()=>{
    return(
        <div style={styles.set} >
            <h3 style={{display:'inline-block', paddingTop:5,marginLeft:7}} >Your settings are:</h3>
            <div style={styles.li} >Setting 1</div>
            <div style={styles.li} >Setting 2</div>
            <div style={styles.li} >Setting 3</div>
            <div style={styles.li} >Setting 4</div>
            <div style={styles.li} >Setting 5</div>
        </div>
    )
}

const styles={
    set:{
        height:235,
        width:270,
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%',
        borderTopLeftRadius:'2%',
        borderTopRightRadius:'2%',
        background:'#48C9B0',
        
    },
    li:{
        boxShadow:'1px 2px 2px 1px rgb(14 98 81/30%)',
        height:20,
        width:135,
        marginLeft:10,
        paddingLeft:10,
        paddingTop:10
    }
}

export default Settings;