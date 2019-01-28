import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import Media from 'react-media';
import { Table, Grid, Row, Col, ControlLabel,  Form, FormGroup, FormControl, Button, ListGroup, ListGroupItem, Glyphicon } from "react-bootstrap";
import '../../style/Checklist.css';
import { LinkContainer } from 'react-router-bootstrap';
import myContext from '../ContextProvider/MyProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import { Engine, Scene, ArcRotateCamera, HemisphericLight } from 'react-babylonjs';
import { Vector3, Color3 } from 'babylonjs';
import ScaledModelWithProgress from '../ScaledModelWithProgress';
import { Player, ControlBar } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";




let newObj = [];
let currentOrder = [];
export class Checklist extends Component {
    displayName = Checklist.name;
    constructor(props) {
        super(props)
        this.state = {
            nameValue: this.props.value,
            deviceValue: this.props.device,
            descriptionValue: '',
            ChecklistValue: this.props.action,
            background: this.props.color,

            isShowIMG: false,
            isShowGLTF: false,
            isShowVideo: false,
            isShowIMGlink: false,
            isShowGLTFlink: false,
            isShowVideolink: false,
            isShowgltfLINKAdditionalDevice: false,
            isShowgltfLINKAdditionalDevicelink: false,

            imgValue: this.props.img,
            gltfValue: this.props.gltf,
            videoValue: this.props.video,
            addGLTFValue: this.props.additionalgltf
        }

       
        
        this.handleIMG = this.handleIMG.bind(this);
        this.handleVideo = this.handleVideo.bind(this);
        this.handleGLTF = this.handleGLTF.bind(this);
        this.handleAdditionalGLTF = this.handleAdditionalGLTF.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDevice = this.handleDevice.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
       
    }

    componentWillMount() {
        document.body.style.backgroundColor = this.state.background;    
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
    }

    showVideo = () => {
        this.state.isShowVideo===false ? (
            this.setState({ isShowVideo: true, isShowGLTF: false, isShowIMG: false, isShowgltfLINKAdditionalDevice: false, 
            isShowGLTFlink: false, isShowgltfLINKAdditionalDevicelink: false, isShowIMGlink: false, isShowVideolink: false })
            ) : (
                this.setState({ isShowVideo: false }))
    }

    showGLTF = () =>{
        this.state.isShowGLTF===false ? (
            this.setState({ isShowGLTF: true, isShowIMG: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false,
            isShowGLTFlink: false, isShowgltfLINKAdditionalDevicelink: false, isShowIMGlink: false, isShowVideolink: false })
            ) : (
                this.setState({ isShowGLTF: false }))
    }

    showIMG = () => {
        this.state.isShowIMG===false ? (
            this.setState({ isShowIMG: true, isShowGLTF: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false,
            isShowGLTFlink: false, isShowgltfLINKAdditionalDevicelink: false, isShowIMGlink: false, isShowVideolink: false })
            ) : (
                this.setState({ isShowIMG: false }))

    }
    showAdditionalGLTF = () => {
        this.state.isShowgltfLINKAdditionalDevice===false ? (
            this.setState({ isShowgltfLINKAdditionalDevice: true, isShowIMG: false, isShowGLTF: false, isShowVideo: false,
            isShowGLTFlink: false, isShowgltfLINKAdditionalDevicelink: false, isShowIMGlink: false, isShowVideolink: false })
            ) : (
            this.setState({ isShowgltfLINKAdditionalDevice: false }))
    }

    showVideolink = () => {
        this.state.isShowVideolink===false ? (
            this.setState({ isShowVideolink: true, isShowgltfLINKAdditionalDevicelink: false, isShowGLTFlink: false, isShowIMGlink: false, 
            isShowIMG: false, isShowGLTF: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false })
            ) : (
                this.setState({ isShowVideolink: false }))
    }

    showGLTFlink = () =>{
        this.state.isShowGLTFlink===false ? (
            this.setState({ isShowGLTFlink: true, isShowgltfLINKAdditionalDevicelink: false, isShowIMGlink: false, isShowVideolink: false, 
            isShowIMG: false, isShowGLTF: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false })
            ) : (
                this.setState({ isShowGLTFlink: false }))
    }

