import React, { Component } from "react";
import Loader from "../components/Loader";

import Pokedex from "../components/Pokedex";
import SearchBar from "../components/SearchBar";


class Home extends Component {
  sortTypes = ["ndex", "nom", "forme", "taille", "poids", "espece"]

  defaultState = {
      dataLoaded: false, pokemons: [], error: null, search: "", sortVisible: false, sortType: this.sortTypes[0]
  }

  constructor(props) {
      super(props)
      this.state = this.defaultState
  }

  componentDidMount() {
      this.fetchAllPokemon()
  }

  fetchAllPokemon = () => {
      this.setState({ dataLoaded: false, pokemons: [], error: null, search: "" })

      fetch('http://localhost:4000/api/pokemons')
          .then(res => res.json())
          .then(res => {
              console.log(res)
              this.setState({ dataLoaded: true, error: res.message, pokemons: res })
          }).catch(err => this.setState({ dataLoaded: true, error: err.message }))

  }

  onSearch = (search) => {
      this.setState({ search: search })
  }

  sortPokemons = (pokemons) => {
    if (!pokemons) return []

    const selectedSortType = this.state.sortType

    let key = this.sortTypes[0]
    this.sortTypes.forEach(sortType => {
        if (sortType === selectedSortType)
            key = sortType
    })

    return pokemons.sort((a, b) => {
        if (a[key] > b[key]) return 1
        if (a[key] < b[key]) return -1
        return 0
    })
}

  getFilteredPokemons = (search) => {
      const searchValue = search.toLowerCase()
      return this.sortPokemons(
          this.state.pokemons.filter(v => {
              const searchValues = [
                  v.nom, v.nomen, v.nomde, v.nomja, v.nomch, v.nomko, v.nomromanji, v.nomtm,
                  v.espece, v.ndex, v.pokemon, v.type1, v.type2
              ].map(v => v ? v.toLowerCase() : '')
              return searchValues.join(' ').indexOf(searchValue) !== -1
          })
      )
  }

  renderErrorMsg = (error) => (
    <div className="row">
        <div className="">
            <h1>{error}</h1>
        </div>
    </div>
    )

  renderBody = ({ dataLoaded, error, search }) => {
    if (!dataLoaded)
        return <></>
    if (error)
        return this.renderErrorMsg(`Error: ${error}`, this.fetchAllPokemon)

    const pokemonsFiltered = this.getFilteredPokemons(search)
    if (pokemonsFiltered.length === 0) {
        if (search.length > 0)
            return this.renderErrorMsg(<span>No search result with <strong>{search}</strong></span>)
        return this.renderErrorMsg(<span>There isn't any pokemon in database</span>)
    }
    return <Pokedex pokemons={pokemonsFiltered} />
}

  render() {
      
    if (!this.state.pokemons.length) {
        return <Loader />
      }

    return (
      <div>
        <div>
            <h2>
            <span>P</span>
            <span>O</span>
            <span>K</span>
            <span>E</span>
            <span>D</span>
            <span>E</span>
            <span>X</span>
            </h2>
        </div>

        <div>
        <SearchBar onSearch={this.onSearch} />
        </div>
        
        <div>
            {this.renderBody(this.state)}
        </div>
      </div>
    );
  }
}

export default Home;
