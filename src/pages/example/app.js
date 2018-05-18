import './app.less';

import educations from './data/educations';
import projects from './data/projects';
import jobs from './data/jobs';
import features from './data/features';
import skills from './data/skills';

let educationsDom = '';
educations.forEach((d, i) => {
    const { school, startTime, endTime, spe, level, org, city, remarks } = d;
    let lis = '';
    remarks.forEach((dd, ii) => {
        lis += `<li>${dd}</li>`
    })
    educationsDom += `<div class="item">
        <div class="row">
        <div class="left">${school}</div>
        <div class="right">${startTime} - ${endTime}</div>
        </div>
        <div class="row">
        <div class="left">${spe} ${level} ${org}</div>
        <div class="right">${city}</div>
        </div>
        <ul>
            ${lis}
        </ul>
    </div>`
});
$('.educations .list').html(educationsDom);

let projectsDom = '';
projects.forEach((d, i) => {
    const { name, company, desc } = d;
    projectsDom += `<div class="item">
        <div class="row">
        <div class="left">${name}</div>
        <div class="right">${company}</div>
        </div>
        <div class="desc">
            ${desc}
        </div>
    </div>`
});
$('.projects .list').html(projectsDom);

let jobsDom = '';
jobs.forEach((d, i) => {
    const { company, position, startTime, endTime } = d;
    jobsDom += `<div class="item">
        <div class="row">
        <div class="left">${company} ${position}</div>
        <div class="right">${startTime} - ${endTime}</div>
        </div>
    </div>`
});
$('.jobs .list').html(jobsDom);

let featuresDom = '';
features.forEach((d, i) => {
    featuresDom += `<li>${d}</li>`;
})
$('.features .list').html(featuresDom);

let skillsDom = '';
skills.forEach((d, i) => {
    skillsDom += `<li>${d}</li>`;
})
$('.skills .list').html(skillsDom);