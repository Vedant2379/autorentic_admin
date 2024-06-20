
import React from 'react'
import './Dashboard.css'
import { Col, Container, Row, Image, Table } from 'react-bootstrap'
import {
  ResponsiveContainer, XAxis, YAxis, Legend, Tooltip,
  Bar, BarChart, LineChart, Line, AreaChart, Area, ScatterChart, Scatter, Pie, PieChart, Cell
} from 'recharts'


const data = [
  {
    name: 'Mumbai',
    Total_Unit: 60,
    Revenue: 90

  },
  {
    name: 'Pune',
    Total_Unit: 80,
    Revenue: 70

  },
  {
    name: 'Nashik',
    Total_Unit: 30,
    Revenue: 50

  },
  {
    name: 'Jalgaon',
    Total_Unit: 50,
    Revenue: 70

  }, {
    name: 'Indore',
    Total_Unit: 20,
    Revenue: 60

  },
]


const Pia = [
  {
    Name: "Group A",
    Value: 123

  },
  {
    Name: "Group B",
    Value: 234

  },
  {
    Name: "Group C",
    Value: 153

  },
  {
    Name: "Group D",
    Value: 239,


  },
  {
    Name: "Group E",
    Value: 197

  }



]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'purple', 'red'];



function Dashboard() {
  return (
    <>
      <Container className='DashBoard_Container'>
          <h5>Overview</h5>
        <Row>
          <Col sm={12} md={6} lg={3}>
            <div className='Dashboard_Card'>
              <div>
                <h4>Revenue</h4>
                <h2>57</h2>
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className='Dashboard_Card'>
              <h4>Avilable Unit</h4>
              <h2>71</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className='Dashboard_Card'>
              <h4>Avilable EV</h4>
              <h2>27</h2>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <div className='Dashboard_Card'>
              <h4>Total Cars</h4>
              <h2>31</h2>
            </div>
           
          </Col>
        </Row>
      </Container >
      <Container fluid className='Dashboard_second_Container'>
        <Row>
          <Col sm={12} md={6} lg={8}>
            <div style={{ padding: 10 }}>
              <h5>Real Time Analysis</h5>
              <ResponsiveContainer width='100%' aspect={2}>
                <LineChart data={data}>
                  <XAxis dataKey="name" interval={'preserveStartEnd'} />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type='monotone' dataKey="Total_Unit" stroke='red' />
                  <Line dataKey="Revenue" type='monotone' stroke='green' />

                </LineChart>

              </ResponsiveContainer>
            </div>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <h5>Populer Citys</h5>
            <Table striped hover className='DashBoard_Table'>
              <thead>
                <tr>
                  <th>City</th>
                  <th>Total Rent</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Mumbai</td>
                  <td>60 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Pune</td>
                  <td>20 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Nashik</td>
                  <td>50 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Indore</td>
                  <td>150 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Jalgaon</td>
                  <td>80 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Ahemdabad</td>
                  <td>80 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Delhi</td>
                  <td>80 Unit</td>
                  <td>Rs.56075</td>
                </tr>
                <tr>
                  <td>Jaypur</td>
                  <td>80 Unit</td>
                  <td>Rs.56075</td>
                </tr>
              </tbody>
            </Table>

          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Dashboard