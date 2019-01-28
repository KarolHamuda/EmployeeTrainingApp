import React, { Component, createContext } from 'react';

const POSTS_URL = ('');
const GET_URL = ('');
const deviceContext = createContext();

export class DeviceProvider extends Component {
    displayName = DeviceProvider.name
  
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
          FK_SITE: [],
          WIDTH: [],
          HEIGHT: [],
          DEPTH: [],
          gltfLINK: [],
          imgLINK: [],
          IoTLINK: [],
          IoT_ID: [],
          newObj: [],
          ORDERinLIST: [],
          isLoading: true,
          deviceLocation: window.location.pathname.slice(window.location.pathname.length-1,window.location.pathname.length)
        }
    }

    componentDidMount() {
        this.askForData();
    }

  
    
    async askForData() {
    try {
      const data = await fetch(GET_URL, {
        method: 'post',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({SITENUMBER: this.state.deviceLocation}) //1,3,4
      })
      const posts = await data.json();
          this.setState({
            isLoading: false,
            posts
          });
          this.convertJson(posts)  
          console.log(posts)
        }
      catch(e) {
        console.log('there was an error');
      }
    }
  
      sendData (newData) {
        fetch(POSTS_URL, {
          method: 'post',
          headers: {
            'Accept': 'application/json, text/plan, */*',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newData)
        })
        console.log(newData)
      }

      convertJson = (Arr) => {
        this.setState({
          newArr: Arr.map(({ID, LABEL, imgLINK, gltfLINK, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, WIDTH, HEIGHT, DEPTH, COLOR, IoTLINK, IoT_ID, FK_SITE  }, ORDERinLIST) => {
            return {
              ID: ID,
              LABEL: LABEL,
              imgLINK: imgLINK,
              gltfLINK: gltfLINK,
              POSX: POSX,
              POSY: POSY,
              POSZ: POSZ,
              ROTX: ROTX,
              ROTY: ROTY,
              ROTZ: ROTZ,
              WIDTH: WIDTH,
              HEIGHT: HEIGHT,
              DEPTH: DEPTH,
              COLOR: COLOR,
              IoTLINK: IoTLINK, 
              IoT_ID: IoT_ID,
              FK_SITE: FK_SITE
            }
           })
        })
        console.log(this.state.newArr[0].IoTLINK)
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
          <deviceContext.Provider value={{
              state: this.state,
              AddItems: (ID, LABEL, imgLINK, gltfLINK, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, WIDTH, HEIGHT, DEPTH, COLOR, IoTLINK, IoT_ID, FK_SITE, ORDERinLIST) => {
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
                  WIDTH: WIDTH,
                  HEIGHT: HEIGHT,
                  DEPTH: DEPTH,
                  gltfLINK: gltfLINK,
                  imgLINK: imgLINK,
                  IoTLINK: IoTLINK, 
                  IoT_ID: IoT_ID,
                  ORDERinLIST: ORDERinLIST
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
                WIDTH: [],
                HEIGHT: [],
                DEPTH: [],
                gltfLINK: [],
                imgLINK: [],
                IoTLINK: [], 
                IoT_ID: [],
                ORDERinLIST: [],
              }),

              SendData: (newObj, currentOrder) => {
                this.bindObjects(newObj, currentOrder)
              },
    
              DeleteAction: (id) => {
                this.deleteAction(id)
              },

          }}>
          {this.props.children}
          </deviceContext.Provider>
        )
    }
}

export default deviceContext;