import Footer from '../components/footer';
import Navbar from '../components/navbar';
import Youtube from 'react-youtube';
import classes from './what_is_the_task.less';
import {getAssetUrl} from '../utils/import_utils';

function WhatIsTheTask() {

  return (
    <div className={classes.root}>
      <Navbar showLogo={true} />
      <img className={classes.banner} src={getAssetUrl('what_is_the_task.png')} />
      <div className={classes.contentContainer }>
        <div className={classes.content}>
          <span className={classes.title}>
            What is the unfinished task?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            Over two thousand years ago, Christ commissioned every one of his disciples in this task:
          </span>
          <div className={classes.verseContainer}>
            <div className={classes.verseText}>
              "Therefore, <b>go</b> and <b>make disciples of all nations</b>, baptizing them in the name of the
              Father and of the Son and of the Holy Spirit, and teaching them to obey everything I have commanded you.
              And surely I am with you always, to the very end of the age."
              <span className={classes.citation}>Matt. 28:19-20 (NIV)</span>
            </div>
          </div>
          <div className={classes.textWithRightGraphic}>
            <div className={classes.textContainer}>
              <span className={classes.text}>
                However, there are still people who have never even had the chance to hear the good news of Jesus.
              </span>
              <span className={classes.text}>
                <b>42.5% of the world's people groups</b> still don't have any sustained church planting movement in their region.
              </span>
            </div>
            <img className={classes.pieChart} src={getAssetUrl('pie_chart.png')} />
          </div>
          <span className={classes.text}>
            As believers, <b>we are all called</b> to change that by <b>going to (or sending people to go)</b> make disciples among every people group
            in every place that has not had the opportunity to know Jesus.
          </span>
          <div className={classes.videoContainer}>
            <Youtube videoId={'6ZQDJNUOty4'} />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  )
}

export default WhatIsTheTask;