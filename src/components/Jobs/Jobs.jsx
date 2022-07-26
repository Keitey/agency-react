import React from "react";
import * as C from "./styles";

import job1 from "../../img/job1.jpg";
import job2 from "../../img/job2.jpg";
import job3 from "../../img/job3.jpg";
import job4 from "../../img/job4.jpg";
import job5 from "../../img/job5.jpg";

const Jobs = () => {
  return (
    <C.JobsSection>
      <h2>Alguns de nossos trabalhos</h2>
      <C.JobsList>
        <C.FirstJob style={{ backgroundImage: `url(${job1}` }}>
          <C.JobCardCover>
            <p className="title">Projeto 1</p>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem,
              sapiente laboriosam. Incidunt inventore fugit natus possimus eum,
              dolor cupiditate dolorum vitae odio? Fugit esse molestiae dolores,
              laudantium sunt quis nostrum.
            </p>
          </C.JobCardCover>
        </C.FirstJob>

        <C.OtherJobs>
          <C.JobCard>
            <C.Card style={{ backgroundImage: `url(${job2}` }}>
              <div className="content">
                <p className="title">Projeto 2</p>
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem, sapiente laboriosam. Incidunt inventore fugit natus
                  possimus eum, dolor cupiditate dolorum vitae odio? Fugit esse
                  molestiae dolores, laudantium sunt quis nostrum.
                </p>
              </div>
            </C.Card>
          </C.JobCard>
          <C.JobCard>
            <C.Card style={{ backgroundImage: `url(${job3}` }}>
              <div className="content">
                <p className="title">Projeto 3</p>
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem, sapiente laboriosam. Incidunt inventore fugit natus
                  possimus eum, dolor cupiditate dolorum vitae odio? Fugit esse
                  molestiae dolores, laudantium sunt quis nostrum.
                </p>
              </div>
            </C.Card>
          </C.JobCard>
          <C.JobCard>
            <C.Card style={{ backgroundImage: `url(${job4}` }}>
              <div className="content">
                <p className="title">Projeto 4</p>
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem, sapiente laboriosam. Incidunt inventore fugit natus
                  possimus eum, dolor cupiditate dolorum vitae odio? Fugit esse
                  molestiae dolores, laudantium sunt quis nostrum.
                </p>
              </div>
            </C.Card>
          </C.JobCard>

          <C.JobCard>
            <C.Card style={{ backgroundImage: `url(${job5}` }}>
              <div className="content">
                <p className="title">Projeto 5</p>
                <p className="description">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Dolorem, sapiente laboriosam. Incidunt inventore fugit natus
                  possimus eum, dolor cupiditate dolorum vitae odio? Fugit esse
                  molestiae dolores, laudantium sunt quis nostrum.
                </p>
              </div>
            </C.Card>
          </C.JobCard>
        </C.OtherJobs>
      </C.JobsList>
    </C.JobsSection>
  );
};

export default Jobs;
