import { getAssetUrl } from '../utils/import_utils';
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
              <a className={classes.link} href={'/'}>About</a>
              <a className={classes.link} href={'/'}>History</a>
              <a className={classes.link} href={'/'}>Beliefs</a>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Next Steps</span>
              <a className={classes.link} href={'/'}>Explore Data</a>
              <a className={classes.link} href={'/'}>Prayer Guides</a>
              <a className={classes.link} href={'/'}>Multilingual Versions</a>
              <a className={classes.link} href={'/'}>Children's Materials</a>
            </div>
            <div className={classes.links}>
              <span className={classes.linkHeader}>Support</span>
              <a className={classes.link} href={'/'}>Donate</a>
              <a className={classes.link} href={'/'}>Get Involved</a>
              <a className={classes.link} href={'/'}>Finances & Partners</a>
              <a className={classes.link} href={'/'}>Feedback</a>
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