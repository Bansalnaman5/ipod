//  screen for games option
 const Games=()=>{
     return(
         <div style={styles.gs}>
             <img style={styles.img} src="https://images.unsplash.com/photo-1553481187-be93c21490a9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"/>
            <h4 style={{marginLeft:90}}>Play Games</h4>
         </div>
     )
 }

 const styles={
     gs:{
        background:'#EDBB99',
        height:235,
        width:270,
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%',
        borderTopLeftRadius:'2%',
        borderTopRightRadius:'2%',
        marginTop:0
     },
     img:{
         height:120,
         width:170,
         borderRadius:'5%',
         marginLeft:45,
         marginTop:20
     }
 }
 export default Games;