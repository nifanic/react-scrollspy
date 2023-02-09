import ReactDOM from "react-dom";
import React, { Component } from "react";
import ScrollSpyTabs from "./ScrollSpyTabs";

class App extends Component {
  render() {
    return (
      <div
        style={{
          fontFamily: "roboto, sans-serif",
          fontSize: 15,
          backgroundColor: "#fff"
        }}
      >
        <h1>ScrollSpyTabs demo</h1>
        <p>
          This is a demo of the react scrollspy using material-ui tab components
        </p>
        <p>
          See source for credits and license. If not specified otherwise MIT
          license apply.
        </p>
        <p>
          Checkout a live demo on{" "}
          <a
            href="https://www.fundbricks.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#2e8ffa" }}
          >
            FundBricks.com
          </a>
        </p>
        <hr />
        <ScrollSpyTabs
          tabsInScroll={[
            {
              text: "Tab no. 1",
              component: <p style={{ height: "80vh" }}>tab no 1 - some text</p>
            },
            {
              text: "Tab no. 2",
              component: <p style={{ height: "80vh" }}>tab no 2 - some text</p>
            },
            {
              text: "Tab no. 3",
              component: <p style={{ height: "150vh" }}>tab no 3 - some text</p>
            },
            {
              text: "Tab no. 4",
              component: <p style={{ height: "100vh" }}>tab no 4 - some text</p>
            },
            {
              text: "Tab no. 5",
              component: <p style={{ height: "100vh" }}>tab no 4 - some text</p>
            }
          ]}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
