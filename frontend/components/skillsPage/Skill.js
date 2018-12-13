import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SVGIcon from "../styles/SVGIcon";

const SkillDiv = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 600;
`;

const IconDiv = styled.div`
  width: 100%;
  max-height: 10rem;
  margin: 3rem 2rem;
  padding: 1rem;
  border-bottom: 1px solid ${props => props.theme.orange};
`;

class Skill extends Component {
  static propTypes = {
    skill: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tech: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      largeImage: PropTypes.string.isRequired
    })
  };

  render() {
    const { tech } = this.props;
    return (
      <SkillDiv>
        {tech.map(skill => (
          <IconDiv key={skill}>
            <SVGIcon name={skill} />
            <p>{skill.toUpperCase()}</p>
          </IconDiv>
        ))}
      </SkillDiv>
    );
  }
}

export default Skill;
