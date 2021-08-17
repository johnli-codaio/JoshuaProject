import classes from './people_info.less';

interface Props {
  peopleGroup: any;
}

function PeopleInfo(props: Props) {
  const {peopleGroup} = props;

  const renderPeopleGroupImage = () => {
    if (peopleGroup.Photo === 'Y') {
      return (
        <div className={classes.photoContainer}>
          <img className={classes.photo} src={peopleGroup.PhotoAddress} />
        </div> 
      )
    }
  };

  return (
    <div className={classes.content}>
      <div className={classes.information}>
        <div className={classes.groupMetadata}>
          {renderPeopleGroupImage()}
          <div className={classes.peopleText}>
            <span className={classes.field}>People Group: <b>{peopleGroup.NaturalName}</b></span>
            <span className={classes.field}>Population: <b>{peopleGroup.Population}</b></span>
            <span className={classes.field}>Primary Religion: <b>{peopleGroup.PrimaryReligion}</b></span>

            <span className={classes.field}>Workers Needed: <b>{peopleGroup.WorkersNeeded || 0}</b></span>
          </div> 
        </div> 
      </div> 
    </div>
  );
}

export default PeopleInfo;
