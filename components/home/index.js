import { Component } from 'react';
import styles from './home.module.scss';
import {createApi} from "unsplash-js";
import Navbar from '../navbar'

const unsplash = createApi({
  accessKey: "p6FqdKKfm0rGbxrYUeiQkBfK84FOHt8vagakueDDt0o",
  headers: { 'X-Custom-Header': 'foo' },
});

export default class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: ''
    }
  }

  componentDidMount() {
    // unsplash.search.getPhotos({
    //   query: 'poll',
    //     page: 1,
    //     perPage: 10,
    //     orientation: 'landscape',
    // }).then((result) => {
    //       console.log(result.response.results[0].urls.small)
    //       this.setState({
    //         photo: result.response.results[0].urls.small
    //       })
    //     })
    unsplash.photos.getRandom({
      query: 'vote',
      count: 1
    }).then((result) => {
      console.log(result)
      this.setState({
        photo: result.response[0].urls.small
      })
    })
  }

  render() {
    return(
        <section className="">
          <Navbar />
          <div className="flex">
            <div>
              <h2>Engange your Audience</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores assumenda consequuntur dolorum incidunt laboriosam nihil, tempore unde vel vero! Deserunt excepturi illo inventore quae saepe! Debitis eum ipsa totam.</p>
              <a href="" className="">Get started!</a>
            </div>
            <div class="bg-cover bg-center h-1/3">
              <img src={this.state.photo}/>
            </div>
          </div>
        </section>
    );
  }
}

