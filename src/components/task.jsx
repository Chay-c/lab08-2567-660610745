import React from 'react'

function task() {
  return (
    <><div className="d-flex p-3 gap-2 align-items-center border-bottom">
          <span>Read a book</span>
          <button className="btn btn-success">Done</button>
          <button className="btn btn-danger">Delete</button>
      </div><div className="d-flex p-3 gap-2 align-items-center border-bottom">
              <span>Take a shower</span>
              <button className="btn btn-success">Done</button>
              <button className="btn btn-danger">Delete</button>
          </div><div className="d-flex p-3 gap-2 align-items-center border-bottom">
              <span>Sleep</span>
              <button className="btn btn-success">Done</button>
              <button className="btn btn-danger">Delete</button>
          </div></>
  )
}

export default task