import React from "react";
import { Layout } from "antd";
import { Button, Card, Grid } from "@material-ui/core";


const { Content } = Layout;

const AboutUs = () => {
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
        <h2>Get Started!</h2>

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          10 recoins
        </Button>
        <h2>wallet</h2>
        <h3>Use your re-coins for vouchers or support environmental projects</h3>
        <h2>scan</h2>
        <h3>scan the item and check if it is recycable and earn re-coins!</h3>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
        >
          Logout
        </Button>      </Content>
    </Layout>
  );
};

export default AboutUs;
