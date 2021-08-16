import Footer from '../components/footer';
import Navbar from '../components/navbar';
import classes from './get_involved.less';
import classNames from 'classnames';
import {getAssetUrl} from '../utils/import_utils';

function GetInvolved() {
  const renderLocalCard = () => {
    return (
      <div className={classes.getInvolvedCard}>
        <img className={classes.leftCardImage} src={getAssetUrl('get_involved/local_card.png')} />
        <span className={classes.leftPictureLabel}>Local</span> 
        <div className={classes.leftBackgroundOverlay}> 
          <div className={classes.cardRightTextContainer}>
            <div className={classes.cardText}>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://reachingthenationsamongus.org'} target={'_blank'}>
                  <b>Befriend</b>
                </a> local unreached peoples.
              </span>

              <span className={classes.bullet}>
                <a className={classes.link} href={'https://missionexus.org'} target={'_blank'}>
                  <b>Volunteer</b>
                </a> among the unreached with a mission agency such as MissioNexus.
              </span>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://wmu.com'} target={'_blank'}>
                  <b>Equip and connect</b>
                </a> your church for the local unreached.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderAdoptCard = () => {
    return (
      <div className={classes.getInvolvedCard}>
        <img className={classes.rightCardImage} src={getAssetUrl('get_involved/adopt_card.png')} />
        <span className={classes.rightPictureLabel}>Adopt</span> 
        <div className={classes.rightBackgroundOverlay}> 
          <div className={classes.cardLeftTextContainer}>
            <div className={classes.cardText}>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://aims.org/upg-adoption/'} target={'_blank'}>
                  <b>Commit</b>
                </a> your heart to a UPG through prayer and financial gifts. Watch God work in the planting and growth of churches and missionaries.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderPrayCard = () => {
    return (
      <div className={classes.getInvolvedCard}>
        <img className={classes.leftCardImage} src={getAssetUrl('get_involved/pray_card.png')} />
        <span className={classes.leftPictureLabel}>Pray</span> 
        <div className={classes.leftBackgroundOverlay}> 
          <div className={classes.cardRightTextContainer}>
            <div className={classes.cardText}>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://joshuaproject.net/pray/unreachedoftheday/podcast'} target={'_blank'}>
                  <b>Pray</b>
                </a> with us every day through Joshua Project's podcast!
              </span>

              <span className={classes.bullet}>
                <a className={classes.link} href={'https://joshuaproject.net/pray/guides'} target={'_blank'}>
                  <b>Explore</b>
                </a> in-depth prayer guides for various people groups.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderGoCard = () => {
    return (
      <div className={classes.getInvolvedCard}>
        <img className={classes.rightCardImage} src={getAssetUrl('get_involved/go_card.png')} />
        <span className={classes.rightPictureLabel}>Go</span> 
        <div className={classes.rightBackgroundOverlay}> 
          <div className={classes.cardLeftTextContainer}>
            <div className={classes.cardText}>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://www.cru.org/us/en/opportunities/mission-trips.html'} target={'_blank'}>
                  <b>Invest</b>
                </a> 1 to 12 weeks short-term to engage with God's mission somewhere in the world.
              </span>

              <span className={classes.bullet}>
                <a className={classes.link} href={'https://pioneers.org/#/'} target={'_blank'}>
                  <b>Pioneer</b>
                </a> long-term ways to pursue the unreached.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const renderEnrollCard = () => {
    return (
      <div className={classes.getInvolvedCard}>
        <img className={classes.leftCardImage} src={getAssetUrl('get_involved/enroll_card.png')} />
        <span className={classes.leftPictureLabel}>Enroll</span> 
        <div className={classes.leftBackgroundOverlay}> 
          <div className={classes.cardRightTextContainer}>
            <div className={classes.cardText}>
              <span className={classes.bullet}>
                <a className={classes.link} href={'https://www.perspectives.org/'} target={'_blank'}>
                  <b>Learn</b>
                </a> about God's plan and become more informed about the Great Commission with other curious individuals who love and follow Jesus.
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
      <div className={classes.root}>
        <Navbar showLogo={true} />
        <div className={classes.bannerContainer}>
          <div className={classes.bannerTextContainer}>
            <span className={classes.banner_text}>Get involved with God’s kingdom work</span>
          </div>
        </div>
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
                        <a className={classes.link} href={'https://aims.org/upg-adoption/'}> <b>Adopt a People Group</b> </a>
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
        <div className={classes.cardsContainer}>
          {renderLocalCard()}
          {renderAdoptCard()}
          {renderPrayCard()}
          {renderGoCard()}
          {renderEnrollCard()}
        </div>
        <Footer />
      </div>
  )
}

export default GetInvolved;
