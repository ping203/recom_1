import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { connect } from 'react-redux'
import { InboxOutlined } from '@ant-design/icons'
import { Tabs, Input, Button, Upload, Form, message, Select, } from 'antd'

const mapStateToProps = ({ dispatch }) => ({
  dispatch, 
})

const { Option } = Select;
const { TabPane } = Tabs
const { Dragger } = Upload
const props = {
  name: 'file',
  action: '55',
  headers: {
    authorization: 'authorization-text',
  },
  onChange( info )
  {
    if ( info.file.status !== 'uploading' )
    {
      console.log( info.file, info.fileList )
    }
    if ( info.file.status === 'done' )
    {
      message.success( `${ info.file.name } file uploaded successfully` )
    } else if ( info.file.status === 'error' )
    {
      message.error( `${ info.file.name } file upload failed.` )
    }
  },
}
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const prefixSelector = (
  <Form.Item name="prefix" noStyle>
    <Select style={{ width: 70 }}>
      <Option value="91">+91</Option>
    </Select>
  </Form.Item>
);

const AppsProfile = ({ dispatch }) =>
{
  const [ tabKey, setTabKey ] = useState( '1' )

  const changeTab = key =>
  {
    setTabKey( key )
  }
  
  const onFinish = values => {
  
    dispatch({
      type: 'seller/ADDING',
      payload: values,
    })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo)
  }


  return (
    <div>

      <Helmet title="Seller" />

      <div className="row">
        <div className="col-xl-12 col-lg-12">
          <div className="card">
            <div className="card-header card-header-flex flex-column">

              <Tabs activeKey={tabKey} className="mr-auto kit-tabs-bold" onChange={changeTab}>
                <TabPane tab="Sellers" key="1" />
                <TabPane tab="Messages" key="2" />
                <TabPane tab="Settings" key="3" />
              </Tabs>
            </div>
            <div className="card-body">
              {tabKey === '1' && (
                <div>
                  <span>Seller List</span>
                </div>
              )}
              {tabKey === '2' &&
                (
                  <div>
                    <h1>welcome</h1>
                  </div>
                )
              }
              {tabKey === '3' && (
                <Form layout="vertical" className="login-form" onFinish={onFinish} onFinishFailed={onFinishFailed} validateMessages={validateMessages}>
                  <h5 className="text-black mt-4">
                    <strong>Personal Information</strong>
                  </h5>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item name="firstName" label="First Name" rules={[ { required: true } ]}>
                        <Input placeholder="First Name" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item name="lastName" label="Last Name">
                        <Input placeholder="Last Name" />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <Form.Item name="email" label="Email" rules={[ { type: 'email' } ]}>
                        <Input placeholder="Email" />
                      </Form.Item>
                    </div>
                    <div className="col-lg-6">
                      <Form.Item
                        name="phone"
                        label="Phone Number"
                        rules={[ { required: true, message: 'Please input your phone number!' } ]}
                      >
                        <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12">
                      <h5 className="text-black mt-4 mb-3">
                        <strong>Profile Photo</strong>
                      </h5>
                      <div className="mb-5">
                        <Dragger {...props}>
                          <p className="ant-upload-drag-icon">
                            <InboxOutlined />
                          </p>
                          <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Dragger>
                      </div>
                    </div>
                  </div>
                  <div className="form-actions">
                    <Button
                      style={{ width: 200 }}
                      type="primary"
                      htmlType="submit"
                      className="mr-3"
                    >
                      Submit
                    </Button>
                    <Button htmlType="submit">Cancel</Button>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(AppsProfile)

