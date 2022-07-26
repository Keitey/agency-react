import styled from "styled-components";
import job2 from "../../img/job2.jpg";

export const JobsSection = styled.div`
  background-color: #e5eaff;
  padding: 3rem;

  h2 {
    font-size: 2.5rem;
    margin-top: 2rem;
    text-align: center;
  }

  @media only screen and (max-width: 600px){
    padding: 2rem;
  }
`;

export const JobsList = styled.div`
  display: flex;
  padding: 2rem 0;

  @media only screen and (max-width: 600px){
    flex-direction: column;
  }
`;

export const FirstJob = styled.div`
  width: 30%;
  height: 415px;
  position: relative;
  margin: 0 2%;
  cursor: pointer;
  transition: 0.5s;
  background-size: cover;
  background-position: center;

  @media only screen and (max-width: 600px){
    width: 100%;
    height: 200px;
    margin: 0;
    padding: 0;
    margin-bottom: 1rem;
  }
`;

export const JobCardCover = styled.div`
  opacity: 0;
  text-align: center;
  color: #fff;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  padding-top: 1.75rem;

  .title {
    font-size: 2.2rem;
    text-align: center;
    transition: 0.3s;
    font-weight: bold;
  }

  .description {
    text-align: center;
    color: #fff;
    padding: 1rem;
    font-size: 0.9rem;
  }

  &:hover {
    opacity: 1;
    background-color: rgba(0, 0, 0, 0.6);
    border: 3px solid #ff5200;
  }

  @media only screen and (max-width: 600px){
    .description{
      height: 100px;
      font-size: 10px;
    }
    .title{
      font-size: 1.8rem;
    }
  }
`;

export const OtherJobs = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 68%;

  @media only screen and (max-width: 600px){
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const JobCard = styled.div`
  width: 46%;
  height: 200px;
  position: relative;
  cursor: pointer;
  margin: 0 15px 15px 0;
  text-align: center;
  font-size: 10px;
  display: flex;
  flex-wrap: wrap;
  color: #fff;

  @media only screen and (max-width: 600px){
    width: 400px;
    margin: 0;
    margin-bottom: 1rem;
  }
`;

export const Card = styled.div`
  background-size: cover;
  background-position: center;
  height: 100%;
  
  .title{
    font-size: 2rem;
    text-align: center;
    transition: 0.3s;
    font-weight: bold;
  }

  .description{
    font-size: 12px;
  }


  .content{
    opacity: 0;

    &:hover {
      opacity: 1;
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
    }
  }

  &:hover {
    border: 3px solid #ff5200;
  }

  @media only screen and (max-width: 600px){
    .title{
      font-size: 1.8rem;
      padding-top: 30px;
    }
    .description{
      height: 100px;
      font-size: 10px;
      padding: 1rem;
    }
  }
`;
