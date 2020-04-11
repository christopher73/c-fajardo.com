import React from 'react';
import './style.css';
export default function Technologies() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 text-center ">
          <h3 className="m-3 p-2">
            I specialize in Full Stack Development as my knowledge of
            multiple fields allows me to work on a project with the
            full scope in mind.
          </h3>
        </div>
      </div>
      <div className="row text-center my-3">
        <div className="col-md-12" id="titleSkills">
          <img alt="frontend" src="./assets/img/icons/frontend.png" />
          <h3>FRONTEND</h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ height: '160px' }}>
            <img
              alt="js"
              src="./assets/img/icons/js.svg"
              style={{
                width: '100%',
                height: '50%',
              }}
            />
            JAVASCRIPT
          </h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ color: '#61dafb', height: '160px' }}>
            <img
              alt="react"
              src="./assets/img/icons/react.svg"
              style={{
                width: '100%',
                height: '50%',
              }}
            />
            REACT
          </h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center  "
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ color: '#61dafb', height: '160px' }}>
            <img
              alt="react"
              src="./assets/img/icons/reactnative.svg"
              style={{
                width: '100%',
                height: '50%',
              }}
            />
            REACT NATIVE
          </h3>
        </div>
      </div>
      <div className="row text-center my-3">
        <div className="col-md-12" id="titleSkills">
          <img
            alt="reactnative"
            src="./assets/img/icons/backend.png"
          />
          <h3>BACKEND</h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center  "
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img
            alt="node"
            src="./assets/img/icons/node.png"
            style={{ width: '85%', height: '160px' }}
          />
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center "
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img
            alt="mysql"
            src="./assets/img/icons/mysql.svg"
            style={{ width: '100%', height: '160px' }}
          />
        </div>{' '}
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center "
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          <img
            alt="mongo"
            src="./assets/img/icons/mongodb.svg"
            style={{ width: '100%', height: '160px' }}
          />
        </div>
      </div>
      <div className="row text-center my-3">
        <div className="col-md-12" id="titleSkills">
          <img
            alt="reactnative"
            src="./assets/img/icons/services.png"
          />
          <h3>SERVICES</h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ color: 'orange', height: '160px' }}>
            <img
              alt="aws"
              src="./assets/img/icons/aws.svg"
              style={{
                width: '100%',
                height: '50%',
              }}
            />
            AWS
          </h3>
        </div>{' '}
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ color: 'orange', height: '160px' }}>
            <img
              alt="firebase"
              src="./assets/img/icons/firebase.svg"
              style={{
                width: '100%',
                height: '50%',
              }}
            />
            FIREBASE
          </h3>
        </div>
        <div
          className="col-md-3 col-sm-6 col-6 m-auto text-center"
          data-aos="zoom-in"
          data-aos-duration="2000"
        >
          <h3 style={{ color: '#66e8bf', height: '160px' }}>
            <img
              alt="aws"
              src="./assets/img/icons/api.png"
              style={{
                height: '50%',
              }}
            />
            INTEGRATION
          </h3>
        </div>
      </div>
    </div>
  );
}
