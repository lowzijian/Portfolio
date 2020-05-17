import React, { useState } from "react";
import "../App.css";
import {
  Grid,
  Container,
  Divider,
  Button,
  Collapse,
  Card,
  CardContent,
  IconButton,
  CardActions,
} from "@material-ui/core";

import {
  NewReleasesOutlined,
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
  KeyboardArrowUpOutlined,
  KeyboardArrowDownOutlined,
} from "@material-ui/icons";
import { recentProjects, aboutMe } from "../Data";
import ItemsCarousel from "react-items-carousel";

//icon
import prototypingIcon from "../media/prototyping.svg";
import codingIcon from "../media/coding.svg";
import discoverIcon from "../media/discover.svg";

//logo
import scrumwebLogo from "../media/Logo/ScrumWeb.png";
import scrummobileLogo from "../media/Logo/ScrumMobile.png";
import travelLogo from "../media/Logo/Travel.png";

//screenshots
import scrumweb1 from "../media/Screenshots/scrumWeb1.png";
import scrumweb2 from "../media/Screenshots/scrumWeb2.png";
import scrummobile1 from "../media/Screenshots/scrumMobile1.png";
import scrummobile2 from "../media/Screenshots/scrumMobile2.png";
import travel1 from "../media/Screenshots/travel1.png";
import travel2 from "../media/Screenshots/travel2.png";

function Aboutme() {
  const [activeItemIndex, _setActiveItemIndex] = useState(0);
  const [expanded, _setExpanded] = useState(false);
  const chevronWidth = 25;

  const handleExpandClick = () => {
    _setExpanded(!expanded);
  };

  const _changeProject = (activeIndex) => {
    _setActiveItemIndex(activeIndex);
    _setExpanded(false);
  };

  const _findProjectLogo = (icon) => {
    switch (icon) {
      case "Scrum Board Mobile App":
        return scrummobileLogo;
      case "Scrum Board Web App":
        return scrumwebLogo;
      case "Travel Bucketlist system":
        return travelLogo;
      default:
        return "";
    }
  };

  const _findProjectScreenshots = (img) => {
    switch (img) {
      case "scrumweb1":
        return scrumweb1;
      case "scrumweb2":
        return scrumweb2;
      case "scrummobile1":
        return scrummobile1;
      case "scrummobile2":
        return scrummobile2;
      case "travel1":
        return travel1;
      case "travel2":
        return travel2;
      default:
        return "";
    }
  };

  const _findCareerInterestIcon = (icon) => {
    switch (icon) {
      case "developer":
        return <img src={codingIcon} alt="icon" height={50} width={50} />;
      case "discover":
        return <img src={discoverIcon} alt="icon" height={50} width={50} />;
      case "protoype":
        return <img src={prototypingIcon} alt="icon" height={50} width={50} />;

      default:
        return <NewReleasesOutlined />;
    }
  };

  const carouselItems = recentProjects.map((project, index) => (
    <div key={index} style={{ padding: 15 }}>
      <Card variant="outlined" className="resumeCard" style={{ margin: 15 }}>
        <CardContent>
          <div style={{ margin: 5, padding: 5 }}>
            <img
              src={_findProjectLogo(project?.title)}
              alt="projectLogo"
              style={{
                maxWidth: 125,
                maxHeight: 125,
                minWidth: 50,
                minHeight: 50,
              }}
            />
          </div>
          <div className="resumeCardTitle"> {project?.title}</div>
          <div className="resumeCardCaption">{project?.description}</div>
        </CardContent>
        <CardActions disableSpacing style={{ justifyContent: "center" }}>
          <IconButton onClick={handleExpandClick}>
            {expanded ? (
              <KeyboardArrowUpOutlined />
            ) : (
              <KeyboardArrowDownOutlined />
            )}
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            {project?.screenShots && project?.screenShots?.length > 0 ? (
              <>
                <h4 className="resumeTitle">Screenshots</h4>
                <Grid container space={3} style={{ margin: 5, padding: 10 }}>
                  {project.screenShots.map((shot, index) => {
                    return (
                      <Grid item xs key={index}>
                        <img
                          src={_findProjectScreenshots(shot?.img)}
                          alt="screenShots"
                          style={{
                            maxWidth: 400,
                            maxHeight: 400,
                          }}
                          className="screenShotImage"
                        />
                      </Grid>
                    );
                  })}
                </Grid>
              </>
            ) : (
              <p>No Information</p>
            )}
            <Button variant="outlined" href={project?.fyi}>
              Explore Now
            </Button>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  ));

  return (
    <Container>
      <Grid container spacing={8} style={{ paddingTop: 25 }}>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <div className="resumeHeading"> I'm Low Zi Jian</div>
          <h3 className="resumeSubTitle">
            A Software Engineer - Fresh Graduate
          </h3>

          <Container maxWidth="md">
            <q className="resumeQuote">
              {" "}
              {aboutMe?.careerStatements} - (2020){" "}
            </q>
          </Container>
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <h2 className="resumeTitle">Career Interests</h2>
          {aboutMe?.careerInterests && aboutMe?.careerInterests?.length > 0 ? (
            <Grid container spacing={3} style={{ marginTop: 25 }}>
              {aboutMe.careerInterests.map((interest, index) => {
                return (
                  <Grid item xs={12} key={index} sm={4}>
                    <Card variant="outlined" className="resumeCard">
                      <CardContent>
                        <div style={{ flex: 1 }}>
                          {_findCareerInterestIcon(interest?.icon)}
                        </div>
                        <div style={{ flex: 4 }} className="resumeCardTitle">
                          {interest?.title}
                        </div>
                        <div style={{ flex: 1 }} className="resumeCardCaption">
                          {interest?.description}
                        </div>
                      </CardContent>
                    </Card>
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <p>No Career Interests</p>
          )}
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12} style={{ textAlign: "center" }}>
          <h2 className="resumeTitle">Recent Projects</h2>
          <h5 className="resumeSubTitle">
            Total {recentProjects?.length} projects
          </h5>
          <Container style={{ marginTop: 25 }}>
            {recentProjects && recentProjects?.length > 0 ? (
              <ItemsCarousel
                requestToChangeActive={(value) => _changeProject(value)}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={12}
                infiniteLoop={true}
                leftChevron={<KeyboardArrowLeftOutlined />}
                rightChevron={<KeyboardArrowRightOutlined />}
                outsideChevron
                chevronWidth={chevronWidth}
                children={carouselItems}
              ></ItemsCarousel>
            ) : (
              <p>No Recent Projects</p>
            )}
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Aboutme;
