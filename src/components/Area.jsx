import PropTypes from 'prop-types';


const Area = (props) => {
    return (
        <div className="app-area" style={{height:props.data.length*40}}>
            {props.children}
        </div>
    )
}

Area.propTypes = {
    children: PropTypes.node.isRequired,
    data:PropTypes.array,
};



export default Area;