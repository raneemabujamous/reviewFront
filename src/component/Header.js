import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="/home"> Home</a>
            </li>
            <li>
              <a href="/fav"> Faveroite</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
