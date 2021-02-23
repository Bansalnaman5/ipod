import Listoption from './Listoption';
const Listitem=(props)=>{
    const options=props.options;
    const activeid=props.activeid;
    return(
        <div style={styles.firstlist} >
            <h2 style={{marginTop:0}}>Naman's iPod</h2>
            {
                options.map((opt)=>{
                    return(
                    <Listoption activeid={activeid} name={opt} key={opt.id} />)
                })
            }
        </div>
    )
}

const styles={
    firstlist:{
        display:"flex",
        flexDirection:'column',
        background:'white',
        height:235,
        width:170,
        position:'absolute',
        borderBottomLeftRadius:'12%',
        borderTopLeftRadius:'2%',
        borderRight:'1px solid black'
    }
}

export default Listitem;