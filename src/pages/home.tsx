import {Button, ButtonStyle} from '../components/button';
import Navbar from '../components/navbar';
import * as classes from './home.less';
import {getAssetUrl} from '../utils/import_utils';
import {useCallback} from 'react';
import {useState} from 'react';

interface Props {}

function Home() {
  const [showLogoInNavbar, setShowLogoInNavbar] = useState<boolean>(false);
  const [showInteractiveGlobe, setShowInteractiveGlobe] = useState<boolean>(false);

  const onBannerButtonClick = useCallback(() => {
    // TODO (johnli): show the sick new globe stuff.
    toggleLogoOnNavbar();
  }, [showLogoInNavbar]);

  const toggleLogoOnNavbar = () => {
    setShowLogoInNavbar(!showLogoInNavbar);
  }

  const renderBanner = () => {
    return (
      <div className={classes.section}>
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

  return (
    <div className={classes.root}>
      <Navbar showLogo={showLogoInNavbar}/>
      {renderBanner()}
    </div> 
  );
}

export default Home;