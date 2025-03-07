import React, {Component} from "react";
import "./RecipeCard.css";
import store, {DELETE_RECIPE} from '../../store'

class RecipeCard extends Component {
  deleteCard(i) {
    store.dispatch({
      type: DELETE_RECIPE,
      payload: i
    })
  }
  render() {
    const {
      name,
      category,
      authorFirst,
      authorLast,
      ingredients,
      instructions
    } = this.props;
    const ingredientsDisplay = ingredients.map((ingredient, i) => {
      return <li key={i}>{ingredient}</li>;
    });
    const instructionsDisplay = instructions.map((instruction, i) => {
      return <li key={i}>{instruction}</li>;
    });
    return (
      <div className="RecipeCard">
        <div className="title_container">
          <h2>{name}</h2>
          <p>#{category}</p>
        </div>
        <p>
          by {authorFirst} {authorLast}
        </p>
        <h3>Ingredients</h3>
        <div className="scroll_container">
          <ul className="list">{ingredientsDisplay}</ul>
        </div>
        <h3>Instructions</h3>
        <div className="scroll_container">
          <ol className="list">{instructionsDisplay}</ol>
        </div>
        <svg
          className="delete"
          width="60"
          height="60"
          viewBox="0 0 60 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => this.deleteCard(this.props.key)}
        >
          <path
            d="M2.35352 57.3536L57.3535 3.3409M2.35352 2.64648L57.3535 56.6592"
            stroke="#FF9B42"
            strokeWidth="5"
          />
        </svg>
      </div>
    );
  }
};

export default RecipeCard;
