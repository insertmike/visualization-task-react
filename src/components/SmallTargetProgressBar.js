
const SmallTargetProgressBar = ({percentage}) => {

    const fillerStyles = {
        width: `${percentage}%`,
    }

  return (
    <div className="progressBarContainer">
      <div className="progressBarFilter" style={fillerStyles}>
        <span className="progressBarLabel">{`${percentage}%`}</span>
      </div>
    </div>
  );
};

export default SmallTargetProgressBar;