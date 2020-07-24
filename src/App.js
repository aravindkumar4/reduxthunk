import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

// import {
//   getVadiveluComedyAction,
//   getgOWNDAMANYComedyAction,
//   subscribeAction,
// } from './index';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const myVariable = [this.props.data];

    var ar = myVariable[0];
    console.log(ar);
    if (Object.keys(myVariable) === 'data') {
      console.log(Object.values(myVariable));
    }
    return (
      <>
        <h3>redux thunk</h3>
        {/* <p>loading: {this.props.loading ? 'true' : 'false'}</p>
        <p>data: {JSON.stringify(this.props.data)}</p> */}

        {
          //  this.props.data.map((y) => (
          //    <p>{y.outlets.m}</p>
          //   ))

          //this.props.data.map(x)
          // console.log(x.bannerImage);
          //<img src={x.bannerImage} alt='' />
          // }
          // {
          this.props.data.map((x) => (
            <Carousel showArrows={true}>
              <div class='row'>
                <img src={x.bannerImage} class='column' />
                {x.outlets.length > 0 && (
                  <select name='outletnames' id='outletid'>
                    <option value='volvo'>
                      {x.outlets.map((y) => y.outletName)}
                    </option>
                  </select>
                )}
                <h1>{x.outlets.map((y) => y.outletName)}</h1>
              </div>
            </Carousel>
          ))

          //this.props.data.map(x)
          // console.log(x.bannerImage);
          //<img src={x.bannerImage} alt='' />
        }

        {/* <p>error: {this.props.error}</p> */}
        <button onClick={() => this.props.login()}>Login</button>
        {/* <img src={this.props.img} />;
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.vadiveluComedy()}
        >
          Vadivelu comedy
        </button>
        &nbsp;
        <button
          disabled={!this.props.isSubscribed}
          onClick={() => this.props.goundamanyComedy()}
        >
          gowndamany comedy
        </button>
        &nbsp;
        <button onClick={() => this.props.subscribe()}>
          {!this.props.isSubscribed ? 'Subscribe' : 'Unsubscribe'}
        </button> */}
      </>
    );
  }
}
const middleware = () => {
  return (dispatch) => {
    dispatch({ type: 'LOGIN_START' });
    const urls =
      'https://eatoo.uberdoo.com/foodapp/public/api/guest/listRestaurant';
    axios
      .post(urls, { latitude: 13.012345, longitude: 80.123456 })

      .then((res) => {
        // console.log(res.data.banners[0].bannerImage);
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: res.data.banners,
        });
      });

    // .then((response) => response.json())
    // .then((json) => dispatch({ type: 'LOGIN_SUCCESS', payload: json }));
  };
};
function mapStateToProps(state) {
  console.log(state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch(middleware()),
    // goundamanyComedy: () => dispatch(getgOWNDAMANYComedyAction()),
    // subscribe: () => dispatch(subscribeAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
