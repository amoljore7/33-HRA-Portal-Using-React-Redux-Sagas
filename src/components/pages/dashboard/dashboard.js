import React, { useState, useEffect } from "react";
import { Table, Input, Button, Select } from "antd";
import { Row, Col, Modal } from "antd";
import Axios from "axios";
const { Option } = Select;
const { Search } = Input;

const Dashboard = (props) => {
  const paginationConfig = {
    defaultPageSize: 10,
    showSizeChanger: true,
    pageSizeOptions: ["10", "20", "50", "100"],
  };
  const style = { padding: "8px 0", marginBottom: "18px" };
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(paginationConfig);
  const [loading, setLoading] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [editVisible, setEditVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [empID, setEmpID] = useState("GS-");
  const [jdate, setJDate] = useState("");
  const [Mobile, setMobile] = useState("");
  const [location, setLocation] = useState("");
  const [department, setDepartment] = useState("");
  const [designation, setDesignation] = useState("");

  useEffect(() => {
    fetch();
    //eslint-disable-next-line
  }, []);

  const locationArray = [
    {
      value: "Amar-Arma",
    },
    {
      value: "Ventage-9",
    },
    {
      value: "Pashan",
    },
  ];

  const departmentArray = [
    {
      value: "Web Development",
    },
    {
      value: "IT Management",
    },
    {
      value: "Marketing",
    },
  ];
  const designationArray = [
    {
      value: "Web Designer",
    },
    {
      value: "Web Developer",
    },
    {
      value: "Android Developer",
    },
  ];

  const showModalEdit = () => {
    setEditVisible(true);
  };

  const handleOkEdit = () => {
    setTimeout(() => {
      setEditVisible(false);
    }, 3000);
  };
  const formSubmit = () => {
    if (
      !firstName ||
      !lastName ||
      !userName ||
      !password ||
      !confirmPassword ||
      !empID ||
      !email ||
      !jdate ||
      !Mobile ||
      !location ||
      !department ||
      !designation
    ) {
      alert("Select All Fields");
      return;
    }
    setTimeout(() => {
      setEditVisible(false);
    }, 1000);
  };

  const handleCancelEdit = () => {
    setEditVisible(false);
    emptyForm();
  };

  const emptyForm = () => {
    setFirstName("");
    setLastName("");
    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setEmpID("");
    setMobile("");
    setLocation("");
    setDesignation("");
    setDepartment("");
    setJDate("");
  };
  const handleLocation = (value) => {
    setLocation(value.key);
  };
  const handleDepartment = (value) => {
    setDepartment(value.key);
  };
  const handleDesignation = (value) => {
    setDesignation(value.key);
  };

  const handleTableChange = (pagination, filters, sorter) => {
    const pager = { ...pagination };
    pager.current = pagination.current;
    setPagination(pager);
    fetch({
      results: pagination.pageSize,
      page: pagination.current,
      sortField: sorter.field,
      sortOrder: sorter.order,
      ...filters,
    });
  };

  const fetch = (params = {}) => {
    setLoading(true);
    Axios.get("https://randomuser.me/api", {
      params: {
        results: 10,
        ...params,
        searchInput: searchInput,
      },
    }).then((res) => {
      const paginationData = { ...pagination };
      paginationData.total = 200;
      setData(res.data.results);
      setPagination(paginationData);
      setLoading(false);
    });
  };

  const columns = [
    {
      title: "Emp Id",
      dataIndex: "dob",
      sorter: true,
      render: (dob) => dob.age,
    },
    {
      title: "Name",
      dataIndex: "name",
      sorter: true,
      render: (name) => `${name.first} ${name.last}`,
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Address",
      dataIndex: "location",
      render: (location) => location.city,
      filters: [
        { text: "AAG", value: "AAG" },
        { text: "Vantage 9", value: "Vantage 9" },
        { text: "Adisa", value: "Adisa" },
      ],
    },
    {
      title: "Unit",
      dataIndex: "gender",
      filters: [
        { text: "Male", value: "male" },
        { text: "Female", value: "female" },
      ],
    },
    {
      title: "Status",
      dataIndex: "nat",
      filters: [
        { text: "Onboarding", value: "DE" },
        { text: "Offboarding", value: "ES" },
        { text: "Inactive", value: "IR" },
      ],
    },
    {
      title: "Action",
      render: () => (
        <div>
          <Button type="primary" size="small" className="m-1">
            Show
          </Button>
          <Button size="small" className="m-1">
            Edit
          </Button>
        </div>
      ),
    },
  ];
  const selectBefore = (
    <Select defaultValue="onboarding" className="select-before">
      <Option value="onboarding">Onboarding</Option>
      <Option value="offboarding">Offboarding</Option>
      <Option value="inactive">Inactive</Option>
    </Select>
  );

  let modal = null;
  if(editVisible){
    modal =(
      <Modal
        visible={editVisible}
        title="Add Employee"
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        footer={[
          <Button key="back" onClick={handleCancelEdit}>
            Cancel
          </Button>,
          <Button key="submit" type="primary"  onClick={formSubmit}>
            Submit
          </Button>,
        ]}
      >
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <label>First Name </label>
            <Input
              style={style}
              size="large"
              required
              value={firstName || ""}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Last Name </label>
            <Input
              style={style}
              size="large"
              required
              value={lastName || ""}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>User Name </label>
            <Input
              style={style}
              size="large"
              required
              value={userName || ""}
              onChange={(e) => setUserName(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Email </label>
            <Input
              style={style}
              size="large"
              required
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Password </label>
            <Input.Password
              style={style}
              size="large"
              required
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Confirm Password </label>
            <Input.Password
              style={style}
              size="large"
              required
              value={confirmPassword || ""}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>EMP ID </label>
            <Input
              style={style}
              size="large"
              required
              value={empID || ""}
              onChange={(e) => setEmpID(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Mobile </label>
            <Input
              style={style}
              size="large"
              type="number"
              required
              value={Mobile || ""}
              onChange={(e) => setMobile(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Joining Date</label>
            <Input
              style={style}
              size="large"
              required
              type="date"
              value={jdate || ""}
              onChange={(e) => setJDate(e.target.value)}
            />
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Location </label>
            <Select
              labelInValue
              defaultValue={{ key: "" }}
              style={{ width: "100%", padding: "8px 0", marginBottom: "18px" }}
              size="large"
              onChange={handleLocation}
            >
              {locationArray &&
                locationArray.map((type) => (
                  <Option value={type.value}>{type.value}</Option>
                ))}
            </Select>
          </Col>

          <Col className="gutter-row" span={12}>
            <label>Department </label>
            <Select
              labelInValue
              defaultValue={{ key: "" }}
              style={{ width: "100%", padding: "8px 0", marginBottom: "18px" }}
              size="large"
              onChange={handleDepartment}
            >
              {departmentArray &&
                departmentArray.map((type) => (
                  <Option value={type.value}>{type.value}</Option>
                ))}
            </Select>
          </Col>
          <Col className="gutter-row" span={12}>
            <label>Designation </label>
            <Select
              labelInValue
              defaultValue={{ key: "" }}
              style={{ width: "100%", padding: "8px 0", marginBottom: "18px" }}
              size="large"
              onChange={handleDesignation}
            >
              {designationArray &&
                designationArray.map((type) => (
                  <Option value={type.value}>{type.value}</Option>
                ))}
            </Select>
          </Col>
        </Row>
      </Modal>
    )
  }

  return (
    <React.Fragment>
    <div className="my-3">
      <div className="my-3 d-flex flex-column justify-content-between">
        <div className="w-50 w-sm-50">
          <Search
            addonBefore={selectBefore}
            placeholder="input search text"
            enterButton="Search"
            shape="round"
            size="large"
            onChange={(e) => setSearchInput(e.target.value)}
            onSearch={(value) => console.log(value)}
          />
        </div>
        <Button.Group className="my-sm-3">
          <Button
            type="primary"
            style={{ margin: "0 2px" }}
            shape="round"
            size="large"
            onClick={showModalEdit}
          >
            Add Employee
          </Button>
          <Button
            type="primary"
            style={{ margin: "0 2px" }}
            shape="round"
            size="large"
            // onClick={showModal}
          >
            Upload List
          </Button>
        </Button.Group>
      </div>
      <Table
        bordered
        columns={columns}
        rowKey={(record) => record.login.uuid}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
        className="overflow-auto"
      />
    </div>
     {modal}
    </React.Fragment>
  );
};

export default Dashboard;
