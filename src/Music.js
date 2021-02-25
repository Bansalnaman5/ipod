import React from 'react';

class Music extends React.Component{
    constructor(){
        super();
        this.state={
            currtime:0.00
        }
    }       
    
    render(){ 
        let {currtime}=this.state;    
        console.log(currtime);
        return(
            <div style={styles.music}>
            <img style={styles.img} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4Eyw_8pj4dkLiQ6jV0i8ZEHts7tU6I6t8xQ&usqp=CAU"/>
            <h4 style={{marginLeft:50}}>You song is playing here</h4>

        </div>
    )
}
}

const styles={
    music:{
        height:235,
        width:270,
        borderBottomLeftRadius:'10%',
        borderBottomRightRadius:'10%',
        borderTopLeftRadius:'2%',
        borderTopRightRadius:'2%',
        background:'lightgreen'
    },
    img:{
        height:100,
        width:120,
        marginLeft:75,
        marginTop:35,
        borderRadius:'5%'
    }
}

export default Music;