    showIMGlink = () => {
        this.state.isShowIMGlink===false ? (
            this.setState({ isShowIMGlink: true, isShowgltfLINKAdditionalDevicelink: false, isShowGLTFlink: false, isShowVideolink: false, 
            isShowIMG: false, isShowGLTF: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false }) 
            ) : (
                this.setState({ isShowIMGlink: false }))
    }

    showAdditionalGLTFlink = () => {
        this.state.isShowgltfLINKAdditionalDevicelink ===false ? (
            this.setState({ isShowgltfLINKAdditionalDevicelink : true, isShowIMGlink : false, isShowGLTFlink : false, isShowVideolink: false,
             isShowIMG: false, isShowGLTF: false, isShowVideo: false, isShowgltfLINKAdditionalDevice: false })
            ) : (
                this.setState({ isShowgltfLINKAdditionalDevicelink : false }))
    }

    handleColorChangeComplete = (color) => {
        this.setState({ background: color.hex })
        document.body.style.backgroundColor = this.state.background
    }

    handleTouchStart(event){
        event.preventDefault()
    }

    handleIMG(event) {
        this.setState({imgValue: event.target.value});
     
    }

    handleVideo(event) {
        this.setState({videoValue: event.target.value});
     
    }

    handleGLTF(event) {
        this.setState({gltfValue: event.target.value});
     
    }

    handleAdditionalGLTF(event) {
        this.setState({addGLTFValue: event.target.value});
     
    }



    handleName(event) {
        this.setState({nameValue: event.target.value});
     
    }

    handleDevice(event) {
        this.setState({deviceValue: event.target.value});
     
    }


    handleDescription(event) {
        this.setState({descriptionValue: event.target.value});
    }

    handleChecklistZero = () => {
        this.setState({ChecklistValue: '0'});
    }
    handleChecklistThree = () => {
        this.setState({ChecklistValue: '3'});
    }
    handleChecklistOne = () => {
        this.setState({ChecklistValue: '1'});
    }
    handleChecklistTwo = () => {
        this.setState({ChecklistValue: '2'});
    }

    handleSubmit(event) {
        event.preventDefault();
    }




    createAction(name, color, dirx, diry, dirz, fksite, fkaction, id, order, posx, posy, posz, rotx, roty, rotz, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, fkdevice, gltfLINKAdditionalDevice)  {
        return newObj = 
            {
                ID: + id,
                LABEL: name,
                COLOR: color,
                POSX: + posx,
                POSY: + posy,
                POSZ: + posz,
                ROTX: + rotx,
                ROTY: + roty,
                ROTZ: + rotz,
                FK_SITE: + fksite,
                FK_ACTIONTYPE: + fkaction,
                ORDERinLIST: + order,
                DIRECTIONpointX: + dirx,
                DIRECTIONpointY: + diry,
                DIRECTIONpointZ: + dirz,
                gltfLINK: gltfLINK, 
                imgLINK: imgLINK, 
                videoLINK: videoLINK, 
                voiceLINK: voiceLINK, 
                voiceText: voiceText, 
                animationType: animationType,
                FK_DEVICE: + fkdevice,
                gltfLINKAdditionalDevice: gltfLINKAdditionalDevice
            }
    }

