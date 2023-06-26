import React from 'react';
import data from './data.json';
import './Statistics.module.css';

export const Statistics = ({title, stats}) => {
    return (
<section className="statistics">
  <h2 className="title">Upload stats</h2>

  <ul className="stat-list">
    <li className="item">
      <span className="label">{data.docx}</span>
      <span className="percentage">4%</span>
    </li>
    <li className="item">
      <span className="label">{data.mp3}</span>
      <span className="percentage">14%</span>
    </li>
    <li className="item">
      <span className="label">{data.pdf}</span>
      <span className="percentage">41%</span>
    </li>
    <li className="item">
      <span className="label">{data.mp4}</span>
      <span className="percentage">12%</span>
    </li>
  </ul>
</section>
    )
}