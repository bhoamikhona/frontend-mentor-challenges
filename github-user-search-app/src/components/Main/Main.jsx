import React from "react";
import "./Main.css";
import { ReactComponent as LocationIcon } from "../../assets/icon-location.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icon-twitter.svg";
import { ReactComponent as LinkIcon } from "../../assets/icon-website.svg";
import { ReactComponent as CompanyIcon } from "../../assets/icon-company.svg";

function Main({
  avatar_url,
  bio,
  blog,
  company,
  created_at,
  followers,
  following,
  location,
  login,
  name,
  public_repos,
  twitter_username,
  isLoading,
}) {
  return (
    <main className="main">
      <div className="avatar-container">
        <div className="avatar-img-container">
          <img src={avatar_url} alt="user-avatar" className="avatar-img" />
        </div>
      </div>
      <div className="user-info">
        <div className="user">
          <h2 className="user__name">{name}</h2>
          <span className="user__username">@{login}</span>
        </div>
        <span className="date">Joined {created_at}</span>
      </div>
      <div className="user-details">
        <p className="user__bio">{bio}</p>
        <div className="user__stats">
          <div className="user__stat">
            <h3 className="user__stat-title">Repos</h3>
            <span className="user__stat-value">{public_repos}</span>
          </div>
          <div className="user__stat">
            <h3 className="user__stat-title">Followers</h3>
            <span className="user__stat-value">{followers}</span>
          </div>
          <div className="user__stat">
            <h3 className="user__stat-title">Following</h3>
            <span className="user__stat-value">{following}</span>
          </div>
        </div>
        <div className="user__list-container">
          <ul className="user__list">
            <li className={`user__list-item ${location ? "" : "unavailable"}`}>
              <span className="user__location-icon icon">
                <LocationIcon className={location ? "" : "unavailable"} />
              </span>
              <span className="user__location">
                {location ? location : "Not Found"}
              </span>
            </li>
            <li
              className={`user__list-item ${
                twitter_username ? "" : "unavailable"
              }`}
            >
              <span className="user__twitter-icon icon">
                <TwitterIcon
                  className={twitter_username ? "" : "unavailable"}
                />
              </span>
              <span className="user__twitter">
                {twitter_username ? twitter_username : "Not Found"}
              </span>
            </li>
            <li className={`user__list-item ${blog ? "" : "unavailable"}`}>
              <span className="user__link-icon icon">
                <LinkIcon className={blog ? "" : "unavailable"} />
              </span>
              <span className="user__link">
                <a
                  href={blog ? blog : "#"}
                  target="_blank"
                  rel="noreferrer"
                  className="user__link"
                >
                  {blog ? blog : "Not Found"}
                </a>
              </span>
            </li>
            <li className={`user__list-item ${company ? "" : "unavailable"}`}>
              <span className="user__company-icon icon">
                <CompanyIcon className={company ? "" : "unavailable"} />
              </span>
              <span className="user__company">
                {company ? company : "Not Found"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default Main;
