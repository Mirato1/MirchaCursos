import React, { Component } from "react";

function Campeones(props) {
  return (
    <figure>
      <img src={props.image} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class ApiLol extends Component {
  state = {
    champs: [],
  };

  componentDidMount() {
    let url =
      "http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        let champs = Object.values(json.data);
        for (const key of champs) {
          let campeon = {
            id: key.key,
            name: key.name,
            image: `http://ddragon.leagueoflegends.com/cdn/11.18.1/img/champion/${key.image.full}`,
          };
          let champs = [...this.state.champs, campeon];
          this.setState({ champs });
        }
      });
  }

  render() {
    return (
      <>
        <h2>Soy API LOL</h2>
        <div>
          {this.state.champs.map((el) => (
            <Campeones key={el.key} name={el.name} image={el.image} />
          ))}
        </div>
      </>
    );
  }
}
