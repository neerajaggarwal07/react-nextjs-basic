import React, { Component } from "react";
import Link from "next/link";

import Layout from "../components/Layout";
import fetch from "isomorphic-unfetch";
import Error from "./_error";

export default class About extends Component {
  static async getInitialProps() {
    const res = await fetch("http://api.github.com/users/reedbarger");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();

    return {
      user: data,
      statusCode
    };
  }

  // componentDidMount(){
  //     fetch('http://api.github.com/users/reedbarger')
  //     .then(res => res.json())
  //     .then(data => {
  //         console.log(data);
  //     })
  // }

  render() {
    const { user, statusCode } = this.props;
    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title="About">
        <p>{JSON.stringify(user.name)}</p>
        <img src={user.avatar_url} />
      </Layout>
    );
  }
}
