import React, { Component } from 'react';
import { Button, Popover, Glyphicon, OverlayTrigger } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../style/SiteId.css';
import myContext from '../ContextProvider/MyProvider';

export class SiteIdDeletePopover extends Component {
    render() {
        const { newArr } = this.props;
        return(
        <myContext.Consumer>
            {(value) => (
                <OverlayTrigger trigger='focus' placement='bottom' overlay=
                {
                    <Popover id="popover-trigger-focus" title="Are You sure?">
                    <Link to={'/Site/'+value.state.siteLocation}>
                        <Button bsStyle = 'link' onClick={
                            () => {
                                value.newDragArr(newArr)
                            }
                        }>
                        Yes
                        </Button>
                    </Link>
                        <Button bsStyle = 'link'>
                        No
                        </Button>
                    </Popover>
                }>
                    <Link to={'/Site/'+value.state.siteLocation}>
                        <Button bsStyle= 'link'>
                            <Glyphicon className = 'GlyphiconButton' glyph='remove-circle'/>  
                            Save
                        </Button>
                    </Link>
                </OverlayTrigger>
            )}
        </myContext.Consumer>
        )
    }
}
