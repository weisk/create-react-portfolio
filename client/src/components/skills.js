import React from 'react';

import htmlLogo from '../assets/images/skills/html_logo.png';
import cssLogo from '../assets/images/skills/css_logo.png';

import jsLogo from '../assets/images/skills/javascript_logo.png';
import oopLogo from '../assets/images/skills/oop.png';

import jqueryajaxLogo from '../assets/images/skills/jquery_ajax2.png';
import apiLogo from '../assets/images/skills/api.png';

import reactLogo from '../assets/images/skills/react-logo.png';
import reduxLogo from '../assets/images/skills/redux.png';

import nodephpLogo from '../assets/images/skills/node_php.png';
import databaseLogo from '../assets/images/skills/database.png';

import androidLogo from '../assets/images/skills/android.png';
import cLogo from '../assets/images/skills/c-logo.png';

import agileLogo from '../assets/images/skills/agile_git_mamp.png';
import npmLogo from '../assets/images/skills/vs_code_npm_postman.png';

import responsiveDesign from '../assets/images/skills/responsive-design.png';
import bootstrapPs from '../assets/images/skills/bootstrap_ps.png';

export default props =>{

    return(
        <section id='skills'>
            <h3>Technical Skills</h3>
            <hr/>
            <div className="container">
                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 htmlLogo" src={htmlLogo} alt="HTML"/>
                    <img className="col s3 cssLogo"  src={cssLogo} alt="CSS"/>
                    <div className="col s6"><strong>HTML5</strong> and <strong>CSS3</strong> are fundamental skills for any web developer</div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6"><strong>Javascript</strong> using <strong>Object Oriented Programming</strong></div>  
                    <img className="col s3 pull-l6 jsLogo" src={jsLogo} alt="Javascript"/>

                    <img className="col s3 pull-l6 oopLogo" src={oopLogo} alt='OOP'/>
                </div>

                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className="col s3 jqueryLogo" src={jqueryajaxLogo} alt='JQuery Ajax'/>
                    <img className="col s3 apiLogo" src={apiLogo} alt='API'/>
                    <div className="col s6"><strong>jQuery</strong> is for DOM Manipulation. <strong>Ajax</strong> and <strong>Axios</strong> calls for <strong>API</strong> usage</div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6"><strong>React's</strong> declaractive component structure with <strong>Redux's</strong> state management is my favorite front end framework</div>  
                    <img className='col s3 pull-l6 reactLogo' src={reactLogo} alt='React'/>

                    <img className='col s3 pull-l6 reduxLogo' src={reduxLogo} alt='Redux'/>
                </div>
                
                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className='col s3 nodephpLogo' src={nodephpLogo} alt="Node PHP"/>
                    <img className='col s3 androidLogo' src={databaseLogo} alt='database'/>
                    <div className="col s6">Knowledgable and experienced using both the industry standard <strong>PHP</strong> with <strong>MySQL</strong> and the emerging <strong>Node.js</strong> with <strong>MongoDB</strong></div>
                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6">During college, I developed an <strong>Android</strong> internet of things (IOT) app for my <a href="http://digitalcommons.calpoly.edu/eesp/113/">senior project</a>. <strong>C</strong> is the most popular embedded programming language</div>  
                    <img className='col s3 pull-l6 androidLogo' src={androidLogo} alt='Android'/>

                    <img className='col s3 pull-l6 cLogo'  src={cLogo} alt="C"/>
                </div>
                
                </div>

                <div className="row">
                <div className="col s12 l6 skills">

                    <img className='col s3 agileLogo' src={agileLogo} alt='Agile Git Visual Studio Code'/>
                    <img className='col s3 vscodeLogo'  src={npmLogo} alt="NPM Postman MAMP"/>
                    <div className="col s6"><strong>Git, Visual Studio Code, NPM, Postman, MAMP,</strong> and <strong>Agile</strong> are tools and processes that I develop with everyday</div>

                </div>
                
                <div className="col s12 l6 skills">

                <div className="col s6 push-l6"><strong>Mobile Responsive Design</strong> using libraries like <strong>Bootstrap</strong>, <strong>Material Design</strong>. Image editing experience using Adobe <strong>Photoshop</strong> and <strong>Illustrator</strong>.</div>  
                    <img className='col s3 pull-l6 responsiveLogo' src={responsiveDesign} alt='Responsive Design'/>

                    <img className='col s3 pull-l6 bootstrapLogo'  src={bootstrapPs} alt='BootStrap Material Design PhotoShop Illustrator'/>
                </div>
                
                </div>

            </div>
        </section>
    );
}