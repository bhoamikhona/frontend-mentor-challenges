import React from "react";
import "./Main.css";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as LinkIcon } from "../../assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";

function Main() {
  return (
    <main className="main">
      <div className="avatar-container">
        <div className="avatar-img-container">
          <img
            src="https://avatars.githubusercontent.com/u/583231?v=4"
            alt="user-avatar"
            className="avatar-img"
          />
        </div>
      </div>
      <div className="user-info">
        <div className="user">
          <h2 className="user__name">The Octocat</h2>
          <span className="user__username">@octocat</span>
        </div>
        <span className="date">Joined 25 Jan 2011</span>
      </div>
      <div className="user-details">
        <p className="user__bio">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi
          perferendis minima numquam distinctio aperiam similique soluta minus
          ipsam repellat quae?
        </p>
        <div className="user__stats">
          <div className="user__stat">
            <h3 className="user__stat-title">Repos</h3>
            <span className="user__stat-value">8</span>
          </div>
          <div className="user__stat">
            <h3 className="user__stat-title">Followers</h3>
            <span className="user__stat-value">3938</span>
          </div>
          <div className="user__stat">
            <h3 className="user__stat-title">Following</h3>
            <span className="user__stat-value">9</span>
          </div>
        </div>
        <div className="user__list-container">
          <ul className="user__list">
            <li className="user__list-item">
              <span className="user__location-icon icon">
                <LocationIcon />
              </span>
              <span className="user__location">Mumbai, India</span>
            </li>
            <li className="user__list-item">
              <span className="user__twitter-icon icon">
                <TwitterIcon />
              </span>
              {/* <a href="https://github.com/bhoamikhona" className="user__link">
                Twitter Link
              </a> */}
              <span className="unavailable">Not Available</span>
            </li>
            <li className="user__list-item">
              <span className="user__link-icon icon">
                <LinkIcon />
              </span>
              <span className="user__link">
                <a href="https://github.com/bhoamikhona" className="user__link">
                  Portfolio Link
                </a>
              </span>
            </li>
            <li className="user__list-item">
              <span className="user__company-icon icon">
                <CompanyIcon />
              </span>
              <span className="user__company">@github</span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;
