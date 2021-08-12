import {Button, ButtonStyle} from '../components/button';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Globe from '../components/globe';
import classNames from 'classnames';
import * as classes from './home.less';
import {getAssetUrl} from '../utils/import_utils';
import {useCallback} from 'react';
import {useState} from 'react';

enum TaskCard {
  WhatTheTaskIs = 'WhatTheTaskIs',
  WhatWeDo = 'WhatWeDo',
  WhatYouCanDo = 'WhatYouCanDo',
};

interface Props {}

function Home() {
  // TODO (johnli): Have this be set via intersection observer.
  const [showLogoInNavbar, setShowLogoInNavbar] = useState<boolean>(false);
  const [activeTaskInfoCard, setActiveTaskInfoCard] = useState<TaskCard | null>(null);
  const [showInteractiveGlobe, setShowInteractiveGlobe] = useState<boolean>(false);

  const onBannerButtonClick = useCallback(() => {
    // TODO (johnli): show the sick new globe stuff.
    setShowInteractiveGlobe(true);    
  }, []);

  const onTaskCardClick = (taskCard: TaskCard) => {
    return useCallback(() => {

      if (activeTaskInfoCard === taskCard) return;
      setActiveTaskInfoCard(taskCard);
    }, [activeTaskInfoCard]);
  };

  const resetTaskCard = useCallback(() => {
    setActiveTaskInfoCard(null);
  }, []);

  const toggleLogoOnNavbar = () => {
    setShowLogoInNavbar(!showLogoInNavbar);
  }

  const renderBanner = () => {
    return (
      <div className={classNames(classes.section, classes.bannerSection)}>
        <div className={classes.banner}>
          <img className={classes.logo} src={getAssetUrl('logo.svg')} />
          <div className={classes.brandNameContainer}>
            <img className={classes.brandName} src={getAssetUrl('name.svg')} />
            <span className={classes.brandDescription}>Bringing definition to the unfinished task.</span>
            <Button onClick={onBannerButtonClick} style={ButtonStyle.Primary}>Explore the data</Button>
          </div>
        </div>
      </div>
    );
  };

  const renderQuoteSection = () => {
    return (
      <div className={classNames(classes.section, classes.quoteSection)}>
        <img className={classes.quoteBgImage} src={getAssetUrl('unreached_background.jpg')}/>
        <div className={classes.quoteTextContainer}>
          <span className={classes.firstText}>
            Over 40% of people in the world live with <b>NO</b> access to hearing the good news of <span className={classes.textEmphasis}>Jesus</span>
          </span>
          <span className={classes.secondText}>
            They are <span className={classes.textEmphasis}>unreached</span>
          </span>
        </div>
      </div>
    )
  };

  const renderTaskInfoList = () => {
    console.log(activeTaskInfoCard);
    return (
      <div className={classNames(classes.section, classes.taskInfoSection)}>
        <div className={classes.taskCardList}>
          {/* What the task is */}
          <div
            className={classNames(classes.taskCard, classes.blue,
              {
                [classes.isOpen]: activeTaskInfoCard === TaskCard.WhatTheTaskIs,
                [classes.isNotSelected]: activeTaskInfoCard && activeTaskInfoCard !== TaskCard.WhatTheTaskIs,
              },
            )}
            onClick={onTaskCardClick(TaskCard.WhatTheTaskIs)}
          >
            <div className={classNames(classes.layer, classes.globe, 
              {[classes.isOpen]: activeTaskInfoCard === TaskCard.WhatTheTaskIs},
            )}>
              <div className={classes.taskHeaderText}>what the task is</div>
              {activeTaskInfoCard === TaskCard.WhatTheTaskIs
                ? <div className={classes.taskDescriptionContainer}>
                    <img className={classes.minimize} src={getAssetUrl('minimize.svg')} onClick={resetTaskCard}/>
                    <span className={classes.taskCardDescriptionHeader}>Jesus sent his believers.</span>
                    <span className={classes.taskCardVerse}>"Go and make disciples of all nations, baptizing them in the name of the Father and of the Son and of the Holy Spirit"</span>
                    <span className={classes.taskCardVerseSignature}>Matthew 28:19</span>
                    <span className={classes.taskCardCaption}>Great Commission</span> 
                  </div>
                : null}
            </div>
          </div>
          {/* What we do */}
          <div
            className={classNames(classes.taskCard, classes.teal,
              {
                [classes.isOpen]: activeTaskInfoCard === TaskCard.WhatWeDo,
                [classes.isNotSelected]: activeTaskInfoCard && activeTaskInfoCard !== TaskCard.WhatWeDo,
              },
            )}
            onClick={onTaskCardClick(TaskCard.WhatWeDo)}
          >
            <div className={classNames(classes.layer, classes.laptop, 
              {[classes.isOpen]: activeTaskInfoCard === TaskCard.WhatWeDo},
            )}>
              <div className={classes.taskHeaderText}>what we do</div>
              {activeTaskInfoCard === TaskCard.WhatWeDo
                ? <div className={classes.taskDescriptionContainer}>
                    <img className={classes.minimize} src={getAssetUrl('minimize.svg')} onClick={resetTaskCard}/>
                    <span className={classes.taskCardDescriptionHeader}>Joshua Project seeks to <br /><b>define</b> the unfinished task of the <b>Great Commission</b> by using <b>data</b> to spotlight global ethnic people groups with the <br /><b>fewest followers of Christ</b></span>
                    <Button className={classes.taskCardButton} onClick={() => {/* TODO */}} style={ButtonStyle.Secondary}>About Us</Button>
                  </div>
                : null}
            </div>
          </div>
          {/* What you can do */}
          <div
            className={classNames(classes.taskCard, classes.blue,
              {
                [classes.isOpen]: activeTaskInfoCard === TaskCard.WhatYouCanDo,
                [classes.isNotSelected]: activeTaskInfoCard && activeTaskInfoCard !== TaskCard.WhatYouCanDo,
              },
            )}
            onClick={onTaskCardClick(TaskCard.WhatYouCanDo)}
          >
            <div className={classNames(classes.layer, classes.help, 
              {[classes.isOpen]: activeTaskInfoCard === TaskCard.WhatYouCanDo},
            )}>
              <div className={classes.taskHeaderText}>what you can do</div>
              {activeTaskInfoCard === TaskCard.WhatYouCanDo
                ? <div className={classes.taskDescriptionContainer}>
                    <img className={classes.minimize} src={getAssetUrl('minimize.svg')} onClick={resetTaskCard}/>
                    <span className={classes.taskCardDescriptionHeader}>Your light is purposeful.</span>
                    <span className={classes.taskCardVerse}>Let your light shine before men in such a way that they may see your good works, and glorify your Father who is in heaven."</span>
                    <span className={classes.taskCardVerseSignature}>Matthew 5:16</span>
                    <Button className={classes.taskCardButton} onClick={() => {/* TODO */}} style={ButtonStyle.Secondary}>Get Involved</Button>
                  </div>
                : null}
            </div>
          </div>
        </div>
      </div>
    )
  };


  return (
    <div className={classes.root}>
      <Navbar showLogo={true}/>
      {showInteractiveGlobe ? <Globe /> : renderBanner()}
      {renderQuoteSection()}
      {renderTaskInfoList()}
      <Footer />
    </div> 
  );
}

export default Home;