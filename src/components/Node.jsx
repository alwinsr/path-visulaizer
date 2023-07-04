import PropTypes from 'prop-types';
import './Node.css';

const Node = ({ onClick, nodeStyle }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div
      className="node"
      style={nodeStyle}
      onClick={handleClick}
      // onMouseOver={onMouseOver}
      // onMouseLeave={onMouseLeave}
    ></div>
  );
};

Node.propTypes = {
  onClick: PropTypes.func.isRequired,
  // onMouseOver: PropTypes.func.isRequired,
  // onMouseLeave: PropTypes.func.isRequired,
  nodeStyle: PropTypes.object.isRequired,
};

export default Node;
