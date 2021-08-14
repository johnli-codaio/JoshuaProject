import { getAssetUrl } from '../utils/import_utils';
import classes from './country_info.less';

interface Props {
  country: any;
  onClose: () => void;
}

function CountryInfo(props: Props) {
  const {country, onClose} = props;

  const renderTabOverview = () => {
    return (
      <div className={classes.overview}>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Number of People Groups</span>
          <span className={classes.cellValue}>{country.CntPeoples}</span>
        </div>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>People Groups Unreached</span>
          <span className={classes.cellValue}>{country.CntPeoplesLR}</span>
        </div>

        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Total Population</span>
          <span className={classes.cellValue}>{country.PoplPeoples}</span>
        </div>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Population in Unreached</span>
          <span className={classes.cellValue}>{country.PoplPeoplesLR}</span>
        </div>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Largest Religion</span>
          <span className={classes.cellValue}>{country.ReligionPrimary} ({Math.round(country.PercentChristianity)}% Christians)</span>
        </div>

        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Workers Needed</span>
          <span className={classes.cellValue}>{country.WorkersNeeded || 0}</span>
        </div>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Persecution Rating</span>
          <span className={classes.cellValue}>{country.PersecutionRankingODLink || 'Not ranked'}</span>
        </div>
        <div className={classes.overviewCell}>
          <span className={classes.cellHeader}>Official Language</span>
          <span className={classes.cellValue}>{country.OfficialLang}</span>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.content}>
      <img className={classes.exit} src={getAssetUrl('x-circle.svg')} onClick={onClose} />
      <span className={classes.header}>{country.Ctry}</span>
      <div className={classes.tabContent}>
        {renderTabOverview()}
      </div>
    </div>
  );
};

export default CountryInfo;
