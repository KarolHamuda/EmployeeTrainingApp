import React, { Component, createContext } from 'react';


const POSTS_URL = ('');
const GET_URL = ('');
const myContext = createContext();



 export class MyProvider extends Component {
  displayName = MyProvider.name



  constructor(props) {
    super(props)
    
    this.state = {
      newArr: [],
      posts: [],
      ID: [],
      LABEL: [],
      COLOR: [],
      POSX: [],
      POSY: [],
      POSZ: [],
      ROTX: [],
      ROTY: [],
      ROTZ: [],
      FK_ACTIONTYPE: [],
      FK_SITE: [],
      ORDERinLIST: [],
      DIRECTIONpointX: [],
      DIRECTIONpointY: [],
      DIRECTIONpointZ: [],
      gltfLINK: [],
      imgLINK: [],
      videoLINK: [],
      voiceLINK: [],
      voiceText: [],
      animationType: [],
      FK_DEVICE: [],
      newObj: [],
      gltfLINKAdditionalDevice: [],
      isLoading: true,
      siteLocation: window.location.pathname.slice(window.location.pathname.length-1,window.location.pathname.length)
      
    }
  } 

  componentDidMount() {
    this.askForData();
  }
  
  convertJson = (Arr) => {
    this.setState({
      newArr: Arr.map(({ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice}, ORDERinLIST) => {
        return {
          ID: ID,
          LABEL: LABEL,
          COLOR: COLOR,
          POSX: POSX,
          POSY: POSY,
          POSZ: POSZ,
          ROTX: ROTX,
          ROTY: ROTY,
          ROTZ: ROTZ,
          FK_SITE: FK_SITE,
          FK_ACTIONTYPE: FK_ACTIONTYPE,
          ORDERinLIST: ORDERinLIST,
          DIRECTIONpointX: DIRECTIONpointX,
          DIRECTIONpointY: DIRECTIONpointY,
          DIRECTIONpointZ: DIRECTIONpointZ,
          gltfLINK: gltfLINK,
          imgLINK: imgLINK,
          videoLINK: videoLINK,
          voiceLINK: voiceLINK,
          voiceText: voiceText,
          animationType: animationType,
          FK_DEVICE: FK_DEVICE,
          gltfLINKAdditionalDevice: gltfLINKAdditionalDevice
        }
       })
    })
  }

  startAnimation = () => {
    this.setState({
      isSiteVisible: true
      
    })
  }

    async askForData() {
    try {
      const data = await fetch(POSTS_URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({SITENUMBER: this.state.siteLocation}) //1,3,4
      })
      const posts = await data.json();
          this.setState({
            isLoading: false,
            posts
          });
          console.log(posts)
          this.convertJson(posts)  
          console.log(this.state.newArr)
          }
          catch(e) {
            console.log('there was an error');
            
          }
        
      }

  replaceArr = (arr) => {
    this.setState({
      newArr: arr
    })
  }

 sendData (newData) {
    try {
          fetch(GET_URL, {
          method: 'post',
          
          headers: {
            'Accept': 'application/json, text/plan, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
          })
      }
      catch(e) {
        console.log(e)
      }
    }

  deleteAction = (currentElement) => {
      this.state.newArr.splice(currentElement, 1)
      this.sendData(this.state.newArr)
  }

  bindObjects (newObj, currentOrder) {
    this.state.newArr.splice(currentOrder, 1)
    this.state.newArr.splice(currentOrder, 0, newObj)
    this.sendData(this.state.newArr)
    }


    render() {  
       
      return (
        <myContext.Provider value={{
          state: this.state,

          AddItems: (ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, ORDERinLIST, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice) => {
            this.setState({
            ID: ID,
            LABEL: LABEL,
            COLOR: COLOR,
            POSX: POSX,
            POSY: POSY,
            POSZ: POSZ,
            ROTX: ROTX,
            ROTY: ROTY,
            ROTZ: ROTZ,
            FK_SITE: FK_SITE,
            FK_ACTIONTYPE: FK_ACTIONTYPE,
            ORDERinLIST: ORDERinLIST,
            DIRECTIONpointX: DIRECTIONpointX,
            DIRECTIONpointY: DIRECTIONpointY,
            DIRECTIONpointZ: DIRECTIONpointZ,
            gltfLINK: gltfLINK,
            imgLINK: imgLINK,
            videoLINK: videoLINK,
            voiceLINK: voiceLINK,
            voiceText: voiceText,
            animationType: animationType,
            FK_DEVICE: FK_DEVICE,
            gltfLINKAdditionalDevice: gltfLINKAdditionalDevice
            })
          },

          DeleteItems: () => 
          this.setState({
            ID: [],
            LABEL: [],
            COLOR: [],
            POSX: [],
            POSY: [],
            POSZ: [],
            ROTX: [],
            ROTY: [],
            ROTZ: [],
            FK_SITE: [],
            FK_ACTIONTYPE: [],
            ORDERinLIST: [],
            DIRECTIONpointX: [],
            DIRECTIONpointY: [],
            DIRECTIONpointZ: [],
            gltfLINK: [],
            imgLINK: [],
            videoLINK: [],
            voiceLINK: [],
            voiceText: [],
            animationType: [],
            FK_DEVICE: [],
            gltfLINKAdditionalDevice: []
          }),
          
          newDragArr: (Arr) => {
            this.sendData(Arr)
            
          
          },

          SendData: (newObj, currentOrder) => {
            this.bindObjects(newObj, currentOrder)
          },

          DeleteAction: (id) => {
            this.deleteAction(id)
          },

          ChangeSiteAnimation: () => {
            this.startAnimation()
          }

          }}>
          
        {this.props.children}
        </myContext.Provider>

      )
    }
  }




export default myContext;