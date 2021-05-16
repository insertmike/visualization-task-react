const SmallTargetProgressBar = ({percentage}) => {

    const fillerStyles = {
        width: `${percentage}%`,
        transition: 'width 1s ease-in-out',
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