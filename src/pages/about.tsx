import Footer from '../components/footer';
import Navbar from '../components/navbar';
import {getAssetUrl} from '../utils/import_utils';
import classes from './about.less';
import classNames from 'classnames';
function About() {
  
  return (
    <div className={classes.root}>
      <Navbar showLogo={true} />
      <div className={classes.bannerContainer}>
        <div className={classes.bannerTextContainer}>
          <span className={classes.banner_text}>Our small beginnings & God's great work</span>
        </div>
      </div>
      <div className={classes.contentContainer}>
        <div className={classes.content}>
          <span className={classes.title}>
            What is our purpose?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            Joshua Project is a research initative that aims to define the unfinished task of the Great Commission.
            We spotlight global ethnic people groups with the fewest followers of Christ and strive to answer questions
            that may arise from the Great Commission.
            <ul>
              <li><b>Who</b> are the ethnic people groups of the world?</li>
              <li><b>Which</b> people groups still need initial church-planting in their midst?</li>
              <li><b>What</b> ministry resources are available to reach the least-reached?</li>
            </ul>
          </span>
          <div className={classes.verseContainer}>
            <div className={classes.verseText}>
            “a great multitude that <b>no one could count</b>, from every nation, tribe, people and language, 
            standing <b>before the throne</b> and <b>before the Lamb</b>.”
            <span className={classes.citation}>Rev. 7:9-10 (NIV)</span>
            </div>
          </div>
          <span className={classNames(classes.title, classes.marginTop)}>
            Where do we source information?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            Joshua Project compiles the work from a <b>worldwide constituency</b> - field workers and their agencies bring updates into a
            database and within security guidelines to source <b>to the global Church</b>. Regular users and providers of Joshua Project
            data include: international researchers and church-planters, local churches and individuals, denominations and mission agencies.
            <div className={classes.break} />
            Errors, duplicates, and overlaps may exist and the data is continually being updated. We welcome feedback of all kinds!
          </span>
          <span className={classNames(classes.title, classes.marginTop)}>
            What is our small beginnings and God's great work?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            We are a team of three staff members:
          </span>
          <img className={classes.teamImage} src={getAssetUrl('about_team.png')} />
          <span className={classes.text}>
            Originally, we compiled a list of <b>only the largest</b> unreached ethno-linguistic people groups and related ministry activity data to pioneer church-planting.
            <div className={classes.break} />
            Now, Joshua Project has since expanded the list to <b>all</b> unreached / least-reached peoples regardless of size and moved from a purely ethno-linguistic to an ethnic people focus.
          </span>
          <span className={classNames(classes.title, classes.marginTop)}>
            What is unique about us?
          </span>
          <div className={classes.orangeDivider} />
          <span className={classes.text}>
            <b>Strategic</b> | "Where is the greatest need?" We desire to focus the Church on the most spiritually needy ethnic people groups.
            <div className={classes.break} />
            <b>Effective</b> | "How can we maximize Kingdom resources?" We strive to identify and reduce duplication of effort between ministries through data sharing.
            <div className={classes.break} />
            <b>Comprehensive</b> | “Who are we missing?” We work to see that the Church is initially established in all the world's ethnic peoples with our method to avoid overlooking any group -
              "when in doubt, include a people group.”
            <div className={classes.break} />
            <b>Neutral</b> | “Who do we serve?” We are a neutral, low-profile ministry, serving the global missions community.
            <div className={classes.break} />
            <b>Grassroots</b> | “How can we support others?” We encourage grassroots initiatives and seek input from those actually doing onsite work. Priority is given to updates made by local and national researchers.
            <div className={classes.break} />
            <b>Openhanded</b> | “Who is our work available to?” We provide all data and services at no charge.  We desire individuals and agencies in all parts of the world to have access to unreached peoples data.
          </span>
        </div>
      </div>
      <Footer />
    </div> 
  )
}

export default About;