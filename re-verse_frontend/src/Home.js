import React from "react";
import { Layout } from "antd";

import { Button, Card, Grid } from "@material-ui/core";

import "./App.css";
// import CustomBeatLoader from "./components/CustomBeatLoader";

const { Content } = Layout;

const Home = () => {
  return (
    <Layout className="layout" style={{ minHeight: "100vh" }}>
      <Content
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2>home</h2>
        {/* <h3>Internet-of-Things Enabled Hospital Wearables</h3> */}
        <Grid item xs={12}>
          <div className="upload-btn">
            {/* {submitting ? (
                    <CustomBeatLoader submitting={submitting} />
                  ) : ( */}
            {/* <form onSubmit={handleSubmit(submit)} className="uploads"> */}

            {/* </form> */}
            {/* )} */}
          </div>
        </Grid>
      </Content>
    </Layout>
  );
};

export default Home;
