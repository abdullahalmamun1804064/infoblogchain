import React from "react";
import "./information.css";
import images from '../../constants/images'
import {Info} from '../../components/info/Info'

export const Information = () => {
  return (
    <div className="app__information section__padding">
      <div className="information-blog">
        <div className="information-blog-first-blog information-blog-first-blog-position">
          <div className="information-blog-first-blog-img">
            <img src={images.defi} alt="Defi" />
          </div>
          <div className="information-blog-first-blog-info">
            <Info
              color="var(--color-pink)"
              name="defi"
              title="Scale the world of DeFi"
              description="Being the veterans in the blockchain industry, we understand the hype of decentralized finance and the contemporary optimizations in the financial sector and hence taking the grasp of the moment , we have developed exceptional projects in the world of DeFi."
            />
          </div>
        </div>

        <div className="neon-img">
          <img src={images.Neon3} alt="Neon" />
        </div>

        <div className="information-blog-second-blog">
          <div className="information-blog-second-blog-info">
            <Info
              color="var(--color-golden)"
              name="DAPPS"
              title="Technology made easier"
              description="Decentralized applications have found a huge user base right in the initial stage , and therefore we as a team have gained extensive expertise into the creation of dapps."
            />
          </div>
          <div className="information-blog-second-blog-img">
            <img src={images.dapps} alt="Dapps" />
          </div>
        </div>
      </div>
      <div className="information-blog">
        <div className="information-blog-first-blog information-blog-first-blog-position">
          <div className="information-blog-first-blog-img">
            <img src={images.about} alt="AUDIT" />
          </div>
          <div className="information-blog-first-blog-info">
            <Info
              color="var(--color-green)"
              name="AUDIT"
              title="Stay secure and safe"
              description="Above all that matters is a secure and safe smart contract that is free from any vulnerability and does not hamper the investment of the various people who have trusted you. We also provide auditing services , so that you can stay assured of the security as we are quick in auditing and exposing the bugs of your smart contract."
            />
          </div>
        </div>

        <div className="neon-img-right">
          <img src={images.Neon3} alt="Neon" />
        </div>

        <div className="information-blog-second-blog">
          <div className="information-blog-second-blog-info">
            <Info
              color="var(--color-mid-blue)"
              name="Expert"
              title="Expert Review"
              description="Experience the guidance of various trained professionals and developers who are with you at every phase of your projects. We not only develop your project but also give out the best recommendations for turning it into a huge success"
            />
          </div>
          <div className="information-blog-second-blog-img">
            <img src={images.expert_review} alt="Expert" />
          </div>
        </div>
      </div>
      <div className="information-blog">
        <div className="information-blog-first-blog information-blog-first-blog-position">
          <div className="information-blog-first-blog-img">
            <img src={images.smart_connect} alt="Smart connect" />
          </div>
          <div className="information-blog-first-blog-info">
            <Info
              color="var(--color-golden)"
              name="SMART CONTRACT"
              title="Experience the Revolution"
              description="Merklabs has efficient developers with exceptional coding skills that can create any type of smart contract you desire and with scalable and secure code. You desire, we create it for you."
            />
          </div>
        </div>

        <div className="neon-img">
          <img src={images.Neon3} alt="Neon" />
        </div>

        <div className="information-blog-second-blog">
          <div className="information-blog-second-blog-info">
            <Info
              color="var(--color-golden)"
              name="LAUNCHPAD"
              title="Stabilize and Promote"
              description="Amidst the competition in the Defi space, good marketing strategy and implementation plays the key role to stabilize and promote your growth in the blockchain industry. Retaining this awareness, we can develop launchpad and IDO for your presale and ICO."
               />
          </div>
          <div className="information-blog-second-blog-img">
            <img src={images.launchpad} alt="Launchpad" />
          </div>
        </div>
      </div>
    </div>
  );
};
