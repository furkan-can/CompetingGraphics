import PropTypes from 'prop-types';


const GraphicItem = (props) => {
    return (
        <div className="app-graphic-item-wrapper" style={{top:props.top,width:props.width}}>
            <div className="app-chart-item" style={{backgroundColor:props.color}}>
                {props.text}
            </div>
            <div className="app-chart-text">
                {props.count}
            </div>
        </div>
    )
}

GraphicItem.propTypes = {
    text: PropTypes.string,
    count:PropTypes.number,
    color:PropTypes.string,
    top:PropTypes.string,
    width:PropTypes.string
};


export default GraphicItem;