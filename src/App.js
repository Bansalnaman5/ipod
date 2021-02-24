import './index.css';
import React from 'react';
import Squarediv from './Buttons';
import Screen from './Screen';
import ZingTouch from 'zingtouch';
import Music from './Music';
import Games from './Games';
import Playlist from './Playlist';
import Settings from './Settings'
class App extends React.Component{

  constructor(){
    super();
    this.state={
      dispWall:true,
      dispMenu:true,
      options:[
        {
          name:"Music",
          id:1,
          ico:'https://www.flaticon.com/svg/vstatic/svg/2972/2972075.svg?token=exp=1614075052~hmac=0ca4767379ebbd698b4258b3447d0e22',
          link:'/music'
        },
        {
          name:'Games',
          id:2,
          ico:'https://www.flaticon.com/premium-icon/icons/svg/2970/2970162.svg',
          link:'/games'
        },
        {
          name:"My Playlist",
          id:3,
          ico:'https://www.flaticon.com/svg/vstatic/svg/565/565266.svg?token=exp=1614075122~hmac=932268fc839464d73e942bfc4e8b28e2',
          link:'/playlist'
        },
        {
          name:'Settings',
          id:4,
          ico:'https://www.flaticon.com/svg/vstatic/svg/3524/3524659.svg?token=exp=1614143808~hmac=5bd704c6e42be0fc5682e3a3185b511e',
          link:'/settings'
        }
      ],
      activeid:1,
      jsx:<Music/>
    }
  }

  componentDidMount(){
    let {activeid}=this.state;
    var containerElement=document.getElementById('container-element');
    var activeRegion=ZingTouch.Region(containerElement);
    var childElement=document.getElementById('rotable');
    let prevDown=-25;
    let prevUp=25;
    activeRegion.bind(childElement,'rotate',(e)=>{
      if(e.detail.distanceFromOrigin>0 && e.detail.distanceFromOrigin+prevDown>0){
        prevDown-=25;
        prevUp=25;
        // console.log("down",e.detail.distanceFromOrigin);
        if(activeid<4){
          activeid+=1;
        }
      }
      else if(e.detail.distanceFromOrigin<0 && e.detail.distanceFromOrigin+prevUp<0) {
        prevUp+=25;
        prevDown=-25;
        // console.log('up',e.detail.distanceFromOrigin)
        if(activeid>1){
          activeid-=1;
        }
      }
      this.setState({
        activeid:activeid
      });
      
    })
  }

  centerButtonClicked=()=>{
    const {activeid,options,dispMenu,dispWall}=this.state;
    const opt=options[activeid-1];
    console.log(opt.name);
    if(activeid==1){
      this.setState({
        dispWall:false,
        dispMenu:false,
        jsx:<Music/>
      })
    }
    else if(activeid==2){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Games/>
      })
    }
    else if(activeid==3){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Playlist/>
      })
    }
    else if(activeid==4){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Settings/>
      })
    }
    


  }

  render(){
    const {dispMenu,options,activeid,dispWall,jsx}=this.state;
    return(
      <div className="allWrapper" >
        <Screen jsx={jsx} dispWall={dispWall} activeid={activeid} dispmenu={dispMenu} options={options}/>
        <Squarediv centerButtonClicked={this.centerButtonClicked} />
      </div>
    );
  }
}


export default App;