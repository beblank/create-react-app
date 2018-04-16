import * as React from 'react';
import './header.css';
import { push } from 'react-router-redux'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

type Props = {
  changePage: () => void
};

const Home = (props: Props) => (
  <div>
    <h1>Home</h1>
    <p>Welcome home!</p>
    <button onClick={props.changePage}>Go to about page via redux</button>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/about-us')
}, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
