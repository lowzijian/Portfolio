import React, { useState, useEffect } from "react";
import "../App.css";
import {
  Grid,
  Container,
  Avatar,
  Divider,
  Button,
  Paper,
  Chip,
  Card,
  CardContent,
} from "@material-ui/core";
import {
  PhoneOutlined,
  MailOutlineOutlined,
  LocationOnOutlined,
  WorkOutlineOutlined,
  SchoolOutlined,
  CalendarTodayOutlined,
  BusinessOutlined,
  WebOutlined,
  LanguageOutlined,
  NewReleasesOutlined,
} from "@material-ui/icons";
import {
  FaLaravel,
  FaDatabase,
  FaReact,
  FaPython,
  FaAngular,
  FaTrophy,
} from "react-icons/fa";

//icon
import adaptIcon from "../media/adapt.svg";
import ctIcon from "../media/creativeThinking.svg";
import learningIcon from "../media/learning.svg";
import patienceIcon from "../media/patience.svg";
import teamIcon from "../media/team.svg";

import { resume } from "../Data";

function Resume() {
  const [totalWorkingYear, _setTotalWorkingYear] = useState(0);
  const [totalWorkingMonths, _setTotalWorkingMonths] = useState(0);

  const _calculateTotalWorkExp = () => {
    const workingExperience = resume?.workExperience;
    let totalWorkingYear = 0;
    let totalWorkingMonths = 0;

    workingExperience.map((work) => {
      if (work?.unit === "month") {
        totalWorkingMonths += work?.duration;
      } else {
        totalWorkingYear += work?.duration;
      }
    });

    if (totalWorkingMonths > 12) {
      const yearGenerate = totalWorkingMonths % 12;
      totalWorkingYear += yearGenerate;
      totalWorkingMonths = totalWorkingMonths - yearGenerate * 12;
    }

    _setTotalWorkingYear(totalWorkingYear);
    _setTotalWorkingMonths(totalWorkingMonths);
  };

  const _findSkillIcon = (iconTitle) => {
    switch (iconTitle) {
      case "react":
        return <FaReact fontSize={20} />;
      case "web":
        return <WebOutlined />;
      case "laravel":
        return <FaLaravel fontSize={20} />;
      case "python":
        return <FaPython fontSize={20} />;
      case "angular":
        return <FaAngular fontSize={20} />;
      case "database":
        return <FaDatabase fontSize={20} />;

      default:
        return <LanguageOutlined />;
    }
  };

  const _findSoftSkillIcon = (skill) => {
    switch (skill) {
      case "Eager to learn":
        return <img src={learningIcon} alt="icon" height={25} width={25} />;
      case "Able to work in team or as an individual":
        return <img src={teamIcon} alt="icon" height={25} width={25} />;
      case "Patience":
        return <img src={patienceIcon} alt="icon" height={25} width={25} />;
      case "Great adaptability in new environment":
        return <img src={adaptIcon} alt="icon" height={25} width={25} />;
      case "Creative Thinking":
        return <img src={ctIcon} alt="icon" height={25} width={25} />;

      default:
        return <NewReleasesOutlined />;
    }
  };

  useEffect(() => {
    _calculateTotalWorkExp();
  }, []);

  return (
    <div className="resumeApp">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4} className="resumeInfo">
          <Container>
            <div className="resumeSection">
              <div className="resumeContainer">
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  className="resumeAvatar"
                />
              </div>
              <h2 className="resumeTitle">{resume?.name}</h2>
              <h3 className="resumeSubTitle">{resume?.profession}</h3>
            </div>
            <div className="resumeSection">
              <div className="resumeContainer">
                <MailOutlineOutlined className="resumeIcon" />
                <span className="resumeInfo">{resume?.email}</span>
              </div>
              <Divider />
              <div className="resumeContainer">
                <PhoneOutlined className="resumeIcon" />
                <span className="resumeInfo">{resume?.contact}</span>
              </div>
              <Divider />
              <div className="resumeContainer">
                <LocationOnOutlined className="resumeIcon" />
                <span className="resumeInfo">{resume?.address}</span>
              </div>
              <Divider />
              <div className="resumeContainer">
                <WorkOutlineOutlined className="resumeIcon" />
                <span className="resumeInfo">
                  {resume?.isFullTime ? "Full Time" : "Part Time"}
                </span>
              </div>
            </div>
            <div className="resumeSection">
              <Button variant="contained" color="primary">
                Download Resume
              </Button>
            </div>
          </Container>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Container>
            <div className="resumeSection">
              <h2 className="resumeTitle">Professional Summary</h2>
              <p>{resume?.professionalSummary}</p>
            </div>
            <div className="resumeSection">
              <h2 className="resumeTitle">Work Experience</h2>
              {resume?.workExperience && resume?.workExperience?.length > 0 ? (
                <>
                  <h4 className="resumeSubTitle">
                    {totalWorkingYear > 0 ? `${totalWorkingYear} years` : ""}{" "}
                    {totalWorkingYear > 0 && totalWorkingMonths > 0 && `and`}
                    {totalWorkingMonths > 0
                      ? `${totalWorkingMonths} months`
                      : ""}{" "}
                    working experience
                  </h4>
                  {resume?.workExperience?.map((work, index) => {
                    return (
                      <Paper
                        variant="outlined"
                        key={index}
                        className="resumePaper"
                        square
                      >
                        <div style={{ flex: 4 }}>
                          <div className="resumePaperTitle"> {work?.title}</div>
                          <div className="resumePaperSubtitle">
                            <BusinessOutlined
                              style={{ fontSize: 13, paddingRight: 5 }}
                            />
                            {work?.company}
                            <LocationOnOutlined
                              style={{
                                fontSize: 14,
                                paddingRight: 5,
                                paddingLeft: 5,
                              }}
                            />
                            {work?.location}
                          </div>
                          <div className="resumePaperCaption">
                            <CalendarTodayOutlined
                              style={{ fontSize: 13, paddingRight: 5 }}
                            />
                            <span>{work?.timeline}</span>
                          </div>
                        </div>
                        <div style={{ flex: 2 }}>
                          <Chip
                            size="small"
                            label={work?.isFullTime ? "Full Time" : "Part Time"}
                            className="resumeChip"
                          />
                        </div>
                      </Paper>
                    );
                  })}
                </>
              ) : (
                <p> No Working Experience </p>
              )}
            </div>
            <div className="resumeSection">
              <h2 className="resumeTitle">Academic Qualifications</h2>
              {resume?.education ? (
                Object.keys(resume?.education).map((key) => {
                  const data = resume?.education[key];
                  return (
                    <Paper
                      variant="outlined"
                      key={key}
                      className="resumePaper"
                      square
                    >
                      <div style={{ flex: 4 }}>
                        <div className="resumePaperTitle"> {data?.title}</div>
                        <div className="resumePaperSubtitle">
                          <SchoolOutlined
                            style={{ fontSize: 13, paddingRight: 5 }}
                          />
                          {data?.school}
                        </div>
                        <div className="resumePaperCaption">
                          <CalendarTodayOutlined
                            style={{ fontSize: 13, paddingRight: 5 }}
                          />
                          <span>{data?.timeline}</span>
                        </div>
                      </div>
                      <div style={{ flex: 2 }}>
                        <Chip
                          size="small"
                          label={data?.grade}
                          className="resumeChip"
                        />
                        {data?.muet && (
                          <Chip
                            size="small"
                            label={`Muet ${data?.muet}`}
                            className="resumeChip2"
                          />
                        )}
                      </div>
                    </Paper>
                  );
                })
              ) : (
                <p>No Education Record</p>
              )}
            </div>
            <div className="resumeSection">
              <h2 className="resumeTitle">Technical Skills</h2>
              <Grid container spacing={3}>
                {resume?.technicalSkills &&
                resume?.technicalSkills?.length > 0 ? (
                  resume?.technicalSkills.map((skill, index) => {
                    return (
                      <Grid item sm={4} xs={12} key={index}>
                        <Card variant="outlined" className="resumeCard">
                          <CardContent>
                            <div style={{ flex: 1 }}>
                              {_findSkillIcon(skill?.icon)}
                            </div>
                            <div
                              style={{ flex: 4 }}
                              className="resumeCardTitle"
                            >
                              {skill?.title}
                            </div>
                            <div
                              style={{ flex: 1 }}
                              className="resumeCardCaption"
                            >
                              {skill?.level}
                            </div>
                          </CardContent>
                        </Card>
                      </Grid>
                    );
                  })
                ) : (
                  <p>No Technical Skills </p>
                )}
              </Grid>
            </div>
            <div className="resumeSection">
              <h2 className="resumeTitle">Soft Skills</h2>
              {resume?.softSkills ? (
                Object.keys(resume?.softSkills).map((key) => {
                  const skills = resume.softSkills[key];
                  return (
                    <div key={key}>
                      <h3 style={{ color: "#7582CB" }}>{key}</h3>
                      <Grid container spacing={3}>
                        {skills.map((skill, index) => {
                          return (
                            <Grid item sm={4} xs={12} key={key + index}>
                              <Card variant="outlined" className="resumeCard">
                                <CardContent>
                                  {key === "Language" ? (
                                    <>
                                      <div
                                        style={{ flex: 5 }}
                                        className="resumeCardTitle"
                                      >
                                        {skill?.title}
                                      </div>
                                      <div
                                        style={{ flex: 1 }}
                                        className="resumeCardCaption"
                                      >
                                        {skill?.description}
                                      </div>
                                    </>
                                  ) : (
                                    <>
                                      <div style={{ flex: 1 }}>
                                        {_findSoftSkillIcon(skill)}
                                      </div>
                                      <div
                                        style={{ flex: 5 }}
                                        className="resumeCardTitle"
                                      >
                                        {skill}
                                      </div>
                                    </>
                                  )}
                                </CardContent>
                              </Card>
                            </Grid>
                          );
                        })}
                      </Grid>
                    </div>
                  );
                })
              ) : (
                <p>No Soft Skills</p>
              )}
            </div>
            <div className="resumeSection">
              <h2 className="resumeTitle">Achievements</h2>
              {resume?.achivements ? (
                Object.keys(resume?.achivements).map((key, index) => {
                  const achievements = resume?.achivements[key];
                  return (
                    <Paper
                      variant="outlined"
                      key={key}
                      square
                      className="resumePaper"
                    >
                      <div style={{ flex: 6 }}>
                        <div className="resumePaperTitle"> {key}</div>
                        {achievements && achievements?.length > 0 ? (
                          achievements.map((a, i) => {
                            return (
                              <div key={i} className="resumePaperSection">
                                <div className="resumePaperSubtitle">
                                  <FaTrophy
                                    style={{ fontSize: 13, paddingRight: 5 }}
                                  />
                                  <span>{a?.title}</span>
                                </div>
                                <div className="resumePaperCaption">
                                  {a?.semester}
                                </div>
                              </div>
                            );
                          })
                        ) : (
                          <div className="resumePaperSubTitle">
                            No Achivements
                          </div>
                        )}
                      </div>
                    </Paper>
                  );
                })
              ) : (
                <p>No achievements</p>
              )}
            </div>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default Resume;
