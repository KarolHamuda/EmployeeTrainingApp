import React, { Component } from 'react';
import { CirclePicker } from 'react-color';
import Media from 'react-media';
import { Table, Grid, Row, Col, Form, FormGroup, FormControl, Button, Glyphicon } from "react-bootstrap";
import '../../style/DeviceChecklist.css';
import { LinkContainer } from 'react-router-bootstrap';
import deviceContext from '../ContextProvider/DeviceProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Engine, Scene, ArcRotateCamera, HemisphericLight, Model } from 'react-babylonjs';
import { Vector3 } from 'babylonjs';

let newObj = [];
let currentOrder = [];
export class Checklist extends Component {
    displayName = Checklist.name;
    constructor(props) {
        super(props)
        this.state = {
            nameValue: this.props.value,
            deviceValue: this.props.device,
            widthValue: this.props.width,
            heightValue: this.props.height,
            depthValue: this.props.depth,
            background: this.props.color,
            isShowIMG: false,
            isShowGLTF: false,
           
            isShowIMGlink: false,
            isShowGLTFlink: false,
          
            imgValue: this.props.img,
            gltfValue: this.props.gltf,
            
            IoTLINKValue: this.props.IoTLINK
        }

        console.log(this.props.IoTLINK)
       

      
        this.showGLTF = this.showGLTF.bind(this);
        this.showIMG = this.showIMG.bind(this);

        this.handleIoT = this.handleIoT.bind(this);
        this.handleIMG = this.handleIMG.bind(this);

        this.handleGLTF = this.handleGLTF.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleDevice = this.handleDevice.bind(this);
        this.handleDescription = this.handleDescription.bind(this);
        this.handleWidth = this.handleWidth.bind(this);
        this.handleHeight = this.handleHeight.bind(this);
        this.handleDepth = this.handleDepth.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTouchStart = this.handleTouchStart.bind(this);
       
    }

   

    componentWillMount() {
        document.body.style.backgroundColor = this.state.background;    
    }

    componentWillUnmount() {
        document.body.style.backgroundColor = null;
    }

    showGLTF = () =>{
        this.state.isShowGLTF===false ? (this.setState({ isShowGLTF: true, isShowIMG: false,
            isShowGLTFlink: false, isShowIMGlink: false})) : (this.setState({ isShowGLTF: false }))
    }

    showIMG = () => {
        this.state.isShowIMG===false ? (this.setState({ isShowIMG: true, isShowGLTF: false,
            isShowGLTFlink: false, isShowIMGlink: false})) : (this.setState({ isShowIMG: false }))
    }



    showGLTFlink = () =>{
        this.state.isShowGLTFlink===false ? (this.setState({ isShowGLTFlink: true, isShowIMGlink: false,
            isShowIMG: false, isShowGLTF: false})) : (this.setState({ isShowGLTFlink: false }))
    }

    showIMGlink = () => {
        this.state.isShowIMGlink===false ? (this.setState({ isShowIMGlink: true, isShowGLTFlink: false,
            isShowIMG: false, isShowGLTF: false})) : (this.setState({ isShowIMGlink: false }))
    }

    handleTouchStart(event){
        event.preventDefault()
    }


    handleColorChangeComplete = (color) => {
        this.setState({ background: color.hex })
        document.body.style.backgroundColor = this.state.background
    }

    handleIoT(event) {
        this.setState({IoTLINKValue: event.target.value})
    }

    handleIMG(event) {
        this.setState({imgValue: event.target.value});
     
    }



