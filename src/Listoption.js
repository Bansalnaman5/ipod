// options of the sidemenu

// if activeid is same as current option then render blue background

// using different class
const Listoption=(props)=>{
    const opt=props.name;
    const activeid=props.activeid;
    if(activeid==props.name.id){
        return(
            <div style={styles.opta} >
                <img style={styles.ico} src={opt.ico} />
                <div>{opt.name}</div>
            </div>
        )

    }
    return(
        <div style={styles.opt} >
            <img style={styles.ico} src={opt.ico} />
            <div>{opt.name}</div>
        </div>
    )

}

const styles={
    opt:{
        display:'flex',
        flexDirection:'row',
        height:30,
        width:169,
        marginBottom:1,
        boxShadow:'1px 1px 1px 0px rgb(0 0 0/17%)',
        paddingTop:7
    },
    ico:{ 
        height:18,
        width:18,
        marginRight:'1px',
        padding:1,
        marginRight:5,
    },
    opta:{
        display:'flex',
        flexDirection:'row',
        height:30,
        width:169,
        marginBottom:1,
        boxShadow:'1px 1px 1px 0px rgb(0 0 0/17%)',
        paddingTop:7,
        background:'#4883FA'
    }
}

export default Listoption;