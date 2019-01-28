import React, { Component } from 'react';
import { Media, Glyphicon, Button, Grid, Col, Row} from 'react-bootstrap';
import '../../style/DeviceId.css';
import { Link } from 'react-router-dom';
import deviceContext from '../ContextProvider/DeviceProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import rotateleft from '../../img/rotate-left.png';
import rotateright from '../../img/rotate-right.png';



export class DeviceId extends Component {


    displayName = DeviceId.name;
    constructor(props) {
        super(props)
        this.createAction=this.createAction.bind(this);
    }

    createAction = (FK_ACTIONTYPE) => {
            if (FK_ACTIONTYPE===0) {               
               return <Glyphicon className = 'GlyphiconArrow' glyph='upload'/>
            }
            if (FK_ACTIONTYPE===1) { 
               return <img src={rotateleft} alt='error' className='RotateLeft' />;
            }
           if (FK_ACTIONTYPE===2) { 
               return <img src={rotateright} alt='error' className='RotateRight' />;
           }
           if (FK_ACTIONTYPE===3) { 
               return <Glyphicon className = 'GlyphiconArrow' glyph='hand-up'/>;
           }
        }


    render() {
        return(

        <deviceContext.Consumer> 
                                
            {(value) => (
                            
                <div>                
                    <ReactCSSTransitionGroup
                        transitionName="example"
                        transitionAppear={true}
                        transitionAppearTimeout={800}
                        transitionEnter={true}
                        transitionEnterTimeout={300}
                        transitionLeaveTimeout={800}
                        transitionLeave={true}>
                            {value.state.newArr.map(({ID, LABEL, imgLINK, gltfLINK, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, WIDTH, HEIGHT, DEPTH, COLOR, IoTLINK, IoT_ID, FK_SITE}, ORDERinLIST) => (
                            <div key={ORDERinLIST}>
                            <Grid>
                                <Row>
                                    <Col xs={12} sm = {12} className='Container'>
                                        <div className = 'DeviceIdContainer'>
                                            <Media>
                                                <Media.Left style={{backgroundColor: COLOR}}>
                                                </Media.Left>
                                                <Media.Body>
                                                    
                                                        <Media.Heading className='Order'>
                                                            <div >
                                                                {ID}
                                                            </div>
                                                        </Media.Heading>
                                                        <Media.Heading className='Label'>
                                                            <div>
                                                                {LABEL}
                                                            </div>
                                                        </Media.Heading>
                                                            <div>{FK_SITE}</div>
                                                            
                                                   
                                                </Media.Body>
                                                    <Media.Right align='middle'>
                                                        
                                                    </Media.Right>
                                                <Media.Right align='middle'>
                                                    <Media.Body>
                                                        <p>
                                                            <Link to={'/Device/'+value.state.deviceLocation}>
                                                                <Button bsStyle = 'link' onClick={
                                                                    () => {
                                                                        value.DeleteAction(ORDERinLIST)
                                                                    }
                                                                }>
                                                                    <Glyphicon className = 'GlyphiconButton' glyph='remove-circle'/>  
                                                                    Delete
                                                                </Button>
                                                            </Link>
                                                            
                                                        </p>
                                                        <p>
                                                            <Link to='./../DeviceChecklist'>
                                                                <Button bsStyle = 'link' onClick={() => {
                                                                    
                                                                    value.AddItems(ID, LABEL, imgLINK, gltfLINK, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, WIDTH, HEIGHT, DEPTH, COLOR, IoTLINK, IoT_ID, FK_SITE, ORDERinLIST )
                                                                }
                                                                }>
                                                                    <Glyphicon className = 'GlyphiconButton' glyph='cog'/>
                                                                    Edit
                                                                </Button>
                                                            </Link>
                                                        </p>
                                                    </Media.Body>
                                                </Media.Right>
                                            </Media>
                                        </div>
                                    </Col>
                                </Row>
                            </Grid></div>
                            ))}
                    </ReactCSSTransitionGroup>
                </div>
                )}
            </deviceContext.Consumer>
              
        )
    }
}
