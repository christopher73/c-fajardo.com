import React from 'react';
export default function ContactMe() {
  return (
    <div>
      <form className="container">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address:</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <small
            id="emailHelp"
            className="form-text text-muted float-right"
          >
            I'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputName">Name:</label>
          <input
            type="name"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputNumber">Phone number:</label>
          <input type="number" className="form-control" />
          <small
            id="emailNumber"
            className="form-text text-muted float-right"
          >
            Optional
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputMessage">Message:</label>
          <input type="text" className="form-control" />
        </div>
        <button type="submit" className="btn btn-primary float-right">
          Send
        </button>
      </form>
    </div>
  );
}
