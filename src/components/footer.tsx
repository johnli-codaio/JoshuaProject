import { getAssetUrl } from '../utils/import_utils';
import {Link} from 'react-router-dom';
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
              <Link className={classes.link} to={'/'}>About</Link>
              <Link className={classes.link} to={'/'}>History</Link>
              <Link className={classes.link} to={'/'}>Beliefs</Link>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Next Steps</span>
              <Link className={classes.link} to={'/'}>Explore Data</Link>
              <Link className={classes.link} to={'/'}>Prayer Guides</Link>
              <Link className={classes.link} to={'/'}>Multilingual Versions</Link>
              <Link className={classes.link} to={'/'}>Children's Materials</Link>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Support</span>
              <Link className={classes.link} to={'/donate'}>Donate</Link>
              <Link className={classes.link} to={'/get-involved'}>Get Involved</Link>
              <Link className={classes.link} to={'/'}>Finances & Partners</Link>
              <Link className={classes.link} to={'/'}>Feedback</Link>
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