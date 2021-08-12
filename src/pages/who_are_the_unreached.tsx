import Footer from '../components/footer';
import Navbar from '../components/navbar';
import classes from './who_are_the_unreached.less';
import classNames from 'classnames';
import {getAssetUrl} from '../utils/import_utils';

function WhoAreTheUnreached() {
  return (
    <div className={classes.root}>
      <Navbar showLogo={true} />
      <img className={classes.banner} src={getAssetUrl('who_are_the_unreached.png')} />
      <div className={classes.contentContainer }>
        <div className={classes.content}>
          <span className={classes.title}>
            Who are the "unreached"?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            An unreached or least-reached people is a people group among which there is <b>no indigenous community of believing Christians</b>
            with adequate numbers and resources to evangelize this people group <b>without outside assistance.</b>          </span>
          <span className={classNames(classes.title, classes.marginTop)}>
            Why are they considered "unreached"?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            The original Joshua Project editorial committee selected the criteria of less than or equal to 2% Evangelical Christian
            and less than or equal to 5% Professing Christians for a people group to be categorized as unreached. While these
            percentages are somewhat arbitrary,
          </span>
          <div className={classes.verseContainer}>
            <div className={classes.verseText}>
              "we <b>should not underestimate</b> the significance of the <b>small group of people who have a vision of
              a just and gentle world.</b> The quality of a <b>whole culture may be changed</b> when two percent of its people have
              a <b>new vision</b>."
              <sup className={classes.superScript}>1</sup>
            </div>
          </div>
          <span className={classes.text}>
            Joshua Project uses the terms "unreached" and "least-reached" to mean the same thing. The terms are used
            interchangeably on this website.
          </span>
          <span className={classes.footNote}>
            <sup>1</sup>Robert Bellah, Institute for Advanced Study at Princeton University, originally quoted in <i>Psychology Today</i> in the 1970s,
            currently quoted in <i>Christianity Today</i> Oct 2011: 42.)
          </span> 
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default WhoAreTheUnreached;