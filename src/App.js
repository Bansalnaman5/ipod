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
      // for the display of wallpaper
      dispWall:true,
      // for the display of side menu initially false
      dispMenu:false,
      // options for the side menu along with the flat icon link
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
      // activeid for the active class of side menu
      activeid:1,
      // this is for the selection using side menu and open that page
      jsx:<Music/>,
      // active state is for the functionality of menu button 
      // activestate 0 means only wallpaper will be displayed
      // activestate 1 means wallpaper with side menu will be displayed
      // activestate 2 means that some option selected from side menu will be rendered without wallpepr and sidemenu
      activeState:0
    }
  }

  componentDidMount=()=>{
    let {activeid,activeState}=this.state;
    // checking if activestate is 1 then display side menu
    if(activeState==1){
      this.setState({
        dispMenu:true,
        dispWall:true
      })
    }
    // functioning of the wheel using zingtouch library
    var containerElement=document.getElementById('container-element');
    var activeRegion=ZingTouch.Region(containerElement);
    var childElement=document.getElementById('rotable');
    // a change of 25 degree will change the option up or down
    let prevDown=-25;
    let prevUp=25;
    activeRegion.bind(childElement,'rotate',(e)=>{
      if(e.detail.distanceFromOrigin>0 && e.detail.distanceFromOrigin+prevDown>0){
        prevDown-=25;
        prevUp=25;
        // console.log("down",e.detail.distanceFromOrigin);
        if(activeid<4){
          // changing the selected item from side menu ie blue background
          activeid+=1;
        }
      }
      else if(e.detail.distanceFromOrigin<0 && e.detail.distanceFromOrigin+prevUp<0) {
        prevUp+=25;
        prevDown=-25;
        // console.log('up',e.detail.distanceFromOrigin)
        if(activeid>1){
          // changing the selected item from side menu ie blue background
          activeid-=1;
        }
      }
      // setting the state of activeid after change
      this.setState({
        activeid:activeid
      });
      
    })
  }
  // function for handling clicks on cenetr button
  centerButtonClicked=()=>{
    const {activeid,options,dispMenu,dispWall,activeState}=this.state;
    const opt=options[activeid-1];
    // if only wallpaper id diplayed and center button is clicked then display side menu and change the state 
    // as mentioned in constructor
    if(activeState==0){
      this.setState({
        dispMenu:true,
        dispWall:true,
        activeState:activeState+1
      })
    }
    // rendering the selected menuitem according to the selection by user
    // this is done by changing the state of jsx as declared in contructor
    if(activeid==1 && activeState==1){
      this.setState({
        dispWall:false,
        dispMenu:false,
        jsx:<Music/>,
        activeState:activeState+1
      })
    }
    else if(activeid==2 && activeState==1){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Games/>,
          activeState:activeState+1
      })
    }
    else if(activeid==3 && activeState==1){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Playlist/>,
          activeState:activeState+1
      })
    }
    else if(activeid==4 && activeState==1){
      this.setState({
          dispWall:false,
          dispMenu:false,
          jsx:<Settings/>,
          activeState:activeState+1
      })
    }
  }
  // function to handel click on menu button
  menuButtonFunction=()=>{
    let {activeState}=this.state;
    // if only wallpaper is displayed and menu button in clicked then open the sidemenu 
    // and increase the state as mentioned in constructor
    if(activeState==0){
      this.setState({
        activeState:activeState+1,
        dispMenu:true,
      });
    }
    // if state is one that is sidemenu is displayed then decrease the state and set dispmenu false
    if(activeState==1){
      this.setState({
        dispWall:true,
        dispMenu:false,
        activeState:activeState-1
      });
    }
    // if state is 2 that is any screen from selected options is rendered then decrease the state 
    // and displaywallpaper and side menu
    if(activeState==2){
      this.setState({
        activeState:activeState-1,
        dispMenu:true,
        dispWall:true
      });
    }
  }
  // screen is for the screen of ipod and squarediv is for the buttons
  // and wheels

  render(){
    const {dispMenu,options,activeid,dispWall,jsx,activeState}=this.state;
    return(
      <div className="allWrapper" >
        <Screen jsx={jsx} dispWall={dispWall} activeid={activeid} dispmenu={dispMenu} options={options}/>
        <Squarediv menuButtonFunction={this.menuButtonFunction} centerButtonClicked={this.centerButtonClicked} />
        <h3 style={{marginTop:100}}>NOTE : Either press center button or menu button for the side menu to appear</h3>
      </div>
    );
  }
}


export default App;