    render() {

        return (
        <myContext.Consumer>
            {(value) => (
                
                <ReactCSSTransitionGroup
                    transitionName="action"
                    transitionAppear={true}
                    transitionAppearTimeout={800}
                    transitionEnter={true}
                    transitionEnterTimeout={800}
                    transitionLeaveTimeout={800}>
                    <div >   
                    <Grid className = 'Component'>
                        <Row className= 'Details'>
                             

                            <Col xs = {12} sm={12} style = {{
                                paddingRight: 15,
                                marginBottom: 10,
                                justifyContent: 'center',
                                display: 'flex',
                                flexDirection: 'wrap',
                                alignItems: 'center',
                                textAlign: 'center',
                                marginTop: 10
                            }}>
                                <Media query="(max-width: 568px)">
                                    {matches =>
                                        matches ? (
                                            <CirclePicker
                                                color={ this.state.background }
                                                onChangeComplete={ this.handleColorChangeComplete }
                                                
                                                
                                        />
                                        ) : (
                                            <CirclePicker
                                                color={ this.state.background }
                                                onChangeComplete={ this.handleColorChangeComplete }
                                                
                                                
                                        />
                                        )
                                    }
                                </Media>
                            </Col>
                        </Row>

                        <Form onSubmit={this.handleSubmit} >
                            <Row className= 'Inputs'>
                                <Col xs={12}>
                                    
                                        <FormGroup controlId='formControlIsText'>
                                           <FormControl value={this.state.nameValue} onChange={this.handleName} type='text'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className= 'Inputs'>
                                <Col xs={12}>
                                    
                                        <FormGroup controlId='formControlIsText'>
                                           <FormControl value={this.state.deviceValue} onChange={this.handleDevice} type='text'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className='ScrollBar' >
                                <Col xs={12} >
                                    <FormGroup controlId='formControlsSelect'>
                                        <ControlLabel >Action Type</ControlLabel>
                                    
                                            <ListGroup >
                                                { value.state.FK_ACTIONTYPE === 0 ? (
                                                    <ListGroupItem active onClick={this.handleChecklistZero}>
                                                        Arrow
                                                    </ListGroupItem> 
                                                ) : (
                                                    <ListGroupItem onClick={this.handleChecklistZero}>
                                                        Arrow
                                                    </ListGroupItem> 
                                                ) }

                                                { value.state.FK_ACTIONTYPE === 1 ? (
                                                    <ListGroupItem active onClick={this.handleChecklistOne}>
                                                        Rotate Left
                                                    </ListGroupItem>
                                                ) : (
                                                    <ListGroupItem onClick={this.handleChecklistOne}>
                                                        Rotate Left
                                                    </ListGroupItem>
                                                ) }

                                                { value.state.FK_ACTIONTYPE === 2 ? (
                                                    <ListGroupItem active onClick={this.handleChecklistTwo}>
                                                        Rotate Right
                                                    </ListGroupItem>
                                                ) : (
                                                    <ListGroupItem  onClick={this.handleChecklistTwo}>
                                                        Rotate Right
                                                    </ListGroupItem>
                                                ) }


                                                { value.state.FK_ACTIONTYPE === 3 ? (
                                                    <ListGroupItem active onClick={this.handleChecklistThree}>
                                                        Hand
                                                    </ListGroupItem>
                                                ) : (
                                                    <ListGroupItem onClick={this.handleChecklistThree}>
                                                        Hand
                                                    </ListGroupItem>
                                                ) }
                                            </ListGroup>
                                    </FormGroup>
                                </Col>
                                <Row>
                                   <Col xs={12}>


                                   </Col>  
                                </Row>
                                <Row>
                                    <Col xs={12}>
                                        <Col xs={3} className='ImgButton'> 
                                        {value.state.imgLINK ?
                                            (<button onClick={this.showIMG} className='GreenButton'>IMG</button>) : (<button onClick={this.showIMGlink} className='RedButton'>IMG</button>)}
                                        </Col>
                                        <Col xs={3} className='VideoButton'>
                                        {value.state.videoLINK ? 
                                            (<button onClick={this.showVideo} className='GreenButton'>VIDEO</button>) : (<button onClick={this.showVideolink} className='RedButton'>VIDEO</button>)}
                                        </Col>
                                        <Col xs={3} className='GltfButton'>
                                        {value.state.gltfLINK ? 
                                            (<button onClick={this.showGLTF} className='GreenButton'>Tool</button>) : (<button onClick={this.showGLTFlink} className='RedButton'>Tool</button>)}
                                        </Col>
                                        <Col xs={3} className='GltfButton'>
                                        {value.state.gltfLINKAdditionalDevice ? 
                                            (<button onClick={this.showAdditionalGLTF} className='GreenButton'>Object</button>) : (<button onClick={this.showAdditionalGLTFlink} className='RedButton'>Object</button>)}
                                        </Col>
                                        <Row className= 'Inputs'>
                                            <Col xs={12}>
                                            {(this.state.isShowIMGlink || this.state.isShowIMG) && (
                                                
                                                <FormGroup controlId='formControlIsText'>
                                                    <FormControl 
                                                        value={this.state.imgValue} 
                                                        onChange={this.handleIMG} 
                                                        placeholder='Enter new image link'
                                                        type='text'
                                                    /> 
                                                </FormGroup> 
                                            )}

                                            {(this.state.isShowVideolink || this.state.isShowVideo) &&  (
                                            
                                                <FormGroup controlId='formControlIsText'>
                                                    <FormControl 
                                                        value={this.state.videoValue} 
                                                        onChange={this.handleVideo} 
                                                        placeholder='Enter new video link'
                                                        type='text'
                                                    /> 
                                                </FormGroup> 
                                            )}

                                            {(this.state.isShowGLTFlink || this.state.isShowGLTF) && (
                                        
                                                <FormGroup controlId='formControlIsText'>
                                                    <FormControl 
                                                        value={this.state.gltfValue} 
                                                        onChange={this.handleGLTF} 
                                                        placeholder='Enter new GLTF link'
                                                        type='text'
                                                    /> 
                                                </FormGroup> 
                                            )}

                                            {(this.state.isShowgltfLINKAdditionalDevicelink || this.state.isShowgltfLINKAdditionalDevice) && (
                                               
                                                    <FormGroup controlId='formControlIsText'>
                                                        <FormControl 
                                                            value={this.state.addGLTFValue} 
                                                            onChange={this.handleAdditionalGLTF} 
                                                            placeholder='Enter new additional GLTF link'
                                                            type='text'
                                                        /> 
                                                    </FormGroup> 
                                            )}
                                            
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                    <Row>
                                        <Col xs={12}>
                                        <ReactCSSTransitionGroup
                                        transitionName="MediaElements"
                                        transitionAppear={true}
                                        transitionAppearTimeout={400}
                                        transitionEnter={false}
                                        transitionEnterTimeout={300}
                                        transitionLeaveTimeout={10}>
                                            {this.state.isShowIMG && (
                                                value.state.imgLINK ? (
                                                    <Col xs={12}>
                                                        <img src={value.state.imgLINK} className='image' alt='ups' />
                                                    </Col>
                                                ) : (" no image "))}

                                            {this.state.isShowVideo && (  
                                                    value.state.videoLINK ? (
                                                
                                                    <Player><source src={value.state.videoLINK} /><ControlBar/></Player> 
                                                            
                                                ) : (" no video "))}
                                        </ReactCSSTransitionGroup>

                                            {this.state.isShowGLTF && (
                                                value.state.gltfLINK ? (
                                                     
                                                    <div onTouchMove={this.handleTouchStart} style={{touchAction: 'none'}}>
                                                    <Engine canvasId='sample-canvas' adaptToDeviceRatio={true} antialias={true }>
                                                        <Scene touchActionNone={true}>
                                                            <ArcRotateCamera name="camera2" alpha={Math.PI / 2} beta={Math.PI / 2} radius={1.0} target={Vector3.Zero()} minZ={0.001} />                                                      
                                                            <HemisphericLight name="light1" intensity={0.7} direction={Vector3.Zero()} />
                                                            <ScaledModelWithProgress rootUrl={`https://madeinholofilestorage.blob.core.windows.net/filestoragecointainer/daimler/`} sceneFilename="element_makita.gltf"  
                                                            progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, -0.1, -0.2)} />                                                    
                                                        </Scene>
                                                    </Engine>
                                                    </div>
                                                    
                                                ) : (" no GLTF "))}
                                           
                                           {this.state.isShowgltfLINKAdditionalDevice && (
                                                value.state.gltfLINKAdditionalDevice ? (
                                                     
                                                    <div onTouchMove={this.handleTouchStart} style={{touchAction: 'none'}}>
                                                    <Engine canvasId='sample-canvas' adaptToDeviceRatio={true} antialias={true }>
                                                        <Scene touchActionNone={true}>
                                                            <ArcRotateCamera name="camera1" alpha={Math.PI / 2} beta={Math.PI / 2} radius={1.0} target={Vector3.Zero()} minZ={0.001} />                                                      
                                                            <HemisphericLight name="light1" intensity={3.7} direction={Vector3.Up()} />
                                                            <ScaledModelWithProgress rootUrl={`${value.state.gltfLINKAdditionalDevice}`} sceneFilename=""  
                                                            progressBarColor={Color3.FromInts(255, 165, 0)} center={new Vector3(0, -0.1, -0.2)} />                                                    
                                                        </Scene>
                                                    </Engine>
                                                    </div>
                                                    
                                                ) : (" no GLTF "))}
                                            
                                                
                                        </Col>
                                    </Row>  
                                <Row>
                                <Col  xs={12} className = 'Buttons'>
                                                    <Col xs={6}>
                                    <LinkContainer to={'/Site/'+value.state.siteLocation}>
                                        <Button type='submit' bsStyle = 'link' value='Submit' className = 'Save' onClick = {() => {
                                            
                                            newObj = this.createAction(
                                                this.state.nameValue, 
                                                this.state.background, 
                                                value.state.DIRECTIONpointX, 
                                                value.state.DIRECTIONpointY,
                                                value.state.DIRECTIONpointZ, 
                                                value.state.FK_SITE, 
                                                this.state.ChecklistValue, 
                                                value.state.ID, 
                                                value.state.ORDERinLIST, 
                                                value.state.POSX, 
                                                value.state.POSY, 
                                                value.state.POSZ, 
                                                value.state.ROTX, 
                                                value.state.ROTY, 
                                                value.state.ROTZ,
                                                this.state.gltfValue, 
                                                this.state.imgValue, 
                                                this.state.videoValue, 
                                                value.state.voiceLINK, 
                                                value.state.voiceText, 
                                                value.state.animationType,
                                                this.state.deviceValue,
                                                this.state.addGLTFValue
                                            )
                                            currentOrder = value.state.ORDERinLIST
                                            console.log(newObj)
                                            value.SendData(newObj, currentOrder);
                                            value.DeleteItems(); 
                                            
                                        }}>
                                        <Glyphicon className = 'GlyphiconButtonAction' glyph='ok'/>
                                        </Button>
                                    </LinkContainer>
                                    </Col>
                                    <Col xs={6}>
                                    
                                    <LinkContainer to={'/Site/'+value.state.siteLocation}>
                                        <Button bsStyle = 'link' className = 'Cancel' onClick = {() => {
                                            value.DeleteItems(); 
                                        }}>
                                            <Glyphicon className = 'GlyphiconButtonAction' glyph='remove'/>
                                        </Button>
                                    </LinkContainer>
                                    </Col>
                                </Col>
                            </Row>

                                <Col xs = {12} sm={12}>
                                <Table responsive hover>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Position</th>
                                            <th>Rotation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>X</td>
                                            <td>{value.state.POSX}</td>
                                            <td>{value.state.ROTX}</td>
                                        </tr>
                                        <tr>
                                            <td>Y</td>
                                            <td>{value.state.POSY}</td>
                                            <td>{value.state.ROTY}</td>
                                        </tr>
                                        <tr>
                                            <td>Z</td>
                                            <td>{value.state.POSZ}</td>
                                            <td>{value.state.ROTZ}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            </Row>
                            

                        </Form>
                    </Grid>
                    </div>
                </ReactCSSTransitionGroup>  
            )}
            </myContext.Consumer>
        ) 
    }
}



const Example = () => (
    <myContext.Consumer>
      {value => { 
        
        return (
          <Checklist value={value.state.LABEL} device={value.state.FK_DEVICE} color={value.state.COLOR} action={value.state.FK_ACTIONTYPE} img={value.state.imgLINK} gltf={value.state.gltfLINK} video={value.state.videoLINK} additionalgltf={value.state.gltfLINKAdditionalDevice} />
        )
        } }
    </myContext.Consumer>
  );

 export default Example;