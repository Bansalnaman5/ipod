
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
                        <Listoption activeid={activeid} name={opt} key={opt.id} />
                //         <Router>

                //    <Link to={opt.link} style={{textDecoration:'none', color:'black'}} > 
                //    <Listoption activeid={activeid} name={opt} key={opt.id} />
                //    </Link>
                //    <Switch>
                //        <Route path='/music'>
                //            <a/>
                //        </Route>
                //        <Route path='/games'>
                //            <b/>
                //        </Route>
                //        <Route path='/playlist'>
                //            <c/>
                //        </Route>
                //        <Route path='/settings'>
                //            <d/>
                //        </Route>
                //    </Switch>
                //         </Router>
                    )
                })
            }
        </div>
    )
}
function a(){
    <h2>Music</h2>
}
function b(){
    <h2>Games</h2>
}
function c(){
    <h2>My Playlist</h2>
}
function d(){
    <h2>Settings</h2>
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