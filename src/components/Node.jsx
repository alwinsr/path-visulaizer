import PropTypes from 'prop-types';
import './Node.css';

const Node = ({ onClick, nodeStyle ,onMouseOver, onMouseDown, onMouseUp}) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className="node"
      style={nodeStyle}
      onClick={handleClick}
      onMouseOver={onMouseOver}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
    ></div>
  );
};

Node.propTypes = {
  nodeStyle: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  onMouseOver: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
};

export default Node;
