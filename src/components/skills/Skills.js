import React, { useRef } from 'react'
import IsVisible from 'react-is-visible'
import { Fade } from 'react-reveal'

import { useContainerDimensions } from '../../hooks'

const skills = [
    {
        "id": 0,
        "skillName": "React.js",
        "amount": "90"
    },
    {
        "id": 1,
        "skillName": "Javascript",
        "amount": "80"
    },
    {
        "id": 2,
        "skillName": "Node.js",
        "amount": "75"
    },
    { "id": 3, "skillName": "Material-UI", "amount": "85" },
    {
        "id": 4,
        "skillName": "HTML5 and CSS",
        "amount": "75"
    },
    {
        "id": 5,
        "skillName": "REST",
        "amount": "75"
    },
    { "id": 6, "skillName": "Express.js", "amount": "70" },
    { "id": 7, "skillName": "Git", "amount": "70" },
    {
        "id": 8,
        "skillName": "React hooks",
        "amount": "80"
    },
    {
        "id": 9,
        "skillName": "Backend",
        "amount": "60"
    },
    {
        "id": 10,
        "skillName": "Python",
        "amount": "80"
    }
]


const Skills = () => {
  const skillsWrapper = useRef()
  const { width } = useContainerDimensions(skillsWrapper)

  return (
    <Fade duration={1000}>
      <div style={{ position: 'relative', width: '100%', maxWidth: 600 }}>
        <IsVisible once>
          {(isVisibleSkillsWrapper) => (
            <div
              className="skills-wrapper"
              style={
                isVisibleSkillsWrapper
                  ? {
                      transition: '1s opacity ease-in-out',
                      transform: `translateX(0)`,
                      opacity: 1,
                    }
                  : {}
              }
            >
              <h2>Skills</h2>
              <ul className="skills" ref={skillsWrapper}>
                {skills.map((skills) => {
                  return (
                    <li className="skill-bar-wrapper" key={skills.skillName}>
                      <div
                        className="skill-bar"
                        style={
                          isVisibleSkillsWrapper
                            ? {
                                transition: `${
                                  1 + skills.id / 10
                                }s width ease-in-out`,
                                width: width * (skills.amount / 100),
                              }
                            : {
                                width: 1,
                              }
                        }
                      ></div>
                      <div className="skill-name">{skills.skillName}</div>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}
        </IsVisible>
      </div>
    </Fade>
  )
}

export default Skills
