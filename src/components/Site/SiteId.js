// @flow
import React, { Component } from 'react';
import { Media, Glyphicon, Button, Grid, Col, Row } from 'react-bootstrap';
import '../../style/SiteId.css';
import { Link } from 'react-router-dom';
import myContext from '../ContextProvider/MyProvider';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { SiteIdDeletePopover } from './SiteIdDeletePopover';
import { SiteIdBody } from './SiteIdBody';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import rotateleft from '../../img/rotate-left.png';
import rotateright from '../../img/rotate-right.png';





// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    
    const result = Array.from(list);
    console.log(list)
    const [removed] = result.splice(startIndex, 1);
    console.log([removed])
    result.splice(endIndex, 0, removed);


    

    return result;
};


export class SiteId extends Component {


    displayName = SiteId.name;
    constructor(props) {
        super(props)
        this.createAction=this.createAction.bind(this);
        
        this.state = {
            items: [],
            reorderedItems: []   
        };
    }
    
    convertToSend = (arr) => {
        console.log(arr)
        this.setState({
            reorderedItems: arr.map(({ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice}, ORDERinLIST) => {
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

    componentWillUnmount() {
        
    }

    onDragEnd = result => {
        


        if (!result.destination) {
            return;
        }

        const items = reorder(
            (this.state.items.length===0) ? (this.props.newArr ) : (this.state.items),
            result.source.index,
            result.destination.index
        );    
        this.setState({
            items: items,
        })
        
        this.convertToSend(items)
        this.props.createDragArr(this.state.reorderedItems)

        
            
    };
     

    createAction = (FK_ACTIONTYPE) => {
            if (FK_ACTIONTYPE===0) {               
               return <Glyphicon className = 'GlyphiconArrow' glyph='upload'/>
            }
            if (FK_ACTIONTYPE===1) { 
               return <img src={rotateleft} className='RotateLeft' alt='RotationLeft' />;
            }
           if (FK_ACTIONTYPE===2) { 
               return <img src={rotateright} className='RotateRight' alt='RotationRight' />;
           }
           if (FK_ACTIONTYPE===3) { 
               return <Glyphicon className = 'GlyphiconArrow' glyph='hand-up'/>;
           }
    }

    render() {
     
        return(

        <myContext.Consumer> 
                                
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
                    <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="droppable">
                        {(provided) => (
                            
                                <div
                                    ref={provided.innerRef}
                                >
                                {(this.state.items.length>=1) ? (

                                    this.state.items.map(({ ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice}, ORDERinLIST) => (
                                                                        
                                        <Draggable key={ID} draggableId={ID} index={ORDERinLIST}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}>

                                                <Grid>
                                                    <Row>
                                                        <Col xs={12} sm = {12} className='Container'>
                                                            <div className = 'SiteIdContainer'>
                                                                <Media>
                                                                    <Media.Left style={{backgroundColor: COLOR}}/>
                                                                    
                                                                    <SiteIdBody ID={ID} LABEL={LABEL} FK_DEVICE={FK_DEVICE} voiceText={voiceText} COLOR={COLOR}/>

                                                                    <Media.Right align='middle'>
                                                                        {this.createAction(FK_ACTIONTYPE)}
                                                                    </Media.Right>

                                                                    <Media.Right align='middle'>
                                                                        <Media.Body>
                                                                            <SiteIdDeletePopover newArr={this.state.reorderedItems}/>
                                                                                <Link to='./../Checklist'>
                                                                                    <Button bsStyle = 'link' onClick={() => {
                                                                                        
                                                                                        value.AddItems(ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, ORDERinLIST, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice)
                                                                                    }
                                                                                    }>
                                                                                        <Glyphicon className = 'GlyphiconButton' glyph='cog'/>
                                                                                        Edit
                                                                                    </Button>
                                                                                </Link>
                                                                        </Media.Body>
                                                                    </Media.Right>
                                                                </Media>
                                                            </div>
                                                            </Col>
                                                    </Row>
                                                </Grid>
                                            </div>
                                        )}
                                        </Draggable>
                                        ))

                                ) : (


                                
                                    value.state.newArr.map(({ ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_ACTIONTYPE, FK_SITE, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice}, ORDERinLIST) => (
                                    
                                    <Draggable key={ID} draggableId={ID} index={ORDERinLIST}>
                                    {(provided) => (
                                        <div
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}>

                                            <Grid>
                                                <Row>
                                                    <Col xs={12} sm = {12} className='Container'>
                                                        <div className = 'SiteIdContainer'>
                                                            <Media>
                                                                <Media.Left style={{backgroundColor: COLOR}}/>
                                                                
                                                                <SiteIdBody ID={ID} LABEL={LABEL} FK_DEVICE={FK_DEVICE} voiceText={voiceText} COLOR={COLOR}/>

                                                                <Media.Right align='middle'>
                                                                    {this.createAction(FK_ACTIONTYPE)}
                                                                </Media.Right>

                                                                <Media.Right align='middle'>
                                                                    <Media.Body>
                                                                        <SiteIdDeletePopover newArr={this.state.reorderedItems}/>
                                                                            <Link to='./../Checklist'>
                                                                                <Button bsStyle = 'link' onClick={() => {
                                                                                    
                                                                                    value.AddItems(ID, LABEL, COLOR, POSX, POSY, POSZ, ROTX, ROTY, ROTZ, FK_SITE, FK_ACTIONTYPE, ORDERinLIST, DIRECTIONpointX, DIRECTIONpointY, DIRECTIONpointZ, gltfLINK, imgLINK, videoLINK, voiceLINK, voiceText, animationType, FK_DEVICE, gltfLINKAdditionalDevice)
                                                                                }
                                                                                }>
                                                                                    <Glyphicon className = 'GlyphiconButton' glyph='cog'/>
                                                                                    Edit
                                                                                </Button>
                                                                            </Link>
                                                                    </Media.Body>
                                                                </Media.Right>
                                                            </Media>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </Grid>
                                        </div>
                                    )}
                                    </Draggable>
                                    ))

                                )}

                                {provided.placeholder}
                                </div>
                            
                        )}
                    </Droppable>
                    </DragDropContext>
                </ReactCSSTransitionGroup>
            </div>
            )}
        </myContext.Consumer>
        )
    }
}

const newArrExample = () => (
    <myContext.Consumer>
        {(value) => {
            return <SiteId newArr={value.state.newArr} createDragArr={value.newDragArr} />
        }}
    </myContext.Consumer>
)

export default newArrExample
