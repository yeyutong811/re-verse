import React from "react";
import { Layout } from "antd";

const { Content } = Layout;

const Profile = () => {
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
        <h2>Profile</h2>
        {/* <h3>Internet-of-Things Enabled Hospital Wearables</h3> */}
      </Content>
    </Layout>
  );
};

export default Profile;
