import React from 'react'
import { CountItem } from '../../components/Countitem/CountItem';
import './user.css'

export const User = () => {
  return (
    <div className="app__users  section__padding" id="users">
      <div className="users-informatin">
        <p className="users-informatin-title">
          We provide The Best To Protect Your Users And Their Investments
        </p>
        <p className="users-informatin-description">
          Merklabs is a reputed name in the field of blockchain technology
          encompassing all the segments of this revolutionary field. Pioneering
          the essence of blockchain security and audits, we secure your present
          and future through the parameters of technology.
        </p>
      </div>
      <div className="users-chat">
        <div className="users-chat-items ">
          <div className="chat-item  circle-active">
            <CountItem count="100" title="Blockchain companies protected" />
          </div>
          <div className="chat-item circle-item  ">
            <CountItem count="200" title="Issues discovered" />
          </div>
          <div className="chat-item circle-item">
            <CountItem count="10000" title="Analyses available per month" />
          </div>
        </div>
      </div>
    </div>
  );
}
