import React from "react";
import "./style.css";
export default function Technologies() {
  return (
    <div className='technologies-container'>
      <div className='technologies-container-title-div'>
        <h1>PROGRAMING LANGUAGE</h1>{" "}
        <img
          alt='PROGRAMING LANGUAGE'
          src='./assets/img/icons/programming.svg'
          style={{ height: "100px", padding: "10px" }}
        />
      </div>
      <div className='container'>
        <div className='row text-center my-3'>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img
              alt='js'
              src='./assets/img/icons/js.svg'
              style={{ width: "80px", height: "60px" }}
            />
            <p>JAVASCRIPT</p>
          </div>{" "}
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img
              alt='js'
              src='./assets/img/icons/python.png'
              style={{ width: "80px", height: "60px" }}
            />
            <p>PYTHON</p>
          </div>
        </div>
      </div>
      <div className='technologies-container-title-div'>
        <h1>FRONTEND</h1>{" "}
        <img
          alt='FRONTEND'
          src='./assets/img/icons/frontend.svg'
          style={{ height: "100px", padding: "10px" }}
        />
      </div>
      <div className='container'>
        <div className='row text-center my-3'>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img
              alt='react'
              src='./assets/img/icons/react.svg'
              style={{ width: "80px", height: "50px" }}
            />
            <p style={{ color: "#61dafb" }}>REACT</p>
          </div>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <img
              alt='react'
              src='./assets/img/icons/reactNative.svg'
              style={{ width: "80px", height: "50px" }}
            />
            <p style={{ color: "#61dafb" }}>REACT NATIVE</p>
          </div>
        </div>
      </div>
      <div className='technologies-container-title-div'>
        <h1>BACKEND</h1>{" "}
        <img
          alt='BACKEND'
          src='./assets/img/icons/database.svg'
          style={{ height: "100px", padding: "10px" }}
        />
      </div>
      <div className='container'>
        <div className='row text-center my-3'>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='3000'
          >
            <img
              alt='node'
              src='./assets/img/icons/node.png'
              style={{ width: "100px", height: "80px" }}
            />
          </div>
          <div
            className='col-3 m-auto text-center '
            data-aos='zoom-in'
            data-aos-duration='3000'
          >
            <img
              alt='mysql'
              src='./assets/img/icons/mysql.svg'
              style={{ width: "100%", height: "80px" }}
            />
          </div>
          <div
            className='col-3 m-auto text-center '
            data-aos='zoom-in'
            data-aos-duration='3000'
          >
            <img
              alt='mongo'
              src='./assets/img/icons/mongodb.svg'
              style={{ width: "100%", height: "40px" }}
            />
          </div>
        </div>
      </div>
      <div className='technologies-container-title-div'>
        <h1>SERVICES</h1>{" "}
        <img
          alt='WEB SERVICES'
          src='./assets/img/icons/services.png'
          style={{ height: "100px", padding: "10px" }}
        />
      </div>
      <div className='container'>
        <div className='row text-center my-3'>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <h3 style={{ color: "orange", height: "80px" }}>
              <img
                alt='aws'
                src='./assets/img/icons/aws.svg'
                style={{
                  width: "100%",
                  height: "50%",
                }}
              />
              AWS
            </h3>
          </div>
          <div
            className='col-3 m-auto text-center'
            data-aos='zoom-in'
            data-aos-duration='2000'
          >
            <h3 style={{ color: "orange", height: "80px" }}>
              <img
                alt='firebase'
                src='./assets/img/icons/firebase.svg'
                style={{
                  width: "100%",
                  height: "50%",
                }}
              />
              FIREBASE
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
{
  /* <div className='row'>
          <h3 className='m-3 p-2'>
            I specialize in Full Stack Development as my knowledge of multiple
            fields allows me to work on a project with the full scope in mind.
          </h3>
        </div>
      </div> */
}
