import React, { Component } from 'react';


class Main extends Component {

    render() {
        return (

            <div className="wrapper wrapper-content">
                <div className="col-md-6">
                    <h2> Welcome {localStorage.getItem('username')}</h2>
                    <small>You have 42 messages and 6 notifications.</small>
                    <ul className="list-group clear-list m-t">
                        <li className="list-group-item fist-item">
                            <span className="pull-right">
                                09:00 pm
                                </span>
                            <span className="label label-success">1</span> Please contact me
                            </li>
                        <li className="list-group-item">
                            <span className="pull-right">
                                10:16 am
                                </span>
                            <span className="label label-info">2</span> Sign a contract
                            </li>
                        <li className="list-group-item">
                            <span className="pull-right">
                                08:22 pm
                                </span>
                            <span className="label label-primary">3</span> Open new shop
                            </li>
                        <li className="list-group-item">
                            <span className="pull-right">
                                11:06 pm
                                </span>
                            <span className="label label-default">4</span> Call back to Sylvia
                            </li>
                        <li className="list-group-item">
                            <span className="pull-right">
                                12:00 am
                                </span>
                            <span className="label label-primary">5</span> Write a letter to Sandra
                            </li>
                    </ul>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-success pull-right">Monthly</span>
                                <h5>Income</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">40 886,200</h1>
                                <div className="stat-percent font-bold text-success">98% <i className="fa fa-bolt"></i></div>
                                <small>Total income</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-info pull-right">Annual</span>
                                <h5>Orders</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">275,800</h1>
                                <div className="stat-percent font-bold text-info">20% <i className="fa fa-level-up"></i></div>
                                <small>New orders</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-primary pull-right">Today</span>
                                <h5>Vistits</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">106,120</h1>
                                <div className="stat-percent font-bold text-navy">44% <i className="fa fa-level-up"></i></div>
                                <small>New visits</small>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <span className="label label-danger pull-right">Low value</span>
                                <h5>User activity</h5>
                            </div>
                            <div className="ibox-content">
                                <h1 className="no-margins">80,600</h1>
                                <div className="stat-percent font-bold text-danger">38% <i className="fa fa-level-down"></i></div>
                                <small>In first month</small>
                            </div>
                        </div>
                    </div>
                </div>
                {/*<div className="row">
                    <div className="col-lg-12">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Orders</h5>
                                <div className="pull-right">
                                    <div className="btn-group">
                                        <button type="button" className="btn btn-xs btn-white active">Today</button>
                                        <button type="button" className="btn btn-xs btn-white">Monthly</button>
                                        <button type="button" className="btn btn-xs btn-white">Annual</button>
                                    </div>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="flot-chart">
                                            <div className="flot-chart-content" id="flot-dashboard-chart"></div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <ul className="stat-list">
                                            <li>
                                                <h2 className="no-margins">2,346</h2>
                                                <small>Total orders in period</small>
                                                <div className="stat-percent">48% <i className="fa fa-level-up text-navy"></i></div>
                                                <div className="progress progress-mini">
                                                    <div style={{ width: '48%' }} className="progress-bar"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2 className="no-margins ">4,422</h2>
                                                <small>Orders in last month</small>
                                                <div className="stat-percent">60% <i className="fa fa-level-down text-navy"></i></div>
                                                <div className="progress progress-mini">
                                                    <div style={{ width: '60%' }} className="progress-bar"></div>
                                                </div>
                                            </li>
                                            <li>
                                                <h2 className="no-margins ">9,180</h2>
                                                <small>Monthly income from orders</small>
                                                <div className="stat-percent">22% <i className="fa fa-bolt text-navy"></i></div>
                                                <div className="progress progress-mini">
                                                    <div style={{ width: '22%' }} className="progress-bar"></div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>*/}
                <div className="row">
                    <div className="col-md-7">

                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>User project list</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <table className="table table-hover no-margins">
                                    <thead>
                                        <tr>
                                            <th>Status</th>
                                            <th>Date</th>
                                            <th>User</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><small>Pending...</small></td>
                                            <td><i className="fa fa-clock-o"></i> 11:20pm</td>
                                            <td>Samantha</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 24% </td>
                                        </tr>
                                        <tr>
                                            <td><span className="label label-warning">Canceled</span> </td>
                                            <td><i className="fa fa-clock-o"></i> 10:40am</td>
                                            <td>Monica</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 66% </td>
                                        </tr>
                                        <tr>
                                            <td><small>Pending...</small> </td>
                                            <td><i className="fa fa-clock-o"></i> 01:30pm</td>
                                            <td>John</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 54% </td>
                                        </tr>
                                        <tr>
                                            <td><small>Pending...</small> </td>
                                            <td><i className="fa fa-clock-o"></i> 02:20pm</td>
                                            <td>Agnes</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 12% </td>
                                        </tr>
                                        <tr>
                                            <td><small>Pending...</small> </td>
                                            <td><i className="fa fa-clock-o"></i> 09:40pm</td>
                                            <td>Janet</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 22% </td>
                                        </tr>
                                        <tr>
                                            <td><span className="label label-primary">Completed</span> </td>
                                            <td><i className="fa fa-clock-o"></i> 04:10am</td>
                                            <td>Amelia</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 66% </td>
                                        </tr>
                                        <tr>
                                            <td><small>Pending...</small> </td>
                                            <td><i className="fa fa-clock-o"></i> 12:08am</td>
                                            <td>Damian</td>
                                            <td className="text-navy"> <i className="fa fa-level-up"></i> 23% </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="ibox float-e-margins">
                            <div className="ibox-title">
                                <h5>Transactions worldwide</h5>
                                <div className="ibox-tools">
                                    <a className="collapse-link">
                                        <i className="fa fa-chevron-up"></i>
                                    </a>
                                    <a className="close-link">
                                        <i className="fa fa-times"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="ibox-content">
                                <div className="row">
                                    <table className="table table-hover margin bottom">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '1%' }} className="text-center">No.</th>
                                                <th>Transaction</th>
                                                <th className="text-center">Date</th>
                                                <th className="text-center">Amount</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-center">1</td>
                                                <td>
                                                    Security doors
                                </td>
                                                <td className="text-center small">16 Jun 2014</td>
                                                <td className="text-center"><span className="label label-primary">$483.00</span></td>

                                            </tr>
                                            <tr>
                                                <td className="text-center">2</td>
                                                <td>
                                                    Wardrobes
                                </td>
                                                <td className="text-center small">10 Jun 2014</td>
                                                <td className="text-center"><span className="label label-primary">$327.00</span></td>

                                            </tr>
                                            <tr>
                                                <td className="text-center">3</td>
                                                <td>
                                                    Set of tools
                                </td>
                                                <td className="text-center small">12 Jun 2014</td>
                                                <td className="text-center"><span className="label label-warning">$125.00</span></td>

                                            </tr>
                                            <tr>
                                                <td className="text-center">4</td>
                                                <td> Panoramic pictures</td>
                                                <td className="text-center small">22 Jun 2013</td>
                                                <td className="text-center"><span className="label label-primary">$344.00</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">5</td>
                                                <td>Phones</td>
                                                <td className="text-center small">24 Jun 2013</td>
                                                <td className="text-center"><span className="label label-primary">$235.00</span></td>
                                            </tr>
                                            <tr>
                                                <td className="text-center">6</td>
                                                <td>Monitors</td>
                                                <td className="text-center small">26 Jun 2013</td>
                                                <td className="text-center"><span className="label label-primary">$100.00</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        )
        
    }

}


export default Main