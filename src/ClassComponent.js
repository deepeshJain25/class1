import React from "react";
import SubChild from "./SubChild";
import axios from "axios";

class ClassComponent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      data: [],
      count: 0,
    };
    this.catchInfo = this.catchInfo.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
  }

  incrementCount() {
    const evenCount = this.state.count + 3;
    const oddCount = this.state.count + 1;

    this.setState(
      (prev) => {
        console.log(prev.count);
        if (prev.count % 2 === 0) return { count: evenCount };
        return { count: oddCount };
      },
      () => console.log("next state", this.state.count)
    );
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1").then((res) => {
      this.setState({ data: res.data.data });
    });
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.loading === nextProps.loading) {
  //     return false;
  //   }
  //   return true;
  // }

  catchInfo(data) {
    console.log("Child Component ", data);
    this.props.sendInfo(data);
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <button onClick={this.incrementCount}>Increase Count</button>
        <SubChild
          data={this.state.data}
          name={this.props.name}
          backInfo={this.catchInfo}
          loading={this.props.loading}
        />
      </div>
    );
  }
}

export default ClassComponent;
