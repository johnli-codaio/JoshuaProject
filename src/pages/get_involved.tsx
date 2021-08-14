import Footer from '../components/footer';
import Navbar from '../components/navbar';
import classes from './get_involved.less';
import classNames from 'classnames';
import {getAssetUrl} from '../utils/import_utils';

function GetInvolved() {
  return (
      <div className={classes.root}>
        <Navbar showLogo={true} />
        <img className={classes.banner} src={getAssetUrl('get_involved/get_involved.png')}/>
        <span className={classes.banner_text}>Get involved with God’s kingdom work</span>
        <div className={classes.contentContainer }>
            <div className={classes.content}>
                <span className={classes.title}>
                  Short-Term Opportunities
                </span>
                <div className={classes.orangeDivider} />

                <div className={classes.row}>
                  <div className={classes.three_column}>
                    <img className={classes.logo} src={getAssetUrl('get_involved/take_local_action.png')}/>
                    <div className={classes.logo_text}>
                        <b>Take Local Action</b>
                    </div>
                  </div>
                  <div className={classes.three_column}>
                    <img className={classes.logo} src={getAssetUrl('get_involved/adopt_people_group.png')}/>
                    <div className={classes.logo_text}>
                        <a href={'https://aims.org/upg-adoption/'}> <b>Adopt a People Group</b> </a>
                    </div>
                  </div>
                  <div className={classes.three_column}>
                    <img className={classes.logo} src={getAssetUrl('get_involved/pray_for_them.png')}/>
                    <div className={classes.logo_text}>
                        <b>Pray for Them</b>
                    </div>
                  </div>
                </div>

                <span className={classes.title}>
                  Long-Term Opportunities
                </span>
                <div className={classes.orangeDivider} />
                <div className={classes.row}>
                  <div className={classes.two_column}>
                    <img className={classes.logo} src={getAssetUrl('get_involved/go_to_unreached.png')}/>
                    <div className={classes.logo_text}>
                        <b>Go to the Unreached</b>
                    </div>
                  </div>
                  <div className={classes.two_column}>
                    <img className={classes.logo} src={getAssetUrl('get_involved/enroll_course.png')}/>
                    <div className={classes.logo_text}>
                        <b>Enroll in a Course</b>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
  )
}

export default GetInvolved;
