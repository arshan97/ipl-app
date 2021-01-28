import { motion } from "framer-motion"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { pageAnimation } from "../animation/animate"

const teamsData = [
  {
    id: 1,
    name: "Mumbai Indians",
    logo: "mumbai.png",
  },
  {
    id: 2,
    name: "Chennai Super Kings",
    logo: "chennai.png",
  },
  {
    id: 3,
    name: "Kolkata Knight Riders",
    logo: "kolkata.png",
  },
  {
    id: 4,
    name: "Sunrisers Hyderabad",
    logo: "hyderabad.png",
  },
  {
    id: 5,
    name: "Rajasthan Royals",
    logo: "rajasthan.png",
  },
  {
    id: 6,
    name: "Royal Challengers Bangalore",
    logo: "bangalore.png",
  },
  {
    id: 7,
    name: "Kings Punjab",
    logo: "punjab.png",
  },
  {
    id: 8,
    name: "Delhi Capitals",
    logo: "delhi.png",
  },
]

const Teams = () => {
  const [teams, setTeams] = useState([]) //Whole List
  const [filtered, setFiltered] = useState([])
  const [keyword, setKeyword] = useState("")

  useEffect(() => {
    setFiltered(teamsData)
    setTeams(teamsData)
  }, [])

  const searchTerm = (e) => {
    const keyword = e.target.value

    if (keyword !== "") {
      const list = teams.filter((item) => {
        return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
      })
      setFiltered(list)
      setKeyword(keyword)
    } else {
      setFiltered(teams)
      setKeyword(keyword)
    }
  }

  return (
    <motion.div variants={pageAnimation} initial="hidden" animate="show" exit="exit">
      <TeamsSection>
        <TeamsSearch>
          <input autoFocus onChange={searchTerm} value={keyword} type="text" placeholder="Search for a team" />
        </TeamsSearch>
        <Logo className="container">
          {filtered.map((item) => (
            <img alt={item.name} src={`/images/teams/${item.logo}`} />
          ))}
        </Logo>
      </TeamsSection>
    </motion.div>
  )
}

export default Teams

const TeamsSection = styled.div`
  display: flex;
  flex-direction: column;
`
const TeamsSearch = styled.div`
  input {
    margin-top: 50px;
    width: 300px;
    height: 40px;
    border-radius: 10px;
    padding-left: 10px;
    font-size: 18px;
    outline: none;
    margin-left: 200px;
    transition: all 0.5s;
  }
  input:hover {
    transform: scale(1.1);
  }
`
const Logo = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px;
  margin-top: 50px;
  img {
    width: 200px;
    height: 190px;
    border-radius: 10px;
    margin-right: 100px;
    margin-top: 100px;
    transition: all 0.5s;
    cursor: pointer;
  }

  img:hover {
    transform: translateY(-10px);
  }
`
