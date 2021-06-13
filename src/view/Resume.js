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
  Dialog,
  DialogTitle,
  useMediaQuery,
  DialogActions,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

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
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";

//font
import robotoBold from "../media/Font/RobotoBold.ttf";
import robotoRegular from "../media/Font/RobotoRegular.ttf";
import roboto from "../media/Font/RobotoThin.ttf";

import oswald from "../media/Font/Oswald.ttf";

//icon
import adaptIcon from "../media/adapt.svg";
import ctIcon from "../media/creativeThinking.svg";
import learningIcon from "../media/learning.svg";
import patienceIcon from "../media/patience.svg";
import teamIcon from "../media/team.svg";

import profilePic from "../media/profilePic.png";

import { resume } from "../Data";

function Resume() {
  const [totalWorkingYear, _setTotalWorkingYear] = useState(0);
  const [totalWorkingMonths, _setTotalWorkingMonths] = useState(0);
  const [isModalOpen, _setModalOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const _downloadResume = () => {
    _setModalOpen(true);
  };

  const _cancelDownload = () => {
    _setModalOpen(false);
  };
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

  const _getAlias = (name) => {
    return name
      .match(/\b(\w)/g)
      .join("")
      .toUpperCase();
  };

  useEffect(() => {
    _calculateTotalWorkExp();
  }, []);

  Font.register({ family: "RobotoLight", src: roboto });
  Font.register({ family: "Oswald", src: oswald });
  Font.register({ family: "RobotoBold", src: robotoBold });
  Font.register({ family: "RobotoRegular", src: robotoRegular });

  const styles = StyleSheet.create({
    page: {
      backgroundColor: "white",
      fontSize: 11,
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
      fontFamily: "RobotoLight",
    },
    section: {
      flexDirection: "row",
      paddingTop: 15,
      paddingBottom: 15,
    },

    subSection: {
      paddingTop: 5,
      paddingBottom: 5,
    },

    subSectionContainer: {
      paddingTop: 2,
      paddingBottom: 2,
    },

    subSectionTitle: {
      flex: 2,
    },

    subSectionContent: {
      flex: 4,
      textAlign: "justify",
      whiteSpace: "pre-wrap",
    },

    square: {
      height: 65,
      width: 65,
      border: 2,
      textAlign: "center",
      display: "flex",
      justifyContent: "center",
      fontSize: 25,
      color: "#3f51b5",
      borderColor: "#3f51b5",
      fontWeight: "bold",
      fontFamily: "Oswald",
      padding: 5,
    },

    heading: {
      fontWeight: "bold",
      fontSize: 25,
      fontFamily: "Oswald",
      color: "#5B5C5C",
    },

    title: {
      fontSize: 15,
      fontFamily: "Oswald",
      color: "#3f51b5",
    },

    caption: {
      fontSize: 10,
      fontFamily: "RobotoRegular",
      color: "#C5C6C8",
    },

    keyword: {
      color: "#5B5C5C",
      fontFamily: "RobotoBold",
    },
  });

  return (
    <React.Fragment>
      <div className="resumeApp">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} className="resumeInfo">
            <Container>
              <div className="resumeSection">
                <div className="resumeContainer">
                  <Avatar
                    alt={resume?.name}
                    src={profilePic}
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
                <Button
                  variant="contained"
                  color="primary"
                  onClick={_downloadResume}
                >
                  Download Resume
                </Button>
              </div>
            </Container>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Container>
              <div className="resumeSection">
                <h2 className="resumeTitle">Career Objective</h2>
                <p style={{ textAlign: "justify" }}>
                  {resume?.careerObjective}
                </p>
              </div>
              <div className="resumeSection">
                <h2 className="resumeTitle">Work Experience</h2>
                {resume?.workExperience &&
                resume?.workExperience?.length > 0 ? (
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
                            <div className="resumePaperTitle">
                              {" "}
                              {work?.title}
                            </div>
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
                              label={
                                work?.isFullTime ? "Full Time" : "Part Time"
                              }
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
      <Dialog
        open={isModalOpen}
        onClose={_cancelDownload}
        closeAfterTransition
        fullScreen={fullScreen}
        fullWidth={true}
        maxWidth="md"
      >
        <DialogTitle>Download Resume</DialogTitle>
        <div className="resumeModalContent">
          <PDFViewer className="pdfViewer">
            <Document title="resume-LowZiJian">
              <Page size="A4" style={styles.page}>
                {/* header */}

                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <View style={styles.square}>
                      <Text>{_getAlias(resume?.name)}</Text>
                    </View>
                  </View>
                  <View style={styles.subSectionContent}>
                    <Text style={styles.heading}>{resume?.name}</Text>
                    <Text>
                      {resume?.email} | {resume?.contact}{" "}
                    </Text>
                  </View>
                </View>

                {/* Career Objective */}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Career Objective</Text>
                  </View>
                  <View style={styles.subSectionContent}>
                    <Text>{resume?.careerObjective}</Text>
                  </View>
                </View>

                {/* Work Experience*/}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Work Experience</Text>
                  </View>
                  <View style={styles.subSectionContent}>
                    {resume?.workExperience &&
                    resume?.workExperience?.length > 0 ? (
                      resume?.workExperience.map((work, index) => {
                        return (
                          <View key={index}>
                            <View style={{ paddingBottom: 5 }}>
                              <Text style={styles.keyword}>{work?.title}</Text>
                              <Text style={styles.caption}>
                                {" "}
                                {work?.company}
                              </Text>
                              <Text style={styles.caption}>
                                {work?.timeline}
                              </Text>
                            </View>
                            <View>
                              {work?.workContent.map((w, index) => {
                                return (
                                  <View
                                    style={{ flexDirection: "row" }}
                                    key={index}
                                  >
                                    <Text>&#8226; </Text>
                                    <Text>{w}</Text>
                                  </View>
                                );
                              })}
                            </View>
                          </View>
                        );
                      })
                    ) : (
                      <Text>No Working Experience</Text>
                    )}
                  </View>
                </View>

                {/* Education*/}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Academic Qualifications</Text>
                  </View>
                  <View style={styles.subSectionContent}>
                    {resume?.education ? (
                      Object.keys(resume?.education).map((key, index) => {
                        const education = resume?.education[key];
                        return (
                          <View key={index} style={styles.subSection}>
                            <View style={{ paddingBottom: 5 }}>
                              <Text style={styles.keyword}>
                                {education?.title}
                              </Text>
                              <Text style={styles.caption}>
                                {education?.school}
                              </Text>
                              <Text style={styles.caption}>
                                {education?.timeline}
                              </Text>
                            </View>
                            <View>
                              <Text>
                                {education?.title !== "SPM" && "CGPA"}{" "}
                                {education?.grade}
                              </Text>
                              <Text>
                                {education?.muet && "Muet : " + education?.muet}
                              </Text>
                            </View>
                          </View>
                        );
                      })
                    ) : (
                      <Text>No Academic Qualifications</Text>
                    )}
                  </View>
                </View>

                {/* Technical Skills*/}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Technical Skills</Text>
                  </View>
                  <View style={styles.subSectionContent}>
                    {resume?.technicalSkills &&
                    resume?.technicalSkills?.length > 0 ? (
                      resume?.technicalSkills.map((skill, index) => {
                        return (
                          <View
                            style={[
                              styles.subSectionContainer,
                              { flexDirection: "row" },
                            ]}
                            key={index}
                          >
                            <Text>&#8226; </Text>
                            <View>
                              <Text>{skill?.title}</Text>
                              <Text style={styles.caption}>
                                {skill?.description}
                              </Text>
                            </View>
                          </View>
                        );
                      })
                    ) : (
                      <Text>No Technical Skills</Text>
                    )}
                  </View>
                </View>

                {/* Soft Skills*/}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Soft Skills</Text>
                  </View>
                  <View style={[styles.subSectionContent]}>
                    {resume?.softSkills ? (
                      Object.keys(resume?.softSkills).map((key) => {
                        const skills = resume?.softSkills[key];
                        return (
                          <View
                            key={key}
                            style={[styles.subSection, { flex: 1 }]}
                          >
                            <Text style={styles.keyword}>{key}</Text>
                            {skills.map((skill, index) => {
                              if (key === "Language") {
                                return (
                                  <View
                                    style={[
                                      styles.subSectionContainer,
                                      { flexDirection: "row" },
                                    ]}
                                    key={index}
                                  >
                                    <Text>&#8226; </Text>
                                    <View>
                                      <Text>{skill?.title}</Text>
                                      <Text style={styles.caption}>
                                        {skill?.description}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              } else {
                                return (
                                  <View
                                    style={[
                                      styles.subSectionContainer,
                                      { flexDirection: "row" },
                                    ]}
                                    key={index}
                                  >
                                    <Text>&#8226; </Text>
                                    <Text>{skill}</Text>
                                  </View>
                                );
                              }
                            })}
                          </View>
                        );
                      })
                    ) : (
                      <Text>No Soft Skills</Text>
                    )}
                  </View>
                </View>

                {/* Achievements*/}
                <View style={styles.section}>
                  <View style={styles.subSectionTitle}>
                    <Text style={styles.title}>Achievements</Text>
                  </View>
                  <View style={styles.subSectionContent}>
                    {resume?.achivements ? (
                      Object.keys(resume?.achivements).map((key, index) => {
                        const achievements = resume?.achivements[key];
                        return (
                          <View key={index}>
                            <Text style={styles.keyword}>{key}</Text>
                            {
                              <View key={index} style={styles.subSection}>
                                {achievements.map((a, index) => {
                                  return (
                                    <View
                                      style={styles.subSectionContainer}
                                      key={index}
                                    >
                                      <View
                                        style={[
                                          styles.subSectionContainer,
                                          { flexDirection: "row" },
                                        ]}
                                      >
                                        <Text>&#8226; </Text>
                                        <View>
                                          <Text>{a?.title}</Text>
                                          <Text style={styles.caption}>
                                            {a?.semester}
                                          </Text>
                                        </View>
                                      </View>
                                    </View>
                                  );
                                })}
                              </View>
                            }
                          </View>
                        );
                      })
                    ) : (
                      <Text>No Achievements</Text>
                    )}
                  </View>
                </View>
              </Page>
            </Document>
          </PDFViewer>
        </div>
        <DialogActions>
          <Button autoFocus onClick={_cancelDownload} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default Resume;
