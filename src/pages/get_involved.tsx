import Footer from '../components/footer';
import Navbar from '../components/navbar';
import classes from './get_involved.less';
import classNames from 'classnames';
import {getAssetUrl} from '../utils/import_utils';

function GetInvolved() {
  return (
      <div className={classes.root}>
        <Navbar showLogo={true} />
        <div className={classes.contentContainer }>
            <div className={classes.content}>
            <span className={classes.title}>
              Short-Term Opportunities
            </span>
            <div className={classes.orangeDivider} />

            <span className={classes.title}>
              Long-Term Opportunities
            </span>
            <div className={classes.orangeDivider} />
            </div>
        </div>
      </div>
  )
}

export default GetInvolved;
