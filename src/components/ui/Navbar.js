import React, { useEffect } from 'react'
//import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'


export const Navbar = () => {


  useEffect(() => {
    var elems = document.querySelectorAll('.fixed-action-btn');
    M.FloatingActionButton.init(elems, {
      toolbarEnabled: true
    });
  }, []);


  return (

    <div className="fixed-action-btn toolbar">
      <a className="btn-floating btn-large ">
        <i className="large material-icons">menu</i>
      </a>
      <ul>
        <li><a className="btn-floating "><i className="material-icons">insert_chart</i></a></li>
        <li><a className="btn-floating "><i className="material-icons">format_quote</i></a></li>
        <li><a className="btn-floating "><i className="material-icons">publish</i></a></li>
        <li><a className="btn-floating "><i className="material-icons">attach_file</i></a></li>
      </ul>
    </div>

  )
}
