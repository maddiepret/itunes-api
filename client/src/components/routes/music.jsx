import React, { Component } from 'react'
import musicImg from '../images/music-img.jpg'
import { Container, Col, Row, Button } from 'reactstrap';
import axios from 'axios';
import Favorite from './Favorite'
 

 class music extends Component {
    constructor(props) {
        super(props);
    //set state
        this.state = {
          query: "",
          Results: {},
          loading: false,
          message: "",
          totalResult: 0,
          favoriteList: [],
        };
        this.cancel = "";
      }

      //lifesycle methode
      componentWillMount = ( query) => {
        const searchUrl = `/music/${query}`;
        // to cancel results if user back space and types in new request
        if (this.cancel) {
            this.cancel.cancel();
        }this.cancel = axios.CancelToken.source();
    
        axios
            .get(searchUrl, {
            cancelToken: this.cancel.token
            })
            .then(res => {
            //   get response of total results
            const total = res.data.resultCount;
            const resultNotFound = !res.data.results.length
                ? "There are no more search results. Please try a new search"
                : "";
            //   set state
            this.setState({
                Results: res.data.results,
                message: resultNotFound,
                totalResult: total,
                loading: false
            });
            })
            .catch(error => {
            if (axios.isCancel(error) || error) {
                this.setState({
                loading: false,
                message: "Failed to fetch the data"
                });
            }
        });
    };

    handleOnInputChange = event => {
        const query = event.target.value;
        //if nothing on query set state to empty
        if (!query) {
          this.setState({
            query,
            Results: {},
            message: "",
            totalResult: 0
          });
        } else {
          this.setState({ query: query, loading: true, message: "" }, () => {
            this.componentWillMount(query);
          });
        }
      };

  //addToFavorite
  addToFavorite = (index, previewUrl, artistName, artworkUrl100, trackName) => {
    const { favoriteList } = this.state;

    let item = {
      id: index,
      link: previewUrl,
      title: artistName,
      img: artworkUrl100,
      track: trackName
    };
    this.setState({ favoriteList: [...favoriteList, item] });
  };

      renderSearchResults = () => {
        const { Results } = this.state;
        // set state for search results
        if (Object.keys(Results).length && Results.length) {
          return (
            <div className="results-container">
              {Results.map((result, index) => {
                return (
                    <Container className="results">
                        <Row className="l-row l-row--peek">
                            <Col>
                                <img
                                className="image"
                                src={result.artworkUrl100}
                                alt={result.artistName}
                                />
                            </Col>
                            <Col>
                                <h4 className="artistName">{result.artistName}</h4>
                                <h5 className="trackName">{result.trackName}</h5>
                                <h6 className="primaryGenreName">{result.primaryGenreName}</h6>
                            </Col>
                            <Col>
                            <div>
                                <a key={index} href={result.previewUrl}>
                                    <Button className="button-snippet">Play snippet</Button>
                                </a>
                            </div>
                            <div>
                            <Button
                                className="button-like"
                                onClick={this.addToFavorite.bind(
                                this,
                                index,
                                result.previewUrl,
                                result.artistName,
                                result.artworkUrl100
                                )}
                            >
                                I like it!
                            </Button>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                );
              })}
            </div>
          );
        }
      };


    render() {
        const {
            favoriteList
          } = this.state;
          console.log(favoriteList);
        
        return (
            <div className="container">
                <div className="heading">
                    <img className="movie-img" src={musicImg} alt="music" media="(min-width: 1069px)"/>
                    <h1>Music</h1>
                    <h2>good music doesn't have an expire date</h2>
                </div>
                <div className="searchBox">
                    <input type="text" placeholder="Search Library" onChange={this.handleOnInputChange}/>
                </div>
                <div>
                <Favorite favoriteList={favoriteList} />
                    {/* results */}
                {this.renderSearchResults()}
                </div>
            </div>
        )
    }
}

export default music