    handleGLTF(event) {
        this.setState({gltfValue: event.target.value});
     
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

    handleWidth(event) {
        this.setState({widthValue: event.target.value})
    }

    handleHeight(event) {
        this.setState({heightValue: event.target.value})
    }

    handleDepth(event) {
        this.setState({depthValue: event.target.value})
    }
    
    
    handleSubmit(event) {
        event.preventDefault();
    }

    createAction(id, name,  gltfLINK, imgLINK, posx, posy, posz, rotx, roty, rotz, width, height, depth, color, IoTLINK, IoT_ID, fksite)  {
        return newObj = 
            {
                ID: + id,
                LABEL: name,
                imgLINK: imgLINK,
                gltfLINK: gltfLINK, 
                POSX: + posx,
                POSY: + posy,
                POSZ: + posz,
                ROTX: + rotx,
                ROTY: + roty,
                ROTZ: + rotz,
                WIDTH: + width,
                HEIGHT: + height,
                DEPTH: + depth,
                COLOR: color,
                IoTLINK: IoTLINK,
                IoT_ID: IoT_ID,
                FK_SITE: + fksite
            }
    }

    render() {
        let baseUrl = this.props.gltfLINK;
        return (
        <deviceContext.Consumer>
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
                                <Col className='Width'>
                                    Width
                                </Col>
                                <Col xs={12}>
                                        <FormGroup controlId='formControlIsText'>
                                            <FormControl value={this.state.widthValue} onChange={this.handleWidth} type='number'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className= 'Inputs'>
                                <Col className='Height'>
                                    Height  
                                </Col>
                                <Col xs={12}>
                                    
                                        <FormGroup controlId='formControlIsText'>
                                           <FormControl value={this.state.heightValue} onChange={this.handleHeight} type='text'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className= 'Inputs'>
                                <Col className='Depth'>
                                    Depth
                                </Col>
                                <Col xs={12}>
                                    
                                        <FormGroup controlId='formControlIsText'>
                                           <FormControl value={this.state.depthValue} onChange={this.handleDepth} type='text'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className= 'Inputs'>
                                <Col className='Depth'>
                                    IoTLINK
                                </Col>
                                <Col xs={12}>
                                    
                                        <FormGroup controlId='formControlsTextarea'>
                                           <FormControl value={this.state.IoTLINKValue} onChange={this.handleIoT} componentClass="textarea" className='IoTField'/>
                                        </FormGroup>
                                </Col>
                            </Row>
                            <Row className='ScrollBar' >
                              
                          
                            <Row>
                                    <Col xs={12}>
                                        <Col xs={6} className='ImgButton'> 
                                        {value.state.imgLINK ?
                                            (<button onClick={this.showIMG} className='GreenButton'>IMG</button>) : (<button onClick={this.showIMGlink} className='RedButton'>IMG</button>)}
                                        </Col>
                       
                                        <Col xs={6} className='GltfButton'>
                                        {value.state.gltfLINK ? 
                                            (<button onClick={this.showGLTF} className='GreenButton'>GLTF</button>) : (<button onClick={this.showGLTFlink} className='RedButton'>GLTF</button>)}
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
                                            </Col>
                                        </Row>

                                    </Col>
                                </Row>
                                    <Row>
                                        <Col xs={12} >
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
                                                        <img src={value.state.imgLINK} alt='error' className='image' />
                                                    </Col>
                                                ) : (" no image "))}

                                  
                                        </ReactCSSTransitionGroup>

                                            {this.state.isShowGLTF && (
                                                value.state.gltfLINK ? (
                                                    <div onTouchMove={this.handleTouchStart} style={{touchAction: 'none'}}>
                                                    <Engine canvasId='sample-canvas' adaptToDeviceRatio={false} antialias={false}>
                                                        <Scene>
                                                            <ArcRotateCamera name="camera1" alpha={Math.PI / 2} beta={Math.PI / 2} radius={1.0} target={Vector3.Zero()} minZ={0.1} />                                                      
                                                            <HemisphericLight name="light1" intensity={3.7} direction={Vector3.Up()} />
                                                            <Model rootUrl={`${value.state.gltfLINK}`} sceneFilename="" 
                                                            position={new Vector3(0, -0.4, -0.2)} />                                                    
                                                        </Scene>
                                                    </Engine>
                                                    </div>
                                                ) : (" no GLTF "))}
                                            

                                        
                                        </Col>
                                    </Row>  
                                <Row>
                                <Col  xs={12} className = 'Buttons'>
                                <Col xs={6}>
                                    <LinkContainer to={'/Device/'+value.state.deviceLocation}>
                                        <Button type='submit' bsStyle = 'link' value='Submit' className = 'Save' onClick = {() => {
                                            
                                            newObj = this.createAction(
                                                value.state.ID,
                                                this.state.nameValue, 
                                                this.state.gltfValue,
                                                this.state.imgValue, 
                                                value.state.POSX, 
                                                value.state.POSY, 
                                                value.state.POSZ, 
                                                value.state.ROTX, 
                                                value.state.ROTY, 
                                                value.state.ROTZ,
                                                this.state.widthValue,
                                                this.state.heightValue,
                                                this.state.depthValue,
                                                this.state.background, 
                                                this.state.IoTLINKValue,
                                                value.state.IoT_ID,
                                                value.state.FK_SITE
                                                
                                                )
                                            currentOrder = value.state.ORDERinLIST
                                            
                                            value.SendData(newObj, currentOrder);
                                            value.DeleteItems(); 
                                            
                                        }}>
                                        <Glyphicon className = 'GlyphiconButtonAction' glyph='ok'/>
                                        </Button>
                                    </LinkContainer>
                                    </Col>
                                    <Col xs={6}>
                                    <LinkContainer to={'/Device/'+value.state.deviceLocation}>
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
            </deviceContext.Consumer>
        ) 
    }
}



const Example = () => (
    <deviceContext.Consumer>
      {value => { 
        return (
          <Checklist value={value.state.LABEL} color={value.state.COLOR} width={value.state.WIDTH} height={value.state.HEIGHT} depth={value.state.DEPTH}  IoTLINK={value.state.IoTLINK} img={value.state.imgLINK} gltf={value.state.gltfLINK} />
        )
        } }
    </deviceContext.Consumer>
  );

 export default Example;