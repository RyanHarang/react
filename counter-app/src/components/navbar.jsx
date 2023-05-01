import React, { Component } from 'react';

//Stateless Functional Component
const NavBar = props => {
    return (
        <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    Numver of Counters 
                    <span 
                        className="badge rounded-pill bg-secondary m-2">
                        {props.totalCounters}
                    </span>
                </a>
            </div>
        </nav>
    );
}
 
export default NavBar;