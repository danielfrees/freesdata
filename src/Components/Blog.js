class Blog extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        profile: {
          ptitle: "",
          name: "",
          avatar: "",
          profileurl: "",
        },
        items: [],
        isloading: true,
        error: null,
      };
      this.mediumURL =
        "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@danielfrees";
    }
  
    componentDidMount() {
      Axios.get(this.mediumURL)
        .then((response) => {
          const data = response.data;
          const avatar = data.feed.image;
          const profileLink = data.feed.link;
          const items = data.items.filter((item) => item.categories.length > 0);
          const ptitle = data.feed.title;
          this.setState({
            profile: {
              ...this.state.profile,
              ptitle,
              profileurl: profileLink,
              avatar,
            },
            items,
            isloading: false,
          });
        })
        .catch((error) => {
          this.setState({ error: error.toJSON(), isloading: false });
          console.log(error);
        });
    }
  
    render() {
      console.log(this.state.error);
      let post;
      if (this.state.items) {
        post = this.state.items.map((post, index) => (
          <ShowBlog key={index} {...post} {...this.state.profile} {...index} />
        ));
      }
      return <div>{post}</div>;
    }
  }
  