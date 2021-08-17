import { getAssetUrl } from '../utils/import_utils';
import {Link} from 'react-router-dom';
import classNames from 'classnames';
import classes from './footer.less';
interface Props {}

function Footer(props: Props) {

  return (
    <div className={classes.root}>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <a href={'/'}><img className={classes.logo} src={getAssetUrl('logo_with_name.svg')} /></a>
          <div className={classes.linksContainer}>
            <div className={classes.links}>
              <span className={classes.linkHeader}>General</span>
              <Link className={classNames(classes.link, classes.allowed)} to={'about'}>About</Link>
              <span className={classes.link}>History</span>
              <span className={classes.link}>Beliefs</span>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Next Steps</span>
              <span className={classes.link}>Explore Data</span>
              <span className={classes.link}>Prayer Guides</span>
              <span className={classes.link}>Multilingual Versions</span>
              <span className={classes.link}>Children's Materials</span>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Support</span>
              <span className={classes.link}>Donate</span>
              <Link className={classNames(classes.link, classes.allowed)} to={'get-involved'}>Get Involved</Link>
              <span className={classes.link}>Finances & Partners</span>
              <span className={classes.link}>Feedback</span>
            </div>
          </div>
        </div>
        <div className={classes.divider} />
        <div className={classes.copywriteAndSocials}>
          <span className={classes.copywrite}>© Joshua Project, 2021</span>
          <div className={classes.socials}>
            <a href={'https://www.instagram.com/unreached_peoples'}>
              <img className={classes.socialLink} src={getAssetUrl('insta.svg')} />
            </a>
            <a href={'https://www.facebook.com/UnreachedPeople/'}>
              <img className={classes.socialLink} src={getAssetUrl('fb.svg')} />
            </a>
            <a href={'https://twitter.com/joshuaproject'}>
              <img className={classes.socialLink} src={getAssetUrl('twitter.svg')} />
            </a>
            <a href={'https://apps.apple.com/us/app/unreached-of-the-day/id543797457'}>
              <img className={classes.socialLink} src={getAssetUrl('apple.svg')} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;