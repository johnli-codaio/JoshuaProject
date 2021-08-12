import {getAssetUrl} from '../utils/import_utils';
import classNames from 'classnames';
import * as classes from './navbar.less';

interface NavLink {
  name: string;
  link: string;
}

interface NavTab {
  name: string;
  items: NavLink[];
}

interface Props {
  showLogo: boolean;
}

function Navbar(props: Props) {
  const {showLogo} = props;
  const tabs: NavTab[] = [
    {
      name: 'Unreached',
      items: [],
    },
    {
      name: 'Share',
      items: [],
    },
    {
      name: 'Get Involved',
      items: [],
    },
    {
      name: 'Connect',
      items: [],
    },
    {
      name: 'About',
      items: [],
    },
  ];

  const renderTab = (tab: NavTab) => {
    // TODO (johnli): Create an anchored popover component.
    return <span className={classes.tab}>{tab.name}</span>;
  };

  return (
    <div className={classes.navbar}>
      <a href={'/'}>
        <img
          className={classNames(classes.logo, {[classes.visible]: showLogo})}
          src ={getAssetUrl('logo_with_name.svg')}
        />
      </a>
      <div className={classes.tabs}>
        {...tabs.map(renderTab)}
        {/* TODO: Implement search if we have time. */}
      </div>
    </div>
  );
}

export default Navbar;