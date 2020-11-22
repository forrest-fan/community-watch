import React, { Component } from 'react';
import './Community.css';
import './Loader.css';
import Communities from '../../communities.js';
import { Line } from 'react-chartjs-2';

class Community extends Component {
    constructor() {
        super();
        let initialData = {
            "name" : "Leaside",
            "city info" : {
                "Area" : "Toronto",
                "Municipality" : "Toronto C11",
                "Safety Index" : "Moderate Risk",
                "Education Index" : "Moderate",
                "Transportation Index" : "Moderate",
            },
            "sales info" :  [
                {
                    "year" : "2019",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "18.2000008",
                                "Sales" : "5",
                                "Average SP/LP" : "0.9936568",
                                "Dollar Volume" : "5937000",
                                "New Listings" : "7",
                                "Average Price" : "1187400"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "20.125",
                                "Sales" : "8",
                                "Average SP/LP" : "0.9740564",
                                "Dollar Volume" : "4986000",
                                "New Listings" : "13",
                                "Average Price" : "623250"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "21.6875",
                                "Sales" : "16",
                                "Average SP/LP" : "0.9752401",
                                "Dollar Volume" : "31581100",
                                "New Listings" : "43",
                                "Average Price" : "1973818.75"
                            }
                        }
                    ]
                },
                {
                    "year" : "2018",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "7.5",
                                "Sales" : "4",
                                "Average SP/LP" : "1.0293264",
                                "Dollar Volume" : "4598000",
                                "New Listings" : "5",
                                "Average Price" : "1149500"
                            }
                        },
                        {
                            "type" : "Att/Row/Twnhouse",
                            "data" : {
                                "Average DOM" : "0",
                                "Sales" : "0",
                                "Average SP/LP" : "0",
                                "Dollar Volume" : "0",
                                "New Listings" : "0",
                                "Average Price" : "0"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "15",
                                "Sales" : "6",
                                "Average SP/LP" : "0.9924604",
                                "Dollar Volume" : "2290400",
                                "New Listings" : "7",
                                "Average Price" : "381733.3438"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "15.5555553",
                                "Sales" : "18",
                                "Average SP/LP" : "1.006655",
                                "Dollar Volume" : "33277999",
                                "New Listings" : "38",
                                "Average Price" : "1848777.75"
                            }
                        }
                    ]
                },
                {
                    "year" : "2017",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "7.1428571",
                                "Sales" : "7",
                                "Average SP/LP" : "1.185698",
                                "Dollar Volume" : "8795508",
                                "New Listings" : "10",
                                "Average Price" : "1256501.125"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "20.454546",
                                "Sales" : "11",
                                "Average SP/LP" : "1.0202317",
                                "Dollar Volume" : "4351890",
                                "New Listings" : "12",
                                "Average Price" : "395626.375"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "10.1538458",
                                "Sales" : "26",
                                "Average SP/LP" : "1.1581268",
                                "Dollar Volume" : "56226130",
                                "New Listings" : "39",
                                "Average Price" : "2162543.5"
                            }
                        }
                    ]
                },
                {
                    "year" : "2016",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "6.3333335",
                                "Sales" : "3",
                                "Average SP/LP" : "1.1445647",
                                "Dollar Volume" : "2958700",
                                "New Listings" : "5",
                                "Average Price" : "986233.3125"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "27",
                                "Sales" : "7",
                                "Average SP/LP" : "0.9823709",
                                "Dollar Volume" : "2646900",
                                "New Listings" : "13",
                                "Average Price" : "378128.5625"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "10.242424",
                                "Sales" : "33",
                                "Average SP/LP" : "1.0675824",
                                "Dollar Volume" : "50330100",
                                "New Listings" : "50",
                                "Average Price" : "1525154.5"
                            }
                        }
                    ]
                },
                {
                    "year" : "2015",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "7",
                                "Sales" : "3",
                                "Average SP/LP" : "1.1115468",
                                "Dollar Volume" : "2409500",
                                "New Listings" : "6",
                                "Average Price" : "803166.6875"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "24.1428566",
                                "Sales" : "7",
                                "Average SP/LP" : "1.0157651",
                                "Dollar Volume" : "2822100",
                                "New Listings" : "14",
                                "Average Price" : "403157.1563"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "12.1764708",
                                "Sales" : "17",
                                "Average SP/LP" : "1.0276675",
                                "Dollar Volume" : "25907190",
                                "New Listings" : "33",
                                "Average Price" : "1523952.375"
                            }
                        }
                    ]
                },
                {
                    "year" : "2014",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "5.1999998",
                                "Sales" : "5",
                                "Average SP/LP" : "1.1423181",
                                "Dollar Volume" : "4360000",
                                "New Listings" : "6",
                                "Average Price" : "872000"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "13.4285717",
                                "Sales" : "7",
                                "Average SP/LP" : "1.0298625",
                                "Dollar Volume" : "3266517",
                                "New Listings" : "12",
                                "Average Price" : "466645.2813"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "16.3658543",
                                "Sales" : "41",
                                "Average SP/LP" : "1.0253255",
                                "Dollar Volume" : "60473084",
                                "New Listings" : "67",
                                "Average Price" : "1474953.25"
                            }
                        }
                    ]
                },
                {
                    "year" : "2013",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "6",
                                "Sales" : "10",
                                "Average SP/LP" : "1.0335397",
                                "Dollar Volume" : "7636721",
                                "New Listings" : "10",
                                "Average Price" : "763672.125"
                            }
                        },
                        {
                            "type" : "Att/Row/Twnhouse",
                            "data" : {
                                "Average DOM" : "6",
                                "Sales" : "10",
                                "Average SP/LP" : "1.0335397",
                                "Dollar Volume" : "7636721",
                                "New Listings" : "10",
                                "Average Price" : "763672.125"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "43.8571434",
                                "Sales" : "7",
                                "Average SP/LP" : "0.9765295",
                                "Dollar Volume" : "2834670",
                                "New Listings" : "7",
                                "Average Price" : "404952.8438"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "20.205883",
                                "Sales" : "34",
                                "Average SP/LP" : "0.991726",
                                "Dollar Volume" : "48183406",
                                "New Listings" : "57",
                                "Average Price" : "1417159"
                            }
                        }
                    ]
                },
                {
                    "year" : "2012",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "5.8571429",
                                "Sales" : "7",
                                "Average SP/LP" : "1.0680505",
                                "Dollar Volume" : "4991000",
                                "New Listings" : "9",
                                "Average Price" : "713000"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "26.1428566",
                                "Sales" : "7",
                                "Average SP/LP" : "0.967489",
                                "Dollar Volume" : "2109900",
                                "New Listings" : "11",
                                "Average Price" : "301414.2813"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "8.5172415",
                                "Sales" : "29",
                                "Average SP/LP" : "1.029699",
                                "Dollar Volume" : "41841614",
                                "New Listings" : "57",
                                "Average Price" : "1442814.25"
                            }
                        }
                    ]
                },
                {
                    "year" : "2011",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "6.5833335",
                                "Sales" : "12",
                                "Average SP/LP" : "1.0374359",
                                "Dollar Volume" : "8092000",
                                "New Listings" : "14",
                                "Average Price" : "674333.3125"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "34.5",
                                "Sales" : "4",
                                "Average SP/LP" : "0.9737945",
                                "Dollar Volume" : "1635000",
                                "New Listings" : "3",
                                "Average Price" : "408750"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "18.522728",
                                "Sales" : "44",
                                "Average SP/LP" : "1.0155239",
                                "Dollar Volume" : "55024438",
                                "New Listings" : "72",
                                "Average Price" : "1250555.375"
                            }
                        }
                    ]
                },
                {
                    "year" : "2010",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "7.6363635",
                                "Sales" : "11",
                                "Average SP/LP" : "1.0594919",
                                "Dollar Volume" : "7043078",
                                "New Listings" : "11",
                                "Average Price" : "640279.8125"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "23",
                                "Sales" : "6",
                                "Average SP/LP" : "0.9909258",
                                "Dollar Volume" : "1943800",
                                "New Listings" : "9",
                                "Average Price" : "323966.6563"
                            }
                        },
                        {
                            "type" : "Detached",
                            "data" : {
                                "Average DOM" : "31.4444447",
                                "Sales" : "36",
                                "Average SP/LP" : "1.00512",
                                "Dollar Volume" : "35042000",
                                "New Listings" : "63",
                                "Average Price" : "973388.875"
                            }
                        }
                    ]
                },
                {
                    "year" : "2020",
                    "data" : [
                        {
                            "type" : "Semi-Detached",
                            "data" : {
                                "Average DOM" : "20.666666",
                                "Sales" : "3",
                                "Average SP/LP" : "1.1389933",
                                "Dollar Volume" : "4548000",
                                "New Listings" : "10",
                                "Average Price" : "1516000"
                            }
                        },
                        {
                            "type" : "Condo Apt",
                            "data" : {
                                "Average DOM" : "39.3076935",
                                "Sales" : "13",
                                "Average SP/LP" : "0.9930456",
                                "Dollar Volume" : "9395900",
                                "New Listings" : "12",
                                "Average Price" : "722761.5625"
                            }
                        }
                    ]
                }
            ]
        };
        let prices = [];
        let datasets = [];
        let years = [];
        let lastYr;
        for (let i = 9; i >= 0; i--) {
            let avgPrice = this.calculateAvg(initialData["sales info"][i].data).toFixed(0);
            prices.push(avgPrice !== 0 ? avgPrice : this.calculateAvg(initialData["sales info"][i + 1].data).toFixed(0));
            years.push(2019 - i);
            if (i === 0) {
                lastYr = avgPrice !== 0 ? avgPrice : this.calculateAvg(initialData["sales info"][i + 1].data).toFixed(0);
            }
        }
        let avgPrice = this.calculateAvg(initialData["sales info"][10].data).toFixed(0);
        prices.push(avgPrice !== 0 ? avgPrice : this.calculateAvg(initialData["sales info"][10].data).toFixed(0));
        let thisYr = avgPrice !== 0 ? avgPrice : this.calculateAvg(initialData["sales info"][10].data).toFixed(0);
        let change = ((thisYr - lastYr) * 100 / lastYr).toFixed(2);
        years.push(2020);
        datasets.push({
            fill: true,
            borderColor: '#14185e',
            borderWidth: 2,
            pointBorderColor: '#14185e',
            pointRadius: 2,
            pointBackgroundColor: '#14185e',
            pointHoverRadius: 5,
            label: 'Avg. Price',
            data: prices
        });
        this.state = {
            loading: false,
            data: initialData,
            change: change,
            chart: {
                labels: years,
                datasets: datasets
            }
        };
        this.calculateAvg = this.calculateAvg.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.communityData.name !== this.props.communityData.name) {
            for (let i = 0; i < Communities.data.length; i++) {
                if (Communities.data[i].name === this.props.communityData.name) {
                    this.setState({data: Communities.data[i]});
                    break;
                }
            }
            this.setState({loading: true});
        } 
        if (!prevState.loading && this.state.loading) {
            
        }
        if (prevState.data.name !== this.state.data.name) {
            setTimeout(() => {
                let prices = [];
                let datasets = [];
                let years = [];
                let lastYr;
                for (let i = 9; i >= 0; i--) {
                    let avgPrice = this.calculateAvg(this.state.data["sales info"][i].data).toFixed(0);
                    prices.push(avgPrice !== 0 ? avgPrice : this.calculateAvg(this.state.data["sales info"][i + 1].data).toFixed(0));
                    years.push(2019 - i);
                    if (i === 0) {
                        lastYr = avgPrice !== 0 ? avgPrice : this.calculateAvg(this.state.data["sales info"][i + 1].data).toFixed(0);
                    }
                }
                let avgPrice = this.calculateAvg(this.state.data["sales info"][10].data).toFixed(0);
                prices.push(avgPrice !== 0 ? avgPrice : this.calculateAvg(this.state.data["sales info"][10].data).toFixed(0));
                let thisYr = avgPrice !== 0 ? avgPrice : this.calculateAvg(this.state.data["sales info"][10].data).toFixed(0);
                let change = ((thisYr - lastYr) * 100 / lastYr).toFixed(2);
                years.push(2020);
                datasets.push({
                    fill: true,
                    borderColor: '#14185e',
                    borderWidth: 2,
                    pointBorderColor: '#14185e',
                    pointRadius: 2,
                    pointBackgroundColor: '#14185e',
                    pointHoverRadius: 5,
                    label: 'Avg. Price',
                    data: prices
                });
                let config = {
                    labels: years,
                    datasets: datasets
                };
                this.setState({chart: config, loading: false, change: change});
            }, 1000);
        }
    }

    calculateAvg(houseTypes) {
        let total = 0;
        let sales = 0;
        houseTypes.map(type => {
            total += Number(type.data["Average Price"]) * Number(type.data["Sales"]);
            sales += Number(type.data["Sales"]);
        })
        let avg = total/sales;
        return avg;
    }

    render() {
        return(
            <div className='Community' style={this.props.style}>
                <div className='exit' onClick={this.props.closeCommunity}>✖</div>
                {this.state.loading ? <div className='loader'>
                    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </div> : <div>
                    <div className='header'>
                        <h1>{this.state.data.name}</h1>
                    </div>
                    <div className='header'>
                        <h3>${this.calculateAvg(this.state.data["sales info"][10].data).toLocaleString()}</h3>
                        <h3 className={'change ' + (this.state.change > 0 ? 'gain' : 'loss')}>{(this.state.change > 0 ? '+' : '') + this.state.change}%</h3>
                    </div>
                    <div className='chart'>
                        <Line
                            data={this.state.chart}
                        />
                    </div>
                </div> }
            </div>
        );
    }
}

export default Community;